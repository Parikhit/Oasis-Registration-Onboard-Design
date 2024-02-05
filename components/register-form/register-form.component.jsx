'use client';

import { useContext } from 'react';
import { FormContext } from '@/context/form.context';

import Button from '@/components/button/button.component';
import GoogleBtn from '@/components/google-button/google-button.component';

const RegisterForm = ({ fullName, email, password, updateFields }) => {
    const { onSubmit } = useContext(FormContext);

    return (
        <>
            <header className='w-3/4 2xl:text-3xl my-5 font-bold xl:mx-6 xl:text-3xl lg:text-2xl lg:w-2/5 lg:mx-6 md:text-2xl xl:mt-4'>
                Register Individual Account!
            </header>
            <p className='2xl:w-3/5 2xl:text-lg text-slate-400 font-normal xl:w-2/5'>
                For the purpose of industry regulation, your <br /> details are required.
            </p>
            <form className='w-full mt-6' onSubmit={onSubmit}>
                <div>
                    <p className='flex flex-col my-4'>
                        <label htmlFor='name' className='text-gray-500 font-medium'>
                            Your fullname*
                        </label>
                        <input
                            type='text'
                            name='name'
                            required
                            placeholder='Invictus Innocent'
                            value={fullName}
                            onChange={(e) => updateFields({ fullName: e.target.value })}
                            className='border-2 rounded-md border-blue-400 shadow p-4 mt-2'
                        />
                    </p>

                    <p className='flex flex-col my-4'>
                        <label htmlFor='email' className='text-gray-500 font-medium'>
                            Email address*
                        </label>
                        <input
                            type='email'
                            name='email'
                            required
                            placeholder='Enter email address'
                            value={email}
                            onChange={(e) => updateFields({ email: e.target.value })}
                            className='border-2 rounded-md border-blue-400 shadow p-4 mt-2'
                        />
                    </p>

                    <p className='flex flex-col my-4'>
                        <label htmlFor='password' className='text-gray-500 font-medium'>
                            Create password*
                        </label>
                        <input
                            type='password'
                            name='password'
                            required
                            minLength={8}
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => updateFields({ password: e.target.value })}
                            className='border-2 rounded-md border-blue-400 shadow p-4 mt-2'
                        />
                    </p>

                    <p className='flex items-center'>
                        <input
                            type='checkbox'
                            name='terms'
                            required
                            className='border-2 accent-blue-600'
                        />
                        <label htmlFor='terms' className='mx-5 text-gray-500 font-medium'>
                            I agree to terms & conditions
                        </label>
                    </p>

                    <p>
                        <Button name='Register Account' />
                    </p>

                    <p className='mt-5 w-full text-xs text-center text-gray-500'>Or</p>

                    <p>
                        <GoogleBtn name='Register with Google' />
                    </p>
                </div>
            </form>
        </>
    );
};

export default RegisterForm;
