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
let contacts = config.exactproDocs.contacts
type Contact = (typeof config.exactproDocs.contacts)[number]

if (!contacts?.length) {
  contacts = [
    {
      contact: 'docops@exactpro.com',
      type: 'email'
    },
    {
      contact: 'info@exactpro.com',
      type: 'email'
    },
    {
      contact: '+4402033191644',
      type: 'phone'
    },
    {
      contact: '+16463403000',
      type: 'phone'
    }
  ]
}

function getContactIcon(contact: Contact) {
  if (contact.type === 'email') {
    return 'heroicons:envelope'
  }
  return 'heroicons:phone'
}

function getContactLink(contact: Contact) {
  if (contact.type === 'email') {
    return `mailto:${contact.contact}`
  }
  return `tel:${contact.contact}`
}
</script>

<template>
  <ul class="flex flex-col justify-center m-1">
    <li v-for="(contact, index) in contacts" :key="index">
      <a :href="getContactLink(contact)"
        ><Icon
          :name="getContactIcon(contact)"
          size="1.5em"
          class="inline-block mr-3"
        />{{ contact.contact }}</a
      >
    </li>
  </ul>
</template>
