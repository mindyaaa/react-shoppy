import React, { useState } from 'react';
import { addNewProduct } from '../api/firebase';
import { uploadeImage } from '../api/uploader';
import Button from '../components/ui/Button';

export default function NewProduct() {
    const [product, setProduct] = useState({});
    const [file, setFile] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        uploadeImage(file)
        .then((url) => {
            console.log(url);
            addNewProduct(product,url);
        })
    };
    const handleChange = (e) => {
        const {name, value, files} = e.target;
        if (name === 'file') {
            setFile(files && files[0]);
            // console.log(file[0]);
            return;
        }

        setProduct({...product,[name]:value})
    }
    
    return (
        <section>
            {file && <img src={URL.createObjectURL(file)} alt='local file' />}
            <form onSubmit={handleSubmit}>
                <input 
                type="file" 
                accept='image/*' 
                name='file' 
                required 
                onChange={handleChange} />
                
                <input 
                type="text"
                name='title'
                value={product.title ?? ''}
                required
                placeholder='제품명'
                onChange={handleChange}
                />
                
                <input 
                type="number"
                name='price'
                value={product.price ?? ''}
                placeholder='가격'
                required
                onChange={handleChange}
                />

                <input
                type='text'
                name='category'
                value={product.category ?? ''}
                placeholder='카테고리'
                required
                onChange={handleChange}
                />

                <input 
                type="text"
                name='description'
                value={product.description ?? ''}
                placeholder='제품설명'
                required
                onChange={handleChange}
                />

                <input
                type='text'
                name='options'
                value={product.options ?? ''}
                placeholder='옵션들(콤마(,)로 구분)'
                required
                onChange={handleChange}
                />

                   <Button text={'제품등록'} />
            </form>
        </section>
    );
}

