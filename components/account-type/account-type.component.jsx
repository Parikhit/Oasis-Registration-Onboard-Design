import Image from 'next/image';
import Link from 'next/link';

import AccountLogo from '../account-logo/account-logo.component';

import IndividualLogo from '@/public/logo-Image/IndividualUser.svg';
import BusinessLogo from '@/public/logo-Image/BusinessUser.svg';

import ArrowRight from '@/public/arrow-right.svg';

const AccountType = () => {
    return (
        <>
            <Link
                href='/'
                className='flex justify-around items-center bg-gray-100 my-6 border-2 rounded-md'
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
                className='flex justify-center items-center bg-gray-100 my-6 border-2 rounded-md'
            >
                <AccountLogo image={BusinessLogo} type='business' />
                <div>
                    <h1>Business</h1>
                    <p>Own or belong to a company, this is for you.</p>
                </div>
            </Link>
        </>
    );
};

export default AccountType;
