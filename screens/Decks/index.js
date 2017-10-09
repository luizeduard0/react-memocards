import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'
import Deck from './../../components/Deck'
import { btn, btnPrimary, btnText, textBold } from './../../utils/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'

class Decks extends Component {
  render() {
    const { navigation, decks } = this.props

    if(!decks.length) {
      return (
        <View style={styles.center}>
          <MaterialCommunityIcons name='cards-outline' size={100} color={'#aaa'} />
          <Text style={{ margin: 10, marginBottom: 40, color: '#888' }}>No decks yet.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddDeck')} style={[btn, btnPrimary]}>
            <Text style={btnText}>Create <Text style={textBold}>New Deck</Text>
            </Text>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={decks}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Deck')}>
              <Deck deck={item}  />
            </TouchableOpacity>
          )}
         />
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
  console.log('DECKS', decks)
  return {
    decks: Object.keys(decks)
                 .map(key => {
                   const deck = decks[key]

                   deck.cards = Object.keys(deck.cards)
                                      .map(cardKey => deck.cards[cardKey])

                   return deck
                 })
  }
}

export default connect(mapStateToProps)(Decks)
