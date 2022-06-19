import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input'
import { checkIsEmail } from '../../../util'

import { SubmitLogin } from '../interfaces'

interface FormProps {
  onSubmit: (data: SubmitLogin) => void
}

const Form: React.FC<FormProps> = ({ onSubmit }): React.ReactElement => {
  const [email, setEmail] = useState('l@l.com')
  const [password, setPassword] = useState('123')

  const handleSubmit = () => {
    //validation
    if (!checkIsEmail(email)) {
      Alert.alert('Invalid data', 'Check your data')
    }

    onSubmit({ email, password })
  }

  return (
    <View style={styles.container}>
      <Input value={email} onChangeText={text => setEmail(text)} label='Email' autoCapitalize='none' />
      <Input value={password} onChangeText={text => setPassword(text)} label='Password' autoCapitalize='none' />
      <Button style={styles.btnContainer} onPress={handleSubmit}>
        LOGIN
      </Button>
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
