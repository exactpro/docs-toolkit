<template>
  <Head>
    <Title>{{ doc ? doc.title : '' }}</Title>
  </Head>
  <DocsLayout>
    <article class="px-4 mt-10 mb-96">
      <ContentRenderer v-if="doc && doc._type === 'markdown'" :value="doc">
        <ContentRendererMarkdown :value="doc" class="gevamu-prose" />
      </ContentRenderer>
      <div v-else-if="doc" class="gevamu-prose w-screen">
        <h1>{{ doc._dir.title }} pages</h1>
        <!-- TODO: Generate index page -->
      </div>
    </article>
  </DocsLayout>
</template>

<script lang="ts">
import DocsLayout from '../layouts/docs.vue'

export default defineComponent({
  name: 'ContentPage',
  components: {
    DocsLayout
  },
  async setup() {
    definePageMeta({
      layout: false
    })
    const route = useRoute()
    const toc = useToc()
    const { data: doc } = await useAsyncData('page-data' + route.path, () => {
      return queryContent(route.path).findOne()
    })
    toc.value = doc.value?.body?.toc ?? null

    return {
      doc
    }
  }
})
</script>

<style>
.gevamu-prose :where(h1, h2, h3, h4, h5, h6) a {
  @apply no-underline;
}
</style>
