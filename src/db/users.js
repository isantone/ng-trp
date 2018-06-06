export const users = [
    {
        "id": 1,
        "name": "Иван Иванов",
        "password": "0000",
        "info": {
            "age": 22,
            "sex": "male",
        },
        "places": {
            "restrict": [
                "Ufa",
                "Lipetzk"
            ],
            "fav": [
                "Kazan",
                "Ekaterinburg"
            ]
        },
        "preferences": [
            {
                "architecture": 50,
                "water":        20,
                "modern":       40,
                "people":       20
            }
        ]
    }
]

export function findUserById(userId) {
    return users.find((user) => user.id === userId);
}

export function findUserByProperty(property, value) {
    return users.find((user) => user[property] === value);
}