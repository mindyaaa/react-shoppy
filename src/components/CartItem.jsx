import React from 'react';
import {AiOutlineMinusSquare,AiOutlinePlusSquare } from 'react-icons/ai';
import {RiDeleteBinFill} from 'react-icons/ri';
import { addOnUpdateToCart, removeFromCart } from '../api/firebase';

const ICON_CLASS = 'transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1'

export default function CartItem({uid, product, product : {
    id, image, title, option, quantity, price
}}) {

    const handleMinus = () => {
        if (quantity < 2) return;
        addOnUpdateToCart(uid, {...product, quantity : quantity-1});
    };
    const handlePlus = () => addOnUpdateToCart(uid, {...product, quantity : quantity+1});
    
    const handleDelete = () => removeFromCart(uid, id);

    return (
        <li className='flex justify-between mx-2 items-center p-2'>
            <img className='w-24 md:w-48 rounded-lg' src={image} alt={title} />
            <div className='flex-1 flex justify-between ml-4'>
                <div className='basis-3/5'>
                    <p className='text-lg'>{title}</p>
                    <p className='text-xl text-bold text-brand'>{option}</p>
                    <p>₩{price}</p>
                </div>

                <div className='text-2xl flex items-center'>
                    <AiOutlineMinusSquare 
                    className={ICON_CLASS} 
                    onClick={handleMinus} />
                    <span>{quantity}</span>
                    <AiOutlinePlusSquare 
                    className={ICON_CLASS}
                    onClick={handlePlus} />
                    <RiDeleteBinFill 
                    className={ICON_CLASS}
                    onClick={handleDelete} />
                </div>
            </div>
        </li>
    );
}

