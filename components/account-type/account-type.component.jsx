import AccountCategory from '../account-category/account-category.component';

const AccountType = () => {
    return (
        <>
            <header className='text-3xl my-5 font-bold'>Join Us!</header>
            <p className='text-lg text-slate-400 font-normal'>
                To begin this journey, tell us what type of <br />
                account you’d be opening.
            </p>
            <AccountCategory />
        </>
    );
};

export default AccountType;
