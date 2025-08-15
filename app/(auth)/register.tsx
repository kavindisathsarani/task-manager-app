import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { register } from "@/services/authService";

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cPassword, setCPassword] = useState<string>("");

  const handleRegister = async () => {
    // Handle registration logic here
    //if(email)
    //password
    if (password !== cPassword) {
      // Handle password mismatch
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    //const res = await register(email,password)
    await register(email, password)
      .then((res) => {
        router.back();
      })
      .catch((err) => {
        Alert.alert("Registration failed", "Something went wrong");
        console.error(err);
      })
      .finally(() => {});
  };

  return (
    <View className="flex-1 w-full justify-center align-items-center">
      <Text className="text-4xl text-center">Register</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="border border-gray-300 p-2 rounded mb-2"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="border border-gray-300 p-2 rounded mb-2"
      />
      <TextInput
        placeholder="Confirm Password"
        value={cPassword}
        onChangeText={setCPassword}
        secureTextEntry
        className="border border-gray-300 p-2 rounded mb-2"
      />
      <TouchableOpacity className="bg-green-600 p-4 rounded mt-2">
        <Text className="text-center text-2xl">Login</Text>
      </TouchableOpacity>

      <Pressable className="px-6 py-3" onPress={() => router.back()}>
        <Text className="text-4xl text-center text-blue-500">
          Already have an account? Login
        </Text>
      </Pressable>
    </View>
  );
};

export default Register;
