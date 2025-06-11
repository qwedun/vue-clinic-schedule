<template>
  <div class="options">
    <div @click="isOptionsVisible = !isOptionsVisible">
      {{ currentOperation || currentTime || placeholder }}
      <span class="right">
        {{ isOptionsVisible ? '▲' : '▼' }}
      </span>
    </div>
    <div v-if="isOptionsVisible" class="absolute">
      <div v-for="option in options" @click="() => handleClick(option)" class="option">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { options } = defineProps<{
  currentOperation?: string
  currentTime?: string
  options: string[]
  placeholder: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const isOptionsVisible = ref(false)

const handleClick = (option: string) => {
  emit('update:modelValue', option)
  isOptionsVisible.value = false
}
</script>

<style scoped>
.options {
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 10px 0;
  position: relative;
  cursor: pointer;
}
.option {
  margin: 10px 0;
}
.right {
  position: absolute;
  right: 10px;
}
.absolute {
  position: absolute;
  z-index: 100;
  width: 100%;
  left: 0;
  padding: 0 10px;
  background-color: var(--muted);
}
</style>
