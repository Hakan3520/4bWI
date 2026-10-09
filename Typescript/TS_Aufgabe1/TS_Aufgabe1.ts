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
    }
];

function getTotalPrice(cars: Car[]): number {
    let totalPrice = 0;

    cars.forEach((car) => {
        totalPrice += car.price;
    });

    return totalPrice;
}

function printCars(cars: Car[]): void {
    cars.forEach((car) => {
        console.log(
            `${car.brand} ${car.model} - ${car.price}€ - Baujahr: ${car.year}`
        );
    });
}


function getExpensiveCars(cars: Car[], minPrice: number): Car[] {
    const expensiveCars: Car[] = [];

    cars.forEach((car) => {
        if (car.price > minPrice) {
            expensiveCars.push(car);
        }
    });

    return expensiveCars;
}

console.log("Gesamtpreis:", getTotalPrice(cars));

console.log("Alle Autos:");
printCars(cars);

console.log("Autos über 90000€:");
printCars(getExpensiveCars(cars, 90000));