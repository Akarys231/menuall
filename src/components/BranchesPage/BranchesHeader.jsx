import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import bg from '../../assets/images/image2.jpg';

const BranchesHeader = () => {
    return (
        <div
            className="relative w-full h-60 sm:h-full md:h-32 bg-cover bg-center flex items-center px-4 sm:px-6"
            style={{ backgroundImage: `url(${bg})` }}
        >
            {/* Затемнение через псевдо-элемент */}
            <div className="absolute inset-0 bg-gray bg-opacity-50 z-0"></div>

            {/* Кнопка возврата */}
            {/*<button*/}
            {/*    className="absolute top-4 left-4 w-7 h-7 flex items-center justify-center bg-yellow-400 rounded-full shadow-md hover:bg-yellow-500 transition active:scale-90 z-10"*/}
            {/*    onClick={() => window.history.back()}*/}
            {/*>*/}
            {/*    <MdKeyboardArrowLeft className="text-black" size={25} />*/}
            {/*</button>*/}
        </div>
    );
};

export default BranchesHeader;
