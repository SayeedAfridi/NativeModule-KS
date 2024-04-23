import {NativeModules, NativeEventEmitter} from 'react-native';

const enum CounterEvents {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

type eventTuple = [string, number];

const counter = NativeModules.CounterV2;
const events = new NativeEventEmitter(counter);

export const incrementCallback = (clb: (count: number) => void) => {
  counter.increment(clb);
};
export const decrementAsync = async () => {
  return counter.decrement();
};

export const onIncrement = (listener: (ev: eventTuple) => void) => {
  return events.addListener(CounterEvents.INCREMENT, listener);
};

export const onDecrement = (listener: (ev: eventTuple) => void) => {
  return events.addListener(CounterEvents.DECREMENT, listener);
};
