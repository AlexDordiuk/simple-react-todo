import React from 'react';

const ButtonAdd = ({children, onClickMethod}) => {
    return (
        <button type='button'
                className='border border-amber-700 p-1 rounded w-[110px]
                           hover:bg-amber-700 hover:text-white'
                onClick={onClickMethod}
        >
            {children}
        </button>
    );
};

export default ButtonAdd;