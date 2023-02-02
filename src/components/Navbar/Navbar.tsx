import { useState } from "react";
import "./Navbar.css";
export const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navUrls = ["home", "skills", "projects", "contact"];

    const handleMenuModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <header
            className={
                isModalOpen
                    ? "relative mb-10 px-8 pt-6"
                    : "relative mb-10 px-8 pt-6"
            }
        >
            <nav className="h-0 lg:h-auto">
                <ul
                    className={
                        isModalOpen
                            ? "links block bg-mybackground opacity-1 flex flex-col gap-6 scale-100 text-center h-screen justify-center overflow-hidden"
                            : "links opacity-0 scale-0 lg:opacity-100 text-center lg:scale-100 lg:block lg:flex lg:justify-center lg:gap-14 "
                    }
                >
                    {navUrls.map((url) => (
                        <li className="first-letter:uppercase">
                            <a
                                className="text-4xl lg:text-xl"
                                href={"#" + url}
                            >
                                {url}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    className={
                        isModalOpen
                            ? "menu flex w-[20px] h-[15px] md:w-[30px] md:h-[22.5px] flex effect z-40 absolute top-[20px] right-[20px]"
                            : "menu flex w-[20px] h-[15px] md:w-[30px] md:h-[22.5px] flex z-20 lg:invisible absolute top-[20px] right-[20px]"
                    }
                    onClick={handleMenuModal}
                >
                    <span className="bg-primary"></span>
                    <span className="bg-primary"></span>
                    <span className="bg-primary"></span>
                </button>
            </nav>
        </header>
    );
};
