import "./Hero.css";
const Hero = () => {
    return (
        <section className="container mx-auto lg:grid grid-cols-2 lg:place-items-center lg:gap-8 2xl:gap-20 mb-32 lg:mb-40 xl:mb-48 px-8 animate-moveDown">
            <div className="mb-5 md:mb-8 lg:text-left ">
                <h1
                    className="text-4xl mx-auto mb-4 
                                md:text-5xl 2xl:text-6xl text-center"
                >
                    Hi, I'm
                    <br /> Jorge Arteaga
                </h1>
                <p className="text-2xl font-['Lausane-250'] text-center">
                    Front End Developer & Industrial Engineer
                </p>
            </div>
            <div
                className="hero-box bg-darkpurple text-mybackground px-10  rounded-[360px] max-w-[350px] h-[455px] flex flex-col align-center justify-center
                            md:w-[55%] md:max-w-none md:h-[550px] md:rounded-[400px] md:px-16 mx-auto xl:w-[70%] 
                            lg:ml-0 lg:h-[600px] lg:w-[90%] xl:pt-20 xl:px-14 xl:justify-start 2xl:h-[650px] 2xl:max-w-[480px] 2xl:pt-28 xl:px-14"
            >
                <h2
                    className="text-mygreen text-xl border-b-[3px] border-mygreen border-solid text-left my-4 font-['Museoslab'] font-bold pb-1
                                md:text-2xl md:pb-1.5"
                >
                    About Me
                </h2>
                <p className="text-sm leading-8 md:text-lg 2xl:text-xl 2xl:leading-10 text-left md:leading-10">
                    I am a motivated self-taught front-end developer with a
                    strong passion for building visually appealing and
                    user-friendly websites. With a strong understanding of
                    responsive design and user experience and am confident in my
                    ability to bring innovative ideas to life.
                </p>
            </div>
        </section>
    );
};

export default Hero;
