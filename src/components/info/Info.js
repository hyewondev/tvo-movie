import Keyword from "../keyword/Keyword";

const Info = (props) => {
    return (
        <div>
            {
                (props.value.length) ?
                (
                <div className="mb-1 text-sm sm:text-base">
                    <span className="font-bold">{props.title}: </span>
                    <span className="text-gray-700">
                        {
                            (Array.isArray(props.value))?
                                <Keyword keywords={props.value} /> :
                                props.value
                        }
                    </span>
                </div>
                ):
                ''
            }
        </div>
    )
};

export default Info;