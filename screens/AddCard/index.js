import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native'
import { connect } from 'react-redux'
import globalStyle from './../../utils/styles'
import { addQuestion } from './../../actions/decks'
import { uuid } from './../../utils/helpers'

class AddCard extends Component {
  state = {
    id: null,
    title: '',
    correctAnswer: ''
  }
  handleSubmit = () => {

    const { navigation } = this.props
    const { id, title, correctAnswer } = this.state

    if(title === '') {
      Alert.alert('You need to name your card')
      return
    }
    if(correctAnswer === '') {
      Alert.alert('You need to provide the correct answer')
      return
    }

    this.props.addQuestion({
      id,
      question: {
        id: uuid(),
        title: title,
        correctAnswer: correctAnswer
      }
    })

    navigation.navigate('Deck', { id: navigation.state.params.id })
  }
  componentDidMount() {
    this.setState({'id': this.props.navigation.state.params.id})
  }
  render() {
    const { navigation } = this.props
    const { title, correctAnswer } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={title}
            placeholder='Card Title'
            onChangeText={title => this.setState({ title })}/>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={correctAnswer}
            placeholder='Answer'
            onChangeText={correctAnswer => this.setState({ correctAnswer })}/>
        </View>
        <TouchableOpacity onPress={this.handleSubmit} style={[globalStyle.btn, globalStyle.btnPrimary, styles.btnCustom]}>
          <Text style={[globalStyle.btnText, styles.btnCustomTxt]}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  inputBox: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: Platform.OS === 'ios' ? 6 : 2
  },
  btnCustom: {
    marginLeft: 50,
    marginRight: 50
  },
  btnCustomTxt: {
    fontSize: 18
  }
})
function mapDispatchToProps(dispatch) {
  return {
    addQuestion: data => dispatch(addQuestion(data))
  }
}
export default connect(null, mapDispatchToProps)(AddCard)
