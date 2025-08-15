import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router, useRouter } from 'expo-router'

const Index = () => {
    const router = useRouter()
  return (
    <View className="flex-1 w-full justify-center align-items-center">
        <Pressable className="bg-blue-600 px-6 py-3"
        onPress={() => router.push("/login")}
        >
      <Text className="text-4xl">Go</Text>
      </Pressable>
    </View>
  )
}

export default Index