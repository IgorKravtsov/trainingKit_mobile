import React from 'react'
import { KeyboardTypeOptions, Platform, StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import { darkTheme } from '../../common'

interface InputProps extends TextInputProps {
  label?: string
  type?: KeyboardTypeOptions
}

const Input: React.FC<InputProps> = ({ label, style, ...props }): React.ReactElement => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={styles.input} {...props} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginHorizontal: 4,
    marginVertical: 16,
    // elevation: 4,
    // shadowColor: 'black',
    // shadowOpacity: 0.25,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 8,
    // overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  label: {
    fontSize: 12,
    color: darkTheme.primaryMain,
    marginBottom: 4,
  },
  input: {
    backgroundColor: darkTheme.headerBackground,
    color: darkTheme.primaryMain,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
})
