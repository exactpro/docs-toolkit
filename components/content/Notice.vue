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

<template>
  <div class="default" :class="mode">
    <slot />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Notice',
  props: {
    note: Boolean,
    info: Boolean,
    warning: Boolean
  },
  setup(props) {
    return {
      mode: props.note
        ? ('note' as const)
        : props.info
        ? ('info' as const)
        : props.warning
        ? ('warning' as const)
        : ''
    }
  }
})
</script>

<style scoped>
.default {
  @apply border border-l-8 px-3 rounded-md;
}

.note {
  @apply bg-yellow-50 border-yellow-600;
}

.info {
  @apply bg-blue-50 border-accent;
}

.warning {
  @apply bg-error-50 border-error;
}
</style>
