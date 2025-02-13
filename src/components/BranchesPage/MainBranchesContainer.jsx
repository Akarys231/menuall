import React, { useState } from 'react';
import AddressContainer from "./MainBranchesContainer/AddressContainer.jsx";
import MenuButton from "./MainBranchesContainer/MenuButton.jsx";

const MainBranchesContainer = () => {
    const [selectedBranchId, setSelectedBranchId] = useState(null);

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-white min-h-screen w-full flex flex-col">
            <h2 className="text-xl sm:text-2xl font-bold">НАЗВАНИЕ</h2>
            <h3 className="text-sm sm:text-base text-gray-600">Слоган</h3>

            <AddressContainer setSelectedBranchId={setSelectedBranchId} />

            {selectedBranchId && (
                <div className="mt-4 sm:mt-6">
                    <MenuButton branchId={selectedBranchId} />
                </div>
            )}
        </div>
    );
};

export default MainBranchesContainer;
