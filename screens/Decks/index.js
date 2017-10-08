import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'
import Deck from './../../components/Deck'
import { btn, btnPrimary, btnText } from './../../utils/styles'

class Decks extends Component {
  render() {
    const { navigation, decks } = this.props

    if(!decks.length) {
      return (
        <View style={styles.center}>
          <Text>No decks yet.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddDeck')} style={[btn, btnPrimary]}>
            <Text style={btnText}>Create Deck</Text>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={decks}
          renderItem={() => (
            <TouchableOpacity onPress={() => navigation.navigate('Deck')}>
              <Deck />
            </TouchableOpacity>
          )}
         />
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
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function mapStateToProps({ decks={} }) {
  return {
    decks: Object.keys(decks).map(key => decks[key])
  }
}

export default connect(mapStateToProps)(Decks)
