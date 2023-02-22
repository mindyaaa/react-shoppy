import React, { useState } from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';

export default function Home() {

    return (
        <section>
            <Banner />
            <Products />      
        </section>
    );
}

