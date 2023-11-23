import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const App = () => {
  const [textColor, setTextColor] = useState('black');

  const handleButtonPress = () => {
    const randomColor = 'red';
    setTextColor(randomColor);
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: textColor, fontSize: 20 }}>
        Hello, this text can change color!
      </Text>
      <Button title="Change Color" onPress={handleButtonPress} color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
