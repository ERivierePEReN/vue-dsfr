<script>
import { defineComponent } from 'vue'
import DsfrFileDownload from './DsfrFileDownload.vue'

export default defineComponent({
  name: 'DsfrFileDownloadList',

  components: {
    DsfrFileDownload,
  },
  props: {
    files: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

<template>
  <div class="fr-downloads-group fr-downloads-group--bordered">
    <h4 class="fr-downloads-group__title">
      Titre facultatif
    </h4>
    <ul>
      <li
        v-for="(element, idx) of files"
        :key="idx"
      >
        <DsfrFileDownload
          :title="element.title"
          :format="element.format"
          :size="element.size"
          :href="element.href"
        />
      </li>
    </ul>
  </div>
</template>

<style src="@gouvfr/dsfr/dist/component/download/download.min.css" />
