export const places = [
    {
        "name": "Ижевск",
        "id": "Izhevsk",
        "type": "city",
        "country": "Russia",
        "location": [55.796289, 49.108795],
        "preferences": [
            {
                "museims":      10,
                "architecture": 70,
                "water":         0,
                "nature":       15,
                "food":         40,
                "modern":       60,
                "history":      60,
                "people":       40
            }
        ]
    },
    {
        "name": "Казань",
        "id": "Kazan",
        "type": "city",
        "country": "Russia",
        "location": [56.852593, 53.204843],
        "preferences": [
            {
                "museims":      50,
                "architecture": 50,
                "water":         0,
                "nature":       20,
                "food":         40,
                "modern":       40,
                "history":      60,
                "people":       40
            }
        ]
    },
    {
        "name": "Пермь",
        "id": "Perm",
        "type": "city",
        "country": "Russia",
        "location": [58.010374, 56.229398],
        "preferences": [
            {
                "museims":      10,
                "architecture": 40,
                "water":         0,
                "nature":       30,
                "food":         40,
                "modern":       60,
                "history":      50,
                "people":       60
            }
        ]
    },
    {
        "name": "Челябинск",
        "id": "Chelyabinsk",
        "type": "city",
        "country": "Russia",
        "location": [55.160026, 61.402590],
        "preferences": [
            {
                "museims":      20,
                "architecture": 30,
                "water":         0,
                "nature":       40,
                "food":         40,
                "modern":       50,
                "history":      60,
                "people":       40
            }
        ]
    },
    {
        "name": "Уфа",
        "id": "Ufa",
        "type": "city",
        "country": "Russia",
        "location": [54.735147, 55.958727],
        "preferences": [
            {
                "museims":      20,
                "architecture": 30,
                "water":         0,
                "nature":       40,
                "food":         40,
                "modern":       50,
                "history":      40,
                "people":       40
            }
        ]
    },
    {
        "name": "Липецк",
        "id": "Lipetzk",
        "type": "city",
        "country": "Russia",
        "location": [52.608782, 39.599346],
        "preferences": [
            {
                "museims":      20,
                "architecture": 40,
                "water":         0,
                "nature":       40,
                "food":         50,
                "modern":       50,
                "history":      40,
                "people":       30
            }
        ]
    },
    {
        "name": "Екатеринбург",
        "id": "Ekaterinburg",
        "type": "city",
        "country": "Russia",
        "location": [56.838011, 60.597465],
        "preferences": [
            {
                "museims":      10,
                "architecture": 60,
                "water":         0,
                "nature":       10,
                "food":         40,
                "modern":       80,
                "history":      50,
                "people":       60
            }
        ]
    },
    {
        "name": "Сочи",
        "id": "Sochi",
        "type": "city",
        "country": "Russia",
        "location": [43.585525, 39.723062],
        "preferences": [
            {
                "museims":      10,
                "architecture": 30,
                "water":       100,
                "nature":       90,
                "food":         40,
                "modern":       50,
                "history":      20,
                "people":       20
            }
        ]
    },
    {
        "name": "Москва",
        "id": "Moscow",
        "type": "city",
        "country": "Russia",
        "location": [55.755814, 37.617635],
        "preferences": [
            {
                "museims":       40,
                "architecture": 100,
                "water":          0,
                "nature":        40,
                "food":          60,
                "modern":       100,
                "history":       60,
                "people":        90
            }
        ]
    },
    {
        "name": "Санкт-Петербург",
        "id": "Saint-Petersburg",
        "type": "city",
        "country": "Russia",
        "location": [59.939095, 30.315868],
        "preferences": [
            {
                "museims":       60,
                "architecture": 100,
                "water":          0,
                "nature":        40,
                "food":          60,
                "modern":        60,
                "history":       80,
                "people":        80
            }
        ]
    }
]

export function findPlaceById(placeId) {
    return places.find((place) => place.id === placeId);
}

export function findPlaceByProperty(property, value) {
    return places.find((place) => place[property] === value);
}