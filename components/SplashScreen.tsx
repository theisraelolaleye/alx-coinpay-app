import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

interface SplashScreenComponentProps {
  onFinish?: () => void;
  duration?: number;
}

export default function SplashScreenComponent({
  onFinish,
  duration = 1000
}: SplashScreenComponentProps) {
  useEffect(() => {
    // Keep the splash screen visible while we fetch resources
    SplashScreen.preventAutoHideAsync();

    const timer = setTimeout(() => {
      SplashScreen.hideAsync();
      onFinish?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onFinish]);

  return (
    <View className="flex-1 items-center justify-center">
      <Image
        source={require('../assets/splashscreen-bg.png')}
        className="absolute inset-0"
        style={{
          width: width,
          height: height,
          resizeMode: 'cover'
        }}
      />
      {/* You can add additional content here like logo, loading indicator, etc. */}
      <Image
        source={require('../assets/logo.png')}
        className="w-40 h-40"
        style={{ resizeMode: "contain" }}
      />
      <Text className=" text-white text-4xl font-bold">CoinPay</Text>

    </View>
  );
}