const Keyword = (props) => {

    return (
        <div className="flex flex-wrap">
            {
                props.keywords.map((keyword, index) => {
                    return (
                        <div className="border border-gray-300 rounded-lg text-center text-xs shadow-md p-1 mr-1 mb-2"
                             key={`${keyword.id}_${index}`}>{keyword.name}</div>
                    )
                })
            }
        </div>
    );
};

export default Keyword;