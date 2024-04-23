import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  decrementAsync,
  incrementCallback,
  onDecrement,
  onIncrement,
} from './CounterModule';

export interface Counter1Props {}

export const Counter2: React.FC<Counter1Props> = () => {
  const [counter, setCounter] = useState<number>(0);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const inc = onIncrement(d => {
      setCounter(d[1]);
    });
    const dec = onDecrement(d => {
      setCounter(d[1]);
    });
    return () => {
      inc.remove();
      dec.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Counter using Swift</Text>
      <Text style={styles.counter}>{counter}</Text>
      <Text style={styles.error}>{error}</Text>
      <Button
        title="Increment callback"
        onPress={() => {
          setError('');
          incrementCallback((c: number) => {
            console.log('increment', c);
          });
        }}
      />
      <Button
        title="Decrement async"
        onPress={async () => {
          try {
            const count = await decrementAsync();
            console.log('decrement', count);
          } catch (e: any) {
            setError(e.message);
          }
        }}
      />
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
  counter: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  error: {
    fontWeight: 'bold',
    fontSize: 10,
    color: 'red',
  },
});
