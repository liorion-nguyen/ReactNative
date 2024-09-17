# Array

## 1. Giới thiệu về Array và cách khai báo Array
### Giới thiệu
- **Array** là một kiểu dữ liệu cho phép lưu trữ nhiều giá trị trong cùng một biến. Mỗi giá trị trong array được gọi là một **phần tử** và có thể truy cập bằng chỉ số (index).
- Trong React Native, array được sử dụng phổ biến để quản lý danh sách dữ liệu như danh sách sản phẩm, người dùng, hay các mục trong UI.

### Cách khai báo Array
- Có thể khai báo array bằng cách sử dụng cặp dấu ngoặc vuông `[]`:
- Array có thể chứa bất kỳ kiểu dữ liệu nào: số, chuỗi, object, hàm, hoặc thậm chí là array khác (array lồng nhau).
  
```javascript
const fruits = ["Apple", "Banana", "Orange"];
```

## 2. Duyệt và xử lý từng phần tử trong Array với vòng lặp for
### Sử dụng for truyền thống(index)
- Một cách phổ biến để duyệt qua các phần tử của array là sử dụng vòng lặp for truyền thống

- VD: Tạo 1 array chứa điểm số. Sử dụng vòng lặp for để in ra lần lượt các phần tử bên trong array điểm số.
```javascript
const fruits = ["Apple", "Banana", "Orange"];
const len = fruits.length
for (let i = 0; i < len; i++) { 
  console.log(fruits[i]); // i là chỉ số của phần tử
}
```

### Sử dụng for...of
- Cú pháp hiện đại for...of giúp duyệt qua các phần tử của array một cách đơn giản
- VD: Tạo 1 array chứa điểm số. Sử dụng vòng lặp for...of để tính tổng điểm và log ra màn hình tổng điểm trong array đấy.
```javascript
let sum = 0;
sum = sum + 5;
sum += 5;
sum++;
for (const item of fruits) {
  console.log(item);
}
```

## 3. Spread Operator với Array
### Giới thiệu Spread Operator (...)
- Spread Operator cho phép trải (spread) các phần tử của array ra các vị trí riêng lẻ.
- Nó thường được sử dụng để sao chép array hoặc kết hợp nhiều array.

### Sao chép Array
- Khi cần sao chép một array mà không làm thay đổi array gốc
```javascript
const newFruits = [...fruits];
const name = ["chung", "minh", "An"];
const namecopy = [...name];
```


### Kết hợp Array
- Kết hợp nhiều array lại thành một
```javascript
const firstName = "Nguyen";
const lastName = "Chung";
const fullName = firstName + lastName // "NguyenChung"
const moreFruits = ["Mango", "Pineapple"];
const combinedFruits = [...fruits, ...moreFruits]; 
```


## 4. Callback và các hàm bổ trợ quan trọng
### Callback là gì?
- Callback là một hàm được truyền vào một hàm khác dưới dạng tham số và được gọi trong hàm đó.
- Các hàm bổ trợ của array như map, filter đều sử dụng callback.

### Các hàm bổ trợ quan trọng của Array
#### map()
- Duyệt qua các phần tử của array và trả về một array mới với các giá trị đã được thay đổi
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // [2, 4, 6]
```

#### filter()
- Lọc ra các phần tử thỏa mãn điều kiện
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 == 0); // [2, 4] == ===
2 == "2" // = true
2 === "2" // = false so sánh thêm kiểu dữ liệu
```

#### forEach()
- Thực thi một callback cho mỗi phần tử trong array:
```javascript
numbers.forEach(num => console.log(num));
```

## 5. Tư duy xử lý Array với các hàm bổ trợ
- Các hàm bổ trợ như map, filter, reduce giúp đơn giản hóa việc xử lý và thao tác trên array.
- Chúng giúp viết code ngắn gọn hơn, dễ đọc hơn và giảm thiểu lỗi so với các vòng lặp thủ công.
- Tư duy sử dụng các hàm này là "hàm nào cho mục đích gì" để tối ưu hóa hiệu suất và logic của ứng dụng. 
    + map: Khi cần chuyển đổi dữ liệu.
    + filter: Khi cần loại bỏ các phần tử không cần thiết.
    + forEach: Khi chỉ cần thực thi một hành động trên từng phần tử.