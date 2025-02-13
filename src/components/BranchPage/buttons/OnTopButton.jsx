import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "animate.css";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
                setIsAnimating(false);
            } else {
                setIsAnimating(true);
                setTimeout(() => setIsVisible(false), 500); // Подождать окончания анимации
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className={`
                        fixed bottom-5 left-5
                        bg-yellow-400
                        w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
                        flex items-center justify-center
                        rounded-full shadow-lg cursor-pointer
                        hover:bg-yellow-500 transition-all
                        animate__animated ${isAnimating ? "animate__backOutLeft" : "animate__backInLeft"}
                    `}
                    style={{
                        zIndex: 1000,
                    }}
                >
                    <IoIosArrowUp size="1.25rem" className="sm:text-lg md:text-xl lg:text-2xl" color="black" />
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;
