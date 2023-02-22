<template>
  <header class="w-full backdrop-blur">
    <div class="relative">
      <div class="bg-[url('~/assets/img/bg.png')] bg-cover absolute opacity-80 h-full w-full -z-10"></div>
      <div class="w-full flex justify-between items-center px-2 md:px-4">
        <div class="flex items-center">
          <button @click="$emit('update:showContentTree', !showContentTree)" 
                  class="w-7 h-w-7 text-tertiary-50 md:hidden">
            <IconsXMark class="w-full h-full" v-if="showContentTree" />
            <IconsBars3 class="w-full h-full" v-else />
          </button>
          <NuxtLink to="/" class="flex items-center w-fit">
            <img src="~/assets/img/logo.png" class="mb-2" />
            <span class="px-2 py-1 rounded-lg bg-primary-900 text-gray-50 font-semibold text-sm">
              Docs
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default defineComponent({
  name: "Header",
  props: {
    showContentTree: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    'update:showContentTree'(payload: boolean) {
      return typeof payload === 'boolean'
    }
  }
})
</script>