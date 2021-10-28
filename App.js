import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

// Text strings must be incorporated in a <Text> tag for React Native
// React Native does not recognize HTML elements
// Everytime a set function is executed, the entire component gets re-rendered
export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {id: Math.random().toString(), value: goalTitle}
    ]);

    setIsAddMode(false);
  };

  const cancelAddCourseGoal = () => {
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  // No parentheses means that the function doesn't execute immediately, but only when the event occurs
  return (
    <View style={styles.outerView}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelAddCourseGoal} />
      
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem title={itemData.item.value} id={itemData.item.id} onDelete={removeGoalHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  outerView: {
    padding: 50,
    flex: 1
  }

});
