import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { getAllTasks } from "@/services/taskService";

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

  return (
    <View className="flex-1 w-full justify-center align-items-center">
      <Text className="text-center text-4xl">TaskScreen</Text>
    </View>
  );
};

export default TaskScreen;
