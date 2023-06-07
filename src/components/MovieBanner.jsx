import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BASE_IMAGE_URL } from "../api/tmdb";
import genre from "../app/genre";

function MovieBanner({ item }) {
  const getGenre = (id) => {
    const filter = genre.filter((item) => item.id === id)[0];

    return filter.name;
  };

  return (
    <Link to={`/movie/${item.id}`}>
      <div className="movie-card flex flex-col">
        <div className="absolute w-2/3 left-0 h-full flex gap-4 flex-col justify-center px-16 bg-gradient-to-r from-zinc-900" />
        <div className="container">
          <div className="absolute max-w-2xl h-full flex gap-4 flex-col justify-center">
            <p className="font-bold text-5xl text-shadow-title leading-[3.75rem]">
              {item.title}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.genre_ids.map((genreId, index) => (
                <p
                  key={index}
                  className="text-shadow-white text-zinc-200 text-sm px-2 rounded-sm bg-gradient-to-br from-red-700"
                >
                  {getGenre(genreId)}
                </p>
              ))}
            </div>
            <p className="text-shadow-desc text-lg">{item.overview}</p>
          </div>
        </div>
        <img
          src={`${BASE_IMAGE_URL}${item.backdrop_path}`}
          alt={item.title}
          className="rounded-sm h-[35rem] object-cover object-center bg-gradient-to-l from-zinc-900 "
        />
        <div className="absolute w-1/4 right-0 h-full flex gap-4 flex-col justify-center px-16 bg-gradient-to-l from-zinc-900" />
      </div>
    </Link>
  );
}

MovieBanner.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
    overview: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieBanner;
