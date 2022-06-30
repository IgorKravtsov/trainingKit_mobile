import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { DateTimePickerEvent } from '@react-native-community/datetimepicker'

import { useAppSelector } from '../../../redux/hooks'
import { selectOrganizations } from '../../../redux/slices/organizations.slice'

import { checkIsEmail } from '../../../util'

import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input'
import DatePicker from '../../../components/DatePicker/DatePicker'
import ModalPicker from '../../../components/ModalPicker/ModalPicker'

import { ModalOptionOrganization, SubmitRegister } from '../interfaces'
import { useTranslation } from 'react-i18next'

interface FormProps {
  onSubmit: (data: SubmitRegister) => void
}

const Form: React.FC<FormProps> = ({ onSubmit }): React.ReactElement => {
  const { t } = useTranslation()
  const { organizations } = useAppSelector(selectOrganizations)

  const [name, setName] = useState('John')
  const [lastName, setLastName] = useState('Doe')
  const [email, setEmail] = useState('j@d.com')
  const [password, setPassword] = useState('123')
  const [confirmPass, setConfirmPass] = useState('123')

  const [dob, setDob] = useState<Date>(new Date())
  const [selectedOrganization, setSelectedOrganization] = useState<ModalOptionOrganization | undefined>()

  const handleOnChange = (e: DateTimePickerEvent, selectedDate?: Date) => {
    selectedDate && setDob(selectedDate)
  }

  const handleOnChangeOrganization = (selectedOrganization: ModalOptionOrganization) => {
    setSelectedOrganization(selectedOrganization)
  }

  const handlePress = () => {
    //validation
    const isNameValid = name.trim().length > 0
    const isLastNameValid = lastName.trim().length > 0
    const isEmailValid = checkIsEmail(email)
    const isPassValid = password.trim().length > 0
    const isConfirmPassValid = confirmPass === password
    const isOrganizationValid = !!selectedOrganization

    if (!isNameValid || !isLastNameValid || !isEmailValid || !isPassValid || !isConfirmPassValid || !isOrganizationValid) {
      Alert.alert(t('register:invalidData.title'), t('register:invalidData.message'))
      return
    }

    const data: SubmitRegister = {
      name,
      lastName,
      email,
      password,
      DoB: dob,
      organizations: [selectedOrganization.id || 0],
      // organizations: [],
    }

    onSubmit(data)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <Input
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
          label={t('register:nameInput.label')}
          placeholder={t('register:nameInput.placeholder')}
        />
        <Input
          value={lastName}
          onChangeText={text => setLastName(text)}
          style={styles.input}
          label={t('register:lastNameInput.label')}
          placeholder={t('register:lastNameInput.placeholder')}
          autoCapitalize='none'
        />
      </View>
      <Input
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        label={t('register:emailInput.label')}
        placeholder={t('register:emailInput.placeholder')}
        autoCapitalize='none'
      />

      <Input
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        label={t('register:passwordInput.label')}
        secureTextEntry
      />

      <Input
        value={confirmPass}
        onChangeText={text => setConfirmPass(text)}
        style={styles.input}
        label={t('register:confirmPasswordInput.label')}
        secureTextEntry
      />

      <ModalPicker
        options={organizations.map(o => ({ ...o, label: o?.title }))}
        label={t('register:organizationInput.label')}
        onChange={handleOnChangeOrganization}
      />

      <DatePicker value={dob} onChange={handleOnChange} label={t('register:dobInput.label')} maximumDate={new Date()} />

      <Button onPress={handlePress} style={styles.btnContainer}>
        {t('register:btnLabel')}
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
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    minWidth: 150,
  },
  btnContainer: {
    marginVertical: 24,
    // borderRadius: 8,
  },
  btn: {},
})
