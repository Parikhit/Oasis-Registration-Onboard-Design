import Link from 'next/link';

import BannerBackground from '@/components/banner-bg/banner-bg.component';
import AccountType from '@/components/account-category/account-category.component';

export default function Home() {
    return (
        <main className='grid grid-cols-2 items-center justify-center'>
            <div className='top-0 left-0'>
                <BannerBackground />
            </div>
            <p className='absolute top-20 right-20'>
                Already have an account?
                <Link href='/' className='text-blue-800'>
                    Sign In
                </Link>
            </p>
            <section className='w-3/4 m-auto'>
                <AccountType />
            </section>
        </main>
    );
}
