import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { OnboardingSlide } from './data';

const { width } = Dimensions.get('window');

interface OnboardingScreenProps {
  slide: OnboardingSlide;
  currentIndex: number;
  totalSlides: number;
  onDotPress: (index: number) => void;
}

export default function OnboardingScreen({ slide, currentIndex, totalSlides, onDotPress }: OnboardingScreenProps) {
  return (
    <View
      className="flex-1 bg-black"
      style={{ width }}
    >
      {/* Upper Div - Image Section */}
      <View className="flex-[6] items-center justify-center">
        <Image
          source={slide.image}
          style={{
            width: width * 0.8,
            height: 260,
            resizeMode: 'contain',
          }}
        />
      </View>

      {/* Lower Div - Pagination and Title */}
      <View className=" flex-[4] px-6 pb-32 ">
        {/* Pagination Dots */}
        <View className="flex-row justify-center items-center mb-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onDotPress(index)}
              className={`w-10 h-3 rounded-full mx-1 ${index === currentIndex ? 'bg-blue-500 w-4' : 'bg-white'
                }`}
            />
          ))}
        </View>

        {/* Title */}
        <Text className="text-white text-6xl font-semibold text-center leading-[60px]">
          {slide.title}
        </Text>
      </View>
    </View>
  );
}