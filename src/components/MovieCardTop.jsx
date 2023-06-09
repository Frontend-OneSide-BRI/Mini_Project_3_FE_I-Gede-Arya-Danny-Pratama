import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BASE_IMAGE_URL_SMALL } from "../api/tmdb";

function MovieCardTop({ item, top }) {
  const formatDate = (releaseDate) => {
    const date = new Date(releaseDate);
    const formatDate = date.toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return formatDate;
  };

  return (
    <Link to={`/movie/${item.id}`}>
      <div className="movie-card flex flex-col items-center gap-2 cursor-pointer">
        <div className="flex items-center">
          <img
            src={`src/assets/images/r${top}.svg`}
            alt={item.title}
            className="object-right w-32"
          />
          <img
            src={
              item.poster_path
                ? `${BASE_IMAGE_URL_SMALL}${item.poster_path}`
                : "src/assets/images/image_not_found.png"
            }
            alt={item.title}
            className="movie-top h-60 w-40 block rounded-sm object-cover object-center"
          />
        </div>
        <p className="movie-card__title font-medium text-center text-lg">
          {item.title}
        </p>
        <p className="text-sm font-light text-center">
          {item.release_date && formatDate(item.release_date)}
        </p>
      </div>
    </Link>
  );
}

MovieCardTop.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
  }).isRequired,
  top: PropTypes.number.isRequired,
};

export default MovieCardTop;
