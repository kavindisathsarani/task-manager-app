import {
  View,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Alert
} from "react-native"
import React, { useEffect, useState } from "react"
import { getAllTaskData, taskColRef } from "@/services/taskService"
import { MaterialIcons } from "@expo/vector-icons"
import { useRouter, useSegments } from "expo-router"
import { Task } from "@/types/task"
import { useLoader } from "@/context/LoaderContext"
import { onSnapshot } from "firebase/firestore"

const TaskScreen = () => {
  const [tasks, setTasks] = useState<Task[]>([])
   const router = useRouter()
   
  const segment = useSegments()

  const {hideLoader,showLoader} = useLoader()

  const handleFetchData = async () => {
    await getAllTaskData()
      .then((data) => {
        setTasks(data)
        console.log(data)
      })
      .catch((err) => {
        console.error(err)
      })
    //  await getAllTask()
    // .then((data) => {
    //   console.log(data)
    // })
    // .catch((err) => {
    //   console.error(err)
    // })
  }

  useEffect(() => {
    handleFetchData()
  }, [segment])


 const handleDelete = () =>{
  Alert.alert("Alert Title","Alert Desc",[
    {text:"Cancle"},
    {text:"Delete",
      onPress:async() =>{

      }
    }
  ])
 }

  return (
    <View className="flex-1 w-full justify-center align-items-center">
      <Text className="text-center text-4xl">Tasks screen</Text>
      <View className="absolute bottom-5 right-5">
        <Pressable
          className="bg-blue-500 rounded-full p-5 shadow-lg"
          onPress={() => {
            router.push("/(dashboard)/tasks/new")
          }}
        >
          <MaterialIcons name="add" size={28} color={"#fff"} />
        </Pressable>
      </View>

      <ScrollView className="mt-4">
        {tasks.map((task) => {
          return (
            <View
              key={task.id}
              className="bg-gray-200 p-4 mb-3 rounded-lg mx-4 border border-gray-400"
            >
              <Text className="text-lg font-semibold">{task.title}</Text>
              <Text className="text-sm text-gray-700 mb-2">
                {task.description}
              </Text>
              <View className="flex-row">
                <TouchableOpacity className="bg-yellow-300 px-3 py-1 rounded"
                onPress={()=> router.push(`/(dashboard)/tasks/${task.id})`)}>
                  <Text className="text-xl">Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-red-500 px-3 py-1 rounded">
                  <Text className="text-xl">Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default TaskScreen