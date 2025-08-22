import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const TaskFormScreen = () => {
    const params = useLocalSearchParams()
    //params.id
    
  return (
    <View>
      <Text>TaskFormScreen</Text>
    </View>
  )
}

export default TaskFormScreen