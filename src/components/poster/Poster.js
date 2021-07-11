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
                        <div className="bg-gray-100 text-center pt-24 rounded-t-lg w-full h-52 sm:h-52 md:h-72 cursor-pointer text-gray-500"
                             id={`image_${props.id}`} onClick={ props.openDetail } >
                            <FaBan role="img"
                                   focusable="false"
                                   aria-labelledby={`image_${props.id}`}
                                   title="no image"
                                   className="mx-auto text-5xl text-gray-300 mb-3"
                            />
                            No Image
                        </div>
                    )
            }
        </>
    );
};

export default Poster;