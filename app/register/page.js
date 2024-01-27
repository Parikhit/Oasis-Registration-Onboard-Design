import BannerBackground from '@/components/banner-bg/banner-bg.component';
import BackButton from '@/components/go-back-button/back-button.component';

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
                    <header className='w-3/5 text-3xl my-5 font-bold'>
                        Register Individual Account!
                    </header>
                    <p className='w-3/5 text-lg text-slate-400 font-normal'>
                        For the purpose of industry regulation, your <br /> details are required.
                    </p>
                    <form className='w-3/5 mt-8' action=''>
                        <div>
                            <p className='flex flex-col my-4'>
                                <label htmlFor='name'>Your fullname*</label>
                                <input
                                    type='text'
                                    name='name'
                                    required
                                    placeholder='Invictus Innocent'
                                    className='border-2 rounded-md border-blue-400 shadow p-4 mt-2'
                                />
                            </p>

                            <p className='flex flex-col my-4'>
                                <label htmlFor='email'>Email address*</label>
                                <input
                                    type='email'
                                    name='email'
                                    required
                                    placeholder='Enter email address'
                                    className='border-2 rounded-md border-blue-400 shadow p-4 mt-2'
                                />
                            </p>

                            <p className='flex flex-col my-4'>
                                <label htmlFor='password'>Create password*</label>
                                <input
                                    type='password'
                                    name='password'
                                    minlength='8'
                                    required
                                    placeholder='Enter password'
                                    className='border-2 rounded-md border-blue-400 shadow p-4 mt-2'
                                />
                            </p>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
};

export default RegisterPage;
