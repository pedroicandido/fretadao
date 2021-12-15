import React from "react";
import { Marker as MarkerNativeMaps} from 'react-native-maps';

const Marker = (props) => {
  return <MarkerNativeMaps {...props} testID="marker" />;
};

export default Marker;
