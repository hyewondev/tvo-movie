import { FaBan } from "react-icons/fa";

const Poster = (props) => {
    return (
        <>
            {
                (props.posters.length > 0)?
                    (<img src={props.posters[0].image}
                          alt={props.title}
                          className="rounded-t-lg w-full h-52 sm:h-52 md:h-72 cursor-pointer"
                          onClick={ props.openDetail }
                    />):
                    (
                        <div className="bg-gray-100 text-center pt-20 sm:pt-28 rounded-t-lg w-full h-52 sm:h-52 md:h-72 cursor-pointer text-gray-500"
                              onClick={ props.openDetail } >
                            <span id={`image_${props.id}`}>No Image</span>
                        </div>
                    )
            }
        </>
    );
};

export default Poster;