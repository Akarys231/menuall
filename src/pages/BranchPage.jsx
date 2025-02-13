import React from "react";
import { useParams } from "react-router-dom";
import BranchHeader from "../components/BranchPage/BranchHeader.jsx";
import SearchBar from "../components/BranchPage/SearchBar.jsx";
import CategoriesScroll from "../components/BranchPage/CategoriesScroll.jsx";
import PromosContainer from "../components/BranchPage/PromosContainer.jsx";
import HitsScroll from "../components/BranchPage/HitsScroll.jsx";
import FoodContainer from "../components/BranchPage/FoodContainer.jsx";
import OnTopButton from "../components/BranchPage/buttons/OnTopButton.jsx";
import CartButton from "../components/BranchPage/buttons/CartButton.jsx";
import CartModal from "../components/BranchPage/modals/CartModal.jsx";
import FoodModal from "../components/BranchPage/modals/FoodModal.jsx";
import OrderModal from "../components/BranchPage/modals/OrderModal.jsx";

function BranchPage() {
    const { id } = useParams(); // Get the branch ID from the URL

    return (
        <div>
            <BranchHeader/>
            <PromosContainer/>
            <SearchBar/>
            <CategoriesScroll/>
            <h2>Хиты продаж</h2>
            <HitsScroll/>
            <h2>Категория</h2>
            <FoodContainer/>

            <OnTopButton/>
            <CartButton/>
            <CartModal/>
            <FoodModal/>
            <OrderModal/>
        </div>
    );
}

export default BranchPage;
