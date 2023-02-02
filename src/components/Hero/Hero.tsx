const Hero = () => {
    return (
        <section className="lg:grid grid-cols-2 lg:place-items-center lg:gap-8 2xl:gap-20 mb-32 px-8">
            <div className="mb-5 md:mb-8 lg:text-left lg:justify-self-end">
                <h1
                    className="text-4xl mb-3 mx-auto 
                                md:text-5xl 2xl:text-6xl"
                >
                    Hi, I'm
                    <br /> Jorge Arteaga
                </h1>
                <p className="text-2xl font-['Lausane-250']">
                    Front End Developer & Industrial Engineer
                </p>
            </div>
            <div
                className="bg-darkpurple text-mybackground px-12 pt-12 pb-12 rounded-[360px] h-[455px] flex flex-col align-center justify-center
                            md:w-[55%] md:h-[550px] md:rounded-[400px] mx-auto md:px-16 lg:ml-0 lg:h-[600px] lg:w-[90%] xl:w-[70%] 2xl:h-[650px] 2xl:max-w-[480px]"
            >
                <h2
                    className="text-mygreen text-xl border-b-[3px] border-mygreen border-solid text-left my-4 font-['Museoslab'] font-bold pb-1
                                md:text-2xl md:pb-1.5"
                >
                    About Me
                </h2>
                <p className="text-sm leading-8 md:text-lg text-left md:leading-10">
                    I'm a self-taught Front-End Developer who is very passionate
                    about coding. Adept in implementing solutions from
                    development to deployment with multiple frameworks and
                    adhering to the most widely used design patterns in the
                    industry.
                </p>
            </div>
        </section>
    );
};

export default Hero;
