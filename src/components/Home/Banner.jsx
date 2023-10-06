/* eslint-disable no-unused-vars */
import React from 'react';

const Banner = () => {
    return (
        <div className='bg-pink-200 h-[70vh] mt-10 flex justify-center items-center'>
            <div>
                <input className='h-10 w-60 rounded-l-lg outline-none pl-3' type="text" name="" id="" placeholder='Search here...' />
                <button className='bg-pink-400 py-2 px-5 text-base rounded-r-lg font-semibold text-white'>Search</button>
            </div>
        </div>
    );
};

export default Banner;