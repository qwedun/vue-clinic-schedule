<template>
  <div
    class="line"
    :class="classObject"
    :style="styleObject"
    @click="handleClick"
    @mouseenter="() => setPopUp(true)"
    @mouseleave="() => setPopUp(false)"
  >
    <PopUp v-if="isPopUp" :type="type" />
  </div>
  <Modal :disableModal="() => (isModal = false)" v-if="isModal" :id="id" />
</template>

<script setup lang="ts">
import type { Doctor, DoctorSchedule } from '@/api/types'
import { ref, computed } from 'vue'
import PopUp from './PopUp.vue'
import Modal from './Modal.vue'

const { data, clinicStartsOn, id } = defineProps<{
  id: number
  data: DoctorSchedule
  clinicStartsOn: number
}>()

const { startsOn, endsOn, type } = data

const isAvailable = type === 'available'
const isModal = ref(false)
const isPopUp = ref(false)

const setPopUp = (value: boolean) => (isPopUp.value = value)
const setModal = (value: boolean) => (isModal.value = value)
const handleClick = () => {
  if (!isAvailable) return
  setModal(true)
}

const classObject = {
  available: type === 'available',
  lunch: type === 'lunch',
  unavailable: type === 'unavailable',
  operation: type === 'operation',
}

const styleObject = {
  gridColumn: `${startsOn - clinicStartsOn + 1} / span ${endsOn - startsOn}`,
}
</script>

<style scoped>
.available {
  background-color: green;
  cursor: pointer;
}
.lunch {
  background-color: yellow;
}
.unavailable {
  background-color: red;
}
.operation {
  background-color: grey;
}
.line {
  height: 30px;
  border-radius: 5px;
  position: relative;
}
</style>
