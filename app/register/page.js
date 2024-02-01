'use client';

import { useContext } from 'react';
import { FormContext } from '@/context/form.context';

import BannerBackground from '@/components/banner-bg/banner-bg.component';
import FormHeader from '@/components/form-header/form-header.component';

const FormPages = () => {
    const { step, steps, currentStepIndex } = useContext(FormContext);
    const currentPage = (index) => index + 1;

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
