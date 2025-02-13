import React from "react";

const hits = [
    { id: "hot", label: "Горячее" },
    { id: "salads", label: "Салаты" },
    { id: "combo", label: "Комбо" },
    { id: "drinks", label: "Напитки" },
    { id: "snacks", label: "Закуски" },
    { id: "desserts", label: "Десерты" },
];

const HitsScroll = () => {
    const scrollToCategory = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="w-full overflow-x-auto whitespace-nowrap py-2 scrollbar-hide">
            <div className="flex space-x-4 px-4 min-w-max">
                {hits.map((hit) => (
                    <div
                        key={hit.id}
                        onClick={() => scrollToCategory(hit.id)}
                        className="relative w-35 h-24 bg-gray-100 text-gray-800 rounded-xl text-sm font-medium p-2 cursor-pointer hover:bg-gray-200 transition"
                    >
                        <p className="absolute top-2 left-2">{hit.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HitsScroll;
