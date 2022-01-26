import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MyHeaderIcon = (props) => {
  return (
    <TouchableOpacity>
      <Ionicons
      {...props}
        name={props.iconName}
        size={24}
        color={props.color ? props.color : 'white' }
      />
    </TouchableOpacity>
  );
};

export default MyHeaderIcon;
