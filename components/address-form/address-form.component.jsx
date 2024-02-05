'use client';

import Image from 'next/image';

import { useContext } from 'react';
import { FormContext } from '@/context/form.context';

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { CountryDropdown } from 'react-country-region-selector';

import Button from '@/components/button/button.component';
import LockImg from '@/public/lock_24px.svg';

const AddressForm = ({ phone, address, country, updateFields }) => {
    const { onSubmit } = useContext(FormContext);

    return (
        <>
            <header className='w-full text-3xl my-5 font-bold'>Complete Your Profile!</header>
            <p className='w-full text-lg text-slate-400 font-normal'>
                For the purpose of industry regulation, your <br /> details are required.
            </p>
            <form className='w-full mt-8' onSubmit={onSubmit}>
                <div>
                    <div className='flex flex-col my-4'>
                        <label htmlFor='phone' className='text-gray-500 font-medium'>
                            Phone number
                        </label>
                        <PhoneInput
                            name='phone'
                            defaultCountry='IN'
                            required
                            placeholder='Enter phone number'
                            value={phone}
                            onChange={(number) => updateFields({ phone: number })}
                            className='border-2 rounded-md border-blue-400 shadow p-4 mt-2'
                        />
                    </div>

                    <div className='flex flex-col my-4'>
                        <label htmlFor='address' className='text-gray-500 font-medium'>
                            Your address
                        </label>
                        <input
                            type='address'
                            name='address'
                            required
                            placeholder='Please enter address'
                            value={address}
                            onChange={(e) => updateFields({ address: e.target.value })}
                            className='border-2 rounded-md border-blue-400 shadow p-4 mt-2'
                        />
                    </div>

                    <div className='flex flex-col my-4'>
                        <label htmlFor='country' className='text-gray-500 font-medium'>
                            Country of residence
                        </label>
                        <CountryDropdown
                            type='country'
                            name='country'
                            required
                            placeholder='Please select'
                            value={country}
                            onChange={(val) => updateFields({ country: val })}
                            className='border-2 rounded-md border-blue-400 shadow p-4 mt-2'
                        />
                    </div>

                    <p>
                        <Button name='Save & Continue' />
                    </p>

                    <div className='flex justify-center mt-5'>
                        <Image
                            src={LockImg}
                            style={{ width: 'auto', height: 'auto' }}
                            alt='lock-img'
                        />
                        <p className='mx-1 text-xs  text-gray-400 '>Your Info is safely secured</p>
                    </div>
                </div>
            </form>
        </>
    );
};

export default AddressForm;
