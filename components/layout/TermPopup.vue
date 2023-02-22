<template>
  <Transition name="term-popup">
    <div v-show="model.show"
      @mouseenter="onMouseEnter" @mouseleave="onMouseLeave"
      class="term-popup gevamu-prose" 
      :style="coords">
      <div class="bg-accent text-white text-right text-sm -mx-2 -mt-2 mb-2">
        <button @click="model.show = false" class="mx-1 mb-1">
          <IconsXMark class="inline-block hover:scale-150 transition-transform" />
        </button>
      </div>
      <ContentRenderer v-if="model.content" :value="model.content" >
        <ContentRendererMarkdown :value="model.content"/>
      </ContentRenderer>
      <div v-else class="text-error">
        Term is not found
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
export default defineComponent({
  name: 'TermPopup',
  setup(){
    const { model, isFocused } = useTermPopup()
    const coords = computed(() => {
      const bounds = model.value.ref?.getBoundingClientRect()
      return {
        top: (bounds?.bottom ?? 0) + window.scrollY + 5 + 'px' ,
        left: (bounds?.left ?? 0) + window.scrollX + 'px',
        transition: 'all 0.3s ease'
      }
    })
    let hideTimer: NodeJS.Timeout
    watch(isFocused, (v) => {
      if (v) {
        clearTimeout(hideTimer)
      } else {
        hideTimer = setTimeout(() => {
          if (!isFocused.value) model.value.show = false
        }, 1000)
      }
    })
    return {
      model,
      coords,
      onMouseEnter: () => {
        isFocused.value = true
      },
      onMouseLeave: () => {
        isFocused.value = false
      },
      closeContent: () => {
        model.value.show = false
      }
    }
  }
})
</script>

<style>
.term-popup {
  @apply absolute max-w-md p-2
        bg-accent-50 bg-opacity-20 backdrop-blur
        rounded-md border-accent border-2 border-t-8 
        shadow-2xl;
}
.term-popup h1 {
  @apply text-lg font-semibold;
}
</style>

<style>
.term-popup-enter-active,
.term-popup-leave-active {
  transition: opacity 0.3s ease;
}

.term-popup-enter-from,
.term-popup-leave-to {
  opacity: 0;
}
</style>