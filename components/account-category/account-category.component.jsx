import Image from 'next/image';
import Link from 'next/link';

import AccountLogo from '../account-logo/account-logo.component';
import IndividualLogo from '@/public/logo-Image/IndividualUser.svg';
import BusinessLogo from '@/public/logo-Image/BusinessUser.svg';

import ArrowRight from '@/public/arrow-right.svg';

const AccountCategory = () => {
    return (
        <>
            <header className='text-3xl my-5 font-bold'>Join Us!</header>
            <p className='text-lg text-slate-400 font-normal'>
                To begin this journey, tell us what type of account you’d be opening.
            </p>
            <Link
                href='/register'
                className='flex justify-around items-center bg-gray-100 my-6 border-2 rounded-md border-blue-400 shadow'
            >
                <AccountLogo image={IndividualLogo} type='user' />
                <div>
                    <h1 className='text-base font-medium'>Individual</h1>
                    <p className='text-sm font-normal text-slate-400'>
                        Personal account to manage all your <br />
                        activities.
                    </p>
                </div>
                <div className='mx-10'>
                    <Image priority src={ArrowRight} alt='arrow-right' />
                </div>
            </Link>
            <Link
                href='/'
                className='flex items-center px-1 bg-gray-100 my-6 border-2 rounded-md border-blue-400 shadow'
            >
                <AccountLogo image={BusinessLogo} type='business' />
                <div className='px-1'>
                    <h1 className='text-base font-medium mx-10'>Business</h1>
                    <p className='text-sm font-normal text-slate-400 mx-10'>
                        Own or belong to a company, this is for you.
                    </p>
                </div>
            </Link>
        </>
    );
};

export default AccountCategory;
