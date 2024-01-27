import BannerBackground from '@/components/banner-bg/banner-bg.component';
import BackButton from '@/components/go-back-button/back-button.component';
import RegisterForm from '@/components/register-form/register-form.component';

const RegisterPage = () => {
    return (
        <main className='flex items-center justify-between'>
            <div>
                <BannerBackground />
            </div>

            <div className='w-1/2'>
                <div className='w-1/2 flex items-center justify-between absolute top-16'>
                    <div>
                        <BackButton />
                    </div>
                    <div>
                        <p className='mx-3 text-base text-slate-400 font-normal'>STEP 01/03</p>
                        <p className='text-base text-blue-800'>Personal Info.</p>
                    </div>
                </div>
                <section className='mx-auto flex flex-col items-center justify-center'>
                    <RegisterForm />
                </section>
            </div>
        </main>
    );
};

export default RegisterPage;
