import React, { useState, useRef, useEffect } from "react";
import image4 from "../../assets/images/image4.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";

const PromosContainer = () => {
    const slides = [image4, image2, image3];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slide, setSlide] = useState(true);
    const setIntervalRef = useRef(null);
    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currIndex) =>
            currIndex === slides.length - 1 ? 0 : currIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((currIndex) =>
            currIndex === 0 ? slides.length - 1 : currIndex - 1
        );
    };

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
        toggleStateSlide();
    };

    const handleTouchMove = (e) => {
        setEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (startX - endX > 50) {
            nextSlide();
        } else if (endX - startX > 50) {
            prevSlide();
        }
        toggleStateSlide();
    };

    useEffect(() => {
        if (slide) {
            setIntervalRef.current = setInterval(nextSlide, 4500);
        } else {
            clearInterval(setIntervalRef.current);
        }
        return () => clearInterval(setIntervalRef.current);
    }, [slide]);

    const toggleStateSlide = () => {
        setSlide((currStateSlide) => !currStateSlide);
    };

    return (
        <div className="slider  px-2">
            <div className="slider_wrapper rounded-lg" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
                <div className="slides_wrapper">
                    <div
                        className="slides"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {slides.map((item, index) => (
                            <div className="slide" key={index}>
                                <img src={item} alt={`Слайд ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="slider-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${currentIndex === index ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PromosContainer;
