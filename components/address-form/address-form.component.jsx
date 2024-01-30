import Button from '@/components/button/button.component';

const AddressForm = () => {
    return (
        <>
            <header className='w-3/5 text-3xl my-5 font-bold'>Complete Your Profile!</header>
            <p className='w-3/5 text-lg text-slate-400 font-normal'>
                For the purpose of industry regulation, your <br /> details are required.
            </p>
            <form className='w-3/5 mt-8' action=''>
                <div>
                    <p className='flex flex-col my-4'>
                        <label htmlFor='number' className='text-gray-500 font-medium'>
                            Phone number
                        </label>
                        <input
                            type='number'
                            name='phone'
                            required
                            placeholder='090912345567'
                            value={phone}
                            onChange={(e) => updateFields({ fullName: e.target.value })}
                            className='border-2 rounded-md border-blue-400 shadow p-4 mt-2'
                        />
                    </p>

                    <p className='flex flex-col my-4'>
                        <label htmlFor='address' className='text-gray-500 font-medium'>
                            Your address
                        </label>
                        <input
                            type='address'
                            name='address'
                            required
                            placeholder='Please enter address'
                            value={address}
                            onChange={(e) => updateFields({ email: e.target.value })}
                            className='border-2 rounded-md border-blue-400 shadow p-4 mt-2'
                        />
                    </p>

                    <p className='flex flex-col my-4'>
                        <label htmlFor='country' className='text-gray-500 font-medium'>
                            Country of residence
                        </label>
                        <input
                            type='country'
                            name='country'
                            required
                            placeholder='Please select'
                            value={country}
                            onChange={(e) => updateFields({ password: e.target.value })}
                            className='border-2 rounded-md border-blue-400 shadow p-4 mt-2'
                        />
                    </p>

                    <p>
                        <Button name='Save & Continue' />
                    </p>
                </div>
            </form>
        </>
    );
};

export default AddressForm;
