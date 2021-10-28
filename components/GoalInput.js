import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Button, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animationType="slide" >
      <View style={styles.innerView1}>
        <TextInput 
          placeholder='Course Goal' 
          style={styles.textInput1} 
          onChangeText={goalInputHandler} 
          value={enteredGoal} 
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;


const styles = StyleSheet.create({

  textInput1: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 7,
    textAlign: 'center',
    width: '75%',
    marginBottom: 10
  },

  innerView1: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: '75%'
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "45%"
  },

  button: {
    width: "45%"
  }

});