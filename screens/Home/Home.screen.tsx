import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View } from 'react-native'
import { darkTheme } from '../../common'

const HomeScreen: React.FC = (): React.ReactElement => {
  const { t } = useTranslation()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('home:content')}</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: darkTheme.textMain,
  },
})
