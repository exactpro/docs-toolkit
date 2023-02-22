<template>
  <Header class="fixed z-30" v-model:show-content-tree="showContentTree" />
  <div class="pt-24 flex mx-auto w-fit flex-col-reverse md:flex-row">
    <aside class="w-72 px-3 fixed z-20 h-full bg-neutral-50 top-0 transition-all md:h-auto md:relative md:bg-inherit md:left-0" 
			:class="{
				'-left-72': !showContentTree,
				'left-0': showContentTree
			}">
      <nav class="sticky top-32 overflow-hidden	">
        <ContentNavigation v-slot="{ navigation }">
					<ul>
						<ContentNavigationItem v-for="navItem in navigation" :key="navItem._path"
																	 :nav-item="navItem" />
					</ul>
        </ContentNavigation>
      </nav>
    </aside>
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10 transition-all md:hidden" 
          :class="{
            'translate-x-full': !showContentTree
          }"
          @click="showContentTree = false" />
    <main>
      <LazyClientOnly>
        <TermPopup class="z-10" />
      </LazyClientOnly>
      <slot />
    </main>
    <aside class="px-4 md:px-0 md:w-72" >
      <nav class="md:sticky md:z-0 md:top-32 md:overflow-hidden	" v-if="toc">
        <h1 class="text-neutral-500 mb-2" v-if="toc.links.length">On this page:</h1>
        <TableOfContents :toc="toc" />
      </nav>
      <hr class="mt-5 md:hidden" />
    </aside>
  </div>

</template>

<script lang="ts">
import Header from '~~/components/layout/Header.vue';
import ContentNavigationItem from '~~/components/layout/ContentNavigationItem.vue';
import TableOfContents from '~~/components/layout/TableOfContents.vue';
import TermPopup from '../layout/TermPopup.vue';

export default defineComponent({
  name: 'DocsLayout',
  components: {
    Header, ContentNavigationItem, TableOfContents, TermPopup
  },
  setup() {
    const toc = useToc()

    return {
      toc,
			showContentTree: useShowContentTree()
    }
  }
})

</script>