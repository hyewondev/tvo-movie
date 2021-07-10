import Moment from 'moment';
import Rating from '../rating/Rating';

function Movie(props) {
    const movie = props.data.node;

    function openDetail(event) {
        props.setMovieId(movie.id);
        props.setShowDetail(true);
        props.setTitle(`${movie.title} (${Moment(movie.releaseDate).format('YYYY')})`);
        event.preventDefault();
    }

    return (
        <div className="border border-gray-300 rounded-lg shadow-md">
            <img src={movie.images.posters[0].image}
                 alt={movie.title}
                 className="rounded-t-lg w-full h-52 sm:h-52 md:h-72 cursor-pointer"
                 onClick={ openDetail }
            />
            <div className="px-2 pt-2 pb-4">
                <Rating rating={movie.rating} id={movie.id} />
                <p className="font-bold text-lg cursor-pointer hover:text-mv-main" onClick={ openDetail }>{movie.title}</p>
                <p className="text-gray-700 text-sm">{Moment(movie.releaseDate).format('YYYY-MM-DD')}</p>
            </div>

        </div>
    )
}

export default Movie;