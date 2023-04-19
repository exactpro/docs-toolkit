<!--
  ~ Copyright 2023 Exactpro (Exactpro Systems Limited)
  ~
  ~ Licensed under the Apache License, Version 2.0 (the "License");
  ~ you may not use this file except in compliance with the License.
  ~ You may obtain a copy of the License at
  ~
  ~     http://www.apache.org/licenses/LICENSE-2.0
  ~
  ~ Unless required by applicable law or agreed to in writing, software
  ~ distributed under the License is distributed on an "AS IS" BASIS,
  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  ~ See the License for the specific language governing permissions and
  ~ limitations under the License.
  -->

<script setup lang="ts">
const { $mermaid } = useNuxtApp()

const props = defineProps<{
  code: string
}>()

const decodedCode = computed(() => {
  return atob(props.code)
})

const root = ref<HTMLElement | null>(null)
const codeBlock = ref<HTMLElement | null>(null)
const isDiagramLoading = ref(true)

async function renderMermaidDiagram() {
  isDiagramLoading.value = true
  if (codeBlock.value && $mermaid) {
    try {
      await $mermaid.run({
        nodes: [codeBlock.value],
        suppressErrors: true
      })
    } catch (e) {}

    isDiagramLoading.value = false
  }
}

onMounted(() => {
  renderMermaidDiagram()
})
</script>

<template>
  <figure ref="root" class="relative">
    <pre
      ref="codeBlock"
      style="background: none"
      :class="{
        'opacity-0': isDiagramLoading
      }"
      v-text="decodedCode"
    ></pre>
    <div>
      <div v-if="isDiagramLoading" class="absolute inset-0 font-serif">
        Mermaid diagram is loading...
      </div>
    </div>
  </figure>
</template>
