import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { createTask } from '@/services/taskService'

const TaskFormScreen = () => {
    const {id} = useLocalSearchParams<{ id?: string}>()
    //params.id = {id}
    const isNew = !id || id === "new"  // null or id is new -> save
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const router = useRouter()

    const handleSubmit = async() => {
        // Handle form submission
        // validations
        if(!title.trim){
            Alert.alert("Validation", "Title is required")
            return
        }

        try {
            if(isNew) {
            await createTask({title, description})
            }
            router.back()
        }catch(error) {
            console.error("Error saving task:", error)
            Alert.alert("Error", "Failed to save task")
        }
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