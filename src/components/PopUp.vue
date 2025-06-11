<template>
  <div class="popup">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import { TYPE_CONVERTER } from '@/helpers/helpers'

const { type } = defineProps<{
  type: string
}>()

const text = TYPE_CONVERTER[type]
</script>

<style scoped>
.popup {
  position: absolute;
  top: -35px;
  background-color: var(--primary);
  color: var(--muted);
  white-space: nowrap;
  padding: 5px 10px;
  border-radius: 5px;
  left: 50%;
  transform: translate(-50%);
}
.popup::after {
  position: absolute;
  display: block;
  content: '';
  width: 10px;
  height: 10px;
  background-color: var(--primary);
  left: 50%;
  transform: translate(-50%);
  transform: rotate(45deg);
}
</style>
