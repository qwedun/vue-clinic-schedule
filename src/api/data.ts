import type { ClinicSchedule } from './types'

export const mocked_data: ClinicSchedule = {
  startsOn: 9,
  endsOn: 21,
  doctors: [
    {
      id: 1,
      name: 'Семен Лобанов',
      startsOn: 11,
      endsOn: 20,
      img: 'https://citaty.info/files/portraits/semen-lobanov_0.jpg',
      profession: 'Интерн',
      availableOperations: [
        { name: 'Базовое обследование', requiredTime: 1 },
        { name: 'Консультация пациента', requiredTime: 2 },
        { name: 'Контрольное обследование', requiredTime: 1 },
      ],
      schedule: [
        { startsOn: 9, endsOn: 11, type: 'unavailable' },
        { startsOn: 11, endsOn: 13, type: 'available' },
        { startsOn: 13, endsOn: 14, type: 'lunch' },
        { startsOn: 14, endsOn: 15, type: 'operation' },
        { startsOn: 15, endsOn: 20, type: 'available' },
        { startsOn: 20, endsOn: 21, type: 'unavailable' },
      ],
    },
    {
      id: 2,
      name: 'Андрей Быков',
      startsOn: 9,
      endsOn: 18,
      img: 'https://tnt-online.ru/storage/media/30860/conversions/N52qXbwPtFVaFZQC7jjx0gQz5WFUgPEXowLAN3Dp-optimized_orig.jpeg',
      profession: 'Зав. отделения',
      availableOperations: [
        { name: 'Сложная операция', requiredTime: 3 },
        { name: 'Консультация', requiredTime: 1 },
        { name: 'Послеоперационный осмотр', requiredTime: 2 },
        { name: 'Диагностика', requiredTime: 1 },
      ],
      schedule: [
        { startsOn: 9, endsOn: 12, type: 'available' },
        { startsOn: 12, endsOn: 13, type: 'lunch' },
        { startsOn: 13, endsOn: 16, type: 'operation' },
        { startsOn: 16, endsOn: 18, type: 'available' },
        { startsOn: 18, endsOn: 21, type: 'unavailable' },
      ],
    },
    {
      id: 3,
      name: 'Иван Купитман',
      startsOn: 10,
      endsOn: 19,
      img: 'https://kulturologia.ru/files/u30260/3026035520.png',
      profession: 'Нарколог',
      availableOperations: [
        { name: 'Психиатрическая консультация', requiredTime: 1 },
        { name: 'Диагностика зависимости', requiredTime: 2 },
        { name: 'Семейная терапия', requiredTime: 1 },
      ],
      schedule: [
        { startsOn: 9, endsOn: 10, type: 'unavailable' },
        { startsOn: 10, endsOn: 13, type: 'available' },
        { startsOn: 13, endsOn: 14, type: 'lunch' },
        { startsOn: 14, endsOn: 17, type: 'available' },
        { startsOn: 17, endsOn: 19, type: 'operation' },
        { startsOn: 19, endsOn: 21, type: 'unavailable' },
      ],
    },
    {
      id: 4,
      name: 'Варвара Черноус',
      startsOn: 9,
      endsOn: 17,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4k_dnlkU94bvskHqm6xzowQO2uLB7qALJiw&s',
      profession: 'Интерн',
      availableOperations: [
        { name: 'Первичный приём', requiredTime: 1 },
        { name: 'Плановая консультация', requiredTime: 2 },
        { name: 'Диагностика', requiredTime: 1 },
      ],
      schedule: [
        { startsOn: 9, endsOn: 12, type: 'available' },
        { startsOn: 12, endsOn: 13, type: 'lunch' },
        { startsOn: 13, endsOn: 16, type: 'available' },
        { startsOn: 16, endsOn: 17, type: 'operation' },
        { startsOn: 17, endsOn: 21, type: 'unavailable' },
      ],
    },
    {
      id: 5,
      name: 'Глеб Романенко',
      startsOn: 10,
      endsOn: 19,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVIisC29WXxPv4nzTYVcs6JTus6VLd6MZ0rQ&s',
      profession: 'Интерн',
      availableOperations: [
        { name: 'Базовое обследование', requiredTime: 1 },
        { name: 'Дополнительная консультация', requiredTime: 2 },
        { name: 'Медицинская диагностика', requiredTime: 1 },
      ],
      schedule: [
        { startsOn: 9, endsOn: 10, type: 'unavailable' },
        { startsOn: 10, endsOn: 13, type: 'available' },
        { startsOn: 13, endsOn: 14, type: 'lunch' },
        { startsOn: 14, endsOn: 15, type: 'operation' },
        { startsOn: 15, endsOn: 19, type: 'available' },
        { startsOn: 19, endsOn: 21, type: 'unavailable' },
      ],
    },
    {
      id: 6,
      name: 'Анастасия Кисегач',
      startsOn: 9,
      endsOn: 18,
      img: 'https://fc-fan.at.ua/personagy/IMG8.jpg',
      profession: 'Главврач',
      availableOperations: [
        { name: 'Стратегическая консультация', requiredTime: 2 },
        { name: 'Медосмотр', requiredTime: 1 },
        { name: 'Планирование лечения', requiredTime: 2 },
        { name: 'Контроль состояния пациента', requiredTime: 1 },
      ],
      schedule: [
        { startsOn: 9, endsOn: 11, type: 'available' },
        { startsOn: 11, endsOn: 12, type: 'operation' },
        { startsOn: 12, endsOn: 13, type: 'lunch' },
        { startsOn: 13, endsOn: 16, type: 'available' },
        { startsOn: 16, endsOn: 18, type: 'operation' },
        { startsOn: 18, endsOn: 21, type: 'unavailable' },
      ],
    },
    {
      id: 7,
      name: 'Илья Левин',
      startsOn: 9,
      endsOn: 18,
      img: 'https://www.eg.ru/wp-content/uploads/2020/10/rg375114243.jpg',
      profession: 'Интерн',
      availableOperations: [
        { name: 'Диагностика сложных случаев', requiredTime: 3 },
        { name: 'Консультация', requiredTime: 1 },
        { name: 'Профилактический осмотр', requiredTime: 2 },
        { name: 'Анализ результатов', requiredTime: 1 },
      ],
      schedule: [
        { startsOn: 9, endsOn: 11, type: 'available' },
        { startsOn: 11, endsOn: 12, type: 'operation' },
        { startsOn: 12, endsOn: 13, type: 'lunch' },
        { startsOn: 13, endsOn: 15, type: 'available' },
        { startsOn: 15, endsOn: 17, type: 'operation' },
        { startsOn: 17, endsOn: 18, type: 'available' },
        { startsOn: 18, endsOn: 21, type: 'unavailable' },
      ],
    },
  ],
}
