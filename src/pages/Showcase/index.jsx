import UserInfo from "../../Components/UserInfo";
import Notes from "../../Components/Notes";
import Weather from "../../Components/Weather";
import Timer from "../../Components/Timer";
import { useNavigate } from "react-router-dom";

const Showcase = () => {
  const navigate = useNavigate();

  const navigateToMovies = () => {
    navigate("/movies");
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", minHeight: "100vh" }}>
      <div
        style={{
          flex: 1,
          marginRight: "12px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>Showcase</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <UserInfo />
          </div>
          <div style={{ flex: 1 }}>
            <Weather />
          </div>
        </div>
        <div style={{ flex: 1, marginTop: "20px" }}>
          <Timer />
        </div>
      </div>
      <div
        style={{
          flex: 1,
          marginLeft: "12px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Notes />
      </div>
      <div style={{ alignSelf: "flex-end", marginTop: "auto" }}>
        <button
          onClick={navigateToMovies}
          style={{
            background: "green",
            border: "none",
            color: "white",
            padding: "12px",
            borderRadius: "12px",
            marginRight: "3vw",
            marginBottom: "3vh",
          }}
        >
          Browse
        </button>
      </div>
    </div>
  );
};

export default Showcase;
