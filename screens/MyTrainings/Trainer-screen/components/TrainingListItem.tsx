import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Training } from '../../../../api/training/types'
import { Id } from '../../../../api/user/types'
import { darkTheme } from '../../../../common'
import { formatDate, formatTime } from '../../../../util'

interface TrainingListItemProps {
  training: Training
  onPress?: (id: Id) => void
}

const TrainingListItem: React.FC<TrainingListItemProps> = ({ training, onPress }): React.ReactElement => {
  const { t } = useTranslation()

  const handlePress = (id: Id) => {
    onPress && onPress(id)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress(training.id)}>
      <Text style={styles.title}>
        {t('trainerTrainings:trainingTitle')}: {training.title}
      </Text>
      <Text style={styles.date}>
        {formatDate(training.trainingDateTime)} - {formatTime(training.trainingDateTime)}
      </Text>
    </TouchableOpacity>
  )
}

export default TrainingListItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: darkTheme.primaryContrast,
    padding: 20,
    borderRadius: 10,
  },
  title: {
    color: darkTheme.textMain,
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    color: darkTheme.textMain,
    fontSize: 14,
  },
})
