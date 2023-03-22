<script setup>
const config = useAppConfig().exactproDocs

useHead({
  titleTemplate: (title) => {
    if (title) return `${title} | ${config.title}`
    return title
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
