import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input'

const Form: React.FC = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Input label='Email' autoCapitalize='none' />
      <Input label='Password' autoCapitalize='none' />
      <Button style={styles.btnContainer}>LOGIN</Button>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 36,
  },
  btnContainer: {
    marginVertical: 24,
    // borderRadius: 8,
  },
  btn: {},
})
