import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    zIndex: 1,
    position: "absolute",
    maxWidth: "95%",
    borderRadius: 3,
    padding: 5,
    maxHeight: 200,
  },
  title: {
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    borderBottomColor: "#ccc",
    width: "100%",
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  list: { padding: 5, height: "100%" },
});
