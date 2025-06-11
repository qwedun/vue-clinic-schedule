<template>
  <div class="flex container">
    <div class="width flex card">
      <div class="img-wrapper">
        <img :src="img" :alt="name" class="img" />
      </div>
      <div>
        <div class="name">{{ name }}</div>
        <div class="muted">{{ workTime }}</div>
        <div class="muted">{{ profession }}</div>
      </div>
    </div>
    <div class="grow-grid" :style="style">
      <ScheduleLine
        v-for="data in schedule"
        :key="data.startsOn + data.endsOn + data.type"
        :id="id"
        :data="data"
        :clinicStartsOn="clinicStartsOn"
      />
    </div>
    <button class="button" @click="isModal = true">Запись</button>
    <Modal v-if="isModal" :disableModal="() => (isModal = false)" :id="id" />
  </div>
</template>

<script setup lang="ts">
import { type StyleValue, computed, ref } from 'vue'
import { useScheduleStore } from '@/store/store'
import Modal from './Modal.vue'
import ScheduleLine from './ScheduleLine.vue'

const { id, style, clinicStartsOn } = defineProps<{
  id: number
  style: StyleValue
  clinicStartsOn: number
}>()

const store = useScheduleStore()

const doctor = computed(() => store.doctor(id))
const schedule = computed(() => doctor.value!.schedule)
const isModal = ref(false)

const { name, startsOn, endsOn, profession, img } = doctor.value!

const workTime = `${startsOn}:00-${endsOn}:00`
</script>

<style scoped>
.card {
  border-radius: 5px;
  padding: 5px;
  background-color: var(--muted);
  margin-right: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.container {
  margin-bottom: 20px;
}
.img-wrapper {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.name {
  font-weight: bold;
}
.muted {
  color: var(--muted-foreground);
}
.button {
  display: block;
  background-color: var(--primary);
  color: var(--muted);
  padding: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  margin: 12px 0 12px 5px;
}
</style>
