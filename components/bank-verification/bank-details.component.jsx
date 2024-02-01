'use client';

import Image from 'next/image';

import { useState, useContext } from 'react';
import { FormContext } from '@/context/form.context';
import Button from '@/components/button/button.component';

import LockImg from '@/public/lock_24px.svg';
import Check from '@/public/circle-check.svg';

const BankDetails = ({ bvn, updateFields }) => {
    const [isBVNValid, setIsBVNValid] = useState(false);

    const { onFinalSubmit } = useContext(FormContext);

    const handleBVNChange = (e) => {
        const inputValue = e.target.value;
        updateFields({ bvn: inputValue });

        // Check if BVN is valid (8 characters)
        setIsBVNValid(inputValue.length === 8);
    };

    return (
        <>
            <header className='w-3/5 text-3xl my-5 font-bold'>Complete Your Profile!</header>
            <p className='w-3/5 text-lg text-slate-400 font-normal'>
                For the purpose of industry regulation, your <br /> details are required.
            </p>
            <form className='w-3/5 mt-8' onSubmit={onFinalSubmit}>
                <div>
                    <div className='relative flex flex-col my-4'>
                        <label htmlFor='address' className='text-gray-500 font-medium'>
                            Bank verification number (BVN)
                        </label>

                        <input
                            type='bvn'
                            name='bvn'
                            required
                            placeholder='Please enter address'
                            minLength={8}
                            value={bvn}
                            onChange={handleBVNChange}
                            className='border-2 rounded-md border-blue-400 shadow p-4 mt-2'
                        />
                        {isBVNValid && (
                            <Image src={Check} alt='check' className='absolute top-12 right-4' />
                        )}
                    </div>
                    <p>
                        <Button name='Save & Continue' onClick={onFinalSubmit} />
                    </p>
                    <div className='flex justify-center mt-5'>
                        <Image src={LockImg} width='auto' height='auto' alt='lock-img' />
                        <p className='mx-1 text-xs  text-gray-400 '>Your Info is safely secured</p>
                    </div>
                </div>
            </form>
        </>
    );
};

export default BankDetails;
