import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AutocompleteInput from 'react-native-autocomplete-input'
import { AutocompleteOption } from '../../interfaces'

interface AutocompleteProps {
  dataSource: AutocompleteOption[]
  initialText?: string
}

const Autocomplete: React.FC<AutocompleteProps> = ({ dataSource, initialText }): React.ReactElement => {
  const [data, setData] = useState(dataSource)
  const [text, setText] = useState(initialText)

  const handleOnChange = (text: string) => {
    setText(text)
    setData(data.filter(item => item.label.includes(text)))
  }

  return (
    <View style={styles.autocompleteContainer}>
      <AutocompleteInput
        data={data}
        value={text}
        onChangeText={handleOnChange}
        flatListProps={{
          keyExtractor: item => item.label,
          renderItem: ({ item }) => <Text>{item.label}</Text>,
        }}
      />
    </View>
  )
}

export default Autocomplete

const styles = StyleSheet.create({
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
})
