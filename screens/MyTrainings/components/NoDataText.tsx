import React from 'react'
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'

import { darkTheme } from '../../../common'

interface NoDataProps {
  text?: string
  style?: StyleProp<ViewStyle>
}

const NoDataText: React.FC<NoDataProps> = ({ text = 'No Data', style }): React.ReactElement => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default NoDataText

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: darkTheme.textMain,
  },
})
