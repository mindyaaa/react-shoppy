import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/firebase';
import { useParams } from 'react-router-dom';
import Button from '../components/ui/Button';


export default function ProductDetail() {

    const {id} = useParams();

    const {data:products} = useQuery(
        ['products'],
        getProducts,
    )

    // const selectedItem = products.filter((product) => product.id === `${id}`)[0];
    const {image, price, description, title, category, options} = products.filter((product) => product.id === `${id}`)[0];
    const [selected, setSelected] = useState(options && options[0]);

    const handleSelect = (e) => {
        setSelected(e.target.value);
    }

    const handleClick = (e) => {
        console.log('장바구니에 추가');
    }

    return (
        <>
            {/* <Button
            onClick={() => console.log(options)}
            text={id}
             /> */}
            
            <p className='mx-12 mt-4 text-gray-700'>{category}</p>
            
            <section className='flex flex-col md:flex-row p-4'>
                <img 
                className='w-full px-4 basis-7/12'
                src={image} alt={title} />

                <div className='w-full basis-5/12 flex flex-col p-4'>
                    <h2 className='text-3xl font-bold py-2'>{title}</h2>
                    <h3 className='text-2xl font-bold py-2 border-b border-gray-400'>₩{price}</h3>
                    <p className='py-4 text-lg'>{description}</p>

                    <div className='flex items-center'>
                        <label 
                        className='text-brand font-bold'
                        htmlFor='select'>옵션:</label>

                        <select 
                        className='p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none'
                        id='select'
                        value={selected}
                        onChange={handleSelect}
                        >
                        {options && options.map((option, index) => <option key={index}>{option}</option>)}
                        </select>
                    </div>

                    <Button 
                    onClick={handleClick}
                    text={'장바구니 추가'} />
                </div>
            </section>
        </>
    );
}

