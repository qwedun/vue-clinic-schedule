<template>
  <Teleport to="body">
    <div class="container" @click="disableModal">
      <section class="modal" @click.stop>
        <div class="close" @click="disableModal">✕</div>
        <h2>Запись на прием</h2>

        <div>Врач: {{ doctor!.name }}</div>

        <Options
          v-if="doctor"
          v-model="currentOperation"
          :options="operations"
          :current-operation="currentOperation"
          placeholder="Выберите процедуру"
        />

        <div v-if="currentDuration">Длительность процедуры: {{ currentDuration }} ч</div>

        <div v-if="filtered.length === 0 && currentOperation" class="warning">
          ⚠︎ На эту процедуру нет свободного времени
        </div>

        <Options
          v-if="doctor"
          v-model="currentTime"
          :options="filtered"
          :current-time="currentTime"
          placeholder="Выберите время"
        />

        <button
          @click="handleClick"
          class="button"
          :class="{ disabled: isButtonDisabled }"
          :disabled="isButtonDisabled"
        >
          Записаться
        </button>
      </section>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { watch, ref, computed } from 'vue'
import { getAvailableSlots, insertOperation } from '@/helpers/helpers'
import { useScheduleStore } from '@/store/store'
import Options from './Options.vue'

const { id, disableModal } = defineProps<{
  disableModal: () => void
  id: number
}>()

const currentOperation = ref('')
const currentTime = ref('')
const currentDuration = ref()

const store = useScheduleStore()

const doctor = store.doctor(id)
const operations = doctor!.availableOperations.map((el) => el.name)

const filtered = computed(() => getAvailableSlots(doctor!.schedule, currentDuration.value))
const isButtonDisabled = computed(() => !(currentTime.value && currentOperation.value))

watch(currentOperation, () => {
  const time = doctor!.availableOperations.find(
    (operation) => operation.name === currentOperation.value,
  )?.requiredTime

  currentDuration.value = time
  currentTime.value = ''
})

const handleClick = () => {
  const updated = insertOperation(doctor!.schedule, currentTime.value, currentDuration.value)

  store.updateDoctorSchedule(id, updated)
  disableModal()
}
</script>

<style scoped>
.container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-width: 100wh;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal {
  padding: 10px;
  border-radius: 10px;
  width: 400px;
  height: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  background-color: var(--muted);
}
.warning {
  padding: 5px;
}
.close {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  cursor: pointer;
}
.button {
  padding: 10px;
  border-radius: 5px;
  background-color: var(--primary);
  color: var(--muted);
  cursor: pointer;
}
.disabled {
  opacity: 0.8;
  cursor: default;
}
</style>
