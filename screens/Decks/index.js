import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Deck from './../../components/Deck'

class Decks extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('ShowDeck')}>
          <Deck />
        </TouchableOpacity>
        <Deck />
        <Deck />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingTop: 40
  },
});

export default Decks
