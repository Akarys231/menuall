import React, { useEffect, useState } from "react";

const CartModal = ({ isOpen, closeCart, cartItems, addToCart, removeFromCart, clearCart, openOrderModal }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
            document.body.style.overflow = "hidden";
        } else {
            setIsAnimating(false);
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    if (!isOpen && !isAnimating) return null;

    return (
        <div
            className={`modal-overlay ${isAnimating ? "fade-in" : "fade-out"} fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50`}
            onClick={closeCart}
        >
            <div
                className={`modal-container ${isAnimating ? "slide-in-bottom" : "slide-out-bottom"} relative bg-white rounded-xl shadow-lg p-6 w-[400px]`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={closeCart}
                    className="absolute top-6 right-4"
                >
                    <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="10" fill="#FDCC45"/>
                        <path d="M7 7L13 13M7 13L13 7" stroke="#272727" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                <div className="flex flex-col h-full">
                    <div className="flex flex-row mb-4">
                        <h2 className="text-xl font-bold mr-3">Ваш заказ</h2>
                        <button onClick={clearCart} className="text-[11px] text-gray-500 mt-2">Очистить</button>
                    </div>
                    <div className="flex-1 overflow-y-auto max-h-[50vh] pr-2">
                        {cartItems.length === 0 ? (
                            <p className="text-center text-gray-500">Ваша корзина пуста</p>
                        ) : (
                            <div className="space-y-4">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between border-b border-gray-300 pb-2">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-14 h-14 bg-gray-200 rounded-lg"></div>
                                            <div>
                                                <p className="text-sm font-medium w-40 truncate">{item.name}</p>
                                                <p className="text-xs text-gray-500">Состав блюда</p>
                                                <span className="text-sm font-bold">{item.price} ₸</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 bg-[#F5F4F2] rounded-lg px-1 justify-between py-1">
                                            <button onClick={() => removeFromCart(item.id)} className="text-lg">
                                                <svg width="9" height="2" viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1H8H1Z" fill="#D9D9D9"/>
                                                    <path d="M1 1H8" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </button>
                                            <span className="text-xs font-semibold">{item.quantity}</span>
                                            <button onClick={() => addToCart(item.id, item.price, item.name)} className="text-lg">
                                                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 1V8M1 4.5H8" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="mt-4">
                        <button onClick={closeCart} className="w-full bg-gray-100 py-3 rounded-lg font-semibold text-xs">
                            Открыть меню
                        </button>

                        {cartItems.length > 0 && (
                            <div className="mt-4">
                                <div className="flex justify-between text-sm font-medium">
                                    <span>Итого</span>
                                    <span>{cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)} ₸</span>
                                </div>
                                <div className="flex justify-between text-sm font-medium mt-2">
                                    <span>Полная стоимость</span>
                                    <span>{cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)} ₸</span>
                                </div>
                            </div>
                        )}

                        {cartItems.length > 0 && (
                            <div className="w-full bg-yellow-400 py-3 rounded-lg font-semibold mt-6 mb-4 pb-2">
                                <button onClick={openOrderModal} className="w-full text-black rounded-lg font-bold text-xs">
                                    Показать официанту
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
