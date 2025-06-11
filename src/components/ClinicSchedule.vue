<template>
  <section>
    <div class="flex margin">
      <div class="width centered">Доктор</div>
      <div class="grow-grid" :style="styleObject">
        <div v-for="hour in hours">{{ hour }}:00</div>
      </div>
      <div>Запись</div>
    </div>
    <DoctorSchedule
      v-for="doctor in schedule.doctors"
      :key="doctor.id"
      :id="doctor.id"
      :style="styleObject"
      :clinicStartsOn="schedule.startsOn"
    />
  </section>
</template>

<script setup lang="ts">
import DoctorSchedule from './DoctorSchedule.vue'
import { useScheduleStore } from '@/store/store'
import { computed } from 'vue'

const store = useScheduleStore()
const schedule = computed(() => store.clinicSchedule)

const columnCount = schedule.value.endsOn - schedule.value.startsOn
const styleObject = { gridTemplateColumns: `repeat(${columnCount}, 1fr)` }

const hours = Array.from({ length: columnCount }, (_, i) => schedule.value.startsOn + i)
</script>

<style>
.centered {
  display: flex;
  justify-content: center;
}
.flex {
  display: flex;
}
.grow-grid {
  flex-grow: 1;
  display: grid;
  gap: 3px;
  align-items: center;
}

.width {
  min-width: var(--width);
}
.margin {
  margin-bottom: 10px;
}
</style>
