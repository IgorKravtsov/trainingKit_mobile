import React from 'react'
import { Platform, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { darkTheme } from '../../common'

interface ButtonProps {
  onPress?: () => void
  mode?: 'flat' | 'standard'
  style?: StyleProp<ViewStyle>
}

const Button: React.FC<ButtonProps> = ({ onPress, mode, style, children }): React.ReactElement => {
  return (
    <View style={[styles.container, style]}>
      <Pressable onPress={onPress} android_ripple={{ color: '#ccc' }} style={styles.pressed}>
        <View style={[styles.btn, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  btn: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: darkTheme.primaryMain,
  },
  flat: {
    backgroundColor: darkTheme.secondaryMain,
  },
  buttonText: {
    color: darkTheme.secondaryMain,
    textAlign: 'center',
  },
  flatText: {
    color: darkTheme.primaryMain,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: darkTheme.primaryContrastPressed,
    borderRadius: 4,
  },
})
