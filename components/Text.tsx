import React from 'react';
import { StyleSheet, Text as NativeText, TextProps } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default function Text({ style, children }: TextProps) {
  return <NativeText style={[styles.text, style]}>{children}</NativeText>;
}
