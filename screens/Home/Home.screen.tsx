import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View } from 'react-native'

const HomeScreen: React.FC = (): React.ReactElement => {
  const { t } = useTranslation()
  return (
    <View style={styles.container}>
      <Text>{t('home:content')}</Text>
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
})
