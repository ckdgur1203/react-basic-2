import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Movie from "../components/Movie";
function Details() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movies);
  return (
    <div>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <Movie />
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
