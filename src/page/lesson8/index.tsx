import { useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Lesson8() {
    type TypePerson = {
        name: string,
        age: number,
        address: string,
        phone?: string,
        gender?: string
    }
    type User = {
        name: string,
        username: string,
        password: string
    }
    let person: TypePerson = {
        name: "Nguyen Quoc Chung",
        age: 20,
        address: "Ha Noi"
    };
    person = {
        ...person,
        name: "Liorion Nguyen",
        gender: "male"
    } // Sử dụng để cập nhật giá trị nếu đã có key hoặc tạo mới 1 cặp key-value nếu chưa có key đấy
    const personDetail = {
        email: "liorion.nguyen@gmail.com",
        working: "KiTE"
    };
    console.log(person.name);
    console.log(person.age);
    console.log(person["address"]);

    for (const key in person) {
        console.log(`Key ${key}: ${person[key]}`);
    }

    const personCopy = {
        ...person
    }
    console.log(personCopy);

    const personAll = {
        ...person,
        ...personDetail
    }

    const users: User[] = [
        { name: "chung", username: "chung", password: "12345" },
        { name: "an", username: "an", password: "12345" },
        { name: "minh", username: "minh", password: "12345" },
        { name: "phuoc", username: "phuoc", password: "12345" }
    ]

    // Tạo ra 1 object mới có thêm các thông tin về lớp(Địa chỉ, Khoa nào) 
    // sử dụng toán tử rải để tạo thành 1 object mới có đầy dủ thông tin của class


    const arrayKeys = Object.keys(person);
    const arrayValues = Object.values(person);

    // typescript
    // javascript

    // Sử dụng vòng lặp for...in để log ra tên key và giá trị của key đấy.

    // Đổi tên file thành index.tsx sau đấy xác định type của object Class 

    // Tạo 1 object có tên là class bên trong sẽ chứa các thông tin: Tên lớp, giáo viên chủ nhiệm, số học sinh.

    const mockupCars = [
        { brand: "Tesla", model: "Model S", year: 2022 },
        { brand: "BMW", model: "X5", year: 2021 },
        { brand: "Audi", model: "A8", year: 2020 }
    ];
    return (
        <View>
            {
                mockupCars.map((car, index) => (
                    <View key={index}>
                        <Text>{car.brand} {car.model} - {car.year}</Text>
                    </View>
                ))
            }
            <FlatList
                data={mockupCars}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.brand} {item.model} - {item.year}</Text>
                    </View>
                )}
            />
        </View>
    );
}