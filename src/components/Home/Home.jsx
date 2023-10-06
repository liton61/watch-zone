/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Home = () => {
    const watches = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    watches.map(watch => <Card key={watch.id} watch={watch}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;