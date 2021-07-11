import React from "react";
import {useQuery} from "@apollo/client";
import { MdClose } from 'react-icons/md';
import Info from '../info/Info';
import {GET_MOVIE} from "../../graphql/movie.query";
import Loader from "../loader/Loader";
import Message from "../message/Message";
import Poster from "../poster/Poster";

export default function Detail(props) {
    const { loading, error, data } = useQuery(GET_MOVIE, {
        variables: { id: props.movieId }
    });

    //if (loading) return  <Loader />
    //if (error) return <Message message={error.message} />
    function formatTime(time) {
        if(time === 0) return time;
        let h = parseInt(time / 60);
        let m = time % 60;
        return (h)?`${h}h ${m}m`:`${m}m`;
    }

    return (
        <>
            {props.showDetail ? (
                <>
                    <div className="justify-center items-top flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 mx-4 outline-none focus:outline-none sm:mx-8">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between py-4 px-6 border-b border-solid border-blueGray-200 rounded-t">
                                    <h2 className="text-3xl font-semibold mr-2">
                                        { props.title }
                                    </h2>
                                    <button className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl text-gray-600 leading-none font-semibold outline-none focus:outline-none"
                                            id="close" aria-label="close button" role="button"
                                        onClick={() => props.setShowDetail(false)}>
                                        <MdClose role="img" title="close button" focusable='false' aria-labelledby="close" />
                                    </button>
                                </div>
                                {
                                    (loading) ? (
                                        <Loader />
                                    ):(
                                        (error) ? (
                                            <Message message={error.message} />
                                        ):(
                                            (props.movieId)?
                                                (
                                                    <div className="px-8 py-5">
                                                        <div className="sm:flex">
                                                            <div className="w-48 mx-auto mb-3 sm:w-2/6 sm:mb-0">
                                                                <Poster posters={data.movies.movie.images.posters}
                                                                        title={data.movies.movie.title}
                                                                        id={data.movies.movie.id}
                                                                        openDetail={() => {}}
                                                                />

                                                            </div>
                                                            <div className="sm:ml-6 sm:w-4/6 flex-auto">
                                                                <div className="py-1 text-blueGray-500 text-lg leading-relaxed">
                                                                    <Info title="Running Time" value={formatTime(data.movies.movie.runtime)} />
                                                                    <Info title="Languages" value={data.movies.movie.spokenLanguages} />
                                                                    <Info title="Genres" value={data.movies.movie.genres} />
                                                                    <Info title="Keywords" value={data.movies.movie.keywords} />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="block my-4">
                                                            <div className="text-lg font-bold">Overview</div>
                                                            <p className="text-sm text-gray-700">
                                                                {data.movies.movie.overview}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ):
                                                ''
                                        )
                                    )
                                }
                                <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-mv-main background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => props.setShowDetail(false)}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}