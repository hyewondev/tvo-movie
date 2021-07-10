const Loader = () => {
    let circleCommonClasses = 'h-4 w-4 m-2 bg-mv-main rounded-full';

    return (
        <div className='flex p-4'>
            <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
            <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
            <div className={`${circleCommonClasses} animate-bounce400`}></div>
        </div>
    );
};

export default Loader;