import React, { useState } from 'react';
import CreateAccountIntro from './CreateAccountIntro';
import OTPConfirmationScreen from './OTPConfirmationScreen';
import PhoneInputScreen from './PhoneInputScreen';
import PhoneVerificationModal from './PhoneVerificationModal';

export type RegistrationStep = 'intro' | 'phone-input' | 'otp-confirmation' | 'completed';

interface RegistrationFlowProps {
  onComplete: () => void;
}

export default function RegistrationFlow({ onComplete }: RegistrationFlowProps) {
  const [currentStep, setCurrentStep] = useState<RegistrationStep>('intro');
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignUp = () => {
    setCurrentStep('phone-input');
  };

  const handleLogIn = () => {
    // Handle login flow - could navigate to login screen
    console.log('Navigate to login');
  };

  const handlePhoneSubmit = (phone: string, pwd: string) => {
    setPhoneNumber(phone);
    // Store password for later use
    console.log('Password stored:', pwd);
    setShowVerificationModal(true);
  };

  const handlePhoneVerificationConfirm = () => {
    setShowVerificationModal(false);
    setCurrentStep('otp-confirmation');
    // Here you would typically send the SMS code
  };

  const handlePhoneVerificationEdit = () => {
    setShowVerificationModal(false);
    // Stay on phone input screen for editing
  };

  const handleOTPVerify = (code: string) => {
    console.log('Verifying OTP:', code);
    // Here you would verify the OTP code
    // For now, just complete the registration
    setCurrentStep('completed');
    onComplete();
  };

  const handleOTPResend = () => {
    console.log('Resending OTP');
    // Here you would resend the OTP code
  };

  const handleBack = () => {
    switch (currentStep) {
      case 'phone-input':
        setCurrentStep('intro');
        break;
      case 'otp-confirmation':
        setCurrentStep('phone-input');
        break;
      default:
        break;
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'intro':
        return (
          <CreateAccountIntro
            onSignUp={handleSignUp}
            onLogIn={handleLogIn}
          />
        );

      case 'phone-input':
        return (
          <PhoneInputScreen
            onContinue={handlePhoneSubmit}
            onBack={handleBack}
          />
        );

      case 'otp-confirmation':
        return (
          <OTPConfirmationScreen
            phoneNumber={phoneNumber}
            onVerify={handleOTPVerify}
            onResend={handleOTPResend}
            onBack={handleBack}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      {renderCurrentStep()}

      <PhoneVerificationModal
        isVisible={showVerificationModal}
        phoneNumber={phoneNumber}
        onConfirm={handlePhoneVerificationConfirm}
        onEdit={handlePhoneVerificationEdit}
        onClose={() => setShowVerificationModal(false)}
      />
    </>
  );
}