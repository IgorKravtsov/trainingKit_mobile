import React from 'react'
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native'
import { darkTheme } from '../../../common'

interface SubTitleProps {
  style: StyleProp<TextStyle>
}

const SubTitle: React.FC<SubTitleProps> = ({ style, children }): React.ReactElement => {
  return <Text style={[styles.subTitle, style]}>{children}</Text>
}

export default SubTitle

const styles = StyleSheet.create({
  subTitle: {
    color: darkTheme.textMain,
    fontSize: 19,
  },
})
