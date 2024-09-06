# Quản lý state và xử lý sự kiện trong React Native

## 1. Event Listener & Event Handler
**Event Listener** là một cơ chế để theo dõi và chờ sự kiện xảy ra trên một thành phần UI (như click chuột, nhập liệu, vv). Khi sự kiện xảy ra, **Event Handler** sẽ được gọi để xử lý logic.

### Ví dụ:
```jsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Example = () => {
  const handlePress = () => {
    alert('Button pressed!');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>Press Me</Text>
    </TouchableOpacity>
  );
};

export default Example;
```

## 2. Xử lý sự kiện `onPress` của `TouchableOpacity` đơn giản
Sự kiện `onPress` trong React Native được sử dụng với các thành phần tương tác như `Button`, `TouchableOpacity`. Khi người dùng nhấn vào, `onPress` sẽ kích hoạt một hàm xử lý.

### Ví dụ:
```jsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ButtonExample = () => {
  const handlePress = () => {
    console.log('Button was pressed');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>Click Me</Text>
    </TouchableOpacity>
  );
};

export default ButtonExample;
```

## 3. Xử lý sự kiện `onChangeText` của `TextInput`
Sự kiện `onChangeText` dùng để theo dõi sự thay đổi nội dung của `TextInput`.

### Ví dụ:
```jsx
import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';

const TextInputExample = () => {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput 
        style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
        onChangeText={text => setText(text)}
        value={text}
      />
      <Text>You typed: {text}</Text>
    </View>
  );
};

export default TextInputExample;
```

## 4. Khái niệm **state**. Khai báo và quản lý **state**
**State** là nơi lưu trữ dữ liệu động trong một component. Khi state thay đổi, component sẽ tự động được render lại.

### Ví dụ khai báo và quản lý state:
```jsx
import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';

const StateExample = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increase Count" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default StateExample;
```

## 5. Khai báo **state** kèm kiểu dữ liệu
Sử dụng TypeScript để khai báo state kèm kiểu dữ liệu.

### Ví dụ:
```tsx
import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';

const TypeScriptStateExample: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increase Count" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default TypeScriptStateExample;
```

## 6. Cách thức hoạt động của `setState`
Khi gọi `setState`, React sẽ lên lịch để cập nhật component vào lần render tiếp theo. Lúc này, giá trị mới của state sẽ được sử dụng để tính toán lại view.

### Ví dụ:
```jsx
import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';

const SetStateExample = () => {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increase Count" onPress={handlePress} />
    </View>
  );
};

export default SetStateExample;
```

## 7. Multi-style và thay đổi `style` theo **state**
Dựa trên state, có thể thay đổi style của một thành phần.

### Ví dụ:
```jsx
import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MultiStyleExample = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <TouchableOpacity 
      onPress={handlePress} 
      style={isPressed ? styles.pressedButton : styles.button}
    >
      <Text style={styles.text}>{isPressed ? 'Pressed' : 'Press Me'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
  },
  pressedButton: {
    backgroundColor: 'red',
    padding: 10,
  },
  text: {
    color: 'white',
  }
});

export default MultiStyleExample;
```
