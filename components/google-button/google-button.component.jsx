import Image from 'next/image';

import GoogleIcon from '@/public/google.svg';

const GoogleBtn = ({ name }) => {
    return (
        <button
            type='button'
            className='w-full border-1 rounded-md bg-white text-black shadow-md p-5 mt-4 font-medium'
        >
            <p className='flex'>
                <Image src={GoogleIcon} alt='google-icon' className='mx-12' />
                {name}
            </p>
        </button>
    );
};

export default GoogleBtn;
