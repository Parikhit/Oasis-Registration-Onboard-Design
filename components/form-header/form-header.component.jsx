import BackButton from '../go-back-button/back-button.component';

const FormHeader = ({ currentPage, steps }) => {
    return (
        <>
            <div>
                <BackButton />
            </div>
            <div className='mr-8'>
                <p className='text-base text-slate-400 font-normal'>
                    STEP {'0' + currentPage}/{'0' + steps.length}
                </p>
                <p className='text-base text-blue-800'>Personal Info.</p>
            </div>
        </>
    );
};

export default FormHeader;
