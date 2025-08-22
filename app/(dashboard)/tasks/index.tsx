import { View, Text, Pressable } from "react-native";
import React, { useEffect } from "react";
import { getAllTasks } from "@/services/taskService";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";



const TaskScreen = () => {

 const handleFetchData = async () => {
  await getAllTasks()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
};


  useEffect(() => {
    handleFetchData();
  }, []);

  const router = useRouter();

  return (
    <View className="flex-1 w-full justify-center align-items-center">
      <Text className="text-center text-4xl">TaskScreen</Text>
      <View className="absolute bottom-4 right-4">
      <Pressable
        className="bg-blue-500 p-4 rounded-lg mt-4"
        onPress={() => {
          router.push("/(dashboard)/tasks/new")
        }}
      >
        <MaterialIcons name="add" size={24} color="white" />
      </Pressable>
      </View>
    </View>
  );
};

export default TaskScreen;
