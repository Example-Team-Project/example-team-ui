<template>
  <q-layout view="hHh LpR fFf">
    <q-header  bordered>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <router-link to="/" class="text-white text-bold" style="text-decoration: none;">Example Team Project UI</router-link>
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Internal Links
        </q-item-label>

        <InternalLink
          v-for="link1 in internalLinks"
          :key="link1.title"
          v-bind="link1"
        />
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {defineComponent, ref} from 'vue'
import EssentialLink from 'components/navigation/EssentialLink.vue'
import InternalLink from 'components/navigation/InternalLink'
import {links} from "src/services/linksService";

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    InternalLink
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: links.essentialsLinks,
      internalLinks: links.internalLinks,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
