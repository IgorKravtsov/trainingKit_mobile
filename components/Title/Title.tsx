import React from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import { darkTheme } from '../../common'

interface TitleProps {
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

const Title: React.FC<TitleProps> = ({ style, textStyle, children }): React.ReactElement => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title, textStyle]}>{children}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  title: { color: darkTheme.textMain, fontSize: 24, fontWeight: 'bold' },
})
