import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { btn, btnPrimary, btnText } from './../../utils/styles'

export default class AddDeck extends Component {
  handleSubmit = () => {
    alert('submit!')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What's the title of your new deck?</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder='Deck Title' />
        </View>
        <TouchableOpacity onPress={this.handleSubmit} style={[btn, btnPrimary]}>
          <Text style={btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    margin: 20,
    justifyContent: 'center'
  },

  title: {
    padding: 10,
    fontSize: 18
  },
  inputBox: {
    paddingTop: 10,
    paddingBottom: 30,
  },
  input: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: Platform.OS === 'ios' ? 6 : 2
  }
})
