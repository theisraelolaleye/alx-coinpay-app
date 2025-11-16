import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
interface PhoneInputScreenProps {
  onContinue: (phone: string, password: string) => void;
  onBack: () => void;
}

export default function PhoneInputScreen({ onContinue, onBack }: PhoneInputScreenProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleContinue = () => {
    if (phoneNumber && password) {
      onContinue(phoneNumber, password);
    }
  };

  return (
    <View className="flex-1 bg-black px-6">
      {/* Header */}
      <View className="pt-12 pb-8">

          <Text className="text-white text-lg">
            <Ionicons name="arrow-back" size={24} color="white" />
          </Text>


        <Text className="text-white text-3xl font-bold mb-2">
          Create an Account
        </Text>
        <Text className="text-gray-400 text-base">
          Enter your mobile number to verify your account
        </Text>
      </View>

      {/* Form */}
      <View className="flex-1">
        {/* Phone Number */}
        <View className="mb-6">
          <Text className="text-white text-lg mb-3">Phone</Text>
          <View className="flex-row">
            {/* Country Code */}
            <View className="bg-gray-800 rounded-l-xl px-4 py-4 flex-row items-center">
              <View className="w-6 h-4 bg-green-500 rounded mr-2" />
              <Text className="text-white">+880</Text>
            </View>

            {/* Phone Input */}
            <TextInput
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="Mobile number"
              placeholderTextColor="#666"
              className="flex-1 bg-gray-800 rounded-r-xl px-4 py-4 text-white"
              keyboardType="phone-pad"
            />
          </View>
        </View>

        {/* Password */}
        <View className="mb-8">
          <Text className="text-white text-lg mb-3">Password</Text>
          <View className="bg-gray-800 rounded-xl flex-row items-center px-4">
            <View className="mr-3">
              <Text className="text-gray-400 text-lg">🔒</Text>
            </View>

            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter password"
              placeholderTextColor="#666"
              className="flex-1 py-4 text-white"
              secureTextEntry={!showPassword}
            />

            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="ml-3"
            >
              <Text className="text-gray-400 text-lg">
                {showPassword ? '🙈' : '👁️'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Sign Up Button */}
      <View className="pb-12">
        <TouchableOpacity
          onPress={handleContinue}
          className={`rounded-full py-4 px-8 ${phoneNumber && password ? 'bg-blue-500' : 'bg-gray-700'
            }`}
          disabled={!phoneNumber || !password}
        >
          <Text className={`text-lg font-semibold text-center ${phoneNumber && password ? 'text-white' : 'text-gray-400'
            }`}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}