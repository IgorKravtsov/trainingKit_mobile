import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View } from 'react-native'

import { darkTheme } from '../../../common'

const NoData: React.FC = (): React.ReactElement => {
  const { t } = useTranslation()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('learnerTrainings:noData')}</Text>
    </View>
  )
}

export default NoData

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
