import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import styles from "./styles";

const MarkerInfo = ({ onPress, onDelete, latitude, longitude, isSelected }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.contentContainer}>
        <View>
          <FontAwesome
            name="circle"
            size={24}
            color={isSelected ? Colors.success : Colors.error}
          />
        </View>

        <View>
          <View>
            <Text>
              Lat:
              <Text> {latitude}</Text>
            </Text>
          </View>

          <View>
            <Text>
              Lon:
              <Text> {longitude}</Text>
            </Text>
          </View>
        </View>
        <View>
          <FontAwesome
            name="trash"
            size={24}
            color="black"
            onPress={onDelete}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MarkerInfo;
