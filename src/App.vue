<template>
  <main>
    <h1>Расписание клиники</h1>
    <ClinicSchedule />
  </main>
</template>

<script setup lang="ts">
import ClinicSchedule from './components/ClinicSchedule.vue'
</script>

<style>
:root {
  --width: 220px;

  --muted: hsl(210, 40%, 96.1%);
  --muted-foreground: hsl(215.4, 16.3%, 46.9%);

  --primary: hsl(222.2, 47.4%, 11.2%);
  --primary-foreground: hsl(210, 40%, 98%);

  --font-size-base: 14px;
  --font-size-small: 12px;
  --font-size-lg: 16px;
  --font-size-title: 24px;
}

* {
  padding: 0;
  margin: 0;
  border: none;

  color: var(--primary);

  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

main {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 10px;
}
</style>
