import type { DoctorSchedule } from '@/api/types'

export const TYPE_CONVERTER: Record<string, string> = {
  available: 'Запись возможна!',
  unavailable: 'Врача нет на месте',
  lunch: 'Обеденный перерыв',
  operation: 'Врач принимает пациента',
}

export function getAvailableSlots(schedule: DoctorSchedule[], duration: number): string[] {
  const slots: string[] = []

  schedule
    .filter((el) => el.type === 'available')
    .forEach((el) => {
      const length = el.endsOn - el.startsOn
      for (let start = el.startsOn; start + duration <= el.endsOn; start++) {
        const end = start + duration
        slots.push(`${start}:00-${end}:00`)
      }
    })

  return slots
}

export function insertOperation(
  schedule: DoctorSchedule[],
  time: string,
  duration: number,
): DoctorSchedule[] {
  const start = parseInt(time.split(':')[0])
  const end = start + duration
  const newSchedule: DoctorSchedule[] = []

  for (const interval of schedule) {
    if (interval.type === 'available' && start >= interval.startsOn && end <= interval.endsOn) {
      if (interval.startsOn < start) {
        pushInterval(newSchedule, {
          startsOn: interval.startsOn,
          endsOn: start,
          type: 'available',
        })
      }

      pushInterval(newSchedule, {
        startsOn: start,
        endsOn: end,
        type: 'operation',
      })

      if (end < interval.endsOn) {
        pushInterval(newSchedule, {
          startsOn: end,
          endsOn: interval.endsOn,
          type: 'available',
        })
      }
    } else {
      pushInterval(newSchedule, interval)
    }
  }

  return newSchedule
}

function pushInterval(schedule: DoctorSchedule[], interval: DoctorSchedule) {
  const last = schedule[schedule.length - 1]

  if (
    last &&
    last.type === 'operation' &&
    interval.type === 'operation' &&
    last.endsOn === interval.startsOn
  ) {
    last.endsOn = interval.endsOn
  } else {
    schedule.push(interval)
  }
}
