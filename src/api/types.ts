export type ClinicSchedule = {
  startsOn: number
  endsOn: number
  doctors: Doctor[]
}
export type Doctor = {
  id: number
  name: string
  startsOn: number
  endsOn: number
  profession: string
  img: string
  availableOperations: Operation[]
  schedule: DoctorSchedule[]
}

export type DoctorSchedule = {
  startsOn: number
  endsOn: number
  type: ScheduleType
}

export type Operation = {
  name: string
  requiredTime: number
}

type ScheduleType = 'lunch' | 'operation' | 'available' | 'unavailable'
