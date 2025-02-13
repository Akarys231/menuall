import React from "react";
import { motion } from "framer-motion";

const FoodModal = ({ food, isOpen, onClose, addToCart, removeFromCart, cart }) => {
    if (!isOpen || !food) return null;

    const quantity = cart[food.id]?.quantity || 0;

    return (
        <div className="mx-4 fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-4 w-96 relative"
            >
                <button
                    onClick={onClose}
                    className="mb-2 mt-2 mr-2 absolute top-2 right-2 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center shadow-md hover:bg-yellow-500 transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <img src={food.img} alt={food.name} className=" mt-4 w-full h-48 object-cover rounded-lg" />
                <h2 className="text-m font-semibold mt-4">{food.name}</h2>
                <p className="text-gray-500 text-xs my-2">Состав</p>
                <p className="text-s font-bold mt-2">{food.price} ₸</p>

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
