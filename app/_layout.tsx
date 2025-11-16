import { Stack } from "expo-router";
import { useState } from "react";
import { RegistrationFlow } from "../components/auth";
import { OnboardingFlow } from "../components/onboarding";
import SplashScreenComponent from "../components/SplashScreen";
import "../styles/global.css";

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [showRegistration, setShowRegistration] = useState(true);

  if (isLoading) {
    return (
      <SplashScreenComponent
        onFinish={() => setIsLoading(false)}
        duration={3000}
      />
    );
  }

  if (showOnboarding) {
    return (
      <OnboardingFlow
        onComplete={() => setShowOnboarding(false)}
      />
    );
  }

  if (showRegistration) {
    return (
      <RegistrationFlow
        onComplete={() => setShowRegistration(false)}
      />
    );
  }

  return <Stack />;
}
