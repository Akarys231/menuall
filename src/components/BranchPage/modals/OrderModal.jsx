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
                <div className="absolute top-4 left-7">
                    <button
                        onClick={closeOrder}
                    >
                        <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#FDCC45"/>
                            <mask id="path-2-inside-1_0_1" fill="white">
                                <path d="M13.4999 10.5H7.37492L9.99992 13.125L9.66992 13.5L6.41992 10.25L9.66992 7L9.99992 7.375L7.37492 10H13.4999V10.5Z"/>
                            </mask>
                            <path d="M13.4999 10.5H7.37492L9.99992 13.125L9.66992 13.5L6.41992 10.25L9.66992 7L9.99992 7.375L7.37492 10H13.4999V10.5Z" fill="#272727"/>
                            <path d="M13.4999 10.5V14.5H17.4999V10.5H13.4999ZM7.37492 10.5V6.5H-2.28193L4.54649 13.3284L7.37492 10.5ZM9.99992 13.125L13.0028 15.7675L15.482 12.9502L12.8283 10.2966L9.99992 13.125ZM9.66992 13.5L6.84149 16.3284L9.85622 19.3431L12.6728 16.1425L9.66992 13.5ZM6.41992 10.25L3.59149 7.42157L0.763068 10.25L3.59149 13.0784L6.41992 10.25ZM9.66992 7L12.6728 4.35749L9.85622 1.15685L6.84149 4.17157L9.66992 7ZM9.99992 7.375L12.8283 10.2034L15.482 7.54978L13.0028 4.73249L9.99992 7.375ZM7.37492 10L4.54649 7.17157L-2.28193 14H7.37492V10ZM13.4999 10H17.4999V6H13.4999V10ZM13.4999 6.5H7.37492V14.5H13.4999V6.5ZM4.54649 13.3284L7.17149 15.9534L12.8283 10.2966L10.2033 7.67157L4.54649 13.3284ZM6.99707 10.4825L6.66707 10.8575L12.6728 16.1425L13.0028 15.7675L6.99707 10.4825ZM12.4983 10.6716L9.24835 7.42157L3.59149 13.0784L6.84149 16.3284L12.4983 10.6716ZM9.24835 13.0784L12.4983 9.82843L6.84149 4.17157L3.59149 7.42157L9.24835 13.0784ZM6.66707 9.64251L6.99707 10.0175L13.0028 4.73249L12.6728 4.35749L6.66707 9.64251ZM7.17149 4.54657L4.54649 7.17157L10.2033 12.8284L12.8283 10.2034L7.17149 4.54657ZM7.37492 14H13.4999V6H7.37492V14ZM9.49992 10V10.5H17.4999V10H9.49992Z" fill="black" mask="url(#path-2-inside-1_0_1)"/>
                        </svg>

                    </button>
                </div>
                <div className="absolute top-4 right-6">
                    <button
                        onClick={closeOrder}
                    >
                        <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#FDCC45"/>
                            <path d="M7 7L13 13M7 13L13 7" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

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
                    className="w-full mt-6 bg-yellow-400 text-black py-3 rounded-lg font-bold text-md"
                >
                    К меню
                </button>
            </div>
        </div>
    );
};

export default OrderModal;
