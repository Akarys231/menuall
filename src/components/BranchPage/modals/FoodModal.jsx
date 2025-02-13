import React from "react";
import { motion } from "framer-motion";

const FoodModal = ({ food, isOpen, onClose, addToCart, removeFromCart, cart }) => {
    if (!isOpen || !food) return null;

    const quantity = cart[food.id]?.quantity || 0;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl shadow-lg p-4 w-96 relative mx-3"
                onClick={(e) => e.stopPropagation()} // Остановка всплытия, чтобы клик внутри модального окна не закрывал его
            >
                {/* Кнопка закрытия */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2"
                >
                    <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="10" fill="#FDCC45"/>
                        <path d="M7 7L13 13M7 13L13 7" stroke="#272727" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </button>

                <img src={food.img} alt={food.name} className="mt-4 w-full h-48 object-cover rounded-lg" />
                <h2 className="text-lg font-semibold mt-4">{food.name}</h2>
                <p className="text-gray-500 text-xs my-2">Состав</p>
                <p className="text-sm font-bold mt-2">{food.price} ₸</p>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center bg-gray-200 rounded-lg h-10">
                        <button
                            onClick={() => removeFromCart(food.id)}
                            className="text-lg px-3 h-full flex items-center justify-center"
                            disabled={quantity === 0}
                        >
                            -
                        </button>
                        <span className="text-lg font-medium px-3">{quantity}</span>
                        <button
                            onClick={() => addToCart(food.id, food.price, food.name)}
                            className="text-lg px-3 h-full flex items-center justify-center"
                        >
                            +
                        </button>
                    </div>
                    <button
                        onClick={() => addToCart(food.id, food.price, food.name)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium ms-2 w-full h-10 flex items-center justify-center"
                    >
                        Добавить
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default FoodModal;
