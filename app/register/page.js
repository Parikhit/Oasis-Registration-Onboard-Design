'use client';

import { useContext } from 'react';
import { FormContext } from '@/context/form.context';

import BannerBackground from '@/components/banner-bg/banner-bg.component';
import FormHeader from '@/components/form-header/form-header.component';

const FormPages = () => {
    const { step, steps, currentStepIndex } = useContext(FormContext);
    const currentPage = (index) => index + 1;

    return (
        <main className='grid gap-10 grid-cols-2 items-center justify-center'>
            <div className='relative top-0 left-0'>
                <BannerBackground />
            </div>

            <div className='w-3/5'>
                <header className='w-1/2 flex items-center justify-between absolute top-16'>
                    <FormHeader currentPage={currentPage(currentStepIndex)} steps={steps} />
                </header>
                <section className='flex flex-col items-center justify-center 2xl:mt-10 lg:mt-34 md:mt-48 sm:mt-68'>
                    {step}
                </section>
            </div>
        </main>
    );
};

export default FormPages;
