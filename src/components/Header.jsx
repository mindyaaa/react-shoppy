import React, { useEffect, useState } from 'react';
import {RiShoppingBag3Line} from 'react-icons/ri';
import {BsFillPencilFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { login,logout, onUserStateChange } from '../api/firebase';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from './context/AuthContext';

export default function Header() {

    const {user, login, logout} = useAuthContext();

    const loginHandler = () => {
        login()
    }

    const logoutHandler = () => {
        logout()
    }

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
                {user && <Link to='/carts'>carts</Link>}

                {user && user.isAdmin ? 
                <Link to='/products/new'
                className='tex-2xl'
                ><BsFillPencilFill />
                </Link> 
                : null}


                {user && <User user={user} />}
                {!user && <Button text={'Login'} onClick={loginHandler}/>}
                {user && <Button text={'Logout'} onClick={logoutHandler}/>}
            </nav>
        </header>
    );
}

