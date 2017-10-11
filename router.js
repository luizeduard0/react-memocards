import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import Decks from './screens/Decks'
import AddDeck from './screens/AddDeck'
import ShowDeck from './screens/ShowDeck'
import AddCard from './screens/AddCard'
import Quiz from './screens/Quiz'

export const TabNavigation = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      title: 'Decks',
      header: null,
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor}  />
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      title: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <SimpleLineIcons name='plus' size={30} color={tintColor}  />
    }
  }
}, {
  tabBarOptions: {
    activeBackgroundColor: '#4286f4',
    activeTintColor: '#fff'
  }
})

export const MainNavigation = StackNavigator({
  Home: {
    screen: TabNavigation,
    navigationOptions: {
    }
  },
  Deck: {
    screen: ShowDeck,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#4286f4'
      }
    }
  },
  Quiz: {
    screen: Quiz
  },
  AddCard: {
    screen: AddCard
  }
})
