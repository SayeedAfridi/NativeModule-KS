import React, {useState} from 'react';
import {Button, NativeModules, StyleSheet, Text, View} from 'react-native';

export interface Counter1Props {}

const CounterModule = NativeModules.Counter;

export const Counter1: React.FC<Counter1Props> = () => {
  const [counter, setCounter] = useState<number>(0);
  const [error, setError] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter using ObjC</Text>
      <Text style={styles.counter}>{counter}</Text>
      <Text style={styles.error}>{error}</Text>
      <Button
        title="Increment callback"
        onPress={() => {
          setError('');
          CounterModule.increment((c: number) => setCounter(c));
        }}
      />
      <Button
        title="Increment sync"
        onPress={() => {
          setError('');
          const count = CounterModule.incrementSync();
          setCounter(count);
        }}
      />
      <Button
        title="Decrement async"
        onPress={async () => {
          try {
            const count = await CounterModule.decrement();
            setCounter(count);
          } catch (e: any) {
            setError(e.message);
          }
        }}
      />
      <Button
        title="Decrement sync"
        onPress={async () => {
          setError('');
          const count = CounterModule.decrementSync();
          if (count === null) {
            setError('Count value cannot be less than 0');
          } else {
            setCounter(count);
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
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
