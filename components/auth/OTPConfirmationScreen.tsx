import React, { useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface OTPConfirmationScreenProps {
  phoneNumber: string;
  onVerify: (code: string) => void;
  onResend: () => void;
  onBack: () => void;
}

export default function OTPConfirmationScreen({
  phoneNumber,
  onVerify,
  onResend,
  onBack
}: OTPConfirmationScreenProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<TextInput[]>([]);

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto-focus next input
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-verify when all digits are entered
    if (newOtp.every(digit => digit !== '') && text) {
      onVerify(newOtp.join(''));
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const isComplete = otp.every(digit => digit !== '');
  const otpCode = otp.join('');

  return (
    <View className="flex-1 bg-black px-6">
      {/* Header */}
      <View className="pt-12 pb-8">

          <Text className="text-white text-lg">
            <Ionicons name="arrow-back" size={24} color="white" />
          </Text>


        <Text className="text-white text-3xl font-bold mb-2">
          Confirm your phone
        </Text>
        <Text className="text-gray-400 text-base">
          We send 6 digits code to {phoneNumber}
        </Text>
      </View>

      {/* OTP Input */}
      <View className="flex-1">
        <View className="flex-row justify-between mb-8 px-4">
          {otp.map((digit, index) => (
            <View key={index} className="relative">
              <TextInput
                ref={(ref) => {
                  if (ref) inputRefs.current[index] = ref;
                }}
                value={digit}
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(key, index)}
                maxLength={1}
                keyboardType="numeric"
                className="w-12 h-12 text-center text-white text-xl font-semibold bg-transparent"
                selectionColor="#3B82F6"
              />
              {/* Underline */}
              <View className={`absolute bottom-0 left-0 right-0 h-0.5 ${digit ? 'bg-white' : 'bg-gray-600'
                }`} />
            </View>
          ))}
        </View>

        {/* Resend option */}
        <TouchableOpacity onPress={onResend} className="items-center">
          <Text className="text-gray-400 text-base">
            {"Didn't get a code? "}<Text className="text-white">Resend</Text>
          </Text>
        </TouchableOpacity>
      </View>

      {/* Verify Button */}
      <View className="pb-12">
        <TouchableOpacity
          onPress={() => onVerify(otpCode)}
          className={`rounded-full py-4 px-8 ${isComplete ? 'bg-blue-500' : 'bg-gray-700'
            }`}
          disabled={!isComplete}
        >
          <Text className={`text-lg font-semibold text-center ${isComplete ? 'text-white' : 'text-gray-400'
            }`}>
            Verify Your Number
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}