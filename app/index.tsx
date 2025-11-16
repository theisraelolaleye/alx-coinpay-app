import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <View className="items-center p-8">
        <Text className="text-5xl mb-4">🎉</Text>
        <Text className="text-4xl font-bold text-blue-600 mb-2">
          Welcome to CoinPay!
        </Text>
        <Text className="text-lg text-gray-600 text-center">
          Your secure cryptocurrency wallet is ready to use
        </Text>
      </View>
    </View>
  );
}
