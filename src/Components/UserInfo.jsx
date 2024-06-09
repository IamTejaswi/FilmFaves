export default function UserInfo() {
  const userData = JSON.parse(window.localStorage.getItem("userInfo")) || {};
  const selectedMovies =
    JSON.parse(window.localStorage.getItem("selectedMovies")) || {};

  console.log(userData, selectedMovies);

  return (
    <>
      <div
        style={{
          background: "#5746EA",
          width: "200px",
          height: "250px",
          color: "white",
          padding: "12px",
        }}
      >
        <p>{userData.name}</p>
        <p>{userData.username}</p>
        <p>{userData.email}</p>
        {selectedMovies.map((movie) => {
          return (
            <div
              key={movie}
              style={{
                background: "#9F94FF",
                width: "fit-content",
                margin: "6px",
                padding: "6px",
                borderRadius: "12px",
              }}
            >
              {movie}
            </div>
          );
        })}
      </div>
    </>
  );
}
