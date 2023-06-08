import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DetailMovie from "./pages/DetailMovie";
import DetailSeries from "./pages/DetailSeries";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Page404 from "./pages/Page404";

function App() {
  return (
    <>
      <Header />
      <div className="mt-20"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Page404 />} />
        <Route path="/movie/:id" element={<DetailMovie />} />
        <Route path="/series/:id" element={<DetailSeries />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search/:query/:page" element={<Search />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
