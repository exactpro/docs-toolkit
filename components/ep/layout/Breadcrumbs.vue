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
  <nav v-if="breadcrumbs" class="mb-4 flex flex-wrap items-center gap-x-2">
    <NuxtLink
      class="border border-solid rounded text-gray-600 border-gray-600 hover:border-accent-600 hover:text-accent-600 transition-colors p-1 inline-flex"
      to="/"
    >
      <Icon name="heroicons:home-20-solid" size="1.2em" />
    </NuxtLink>
    <Icon name="heroicons:chevron-right" />

    <template v-for="(crumb, index) in breadcrumbs" :key="crumb._path">
      <template v-if="index < breadcrumbs.length - 1">
        <NuxtLink class="underline text-accent-600" :to="crumb.path">
          {{ crumb.title }}
        </NuxtLink>
        <Icon name="heroicons:chevron-right" />
      </template>
      <span v-else>
        {{ crumb.title }}
      </span>
    </template>
  </nav>
</template>

<script>
export default {
  props: {
    breadcrumbs: {
      type: Array,
      required: true
    }
  }
}
</script>
