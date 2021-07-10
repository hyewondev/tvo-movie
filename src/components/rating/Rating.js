import { MdStar, MdStarBorder, MdStarHalf } from 'react-icons/md';

const Rating = (props) => {
    const TOTAL_STAR = 5;
    const rating = props.rating / 2;
    let stars = new Array(TOTAL_STAR);
    let i = 0;
    while(i < parseInt(rating)) {
        stars[i] = <MdStar className="mx-1 w-5 h-5 fill-current text-yellow-500" role="img" title="a star" focusable='false' aria-labelledby={`rating_${props.id}`} />;
        i++;
    }

    if(TOTAL_STAR > i) {
        if((rating % 1 * 10) < 3) stars[i] = <MdStarBorder className="mx-1 w-5 h-5 fill-current text-yellow-500" role="img" title="empty star" focusable='false' aria-labelledby={`rating_${props.id}`} />;
        else stars[i] = <MdStarHalf className="mx-1 w-5 h-5 fill-current text-yellow-500" role="img" title="half star" focusable='false' aria-labelledby={`rating_${props.id}`} />;
        i++;
    }

    if(TOTAL_STAR > i) {
        for (let j = i; j < TOTAL_STAR; j++) {
            stars[j] = <MdStarBorder className="mx-1 w-5 h-5 fill-current text-yellow-500" role="img" title="empty star" focusable='false' aria-labelledby={`rating_${props.id}`} />;
        }
    }

    return (
        <div className="flex justify-center items-center">
            <div className="flex items-center mb-1" id={`rating_${props.id}`}>
                {
                    stars.map((star, index) => {
                        return <span key={`${props.id}_${index}`}>{star}</span>;
                    })
                }
            </div>
        </div>
    );
};

export default Rating;