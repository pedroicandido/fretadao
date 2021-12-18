import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const Map = (props) => {
  return (
    <MapView
      {...props}
      style={styles.map}
      testID="map"
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: -23.5489,
        longitude: -46.6388,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {props.children}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Map;
