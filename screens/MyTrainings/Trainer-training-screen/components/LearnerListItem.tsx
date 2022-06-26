import React from 'react'
import { useTranslation } from 'react-i18next'
import { Image, StyleSheet, Text, View } from 'react-native'

import { PublicAppUserDto } from '../../../../api/user/interfaces'
import { darkTheme } from '../../../../common'

interface LearnerListItemProps {
  learner: PublicAppUserDto
}

const LearnerListItem: React.FC<LearnerListItemProps> = ({ learner }): React.ReactElement => {
  const { t } = useTranslation()
  return (
    <View style={styles.container}>
      {learner.photoURL && <Image source={{ uri: learner.photoURL }} style={{ width: 40, height: 40 }} />}
      <Text style={styles.name}>
        {t('training:learnerNameTitle')}: {learner.displayName}
      </Text>
      <Text style={styles.email}>
        {t('training:learnerEmailTitle')}: {learner.email}
      </Text>
    </View>
  )
}

export default LearnerListItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    marginTop: 50,
    backgroundColor: darkTheme.primaryContrast,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  name: {
    color: darkTheme.textMain,
    fontSize: 20,
  },
  email: {
    color: darkTheme.textMain,
    fontSize: 16,
    marginTop: 10,
  },
})
