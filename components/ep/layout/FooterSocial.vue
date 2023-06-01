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
      v-if="!social?.githhub?.disabled"
      href="https://github.com/exactpro"
      target="_blank"
    >
      <img
        v-if="!social?.githhub?.customIcon"
        src="../../../assets/img/footer/github.svg"
        alt="Exactpro GitHub page"
      />
      <Icon v-else :name="social?.githhub?.customIcon" />
    </a>
    <!-- Facebook -->
    <a
      v-if="!social?.facebook?.disabled"
      href="https://www.facebook.com/exactpro/"
      target="_blank"
    >
      <img
        v-if="!social?.facebook?.customIcon"
        src="../../../assets/img/footer/facebook.svg"
        alt="Exactpro Facebook page"
      />
      <Icon v-else :name="social?.facebook?.customIcon" />
    </a>
    <!-- Twitter -->
    <a
      v-if="!social?.twitter?.disabled"
      href="https://twitter.com/exactpro"
      target="_blank"
    >
      <img
        v-if="!social?.twitter?.customIcon"
        src="../../../assets/img/footer/twitter.svg"
        size="2em"
        alt="Exactpro Twitter page"
      />
      <Icon v-else :name="social?.twitter?.customIcon" />
    </a>
    <!-- Linkedin -->
    <a
      v-if="!social?.linkedin?.disabled"
      href="https://www.linkedin.com/company/exactpro-systems-llc?trk=biz-companies-cym"
      target="_blank"
    >
      <img
        v-if="!social?.linkedin?.customIcon"
        src="../../../assets/img/footer/linkedin.svg"
        alt="Exactpro LinkedIn page"
      />
      <Icon v-else :name="social?.linkedin?.customIcon" />
    </a>
    <!-- Youtube -->
    <a
      v-if="!social?.youtube?.disabled"
      href="https://www.youtube.com/c/exactprosystems"
      target="_blank"
      ><img
        v-if="!social?.youtube?.customIcon"
        src="../../../assets/img/footer/youtube.svg"
        alt="Exactpro Youtube account"
      />
      <Icon v-else :name="social?.youtube?.customIcon" />
    </a>
  </div>
</template>
