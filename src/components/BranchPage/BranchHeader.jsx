import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const BranchHeader = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between md:justify-start bg-white p-4 shadow-md">
            <button
                className="absolute top-4 left-4 w-7 h-7 flex items-center justify-center bg-yellow-400 rounded-full shadow-md hover:bg-yellow-500 transition active:scale-90"
                onClick={() => navigate(-1)}
            >
                <MdKeyboardArrowLeft className="text-black" size={25} />
            </button>

            <h1 className="text-lg font-bold flex-1 text-center">
                Название
            </h1>
        </div>
    );
};

export default BranchHeader;
