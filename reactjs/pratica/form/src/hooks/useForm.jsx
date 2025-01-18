import { useState } from "react";


export function useForm(steps) {
    const [ currentStep, setCurrentStep ] = useState(0);

    const changeStep = (step, event) => {
        if (event) event.preventDefault();

        if (step < 0 || step >= steps.length) return;

        setCurrentStep(step)
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isFirstStep: currentStep === 0 ? true : false,
        isLastStep: currentStep === 2 ? true : false,
        isCompleted: currentStep === 3
    }
}