import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface CreateAccountIntroProps {
  onSignUp: () => void;
  onLogIn: () => void;
}

export default function CreateAccountIntro({ onSignUp, onLogIn }: CreateAccountIntroProps) {
  return (
    <View className="flex-1 bg-black px-6">
      {/* Back Arrow */}
      <View className="pt-12 pb-6">
        <Text className="text-white text-lg">
          <Ionicons name="arrow-back" size={24} color="white" />
        </Text>
      </View>

      {/* Illustration Section */}
      <View className="flex-1 items-center justify-center">
        {/* Card Stack Illustration */}
        <View className="relative mb-8">
          {/* Background cards */}
          <View className="w-64 h-40 bg-gray-800 rounded-2xl absolute transform rotate-6 top-4 left-2" />
          <View className="w-64 h-40 bg-gray-700 rounded-2xl absolute transform rotate-3 top-2 left-1" />

          {/* Main card */}
          <View className="w-64 h-40 bg-white rounded-2xl relative">
            {/* Card details */}
            <View className="p-4">
              <View className="flex-row justify-between items-start mb-8">
                <View className="w-8 h-8 bg-blue-500 rounded-full" />
                <Text className="text-gray-400 text-xs">****</Text>
              </View>

              {/* User icon and login fields */}
              <View className="absolute bottom-4 left-4 right-4">
                <View className="w-8 h-8 bg-gray-300 rounded-full mb-2" />
                <View className="flex-row space-x-1">
                  <View className="flex-1 h-1 bg-blue-500 rounded" />
                  <View className="flex-1 h-1 bg-blue-500 rounded" />
                  <View className="flex-1 h-1 bg-blue-500 rounded" />
                  <View className="flex-1 h-1 bg-gray-300 rounded" />
                </View>
              </View>
            </View>
          </View>

          {/* Floating coins */}
          <View className="absolute -left-8 top-8 w-8 h-8 bg-yellow-500 rounded-full opacity-80" />
          <View className="absolute -right-4 -top-2 w-6 h-6 bg-yellow-400 rounded-full opacity-70" />
          <View className="absolute -left-4 -bottom-4 w-4 h-4 bg-yellow-600 rounded-full opacity-60" />
        </View>
      </View>

      {/* Content Section */}
      <View className="pb-12">
        {/* Title */}
        <Text className="text-white text-3xl font-bold text-center mb-4">
          Create your{'\n'}Coinpay account
        </Text>

        {/* Description */}
        <Text className="text-gray-400 text-center mb-8 leading-6">
          Coinpay is a powerful tool that allows you to easily{'\n'}
          send, receive, and track all your transactions.
        </Text>

        {/* Buttons */}
        <View className= "gap-y-4">
          {/* Sign up button */}
          <TouchableOpacity
            onPress={onSignUp}
            className="bg-blue-500 rounded-full py-4 px-8"
          >
            <Text className="text-white text-lg font-semibold text-center">
              Sign up
            </Text>
          </TouchableOpacity>

          {/* Log in button */}
          <TouchableOpacity
            onPress={onLogIn}
            className="border border-gray-600 rounded-full py-4 px-8"
          >
            <Text className="text-white text-lg font-semibold text-center">
              Log in
            </Text>
          </TouchableOpacity>
        </View>

        {/* Terms */}
        <Text className="text-gray-500 text-sm text-center mt-6 mb-8
        ">
          By continuing you accept our{' '}
          <Text className="text-blue-500 underline">Terms of Service</Text>
          {' '}and{' '}
          <Text className="text-blue-500 underline">Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
}