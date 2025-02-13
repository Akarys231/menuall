import React, { useEffect } from "react";
import { motion } from "framer-motion";

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
        <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-lg bg-black/30">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white w-[90%] max-w-md rounded-2xl shadow-lg p-6 relative text-center max-h-[90vh] flex flex-col"
            >
                {/* Кнопки закрытия */}
                <div className="absolute top-4 right-6">
                    <button onClick={closeOrder}>
                        <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#FDCC45"/>
                            <path d="M7 7L13 13M7 13L13 7" stroke="#272727" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                <h2 className="text-lg font-bold flex ms-2 items-center gap-2 mt-8">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
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

                <button
                    onClick={closeOrder}
                    className="w-full mt-6 bg-yellow-400 text-black py-3 rounded-lg font-bold text-xs"
                >
                    К меню
                </button>
            </motion.div>
        </div>
    );
};

export default OrderModal;
