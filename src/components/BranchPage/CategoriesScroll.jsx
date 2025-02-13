import React, { useState, useEffect, useRef } from "react";

const categories = [
    { id: "manti", label: "Манты" },
    { id: "plov", label: "Плов" },
    { id: "soups", label: "Супы" },
    { id: "snacks", label: "Закуски" },
    { id: "combo", label: "Комбо" },
    { id: "drinks", label: "Напитки" },
    { id: "desserts", label: "Десерты" },
];

const CategoriesScroll = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0].id);
    const categoriesRef = useRef(null);

    // Прокрутка к разделу
    const scrollToCategory = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            let closestCategory = categories[0].id;
            let minDistance = Infinity;

            categories.forEach(({ id }) => {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const distance = Math.abs(rect.top);

                    if (distance < minDistance) {
                        minDistance = distance;
                        closestCategory = id;
                    }
                }
            });

            setActiveCategory(closestCategory);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Прокрутка активной категории к позиции 50px от левого края
    useEffect(() => {
        if (categoriesRef.current) {
            const activeButton = categoriesRef.current.querySelector(`[data-id="${activeCategory}"]`);
            if (activeButton) {
                const container = categoriesRef.current;
                const offsetLeft = activeButton.offsetLeft;

                container.scrollTo({
                    left: offsetLeft - 50, // Отступ слева 50px
                    behavior: "smooth",
                });
            }
        }
    }, [activeCategory]);

    return (
        <div className="w-full bg-white z-50 py-2 sticky top-0">
            <div ref={categoriesRef} className="w-full overflow-x-auto scrollbar-hide flex space-x-3 px-4">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        data-id={category.id}
                        onClick={() => scrollToCategory(category.id)}
                        className={`px-4 py-2 rounded-full text-sm font-small whitespace-nowrap transition-all ${
                            activeCategory === category.id
                                ? "bg-gray-700 text-white"
                                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                    >
                        {category.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoriesScroll;
