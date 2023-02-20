import React from 'react';
import {RiShoppingBag3Line} from 'react-icons/ri';
import {BsFillPencilFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='p-2 flex justify-between border-b border-gray-300'>
            <Link to='/'
            className='flex items-center text-4xl text-brand'
            >
                <RiShoppingBag3Line />
                <h1>Shoppy</h1>
            </Link>
            <nav
            className='flex items-center gap-4 font-semibold'>
                <Link to='/products'>products</Link>
                <Link to='/carts'>carts</Link>
                <Link to='/products/new'
                className='tex-2xl'
                >
                    <BsFillPencilFill />
                </Link>
            </nav>
        </header>
    );
}

