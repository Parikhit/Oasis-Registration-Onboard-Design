import React from 'react';

const Button = ({ name }) => {
    return (
        <button className='w-full border-1 rounded-md bg-blue-600 shadow p-5 mt-4 text-white font-medium'>
            {name}
        </button>
    );
};

export default Button;
