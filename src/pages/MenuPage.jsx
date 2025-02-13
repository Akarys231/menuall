    import React, { useState } from "react";
    import BranchHeader from "../components/BranchPage/BranchHeader.jsx";
    import SearchBar from "../components/BranchPage/SearchBar.jsx";
    import CategoriesScroll from "../components/BranchPage/CategoriesScroll.jsx";
    import FoodContainer from "../components/BranchPage/FoodContainer.jsx";
    import CartButton from "../components/BranchPage/buttons/CartButton.jsx";
    import CartModal from "../components/BranchPage/modals/CartModal.jsx";
    import OnTopButton from "../components/BranchPage/buttons/OnTopButton.jsx";
    import PromosContainer from "../components/BranchPage/PromosContainer.jsx";
    import FoodModal from "../components/BranchPage/modals/FoodModal.jsx";
    import OrderModal from "../components/BranchPage/modals/OrderModal.jsx";

    const MenuPage = () => {
        const [cart, setCart] = useState({});
        const [isCartOpen, setCartOpen] = useState(false);
        const [isOrderOpen, setOrderOpen] = useState(false);

        const addToCart = (id, price, name) => {
            setCart((prev) => ({
                ...prev,
                [id]: prev[id]
                    ? { ...prev[id], quantity: prev[id].quantity + 1 }
                    : { id, name, price, quantity: 1 },
            }));
        };

        const removeFromCart = (id) => {
            setCart((prev) => {
                if (!prev[id]) return prev;
                const updatedCart = { ...prev };
                if (updatedCart[id].quantity > 1) {
                    updatedCart[id].quantity -= 1;
                } else {
                    delete updatedCart[id];
                }
                return updatedCart;
            });
        };

        const clearCart = () => {
            setCart({});
        };

        const totalAmount = Object.values(cart).reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        return (
            <div className="relative min-h-screen">
                <BranchHeader />
                <PromosContainer/>
                <SearchBar />
                <CategoriesScroll />
                <FoodContainer addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
                <OnTopButton/>
                <CartButton totalAmount={totalAmount} openCart={() => setCartOpen(true)} />
                <CartModal
                    isOpen={isCartOpen}
                    closeCart={() => setCartOpen(false)}
                    cartItems={Object.values(cart)}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    clearCart={clearCart} // Передача clearCart
                    openOrderModal={() => setOrderOpen(true)}
                />
                <FoodModal/>
                <OrderModal isOpen={isOrderOpen} closeOrder={() => setOrderOpen(false)} cartItems={Object.values(cart)} />
            </div>
        );
    };

    export default MenuPage;
