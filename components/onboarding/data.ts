import { ImageSourcePropType } from 'react-native';

export interface OnboardingSlide {
  id: number;
  title: string;
  image: ImageSourcePropType;
}

export const onboardingData: OnboardingSlide[] = [
  {
    id: 1,
    title: "Trusted by millions of people, part of one part",
    image: require("../../assets/onboard-trust.png"),
  },
  {
    id: 2,
    title: "Spend money abroad, and track your expense",
    image: require("../../assets/onboard-spend.png"),
  },
  {
    id: 3,
    title: "Receive Money From Anywhere In The World",
    image: require("../../assets/onboard-receive.png"),
  }
];