import React from 'react';
import BranchesHeader from "../components/BranchesPage/BranchesHeader.jsx";
import MainBranchesContainer from "../components/BranchesPage/MainBranchesContainer.jsx";

const BranchesPage = () => {
    return (
        <div className="flex justify-center w-full">
            <div className={'w-full max-w-[1024px]'}>
                <BranchesHeader/>
                <MainBranchesContainer/>
            </div>
        </div>
    );
};

export default BranchesPage;