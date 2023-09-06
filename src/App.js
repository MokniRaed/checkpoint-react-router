import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import MovieList from "./Components/MovieList";
import MovieDetails from "./Components/MovieDetails";
import PrivateRoute from "./Components/PrivateRoute";
import Admin from "./Components/Admin";
import { useEffect, useState } from "react";
import Login from "./Components/Login";

function App() {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (user) {
  //     navigate("/movie-list");
  //   } else {
  //     navigate("/login");
  //   }
  // }, [user]);

  return (
    <div className="App">
      <Login user={user} setUser={setUser} />
      <Routes>
        <Route path="/" Component={Home} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route
          path="/movie-list"
          element={
            <PrivateRoute user={user}>
              <MovieList />
            </PrivateRoute>
          }
        />
        <Route path="/movie-details/:id" element={<MovieDetails />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute user={user}>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
