/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='mx-auto block w-full max-w-screen-xl rounded-xl'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;