import React, { useRef, useState } from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { onboardingData } from './data';
import OnboardingScreen from './OnboardingScreen';

const { width } = Dimensions.get('window');

interface OnboardingFlowProps {
  onComplete: () => void;
}

export default function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(slideIndex);
  };

  const goToNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1;
      scrollViewRef.current?.scrollTo({
        x: nextIndex * width,
        animated: true,
      });
      setCurrentIndex(nextIndex);
    } else {
      onComplete();
    }
  };

  const goToSlide = (index: number) => {
    scrollViewRef.current?.scrollTo({
      x: index * width,
      animated: true,
    });
    setCurrentIndex(index);
  };

  return (
    <View className="flex-1 bg-black">
      {/* Main Content */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        className="flex-1"
      >
        {onboardingData.map((slide) => (
          <OnboardingScreen
            key={slide.id}
            slide={slide}
            currentIndex={currentIndex}
            totalSlides={onboardingData.length}
            onDotPress={goToSlide}
          />
        ))}
      </ScrollView>

      {/* Bottom Section */}
      <View className="absolute bottom-0 left-0 right-0 px-8 pb-16">

        {/* Navigation Button */}
        <TouchableOpacity
          onPress={goToNext}
          className="bg-blue-500 rounded-full py-4 px-8 mx-4"
        >
          <Text className="text-white text-lg font-semibold text-center">
            {currentIndex === onboardingData.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}