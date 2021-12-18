import React from "react";
import Card from "../UI/Card/Card";
import MarkerInfo from "../MarkerInfo/MarkerInfo";
import { View, Text, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles";
import * as pointActions from "../../store/actions/point";

const MarkerHistory = () => {
  const historyData = useSelector((state) => state.point.historyPoints);
  const dispatch = useDispatch();

  const removePointHandler = ({ id, isSelected }) =>
    dispatch(pointActions.removePoint({ id, isSelected }));

  const selectPointHandler = (id) =>
    dispatch(pointActions.selectPointOnHistory(id));

  const renderItem = ({ item }) => {
    return (
      <MarkerInfo
        latitude={item.latitude}
        longitude={item.longitude}
        isSelected={item.isSelected}
        onPress={() => selectPointHandler(item.id)}
        onDelete={() =>
          removePointHandler({ id: item.id, isSelected: item.isSelected })
        }
      />
    );
  };

  let content = (
    <Text style={styles.title}>Adicione um ponto clicando no mapa!</Text>
  );

  if (historyData.length > 0) {
    content = (
      <View style={{ height: "100%" }}>
        <Text style={styles.title}>Pontos recentes!</Text>
        <FlatList
          data={historyData}
          renderItem={renderItem}
          style={styles.list}
        />
      </View>
    );
  }

  return <Card style={styles.card}>{content}</Card>;
};

export default MarkerHistory;
