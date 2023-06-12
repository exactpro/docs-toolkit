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
const config = useAppConfig()

const social = config.exactproDocs.social
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <!-- GitHub -->
    <a
      v-if="!social?.github?.disabled"
      :href="social?.github?.url"
      target="_blank"
    >
      <img
        v-if="!social?.github?.customIcon"
        src="../../../assets/img/footer/github.svg"
        alt="Exactpro GitHub page"
        class="icon"
      />
      <Icon v-else class="icon" :name="social?.github?.customIcon" />
    </a>
    <!-- Facebook -->
    <a
      v-if="!social?.facebook?.disabled"
      :href="social?.facebook?.url"
      target="_blank"
    >
      <img
        v-if="!social?.facebook?.customIcon"
        src="../../../assets/img/footer/facebook.svg"
        alt="Exactpro Facebook page"
        class="icon"
      />
      <Icon v-else class="icon" :name="social?.facebook?.customIcon" />
    </a>
    <!-- Twitter -->
    <a
      v-if="!social?.twitter?.disabled"
      :href="social?.twitter?.url"
      target="_blank"
    >
      <img
        v-if="!social?.twitter?.customIcon"
        src="../../../assets/img/footer/twitter.svg"
        class="icon"
        alt="Exactpro Twitter page"
      />
      <Icon v-else class="icon" :name="social?.twitter?.customIcon" />
    </a>
    <!-- Linkedin -->
    <a
      v-if="!social?.linkedin?.disabled"
      :href="social?.linkedin?.url"
      target="_blank"
    >
      <img
        v-if="!social?.linkedin?.customIcon"
        class="icon"
        src="../../../assets/img/footer/linkedin.svg"
        alt="Exactpro LinkedIn page"
      />
      <Icon v-else class="icon" :name="social?.linkedin?.customIcon" />
    </a>
    <!-- Youtube -->
    <a
      v-if="!social?.youtube?.disabled"
      :href="social?.youtube?.url"
      target="_blank"
      ><img
        v-if="!social?.youtube?.customIcon"
        class="icon"
        src="../../../assets/img/footer/youtube.svg"
        alt="Exactpro Youtube account"
      />
      <Icon v-else class="icon" :name="social?.youtube?.customIcon" />
    </a>
  </div>
</template>

<style scoped>
.icon {
  width: 3em;
  height: 3em;
}
</style>
