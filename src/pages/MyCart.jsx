import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import {BsFillPlusCircleFill} from 'react-icons/bs';
import {FaEquals} from 'react-icons/fa';
import Button from '../components/ui/Button';

const SHIPPING = 3000;

export default function MyCart() {

    const {uid} = useAuthContext();
    const {isLoading, data : products} = useQuery(['carts'], () => getCart(uid));

    if(isLoading) return <p>...Loading</p>;

    const hasProducts = products && products.length > 0;
    const totalPrice = products && 
    products.reduce((prev, cur) =>
    prev + parseInt(cur.price) * cur.quantity, 0);

    return (
        <section className='p-8 flex flex-col'>
            <h1 className='text-2xl text-center font-bold pb-4 border-gray-300'>My Cart</h1>
            {!hasProducts && <p>장바구니에 상품이 없습니다!</p>}
            {hasProducts && (<>
            <ul className='border-b border-gray-300 mb-3 p-4 px-8'>
                {products && products.map((product) => (
                    <CartItem uid={uid} key={product.id} product={product} />
                ))}
            </ul>
            <div className='flex justify-between items-center px-2 md:px-8 lg:px-16 mb-6'>
                <PriceCard text="상품총액" price={totalPrice} />
                <BsFillPlusCircleFill className='shrink-0'/>
                <PriceCard text="배송비" price={SHIPPING} />
                <FaEquals className='shrink-0'/>
                <PriceCard text="총금액" price={totalPrice + SHIPPING} />
            </div>
            <Button text='주문하기' />
            </>)}
        </section>
    );
}

