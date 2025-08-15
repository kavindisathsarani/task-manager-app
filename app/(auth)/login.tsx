import { View, Text, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  return (
    <View className="flex-1 w-full justify-center align-items-center">
      <Text className="text-4xl text-center">Login</Text>
      <Pressable className="px-6 py-3" onPress={() => router.push("/home")}>
        <Text className="text-4xl text-center">Go to Home</Text>
      </Pressable>
      <Pressable className="px-6 py-3" onPress={() => router.push("/register")}>
        <Text className="text-4xl text-center">Go to Register</Text>
      </Pressable>
    </View>
  );
};

export default Login;
