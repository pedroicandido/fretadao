import React from "react";
import MapView from "react-native-maps";

const Map = (props) => {
  return (
    <MapView
      testID="map"
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {props.children}
    </MapView>
  );
};

export default Map;
