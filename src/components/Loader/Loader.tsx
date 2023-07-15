import "./Loader.css";
const Loader = () => {
    return (
        <div className="absolute w-full h-full left-0 top-0 bg-[#00000099] z-40 grid place-items-center">
            <div className="loader h-20 w-20 absolute"></div>
        </div>
    );
};

export default Loader;
