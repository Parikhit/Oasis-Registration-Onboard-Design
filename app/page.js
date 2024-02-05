import Link from 'next/link';

import BannerBackground from '@/components/banner-bg/banner-bg.component';
import AccountCategory from '@/components/account-category/account-category.component';

export default function Home() {
    return (
        <main className='grid grid-cols-2 items-center justify-center'>
            <div className='relative top-0 left-0'>
                <BannerBackground />
            </div>
            <div className='absolute 2xl:top-20 xl:top-18 xl:right-18 lg:top-16 lg:right-16 md:top-16 right-6 sm:fixed sm:top-6 sm:right-8'>
                Already have an account?{' '}
                <Link href='/' className='text-blue-800'>
                    Sign In
                </Link>
            </div>

            <section className='w-3/5 mx-auto'>
                <AccountCategory />
            </section>
        </main>
    );
}
