import React from "react";
import { View } from "react-native";
import Map from "../../components/Map/Map";
import Marker from "../../components/Marker/Marker";
import { useSelector, useDispatch } from "react-redux";
import MarkerHistory from "../../components/MarkerHistory/MarkerHistory";
import * as pointActions from "../../store/actions/point";
import styles from "./styles";

const WelcomeScreen = () => {
  const dispatch = useDispatch();
  const currentPoint = useSelector((state) => state.point.currentPoint);

  const selectPointHandler = (event) => {
    const coordinate = {
      ...event.nativeEvent.coordinate,
      desc: "Any Descrpition",
      id: Math.random(),
    };
    dispatch(pointActions.setPoint(coordinate));
  };

  return (
    <View style={styles.container}>
      <Map onPress={selectPointHandler}>
        <Marker
          coordinate={{
            latitude: currentPoint.latitude,
            longitude: currentPoint.longitude,
          }}
          title="teste"
          description="teste description"
        />
      </Map>
      <MarkerHistory />
    </View>
  );
};

export default WelcomeScreen;
