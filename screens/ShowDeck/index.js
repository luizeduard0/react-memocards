import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class ShowDeck extends Component {
  render() {
    const { deck, navigation } = this.props
    return (
      <View>
        <Deck deck={deck} navigation={navigation} type='complete' type='complete' />
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
