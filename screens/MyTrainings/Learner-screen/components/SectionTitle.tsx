import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { darkTheme } from '../../../../common'

const SectionTitle: React.FC = ({ children }): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  )
}

export default SectionTitle

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: darkTheme.textMain,
    fontSize: 28,
    paddingTop: 20,
    paddingBottom: 10,
    textDecorationLine: 'underline',
  },
})
