import Image from 'next/image';

import BgImage from '../../public/Frame1.svg';

const BannerBackground = () => {
    return (
        <>
            <Image
                priority
                src={BgImage}
                alt='Background Image'
                width={`${45}%`}
                height={`${100}vh`}
            />
        </>
    );
};

export default BannerBackground;
