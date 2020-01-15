<template>
  <Layout>
    <section class="zui-layout zui-layout--slim">
      <h1>{{ $page.customElementsJson.fileInfo.name }}</h1>
      <api-viewer :src="pathCustomElementJson"></api-viewer>
    </section>
  </Layout>
</template>

<page-query>
query ($path: String!) {
  customElementsJson (path: $path) {
    id
    fileInfo {
      name
    }
  }
}
</page-query>

<style lang="scss" scoped>
</style>


<script>
import { ApiViewer } from 'api-viewer-element';

export default {
    metaInfo: {
        title: 'Dev docs'
    },
    computed: {
      pathCustomElementJson: function () {
        return `/custom-elements-json/${this.$page.customElementsJson.fileInfo.name}.json`;
      } 
    }
}
</script>
