import { BsFillPersonFill, BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaRegCopy, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";
import clouds from "../../assets/images/cloudscropped.png";
import { useState } from "react";

const socialMedia = [FaLinkedinIn, FaGithub, FaWhatsapp];

export const Footer = () => {
    const [isCopied, setIsCopied] = useState(false);
    return (
        <footer
            className="md:px-16"
            id="contact"
        >
            <div
                className="bg-darkpurple text-mybackground p-8 w-11/12 mx-auto h-[450px] lg:h-[550px] max-w-[345px] md:max-w-[800px] lg:max-w-[1000px] flex flex-col items-center justify-center gap-10 lg:gap-16
            rounded-[360px] mb-6 lg:mb-10"
            >
                <h2 className="text-center font-['Museoslab'] text-mygreen text-2xl md:text-3xl lg:text-5xl">
                    Get In Touch
                </h2>
                <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 xl:gap-40 items-center justify-center">
                    <div className="flex flex-col gap-2 lg:gap-5">
                        <p className="flex gap-2 lg:gap-4 items-center md:text-lg lg:text-xl">
                            <BsFillPersonFill /> Jorge Luis Arteaga Aranibar
                        </p>
                        <p className="flex gap-2 lg:gap-4 items-center md:text-lg lg:text-xl">
                            <BsTelephoneFill />
                            +51 912 893 054
                        </p>
                        <p className="flex gap-2 lg:gap-4 items-center md:text-lg lg:text-xl">
                            <IoMail />
                            jorge.aranibar26@gmail.com
                            <span className="relative block copy-clipboard">
                                <FaRegCopy
                                    className="cursor-pointer hover:fill-mygreen"
                                    onMouseLeave={() => {
                                        setTimeout(() => {
                                            setIsCopied(false);
                                        }, 300);
                                    }}
                                    onClick={() => {
                                        setIsCopied(true);
                                        navigator.clipboard.writeText(
                                            "jorge.aranibar26@gmail.com"
                                        );
                                    }}
                                />
                                <span
                                    className="after:content-[''] after:absolute after:top-full after:left-2/4 after:ml-[-5px] after:border-[5px] after:boder-solid after:border-[#f7f8f2_transparent_transparent_transparent] 
                                absolute left-[50%] -translate-x-2/4 mx-auto bottom-[35px] bg-mybackground rounded-full text-center text-primary text-[10px] md:text-xs py-2 w-[85px]"
                                >
                                    {!isCopied ? "Copy this!" : "Copied! "}
                                </span>
                            </span>
                        </p>
                    </div>
                    <div className="flex justify-center gap-2 xl:gap-5 lg:flex-col">
                        {socialMedia.map((Social, index) => (
                            <a
                                key={index}
                                className="social-icon border-2 border-[#a4a7ff1f] px-4 py-2 rounded-full hover:bg-mybackground duration-300 cursor-pointer hover:fill-darkpurple"
                            >
                                <Social
                                    size={25}
                                    className="duration-300"
                                    key={index}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <img
                src={clouds}
                className="mx-auto w-[70%]"
                alt="clouds"
            />
        </footer>
    );
};
