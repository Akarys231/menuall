import React, { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";

const OrderModal = ({ isOpen, closeOrder, cartItems }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // Блокировка прокрутки фона
        } else {
            document.body.style.overflow = "auto"; // Восстановление прокрутки
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-lg bg-opacity-50">
            <div className="bg-white w-[90%] max-w-md rounded-2xl shadow-lg p-6 relative text-center max-h-[90vh] flex flex-col">
                <div className="absolute top-4 left-4">
                    <button
                        onClick={closeOrder}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-black shadow-md hover:shadow-lg"
                    >
                        <IoArrowBack size={20} />
                    </button>
                </div>
                <div className="absolute top-4 right-4">
                    <button
                        onClick={closeOrder}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-black shadow-md hover:shadow-lg"
                    >
                        ✕
                    </button>
                </div>

                <h2 className="text-lg font-bold flex ms-2 items-center gap-2 mt-8">
                    <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12.5" r="12.5" fill="white"/>
                        <path d="M19.25 13.5625C19.25 10.3828 16.6198 7.75931 13.25 7.41556V6H11.75V7.41556C8.38025 7.75931 5.75 10.3828 5.75 13.5625V14.9375H19.25V13.5625ZM7.25 13.5625C7.25 10.9094 9.60575 8.75 12.5 8.75C15.3942 8.75 17.75 10.9094 17.75 13.5625H7.25ZM5 15.625H20V17H5V15.625Z" fill="black"/>
                    </svg>
                    Ваш заказ
                </h2>

                <div className="bg-gray-100 p-4 rounded-lg mt-4 flex-1 overflow-y-auto max-h-[50vh]">
                    <div className="space-y-2">
                        {cartItems.map((item, i) => (
                            <div key={i} className="flex justify-between text-sm font-medium border-b pb-1">
                                <span>{item.name} {item.quantity > 1 ? `x${item.quantity}` : ''}</span>
                                <span>{item.price * item.quantity} ₸</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-4">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2099_74)">
                            <path d="M22.5 0H0V22.5H22.5V0ZM18.75 18.75H3.75V3.75H18.75V18.75Z" fill="black"/>
                            <path d="M7.5 7.5H15V15H7.5V7.5ZM0 60H22.5V37.5H0V60ZM3.75 41.25H18.75V56.25H3.75V41.25Z" fill="black"/>
                            <path d="M7.5 45H15V52.5H7.5V45ZM37.5 0V22.5H60V0H37.5ZM56.25 18.75H41.25V3.75H56.25V18.75Z" fill="black"/>
                            <path d="M45 7.5H52.5V15H45V7.5ZM7.5 26.25H0V33.75H11.25V30H7.5V26.25ZM26.25 33.75H33.75V41.25H26.25V33.75ZM11.25 26.25H18.75V30H11.25V26.25ZM33.75 45H26.25V48.75H30V52.5H33.75V48.75V45ZM22.5 26.25V30H18.75V33.75H26.25V26.25H22.5ZM30 15H33.75V22.5H30V15ZM33.75 30V33.75H41.25V26.25H30V30H33.75ZM26.25 22.5H30V26.25H26.25V22.5ZM33.75 52.5H41.25V60H33.75V52.5ZM26.25 52.5H30V60H26.25V52.5ZM33.75 41.25H37.5V45H33.75V41.25ZM33.75 11.25V3.75H30V0H26.25V15H30V11.25H33.75ZM45 52.5H48.75V60H45V52.5ZM45 45H52.5V48.75H45V45ZM41.25 48.75H45V52.5H41.25V48.75ZM37.5 45H41.25V48.75H37.5V45ZM52.5 37.5V41.25H56.25V45H60V37.5H56.25H52.5ZM56.25 48.75H52.5V60H60V52.5H56.25V48.75ZM37.5 37.5V41.25H48.75V33.75H41.25V37.5H37.5ZM45 26.25V30H52.5V33.75H60V26.25H52.5H45Z" fill="black"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_2099_74">
                                <rect width="60" height="60" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <button
                    onClick={closeOrder}
                    className="w-full mt-6 bg-yellow-400 text-black py-3 rounded-lg font-bold text-lg"
                >
                    К меню
                </button>
            </div>
        </div>
    );
};

export default OrderModal;
