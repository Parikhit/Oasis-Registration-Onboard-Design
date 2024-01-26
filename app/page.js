import Link from 'next/link';

import BannerBackground from '@/components/banner-bg/banner-bg.component';
import AccountType from '@/components/account-type/account-type.component';

export default function Home() {
    return (
        <main className='grid grid-cols-2 items-center justify-center'>
            <div className='top-0 left-0'>
                <BannerBackground />
            </div>
            <p className='absolute top-20 right-20'>
                Already have an account?{' '}
                <Link href='/' className='text-blue-800'>
                    Sign In
                </Link>
            </p>
            <section className='w-1/2'>
                <header className='text-2xl font-bold'>Join Us!</header>
                <p className='text-lg text-slate-400 font-normal'>
                    To begin this journey, tell us what type of <br />
                    account you’d be opening.
                </p>
                <AccountType />
            </section>
        </main>
    );
}
