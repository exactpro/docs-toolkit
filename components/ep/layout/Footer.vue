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
  <footer class="font-sans bg-primary box-border text-white py-6 px-4">
    <div class="p-3 m-auto max-w-5xl">
      <div
        class="flex justify-between gap-3 flex-col items-center md:flex-row md:items-start"
      >
        <div class="flex flex-col items-center">
          <a href="https://exactpro.com/" target="_blank"
            ><img
              class="w-full h-auto"
              src="../../../assets/img/exactpro-logo.svg"
              alt="exactpro logo"
          /></a>
          <span>Build Software to Test Software</span>
        </div>

        <!-- Contact Us -->
        <div class="flex flex-col items-center md:items-start">
          <h2 class="e-footer__h2">Contact Us</h2>
          <hr class="e-footer__hr" />
          <EpLayoutFooterContacts class="pt-2" />
        </div>

        <div class="flex flex-col items-center md:items-start">
          <h2 class="e-footer__h2">Follow Us</h2>
          <hr class="e-footer__hr" />
          <EpLayoutFooterSocial class="pt-2" />
        </div>
      </div>
      <hr
        class="my-12 w-full h-0 border-neutral-400 border-0 border-t-[thin]"
      />
      <div class="my-5 text-sm text-center">
        Copyright © 2009 - 2023 Exactpro. All Rights Reserved. Exactpro refers
        to Exactpro Systems Limited, registered in England and Wales, and/or one
        of its subsidiaries, each of which is a separate legal entity,
        registered in the relevant jurisdictions.
      </div>
      <div class="flex flex-wrap justify-center underline text-sm gap-2">
        <a href="https://exactpro.com/terms-and-conditions" target="_blank"
          >Terms and Conditions</a
        >
        <a href="https://exactpro.com/privacy-policy" target="_blank"
          >Privacy Policy</a
        >
        <a href="https://exactpro.com/cookies-policy" target="_blank"
          >Cookies Policy</a
        >
      </div>
    </div>
  </footer>
</template>

<style>
.e-footer__h2 {
  @apply block font-bold text-2xl;
}

.e-footer__hr {
  @apply w-32 h-1 bg-accent rounded-full my-1 border-none;
}
</style>
