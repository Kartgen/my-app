import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Personaldetails from './PersonalDetails';
import EducationDetails from './Education';
import ExperienceDetails from './Experience';
import Objextive from './Objective';
import Navigationbar from './Navbar';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const steps = ['Personal Details', 'Eduation', 'Experience'];

export default function StepperComponent() {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  // const handleNext = () => {
  //   let newSkipped = skipped;
  //   if (isStepSkipped(activeStep)) {
  //     newSkipped = new Set(newSkipped.values());
  //     newSkipped.delete(activeStep);
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped(newSkipped);
  // };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const handleNext = (e) => {
    e.preventDefault(); 
    handleFormSubmit(e);
    if (activeStep === steps.length - 1) {
      navigate('/templete'); // Replace with your actual route
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.delete(activeStep);
        return newSkipped;
      });
    }
  };
  
  
  return (
    <> 
    <header> <Navigationbar/></header>
    <Box sx={{ width: '100%' }} justifyContent="center" padding={5}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      
        <React.Fragment>
          {activeStep === 0 && <Personaldetails />}
          {activeStep === 1 && <EducationDetails />}
          {activeStep === 2 && <ExperienceDetails />}
          {activeStep === 3 && <Objextive/>}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
            variant="contained"
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ width: 200, padding: 1, margin: 2 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}

            <Button variant="contained" onClick={handleNext} sx={{ width: 200, padding: 1, margin: 2 }}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
    </Box></>
   
  );
}
