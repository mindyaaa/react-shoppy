import React from 'react';

export default function Button({text, onClick, disabled}) {
    return (
        <button 
        disabled={disabled}
        className='bg-brand py-2 px-4 rounded-sm hover:brightness-110 text-white' onClick={onClick}>
            {text}
        </button>
    );
}

