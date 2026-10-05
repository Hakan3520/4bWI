interface Person {
    firstname: string;
    lastname: string;
    age: number;
    isMale?: boolean;

    address: string;
    houseNumber: number;
    city: string;
    postalCode: number;
    country: string;

    phone: string;
    email: string;

    birthday: string;
    nationality: string;
    occupation: string;
    company: string;

    height: number;
    weight: number;

    hobbies: string[];
    hasDrivingLicense: boolean;
}

const person: Person = {
    firstname: "Max",
    lastname: "Huber",
    age: 24,
    isMale: true,

    address: "Hauptstraße",
    houseNumber: 15,
    city: "Lustenau",
    postalCode: 6890,
    country: "Austria",

    phone: "+43 660 1234567",
    email: "max.huber@example.com",

    birthday: "15.03.2002",
    nationality: "Österreich",
    occupation: "Softwareentwickler",
    company: "Tech Solutions GmbH",

    height: 182,
    weight: 78,

    hobbies: ["Fußball", "Gaming", "Programmieren"],
    hasDrivingLicense: true,
};

function printName(person: Person) {
    console.log(person);
}

printName(person);