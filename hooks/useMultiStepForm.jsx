'use client';

import { useState } from 'react';

const useMultiStepForm = (steps) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const nextStep = () => {
        setCurrentStepIndex((current) => {
            if (current >= steps.length - 1) return current;

            return current + 1;
        });
    };

    const previousStep = () => {
        setCurrentStepIndex((current) => {
            if (current <= 0) return current;

            return current - 1;
        });
    };

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        previousStep,
        nextStep,
        steps,
    };
};

export default useMultiStepForm;
