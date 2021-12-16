import React from "react";
import { View } from "react-native";

const Card = (props) => {
  return <View testID="card">{props.children}</View>;
};

export default Card;