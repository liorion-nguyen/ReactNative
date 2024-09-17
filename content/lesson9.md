# Bài Học React Native: Cấu trúc của Component

## 1. **Component là function**

### Giới thiệu
- **Component** trong React Native là các khối xây dựng UI. Một component về cơ bản là một function trong JavaScript, nhận đầu vào (gọi là **props**) và trả về các phần tử React để hiển thị UI.

### Ví dụ:
```javascript
function Greeting(props) {
  return <Text>Hello, {props.name}!</Text>;
}
```

## 2. Cấu trúc cơ bản của Component
### Các thành phần cơ bản của một Component:
- Import: Nhập các thư viện hoặc module cần thiết.
- Khai báo function component: Tạo function trả về JSX (JavaScript XML).
- Return JSX: JSX mô tả cách UI sẽ hiển thị.
- Export component: Xuất component để sử dụng ở nơi khác.

```javascript
javascript
import React from 'react';
import { Text, View } from 'react-native';

function MyComponent() {
  return (
    <View>
      <Text>Welcome to MyComponent!</Text>
    </View>
  );
}

export default MyComponent;
```

## 3. Khai báo Component
- Component có thể được khai báo dưới dạng function, thường gọi là Function Component.
- Function component nhận vào một đối số là props và trả về JSX.
### Ví dụ khai báo:
```javascript
const Welcome = (props) => {
  return <Text>Welcome, {props.name}!</Text>;
};
```

## 4. Props và định nghĩa kiểu dữ liệu cho Props
### Props là gì?
- Props (viết tắt của "properties") là cách truyền dữ liệu từ component cha sang component con trong React Native.
- Các props được truyền vào component dưới dạng đối số của function.
### Định nghĩa kiểu dữ liệu cho Props:
- Có thể sử dụng PropTypes hoặc TypeScript để định nghĩa kiểu dữ liệu cho props.
+ Với PropTypes:
```javascript
import PropTypes from 'prop-types';

const MyComponent = (props) => {
  return <Text>{props.message}</Text>;
};

MyComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
```
+ Với TypeScript:
```typescript
type MyComponentProps = {
  message: string;
};

const MyComponent: React.FC<MyComponentProps> = ({ message }) => {
  return <Text>{message}</Text>;
};
```

## 5. Truyền dữ liệu qua Props
### Ví dụ truyền dữ liệu:
- Dữ liệu có thể được truyền từ component cha đến component con thông qua props:
```javascript
function ParentComponent() {
  return <ChildComponent message="Hello, World!" />;
}

function ChildComponent(props) {
  return <Text>{props.message}</Text>;
}
```

## 6. Phân tích và thiết kế Component hiệu quả
### Nguyên tắc phân tích Component:
- Đơn nhiệm: Mỗi component chỉ nên đảm nhiệm một nhiệm vụ duy nhất.
- Tái sử dụng: Component nên được thiết kế để có thể tái sử dụng nhiều lần.
- Phân tách rõ ràng: Phân tách giao diện người dùng thành các component nhỏ dễ quản lý.
### Ví dụ:
- Một màn hình hiển thị danh sách sản phẩm có thể được chia thành các component như ProductList, ProductItem, và ProductImage.
```javascript
function ProductItem({ product }) {
  return (
    <View>
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
    </View>
  );
}
```

## 7. Tách Component thành các file riêng biệt
### Tại sao cần tách component?
- Tách component ra file riêng biệt giúp mã nguồn dễ quản lý, bảo trì và tái sử dụng.
### Cách tách Component:
- Tạo một file .js hoặc .ts cho mỗi component và export nó.
```javascript
import React from 'react';
import { Text, View } from 'react-native';

const ProductItem = ({ product }) => {
  return (
    <View>
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
    </View>
  );
};

export default ProductItem;
```

### Sử dụng trong file khác:
```javascript
import ProductItem from './ProductItem';

function ProductList({ products }) {
  return products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));
}
```

## 8. Cài đặt và sử dụng @expo/vector-icons
### Cài đặt @expo/vector-icons:
- Thư viện @expo/vector-icons cung cấp nhiều biểu tượng (icons) phổ biến mà bạn có thể sử dụng trong ứng dụng của mình.
### Cách cài đặt:
- Nếu đang sử dụng Expo, chỉ cần chạy lệnh sau:
```bash
expo install @expo/vector-icons
```
### Sử dụng Icons:
```javascript
import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MyComponent = () => {
  return (
    <View>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </View>
  );
};

export default MyComponent;
```
### Lợi ích khi sử dụng @expo/vector-icons:
- Cung cấp bộ sưu tập phong phú các biểu tượng từ nhiều thư viện khác nhau như MaterialIcons, Ionicons, FontAwesome.
- Giúp việc tích hợp biểu tượng vào giao diện UI trở nên đơn giản và nhanh chóng.