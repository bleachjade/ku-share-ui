import React from "react";
import {
  View,
  useWindowDimensions,
  TouchableOpacity,
  Text,
} from "react-native";


const Footer = (props) => {
  const windowWidth = useWindowDimensions().width;
  const HEIGHT = windowWidth * 0.21;
  const FOOTER_PADDING = windowWidth * 0.1;

  const label = props.rightButtonLabel;

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "center",
        height: HEIGHT,
        backgroundColor: "#04DB8B",
        opacity: 0.6,
        alignItems: "center",
        paddingHorizontal: FOOTER_PADDING,
        marginTop: 15,
        marginHorizontal: 25,
        marginBottom: 50,
        borderRadius: 10,
      }}
      onPress={props.rightButtonPress}
    >
      <Text
        style={{
          fontSize: 28,
          color: "white",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Footer;
