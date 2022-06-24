import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { PublicAppUserDto } from '../../../../api/user/interfaces'
import { darkTheme } from '../../../../common'

interface LearnerListItemProps {
  learner: PublicAppUserDto
}

const LearnerListItem: React.FC<LearnerListItemProps> = ({ learner }): React.ReactElement => {
  return (
    <View style={styles.container}>
      {learner.photoURL && <Image source={{ uri: learner.photoURL }} style={{ width: 40, height: 40 }} />}
      <Text style={styles.name}>Name: {learner.displayName}</Text>
      <Text style={styles.email}>Email: {learner.email}</Text>
    </View>
  )
}

export default LearnerListItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '50%',
    marginTop: 50,
    backgroundColor: darkTheme.primaryContrast,
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
