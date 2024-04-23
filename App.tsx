import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Counter1} from './src/Counter1';

export interface AppProps {}

export const App: React.FC<AppProps> = () => {
  const [current, setCurrent] = useState<number>(1);
  return (
    <View style={styles.container}>
      {current === 1 ? <Counter1 /> : null}
      <View style={styles.switch}>
        <Button
          title="Switch"
          onPress={() => {
            setCurrent(prev => (prev === 1 ? 2 : 1));
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  switch: {
    marginBottom: 80,
  },
});
