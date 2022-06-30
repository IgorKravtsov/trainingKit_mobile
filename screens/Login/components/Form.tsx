import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Alert, StyleSheet, View } from 'react-native'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input'
import { checkIsEmail } from '../../../util'

import { SubmitLogin } from '../interfaces'

interface FormProps {
  onSubmit: (data: SubmitLogin) => void
}

const Form: React.FC<FormProps> = ({ onSubmit }): React.ReactElement => {
  const { t } = useTranslation()

  const [email, setEmail] = useState('l@l.com')
  const [password, setPassword] = useState('123')

  const handleSubmit = () => {
    //validation
    const isEmailValid = email.length > 4
    const isPasswordValid = password.length > 0
    if (!isEmailValid || !isPasswordValid) {
      Alert.alert(t('login:invalidData.title'), t('login:invalidData.message'))
    }

    onSubmit({ email, password })
  }

  return (
    <View style={styles.container}>
      <Input value={email} onChangeText={text => setEmail(text)} label={t('login:emailInput.label')} autoCapitalize='none' />
      <Input value={password} onChangeText={text => setPassword(text)} label={t('login:passwordInput.label')} autoCapitalize='none' />
      <Button style={styles.btnContainer} onPress={handleSubmit}>
        {t('login:btnLabel')}
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
