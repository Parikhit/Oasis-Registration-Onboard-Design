'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import BackBtn from '@/public/back-arrow/arrow_back.svg';

const BackButton = () => {
    const router = useRouter();
    return (
        <button
            type='button'
            className='flex items-center justify-center text-base text-slate-400 font-medium'
            onClick={() => router.back()}
        >
            <Image src={BackBtn} alt='go-back' />
            <p className='px-2 '> Back</p>
        </button>
    );
};

export default BackButton;
