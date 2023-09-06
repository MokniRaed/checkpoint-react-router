import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import MovieList from "./Components/MovieList";
import MovieDetails from "./Components/MovieDetails";
import PrivateRoute from "./Components/PrivateRoute";
import Admin from "./Components/Admin";
import { useState } from "react";
import Login from "./Components/Login";

function App() {
  const [user, setUser] = useState(false);

  return (
    <div className="App">
      <Login user={user} setUser={setUser} />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/movie-list" element={<PrivateRoute user={user}> <MovieList/></PrivateRoute>} />
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
      </BrowserRouter>
    </div>
  );
}

export default App;
