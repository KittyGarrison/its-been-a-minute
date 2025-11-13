// This file contains test data for users and persons

const persons = [
    {
        id:1, 
        first: "Jennifer", 
        last: "Haggerty",
        phone: "+12185672323",
        photo: "testImage.png",
        birthdate: "1990-05-15",
        lastContacted: "2025-10-01",
        lastDismissed: "2025-09-15",
    }
]
const users = [
    {
        id:1, 
        first: "Ciara", 
        last: "Williams",
        email: "cwil290831@gmail.com",
        contacts: persons, //array of contacts(persons)
    }
]
