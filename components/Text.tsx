import { StyleSheet, Text as NativeText, TextProps } from "react-native";

export function Text({ style, children }: TextProps) {
  return <NativeText style={[styles.text, style]}>{children}</NativeText>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: "center",
  },
});
