<script setup lang="ts">
import { filename } from 'pathe/utils'
import fallbackLogo from '~/assets/img/exactpro-logo.svg'

const glob = import.meta.glob<{ default: string }>('~/assets/theme/logo.*', {
  eager: true
})
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)

const logo = images.logo || fallbackLogo
</script>

<template>
  <img :src="logo" class="w-40 h-16" />
</template>
