import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'

const TaskFormScreen = () => {
    const {id} = useLocalSearchParams<{ id?: string}>()
    //params.id = {id}
    const isNew = !id || id === "new"  // null or id is new -> save
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const handleSubmit = () => {
        // Handle form submission
    }

 return (
    <View className="p-4">
      <Text className="text-xl font-bold mb-4">
        {isNew ? "Add Task" : "Edit Task"}
      </Text>

      <TextInput
        className="border p-2 rounded-lg mb-3"
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        className="border p-2 rounded-lg mb-3"
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-blue-500 p-3 rounded-lg"
      >
        <Text className="text-white text-center">
          {isNew ? "Add Task" : "Update Task"}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default TaskFormScreen