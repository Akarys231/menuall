import React, { useMemo, useState } from "react";
import FoodModal from "./modals/FoodModal.jsx";
import { motion } from "framer-motion";
import plov from "../../assets/images/plov.svg";

const foodItems = [
    // Category: Manti
    { id: 1, name: "Манты с говядиной", price: 3200, img: plov, category: "manti", isHit: false },
    { id: 2, name: "Манты с тыквой", price: 2800, img: plov, category: "manti", isHit: false },
    { id: 3, name: "Манты с бараниной", price: 3500, img: plov, category: "manti", isHit: false },
    { id: 4, name: "Манты с курицей", price: 3000, img: plov, category: "manti", isHit: false },

    // Category: Plov
    { id: 5, name: "Бешбармак", price: 5000, img: plov, category: "plov", isHit: false },
    { id: 6, name: "Плов классический", price: 4800, img: plov, category: "plov", isHit: false },
    { id: 7, name: "Плов узбекский Плов узбекский Плов узбекский Плов узбекский", price: 5200, img: plov, category: "plov", isHit: true },
    { id: 8, name: "Плов с курицей", price: 4500, img: plov, category: "plov", isHit: true },

    // Category: Soups
    { id: 9, name: "Салат Цезарь", price: 3800, img: plov, category: "soups", isHit: false },
    { id: 10, name: "Суп Харчо", price: 2700, img: plov, category: "soups", isHit: false },
    { id: 11, name: "Шурпа", price: 3200, img: plov, category: "soups", isHit: false },
    { id: 12, name: "Борщ", price: 2900, img: plov, category: "soups", isHit: false },

    // Category: Snacks
    { id: 13, name: "Фруктовый салат", price: 1500, img: plov, category: "snacks", isHit: false },
    { id: 14, name: "Чипсы", price: 400, img: plov, category: "snacks", isHit: false },
    { id: 15, name: "Орешки", price: 600, img: plov, category: "snacks", isHit: false },
    { id: 16, name: "Сырные палочки", price: 1200, img: plov, category: "snacks", isHit: false },

    // Category: Combo
    { id: 17, name: "Комбо Ланч", price: 4200, img: plov, category: "combo", isHit: false },
    { id: 18, name: "Комбо Бизнес", price: 5500, img: plov, category: "combo", isHit: false },
    { id: 19, name: "Комбо Супер", price: 6000, img: plov, category: "combo", isHit: true },
    { id: 20, name: "Комбо Завтрак", price: 3800, img: plov, category: "combo", isHit: false },

    // Category: Drinks
    { id: 21, name: "Кофе", price: 700, img: plov, category: "drinks", isHit: true },
    { id: 22, name: "Чай", price: 500, img: plov, category: "drinks", isHit: false },
    { id: 23, name: "Сок апельсиновый", price: 900, img: plov, category: "drinks", isHit: false },
    { id: 24, name: "Лимонад домашний", price: 1200, img: plov, category: "drinks", isHit: false },

    // Category: Desserts
    { id: 25, name: "Шоколад", price: 500, img: plov, category: "desserts", isHit: false },
    { id: 26, name: "Тирамису", price: 2000, img: plov, category: "desserts", isHit: false },
    { id: 27, name: "Чизкейк", price: 2200, img: plov, category: "desserts", isHit: false },
    { id: 28, name: "Мороженое", price: 800, img: plov, category: "desserts", isHit: false },
];

const categoryNames = {
    manti: "Манты",
    plov: "Плов",
    soups: "Супы",
    salads: "Салаты",
    snacks: "Закуски",
    combo: "Комбо",
    drinks: "Напитки",
    desserts: "Десерты",
};

const FoodContainer = ({ addToCart, removeFromCart, cart }) => {
    const [selectedFood, setSelectedFood] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const categorizedItems = useMemo(() => {
        return foodItems.reduce((categories, item) => {
            if (!categories[item.category]) {
                categories[item.category] = [];
            }
            categories[item.category].push(item);
            return categories;
        }, {});
    }, []);

    const hits = useMemo(() => foodItems.filter((item) => item.isHit), []);

    const openModal = (food) => {
        setSelectedFood(food);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedFood(null);
    };

    return (
        <div className="p-4 pt-16 relative">
            {hits.length > 0 && (
                <div id="hits" className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Хиты продаж</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {hits.map((food) => (
                            <FoodCard key={food.id} food={food} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} openModal={openModal} />
                        ))}
                    </div>
                </div>
            )}

            {Object.keys(categorizedItems).map((category) => (
                <div key={category} id={category} className="mb-8">
                    <h2 className="text-xl font-bold mb-4 capitalize">{categoryNames[category] || "Другое"}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {categorizedItems[category].map((food) => (
                            <FoodCard key={food.id} food={food} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} openModal={openModal} />
                        ))}
                    </div>
                </div>
            ))}
            <FoodModal food={selectedFood} isOpen={isModalOpen} onClose={closeModal} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
        </div>
    );
};

const FoodCard = ({ food, addToCart, removeFromCart, cart, openModal }) => {
    const quantity = cart[food.id]?.quantity || 0;

    return (
        <div onClick={(e) => {
            if (e.target.closest('button')) return;
            openModal(food);
        }} className="bg-[#F5F4F2] shadow-lg rounded-[13%] overflow-hidden p-2 flex flex-col items-center w-[160px]">
            <img src={food.img} alt={food.name} className="w-full h-24 object-cover rounded-lg mb-2" />
            <div className="text-center mb-1 w-full">
                <p className="text-xs font-medium truncate w-full">{food.name}</p>
                <p className="text-sm font-semibold mt-1">{food.price} ₸</p>
                <p className="text-gray-500 text-xs">Состав</p>
            </div>
            <div className="w-full bg-white rounded-full w-7 h-7 flex items-center justify-center p-2 relative">
                <motion.div
                    initial={{ width: "40px" }}
                    animate={{ width: quantity > 0 ? "100%" : "40px" }}
                    transition={{ duration: 0.3 }}
                    className="w-full bg-white rounded-full w-7 h-7 flex items-center justify-center p-2 relative overflow-hidden"
                >
                    {quantity > 0 && (
                        <motion.button
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => removeFromCart(food.id)}
                            className="absolute left-2 w-7 h-7 text-black text-lg font-bold rounded-full flex items-center justify-center"
                        >
                            <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1H13H1Z" fill="#D9D9D9"/>
                                <path d="M1 1H13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </motion.button>
                    )}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: quantity > 0 ? 1 : 0 }}
                        className="text-sm font-medium"
                    >
                        {quantity > 0 ? quantity : ""}
                    </motion.span>
                    <motion.button
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => addToCart(food.id, food.price, food.name)}
                        className={`w-7 h-7 bg-white text-black text-lg font-bold rounded-full flex items-center justify-center ${quantity > 0 ? 'absolute right-2' : ''}`}
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1V13V1ZM1 7H13H1Z" fill="#D9D9D9"/>
                            <path d="M7 1V13M1 7H13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};


export default FoodContainer;