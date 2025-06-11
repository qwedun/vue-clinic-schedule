import { defineStore } from 'pinia'
import { mocked_data } from '@/api/data'
import type { ClinicSchedule, DoctorSchedule } from '@/api/types'
import { ref } from 'vue'

export const useScheduleStore = defineStore('clinicSchedule', () => {
  const clinicSchedule = ref<ClinicSchedule>(mocked_data)

  const doctor = (id: number) => clinicSchedule.value.doctors.find((doctor) => doctor.id === id)

  function updateDoctorSchedule(id: number, newDoctorSchedule: DoctorSchedule[]) {
    const doc = doctor(id)
    doc!.schedule = newDoctorSchedule
  }

  return { clinicSchedule, updateDoctorSchedule, doctor }
})
