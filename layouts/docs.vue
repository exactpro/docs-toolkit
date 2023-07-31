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
  <div class="grid min-h-screen grid-rows-[1fr_auto]">
    <EpLayoutHeader
      v-model:show-content-tree="showContentTree"
      class="fixed z-30 print:hidden"
    />
    <div
      class="max-w-[90vw] pt-24 print:pt-0 flex md:max-w-auto mx-auto w-fit print:w-full flex-col-reverse md:grid md:max-w-screen-xl md:w-full md:grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr_auto] lg:max-w-[1200px] print:block"
    >
      <aside
        class="w-72 px-3 fixed z-20 h-full bg-neutral-50 top-0 transition-all lg:h-auto lg:relative lg:bg-inherit lg:left-0 print:hidden"
        :class="{
          '-left-72': !showContentTree,
          'left-0': showContentTree
        }"
      >
        <nav class="sticky top-32 overflow-hidden">
          <ContentNavigation v-slot="{ navigation }">
            <ul>
              <EpLayoutContentNavigationItem
                v-for="navItem in navigation"
                :key="navItem._path"
                :nav-item="navItem"
              />
            </ul>
          </ContentNavigation>
        </nav>
      </aside>
      <div
        class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10 transition-all md:hidden"
        :class="{
          'translate-x-full': !showContentTree
        }"
        @click="showContentTree = false"
      />
      <main class="overflow-auto">
        <LazyClientOnly>
          <EpLayoutTermPopup class="z-10" />
        </LazyClientOnly>
        <slot />
      </main>
      <aside class="px-4 md:px-0 md:w-72">
        <nav v-if="toc" class="md:sticky md:z-0 md:top-32 md:overflow-hidden">
          <h1 v-if="toc.links.length" class="text-neutral-500 mb-2">
            On this page:
          </h1>
          <EpLayoutTableOfContents :toc="toc" />
        </nav>
        <hr class="mt-5 md:hidden" />
      </aside>
    </div>
    <EpLayoutFooter class="print:hidden" />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'DocsLayout',
  setup() {
    const toc = useToc()

    return {
      toc,
      showContentTree: useShowContentTree()
    }
  }
})
</script>
