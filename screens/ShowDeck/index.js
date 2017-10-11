import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { btn, btnLink, btnTextOutline } from './../../utils/styles'

class ShowDeck extends Component {
  render() {
    const { deck, navigation } = this.props
    return (
      <View>
        <Deck deck={deck} navigation={navigation} type='complete' type='complete' />

        <TouchableOpacity onPress={() => navigation.navigate('Decks')} style={[ btn, btnLink ]}>
          <Text style={btnTextOutline}>Show all decks</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
function mapStateToProps({ decks }, { navigation }) {
  const { id } = navigation.state.params
  return {
    id: id,
    deck: decks[id]
  }
}
const styles = new StyleSheet.create({
  deck: {
    margin: 0,
  }
})
export default connect(mapStateToProps)(ShowDeck)
