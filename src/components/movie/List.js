import { useQuery } from '@apollo/client';
import { useState } from "react";
import Movie from './Movie';
import Loader from "../loader/Loader";
import Message from '../message/Message';
import {GET_SEARCH_MOVIES} from "../../graphql/movies.query";
import Detail from './Detail';

function List(props) {
    const [showDetail, setShowDetail] = useState(false);
    const [movieId, setMovieId] = useState('');
    const [title, setTitle] = useState('');
    const { loading, error, data } = useQuery(GET_SEARCH_MOVIES, {
        variables: { term: props.term }
    });

    if (loading) return  <Loader />
    if (error) return <Message message={error.message} />

    if(data.movies.search.edges.length > 0) {
        const movies = [...data.movies.search.edges].sort((a, b) => new Date(b.node.releaseDate) - new Date(a.node.releaseDate));
        return (
            <>
                <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                     >
                    {
                        movies.map((movie, id) => {
                        return <Movie key={id}
                                      data={movie}
                                      setMovieId={setMovieId}
                                      setShowDetail={setShowDetail}
                                      setTitle={setTitle} />
                        })
                    }
                </div>

                {movieId}
                {
                    (movieId) ?
                        (<Detail movieId={movieId}
                                 setMovieId={setMovieId}
                                 showDetail={showDetail}
                                 setShowDetail={setShowDetail}
                                 title={title} />):
                        ''
                }

            </>
        )
    } else {
        return <Message message="There is no result" />
    }

}

export default List;