import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import AddToCartButton from "../components/AddCart.jsx";
import "./GenreView.css";

function GenreView() {
  const { genre_id } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_TMDB_KEY
          }&with_genres=${genre_id}&page=${page}`
        );
        setMovies(response.data.results);
      } catch (err) {
        setError("Failed to load movies.");
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [page, genre_id]); 

  return (
    <div>
      <h2>Movies in Genre</h2>
      {loading && <p>Loading movies...</p>}
      {error && <p>{error}</p>}
      <div className="genre-view-container">
        {movies.map((movie) => (
          <div key={movie.id}>
            <div className="genre-view-item">
              <Link to={`/movies/details/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                  className="genre-view-image"
                />
              </Link>
            </div>
            <AddToCartButton movie={movie} variant="detail-view" />
          </div>
        ))}
      </div>
      <div className="genre-view-pagination-container">
        <button
          className="genre-view-pagination-button"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <button
          className="genre-view-pagination-button"
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default GenreView;
