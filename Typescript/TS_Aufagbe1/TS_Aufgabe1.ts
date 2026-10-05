interface Car {
    brand: string;
    model: string;
    price: number;
    year: number;
}

const cars: Car[] = [
    {
        brand: "BMW",
        model: "M3",
        price: 85000,
        year: 2023
    },
    {
        brand: "Audi",
        model: "RS6",
        price: 120000,
        year: 2024
    },
    {
        brand: "Mercedes",
        model: "C63 AMG",
        price: 95000,
        year: 2022
    },
    {
        brand: "Volkswagen",
        model: "Golf 8",
        price: 35000,
        year: 2023
    },
    {
        brand: "Porsche",
        model: "911",
        price: 150000,
        year: 2024
    }
];

function getTotalPrice(cars: Car[]): number {
    let totalPrice = 0;

    cars.forEach((car) => {
        totalPrice += car.price;
    });

    return totalPrice;
}

console.log("Gesamtpreis:", getTotalPrice(cars));