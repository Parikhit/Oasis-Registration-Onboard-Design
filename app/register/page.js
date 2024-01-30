'use client';

import { useState } from 'react';
import useMultiStepForm from '@/hooks/useMultiStepForm';

import BannerBackground from '@/components/banner-bg/banner-bg.component';
import FormHeader from '@/components/form-header/form-header.component';
import RegisterForm from '@/components/register-form/register-form.component';
import AddressForm from '@/components/address-form/address-form.component';
import BankDetails from '@/components/bank-verification/bank-details.component';

const INITIAL_DATA = {
    fullName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    country: '',
};

const FormPages = () => {
    const [data, setData] = useState(INITIAL_DATA);

    const currentPage = (index) => index + 1;

    const updateFields = (fields) =>
        setData((prev) => {
            return { ...prev, ...fields };
        });

    const { step, currentStepIndex, steps } = useMultiStepForm([
        <RegisterForm key={1} {...data} updateFields={updateFields} />,
        <AddressForm key={2} {...data} updateFields={updateFields} />,
        <BankDetails key={3} {...data} updateFields={updateFields} />,
    ]);

    return (
        <main className='flex items-center justify-between'>
            <div>
                <BannerBackground />
            </div>

            <div className='w-1/2'>
                <header className='w-1/2 flex items-center justify-between absolute top-16'>
                    <FormHeader currentPage={currentPage(currentStepIndex)} steps={steps} />
                </header>
                <section className='mx-auto flex flex-col items-center justify-center'>
                    {step}
                </section>
            </div>
        </main>
    );
};

export default FormPages;
