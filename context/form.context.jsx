'use client';

import { createContext, useState } from 'react';
import { useRouter } from 'next/navigation';

import useMultiStepForm from '@/hooks/useMultiStepForm';

import RegisterForm from '@/components/register-form/register-form.component';
import AddressForm from '@/components/address-form/address-form.component';
import BankDetails from '@/components/bank-verification/bank-details.component';

export const FormContext = createContext();

const INITIAL_DATA = {
    fullName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    country: '',
    bvn: '',
};

export const FormProvider = ({ children }) => {
    const [data, setData] = useState(INITIAL_DATA);

    const router = useRouter();

    const onSubmit = () => {
        e.preventDefault();
        nextStep();
    };

    const onFinalSubmit = () => {
        e.preventDefault();
        setTimeout(() => {
            router.push('/');
        }, 4000);
    };

    const updateFields = (fields) =>
        setData((prev) => {
            return { ...prev, ...fields };
        });

    const { step, currentStepIndex, steps, nextStep, previousStep } = useMultiStepForm([
        <RegisterForm key={1} {...data} updateFields={updateFields} />,
        <AddressForm key={2} {...data} updateFields={updateFields} />,
        <BankDetails key={3} {...data} updateFields={updateFields} />,
    ]);

    const value = {
        step,
        currentStepIndex,
        steps,
        nextStep,
        previousStep,
        onSubmit,
        onFinalSubmit,
    };

    return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
