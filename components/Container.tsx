import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 48,
    paddingHorizontal: 16,
  },
});

export default function Container(props: ViewProps) {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
}
