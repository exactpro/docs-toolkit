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
  <li>
    <div
      class="w-full flex items-center pl-5 py-1 border-r-2 hover:bg-gray-50 transition-colors"
      :class="{
        'border-accent': isActive,
        'bg-tertiary-50': isExact,
        'border-accent-50': !isActive
      }"
    >
      <Icon
        v-if="haveChildren"
        name="heroicons:chevron-right"
        class="w-4 h-4 -ml-4 pr-1 transition-transform hover:cursor-pointer"
        :class="{ 'rotate-90': showChildren }"
        @click="showChildren = !showChildren"
      />
      <NuxtLink
        :to="navItem._path"
        class="w-full"
        @click="showContentTree = false"
      >
        <div>
          {{ navItem.title }}
        </div>
      </NuxtLink>
    </div>
    <ul v-show="haveChildren && showChildren">
      <ContentNavigationItem
        v-for="child in navItem.children"
        :key="child._path"
        :nav-item="child"
        :parent-path="navItem._path"
      />
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NavItem } from '@nuxt/content/dist/runtime/types'

export default defineComponent({
  name: 'ContentNavigationItem',
  props: {
    navItem: {
      type: Object as () => NavItem,
      required: true
    },
    parentPath: {
      type: String,
      default: undefined
    }
  },
  setup() {
    return {
      showChildren: ref(false),
      showContentTree: useShowContentTree()
    }
  },
  computed: {
    link(): string {
      if (this.navItem?.children?.length) {
        return this.navItem.children[0]._path
      } else {
        return this.navItem._path
      }
    },
    isActive(): boolean {
      const path = this.navItem._path
      if (path === '/') return this.$route.path === '/'
      return this.$route.path.startsWith(path)
    },
    isExact(): boolean {
      return this.$route.path === this.navItem._path
    },
    haveChildren(): boolean {
      return !!this.navItem.children && !!this.navItem.children.length
    }
  },
  created() {
    this.showChildren = this.isActive
  }
})
</script>

<style scoped>
.active {
  @apply border-r-4 border-green-400;
}

li ul {
  @apply pl-3;
}
</style>
