import Profile from "../assests/profileSmall.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMoviesList } from "../apis/movies";

const ChoosenMovies = () => {
  const navigate = useNavigate();
  const [moviesList, setMoviesList] = useState({});
  const [genre, setGenre] = useState([]);

  function handleNavigate() {
    navigate("/showcase");
  }

  useEffect(() => {
    const genreString = localStorage.getItem("selectedMovies");
    if (genreString) {
      const filteredGenre = JSON.parse(genreString);
      setGenre(filteredGenre);

      const initialMoviesList = {};
      filteredGenre.forEach((element) => {
        initialMoviesList[element] = [];
      });
      setMoviesList(initialMoviesList);
    }
  }, []);

  useEffect(() => {
    async function fetchMovies() {
      for (let g of genre) {
        const result = await getMoviesList(g);
        setMoviesList((prev) => ({
          ...prev,
          [g]: result || [],
        }));
      }
    }

    if (genre.length > 0) {
      fetchMovies();
    }
  }, [genre]);

  useEffect(() => {
    console.log(moviesList);
  }, [moviesList]);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "black",
        overflowX: "hidden",
        maxHeight: "100vh",
      }}
    >
      <div onClick={handleNavigate}>
        <img
          src={Profile}
          style={{
            position: "absolute",
            top: "2vh",
            right: "3vw",
            height: "60px",
            width: "60px",
          }}
          alt="profile"
        />
      </div>
      <p style={{ color: "green", fontSize: "3rem", margin: "1vw" }}>
        FilmFaves
      </p>
      <p style={{ color: "white", fontSize: "2rem", margin: "2vw" }}>
        Entertainment according to your choice
      </p>
      {Object.entries(moviesList).map(([key, movies]) => (
        <div key={key}>
          <span style={{ color: "white", fontSize: "1.5rem" }}>{key}</span>{" "}
          {/* Increased font size here */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {(movies || []).map((movie) => (
              <div key={movie.imdbID}>
                <img
                  src={movie.Poster}
                  style={{
                    objectFit: "contain",
                    width: "15vw",
                    height: "50%",
                    borderRadius: "12px",
                  }}
                  alt={movie.Title}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChoosenMovies;
