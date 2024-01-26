import Image from 'next/image';

const AccountLogo = ({ image, type }) => {
    return (
        <>
            <Image priority src={image} alt={`${type} logo`} width={100} height={100} />
        </>
    );
};

export default AccountLogo;
