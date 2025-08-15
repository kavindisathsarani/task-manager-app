import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Register = () => {
    const router = useRouter()
  return (
    <View className="flex-1 w-full justify-center align-items-center">
      <Text className="text-4xl text-center">Register</Text>
      <Pressable className="px-6 py-3" 
      onPress={() => router.back()}
      >
      <Text className="text-4xl text-center">Go to Login</Text>
      </Pressable>
    </View>
  )
}

export default Register