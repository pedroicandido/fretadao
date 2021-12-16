import React from "react";
import Card from "../UI/Card/Card";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";

const MarkerHistory = () => {
  return (
    <Card style={styles.card}>
      <Text style={styles.title}>Adicione um ponto clicando no mapa!</Text>
      {/* <FlatList data={historyMarkers} renderItem={renderItem} /> */}
    </Card>
  );
};

export default MarkerHistory;
