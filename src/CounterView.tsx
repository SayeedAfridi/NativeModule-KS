import React, {useState} from 'react';
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  ViewStyle,
  requireNativeComponent,
} from 'react-native';

type NativeEvent = {
  nativeEvent: {
    count: number;
  };
};

const NativeCounterView = requireNativeComponent(
  'CounterView',
) as unknown as React.FC<{
  count: number;
  style?: StyleProp<ViewStyle>;
  onIncrement?: (e: NativeEvent) => void;
  onDecrement?: (e: NativeEvent) => void;
}>;

export const CounterView: React.FC<any> = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <NativeCounterView
      count={count}
      style={styles.container}
      onIncrement={e => setCount(e.nativeEvent.count)}
      onDecrement={e => setCount(e.nativeEvent.count)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginBottom: 20,
    width: Dimensions.get('screen').width * 0.9,
  },
});
