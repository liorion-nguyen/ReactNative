# Bài Học React Native: Object

## 1. Giới thiệu về `Object` và cặp `key-value`

### Giới thiệu
- **Object** trong JavaScript là một cấu trúc dữ liệu dùng để lưu trữ các cặp **key-value** (cặp khóa-giá trị). Khóa là tên thuộc tính, còn giá trị có thể là bất kỳ kiểu dữ liệu nào: số, chuỗi, boolean, hoặc thậm chí là một function.

### Cặp `key-value`
- Mỗi thuộc tính trong object có dạng `key: value`. **Key** là một chuỗi hoặc ký tự, còn **Value** là giá trị tương ứng.

```javascript
const person = {
  name: "John",
  age: 30,
  isStudent: false
};
```

## 2. Khai báo Object bất kỳ và cách truy cập giá trị của Object
### Khai báo Object
- Object có thể được khai báo bằng dấu ngoặc nhọn {} và các cặp key-value:

```javascript
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2021
};
```
### Truy cập giá trị
- Truy cập giá trị bằng cách sử dụng dấu chấm (.) hoặc dấu ngoặc vuông ([]):

```javascript
console.log(car.brand); // "Toyota"
console.log(car["year"]); // 2021
```

## 3. Khai báo Object với kiểu dữ liệu cố định bằng type
### Sử dụng type trong TypeScript
- Để khai báo object với kiểu dữ liệu cố định trong TypeScript, chúng ta có thể sử dụng type:
- Điều này giúp đảm bảo object chỉ chứa các thuộc tính với kiểu dữ liệu đã định nghĩa trước.
```typescript
type Car = {
  brand: string;
  model: string;
  year: number;
};

const myCar: Car = {
  brand: "Honda",
  model: "Civic",
  year: 2020
};
```

## 4. Duyệt và xử lý từng phần tử của Object
### Duyệt qua các thuộc tính của Object
- Có thể duyệt qua các cặp key-value trong object bằng vòng lặp for...in:
```javascript
const car = { brand: "Toyota", model: "Camry", year: 2021 };

for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}
```

### Sử dụng Object.keys(), Object.values(), và Object.entries()
- Object.keys(): Trả về một array chứa tất cả các key của object.
- Object.values(): Trả về một array chứa tất cả các giá trị.
- Object.entries(): Trả về một array các cặp [key, value].
```javascript
console.log(Object.keys(car)); // ["brand", "model", "year"]
console.log(Object.values(car)); // ["Toyota", "Camry", 2021]
console.log(Object.entries(car)); // [["brand", "Toyota"], ["model", "Camry"], ["year", 2021]]
```

## 5. Spread Operator với Object
### Sao chép Object
- Spread Operator (...) giúp sao chép object:
```javascript
const carCopy = { ...car };
```

### Kết hợp nhiều Object
- Kết hợp nhiều object lại thành một:
```javascript
const additionalInfo = { color: "Red", price: 30000 };
const combinedCar = { ...car, ...additionalInfo };
```

## 6. Danh sách Object
### Khai báo danh sách Object
- Một danh sách object là một array chứa nhiều object. Điều này rất hữu ích khi cần quản lý dữ liệu phức tạp:
```javascript
const cars = [
  { brand: "Toyota", model: "Camry", year: 2021 },
  { brand: "Honda", model: "Civic", year: 2020 },
  { brand: "Ford", model: "Mustang", year: 2019 }
];
```

## 7. Tạo mockup data để xây dựng UI/UX mẫu cho ứng dụng
### Tạo dữ liệu mẫu (Mockup Data)
- Khi phát triển UI, bạn thường cần tạo dữ liệu mẫu để mô phỏng cách ứng dụng sẽ hiển thị dữ liệu thực tế. Ví dụ về dữ liệu danh sách xe:
- Dữ liệu này có thể được sử dụng để tạo các thành phần UI mẫu như danh sách, bảng, hoặc card.
```javascript
const mockupCars = [
  { brand: "Tesla", model: "Model S", year: 2022 },
  { brand: "BMW", model: "X5", year: 2021 },
  { brand: "Audi", model: "A8", year: 2020 }
];
```

## 8. Xử lý hiển thị dạng List
### Hiển thị danh sách Object
- Có thể sử dụng array chứa các object và hàm map() để hiển thị danh sách các mục dưới dạng UI trong React Native:
```javascript
const renderCars = () => {
  return mockupCars.map((car, index) => (
    <View key={index}>
      <Text>{car.brand} {car.model} - {car.year}</Text>
    </View>
  ));
};
```

## 9. Hiển thị danh sách tối ưu với FlatList
### Sử dụng FlatList trong React Native
- FlatList là một component trong React Native giúp hiển thị danh sách dài một cách tối ưu về hiệu suất. Nó chỉ render các item khi cần thiết (lazy loading).
```javascript
import React from "react";
import { FlatList, Text, View } from "react-native";

const cars = [
  { brand: "Tesla", model: "Model S", year: 2022 },
  { brand: "BMW", model: "X5", year: 2021 },
  { brand: "Audi", model: "A8", year: 2020 }
];

const CarList = () => {
  return (
    <FlatList
      data={cars}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.brand} {item.model} - {item.year}</Text>
        </View>
      )}
    />
  );
};

export default CarList;
```
### Ưu điểm của FlatList
- Lazy loading: Chỉ render các item khi chúng xuất hiện trên màn hình.
- Tự động tối ưu hiệu suất: FlatList tự quản lý việc cập nhật danh sách, giúp tránh tình trạng render lại không cần thiết.