import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Info from "./pages/Info";
import Movies from "./pages/Movies";
import Showcase from "./pages/Showcase";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/showcase" element={<Showcase />} />
      <Route path="/info" element={<Info/>} />
      <Route path="*" element={<h1>404 Route not found</h1>}/>
    </Routes>
  );
}

export default App;
