import React, { useEffect, useState } from "react";

const CartModal = ({ isOpen, closeCart, cartItems, addToCart, removeFromCart, clearCart, openOrderModal }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
            document.body.style.overflow = "hidden"; // Блокировка прокрутки фона
        } else {
            setIsAnimating(false);
            document.body.style.overflow = "auto"; // Восстановление прокрутки фона
        }
    }, [isOpen]);

    if (!isOpen && !isAnimating) return null;

    return (
        <div className={`modal-overlay ${isAnimating ? "fade-in" : "fade-out"}`}>
            <div className={`modal-container ${isAnimating ? "slide-up" : "slide-down"}`}>
                <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Ваш заказ</h2>
                        <button onClick={clearCart} className="text-sm text-gray-500">Очистить</button>
                    </div>

                    <div className="flex-1 overflow-y-auto max-h-[50vh] pr-2">
                        {cartItems.length === 0 ? (
                            <p className="text-center text-gray-500">Ваша корзина пуста</p>
                        ) : (
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
                        )}
                    </div>

                    {/* Нижний фиксированный блок */}
                    <div className="mt-4">
                        <button onClick={closeCart} className="w-full bg-gray-100 py-3 rounded-lg font-semibold text-xs">
                            Открыть меню
                        </button>

                        {cartItems.length > 0 && (
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
                        )}

                        {cartItems.length > 0 && (
                            <div className="w-full bg-yellow-400 py-3 rounded-lg font-semibold mt-6">
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
