import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform, AsyncStorage, Alert } from 'react-native'
import { connect } from 'react-redux'
import { btn, btnPrimary, btnText } from './../../utils/styles'
import * as DeckApi from './../../api/decks'
import { addDeck } from './../../actions/decks'

class AddDeck extends Component {
  state = {
    deckTitle: ''
  }
  handleSubmit = () => {
    if(!this.state.deckTitle) {
      Alert.alert('You need to name your deck')
      return
    }

    DeckApi.save(this.state.deckTitle)
    .then(newDeck => {
      this.props.addDeck(newDeck)
      this.setState({ deckTitle: '' })
      this.props.navigation.navigate('Deck',{ id: newDeck.id })
    })
  }
  render() {
    const { deckTitle } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What's the title of your new deck?</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={deckTitle}
            placeholder='Deck Title'
            onChangeText={deckTitle => this.setState({ deckTitle })}/>
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
function mapDispatchToProps(dispatch) {
  return {
    addDeck: data => dispatch(addDeck(data))
  }
}
export default connect(null, mapDispatchToProps)(AddDeck)
