import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

interface PhoneVerificationModalProps {
  isVisible: boolean;
  phoneNumber: string;
  onConfirm: () => void;
  onEdit: () => void;
  onClose: () => void;
}

export default function PhoneVerificationModal({
  isVisible,
  phoneNumber,
  onConfirm,
  onEdit,
  onClose
}: PhoneVerificationModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/50 items-center justify-center px-6">
        <View className="bg-gray-800 rounded-3xl p-6 w-full max-w-sm">
          {/* Close button */}
          <TouchableOpacity
            onPress={onClose}
            className="absolute top-4 right-4 z-10"
          >
            <Text className="text-white text-xl">✕</Text>
          </TouchableOpacity>

          {/* Icon */}
          <View className="items-center mb-6 mt-4">
            <View className="w-20 h-20 bg-gray-700 rounded-full items-center justify-center mb-4">
              {/* Mail icon with checkmark */}
              <View className="relative">
                <Text className="text-white text-2xl">✉️</Text>
                <View className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full items-center justify-center">
                  <Text className="text-white text-xs">✓</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Title */}
          <Text className="text-white text-xl font-bold text-center mb-2">
            Verify your phone number{'\n'}before we send code
          </Text>

          {/* Phone number */}
          <Text className="text-gray-300 text-center mb-8">
            Is this correct? {phoneNumber}
          </Text>

          {/* Buttons */}
          <View className="space-y-3">
            {/* Yes button */}
            <TouchableOpacity
              onPress={onConfirm}
              className="bg-blue-500 rounded-full py-4"
            >
              <Text className="text-white text-lg font-semibold text-center">
                Yes
              </Text>
            </TouchableOpacity>

            {/* No button */}
            <TouchableOpacity
              onPress={onEdit}
              className="border border-gray-600 rounded-full py-4"
            >
              <Text className="text-white text-lg font-semibold text-center">
                No
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}