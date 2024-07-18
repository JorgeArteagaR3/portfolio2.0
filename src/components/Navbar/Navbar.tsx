import { SetStateAction, Dispatch } from "react";
import clsx from "clsx";
import "./Navbar.css";
export const Navbar = ({
    isModalOpen,
    setIsModalOpen,
}: {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    const navUrls = ["home", "skills", "projects", "contact"];

    const handleMenuModal = (): void => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <header className={clsx("mb-10 lg:mb-20 px-8")}>
            <nav className="h-0 lg:h-auto">
                <ul
                    className={
                        isModalOpen
                            ? "absolute left-0 links bg-mybackground opacity-1 flex flex-col gap-6 scale-100 text-center h-screen w-screen justify-center z-20"
                            : "links opacity-0 scale-0 lg:opacity-100 text-center lg:scale-100 lg:flex lg:justify-center lg:gap-16 xl:gap-24 z-20"
                    }
                >
                    {navUrls.map((url) => (
                        <li
                            key={url}
                            className="nav-links first-letter:uppercase hover:opacity-90"
                        >
                            <a
                                className="text-4xl lg:text-xl"
                                href={"#" + url}
                                onClick={() => {
                                    setIsModalOpen(false);
                                }}
                            >
                                {url}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    className={
                        isModalOpen
                            ? "menu  w-[20px] h-[15px] md:w-[30px] md:h-[22.5px] flex effect z-40 absolute top-[20px] right-[20px]"
                            : "menu w-[20px] h-[15px] md:w-[30px] md:h-[22.5px] flex z-20 lg:invisible absolute top-[20px] right-[20px]"
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
