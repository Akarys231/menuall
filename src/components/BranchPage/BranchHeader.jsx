import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const BranchHeader = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between md:justify-start bg-white p-4">
            <button
                className="absolute top-5 left-2 w-7 h-7 flex items-center justify-center bg-yellow-400 rounded-full hover:bg-yellow-500 transition active:scale-90"
                onClick={() => navigate(-1)}
            >
                <MdKeyboardArrowLeft className="text-black" size={25} />
            </button>

            <h1 className="text-[22px] font-bold flex-1 text-center pb-1">
                Название
            </h1>
        </div>
    );
};

export default BranchHeader;
