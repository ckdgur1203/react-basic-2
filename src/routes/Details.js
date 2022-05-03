import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCallback } from "react";

import Movie from "../components/Movie";
function Details() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setLoading(false);
    console.log(json.data.movie);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
      <div>
        <h2>legend</h2>
      </div>
    </div>
  );
}
export default Details;
