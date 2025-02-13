    import React, { useEffect, useState } from "react";
    import "animate.css";

    const CartModal = ({ isOpen, closeCart, cartItems, addToCart, removeFromCart, clearCart, openOrderModal }) => {
        const [isAnimating, setIsAnimating] = useState(false);

        useEffect(() => {
            if (isOpen) {
                setIsAnimating(true);
            } else {
                setIsAnimating(false);
            }
        }, [isOpen]);

        if (!isOpen && !isAnimating) return null;

        return (
            <div
                className={`fixed inset-0 z-50 flex justify-center items-center
                    ${isAnimating ? "animate__animated animate__fadeInUpBig" : "animate__animated animate__fadeOutDownBig"}`}
            >
                <div className="bg-white w-full max-w-md rounded-xl overflow-hidden shadow-lg">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Ваш заказ</h2>
                            <button onClick={clearCart} className="text-sm text-gray-500">Очистить</button>
                        </div>
                        {cartItems.length === 0 ? (
                            <p className="text-center text-gray-500">Ваша корзина пуста</p>
                        ) : (
                            <>
                                <div className="space-y-4">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-14 h-14 bg-gray-200 rounded-lg"></div>
                                                <div>
                                                    <p className="text-sm font-medium">{item.name}</p>
                                                    <p className="text-xs text-gray-500">Состав блюда</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <button onClick={() => removeFromCart(item.id)} className="text-lg">-</button>
                                                <span className="text-sm font-semibold">{item.quantity}</span>
                                                <button onClick={() => addToCart(item.id, item.price, item.name)} className="text-lg">+</button>
                                            </div>
                                            <span className="text-sm font-bold">{item.price * item.quantity} ₸</span>
                                        </div>
                                    ))}
                                </div>
                                <button onClick={closeCart} className="w-full bg-gray-100 py-3 rounded-lg font-semibold mt-6 text-xs">
                                    Открыть меню
                                </button>
                                <div className="mt-4">
                                    <div className="flex justify-between text-sm font-medium">
                                        <span>Итого:</span>
                                        <span>{cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)} ₸</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-medium mt-2">
                                        <span>Полная стоимость:</span>
                                        <span>{cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)} ₸</span>
                                    </div>
                                </div>
                            </>
                        )}
                        <div className="w-full bg-yellow-400 py-3 rounded-lg font-semibold mt-6">
                            <button onClick={openOrderModal} className="w-full text-black rounded-lg font-bold text-xs">
                                Показать официанту
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default CartModal;
