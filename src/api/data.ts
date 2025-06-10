import type { ClinicSchedule } from "./types";

export const mocked_data: ClinicSchedule = {
    startsOn: '9:00',
    endsOn: '21:00',
    doctors: [
        {
            id: 1,
            name: 'Семен Лобанов',
            startsOn: '11:00',
            endsOn: '20:00',
            img: 'https://static.wikia.nocookie.net/interny/images/2/28/72874deacb3d8d75d834c4e33130993c.jpg.jpg/revision/latest?cb=20121230134818&path-prefix=ru',
            profession: 'Интерн',
            availableOperations: [
                { name: 'Базовое обследование', requiredTime: '1' }
            ],
            schedule: [
                { startsOn: '9:00', endsOn: '11:00', type: 'unavailable' },
                { startsOn: '11:00', endsOn: '13:00', type: 'available' },
                { startsOn: '13:00', endsOn: '14:00', type: 'lunch' },
                { startsOn: '14:00', endsOn: '15:00', type: 'operation' },
                { startsOn: '15:00', endsOn: '20:00', type: 'available' },
                { startsOn: '20:00', endsOn: '21:00', type: 'unavailable' }
            ]
        },
        {
            id: 2,
            name: 'Андрей Быков',
            startsOn: '9:00',
            endsOn: '18:00',
            img: 'https://static.wikia.nocookie.net/interny/images/a/a8/409106ddab4b4a832995a23a213b5c2b.jpg/revision/latest/scale-to-width-down/1000?cb=20250305143958&path-prefix=ru',
            profession: 'Заведующий отделением',
            availableOperations: [
                { name: 'Сложная операция', requiredTime: '3' },
                { name: 'Консультация', requiredTime: '1' }
            ],
            schedule: [
                { startsOn: '9:00', endsOn: '12:00', type: 'available' },
                { startsOn: '12:00', endsOn: '13:00', type: 'lunch' },
                { startsOn: '13:00', endsOn: '16:00', type: 'operation' },
                { startsOn: '16:00', endsOn: '18:00', type: 'available' },
                { startsOn: '18:00', endsOn: '21:00', type: 'unavailable' }
            ]
        },
        {
            id: 3,
            name: 'Иван Купитман',
            startsOn: '10:00',
            endsOn: '19:00',
            img: 'https://static.wikia.nocookie.net/interny/images/d/dc/Intern.jpg/revision/latest?cb=20130209202150&path-prefix=ru',
            profession: 'Нарколог',
            availableOperations: [
                { name: 'Психиатрическая консультация', requiredTime: '1' }
            ],
            schedule: [
                { startsOn: '9:00', endsOn: '10:00', type: 'unavailable' },
                { startsOn: '10:00', endsOn: '13:00', type: 'available' },
                { startsOn: '13:00', endsOn: '14:00', type: 'lunch' },
                { startsOn: '14:00', endsOn: '17:00', type: 'available' },
                { startsOn: '17:00', endsOn: '19:00', type: 'operation' },
                { startsOn: '19:00', endsOn: '21:00', type: 'unavailable' }
            ]
        },
        {
            id: 4,
            name: 'Варвара Черноус',
            startsOn: '9:00',
            endsOn: '17:00',
            img: 'https://static.wikia.nocookie.net/interny/images/9/98/Interny19.jpg/revision/latest?cb=20121230134518&path-prefix=ru',
            profession: 'Терапевт',
            availableOperations: [
                { name: 'Первичный приём', requiredTime: '1' }
            ],
            schedule: [
                { startsOn: '9:00', endsOn: '12:00', type: 'available' },
                { startsOn: '12:00', endsOn: '13:00', type: 'lunch' },
                { startsOn: '13:00', endsOn: '16:00', type: 'available' },
                { startsOn: '16:00', endsOn: '17:00', type: 'operation' },
                { startsOn: '17:00', endsOn: '21:00', type: 'unavailable' }
            ]
        },
        {
            id: 5,
            name: 'Глеб Романенко',
            startsOn: '10:00',
            endsOn: '19:00',
            img: 'https://static.wikia.nocookie.net/interny/images/9/98/Glinnikov-3.jpg/revision/latest?cb=20121230133200&path-prefix=ru',
            profession: 'Интерн',
            availableOperations: [
                { name: 'Базовое обследование', requiredTime: '1' }
            ],
            schedule: [
                { startsOn: '9:00', endsOn: '10:00', type: 'unavailable' },
                { startsOn: '10:00', endsOn: '13:00', type: 'available' },
                { startsOn: '13:00', endsOn: '14:00', type: 'lunch' },
                { startsOn: '14:00', endsOn: '15:00', type: 'operation' },
                { startsOn: '15:00', endsOn: '19:00', type: 'available' },
                { startsOn: '19:00', endsOn: '21:00', type: 'unavailable' }
            ]
        },
        {
            id: 6,
            name: 'Анастасия Кисегач',
            startsOn: '9:00',
            endsOn: '18:00',
            img: 'https://fc-fan.at.ua/personagy/IMG8.jpg',
            profession: 'Главврач',
            availableOperations: [
                { name: 'Стратегическая консультация', requiredTime: '2' },
                { name: 'Медосмотр', requiredTime: '1' }
            ],
            schedule: [
                { startsOn: '9:00', endsOn: '11:00', type: 'available' },
                { startsOn: '11:00', endsOn: '12:00', type: 'operation' },
                { startsOn: '12:00', endsOn: '13:00', type: 'lunch' },
                { startsOn: '13:00', endsOn: '16:00', type: 'available' },
                { startsOn: '16:00', endsOn: '18:00', type: 'operation' },
                { startsOn: '18:00', endsOn: '21:00', type: 'unavailable' }
            ]
        },
        {
            id: 7,
            name: 'Илья Левин',
            startsOn: '9:00',
            endsOn: '18:00',
            img: 'https://upload.wikimedia.org/wikipedia/ru/6/6a/Ilya_Levin.jpg',
            profession: 'Интерн',
            availableOperations: [
                { name: 'Диагностика сложных случаев', requiredTime: '2' },
                { name: 'Консультация', requiredTime: '1' }
            ],
            schedule: [
                { startsOn: '9:00', endsOn: '11:00', type: 'available' },
                { startsOn: '11:00', endsOn: '12:00', type: 'operation' },
                { startsOn: '12:00', endsOn: '13:00', type: 'lunch' },
                { startsOn: '13:00', endsOn: '15:00', type: 'available' },
                { startsOn: '15:00', endsOn: '17:00', type: 'operation' },
                { startsOn: '17:00', endsOn: '18:00', type: 'available' },
                { startsOn: '18:00', endsOn: '21:00', type: 'unavailable' }
            ]
        }
    ]
};
