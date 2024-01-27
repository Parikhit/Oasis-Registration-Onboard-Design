import Image from 'next/image';

import BgImage from '../../public/Frame1.svg';

const BannerBackground = () => {
    return (
        <>
            <Image
                priority
                src={BgImage}
                width={`${50}%`}
                height={`${100}vh`}
                alt='Background Image'
            />
        </>
    );
};

export default BannerBackground;
