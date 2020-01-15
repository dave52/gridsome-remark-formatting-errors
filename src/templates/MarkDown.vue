<template>
  <Layout>
    <section class="zui-layout zui-layout--slim">
      <h1>{{ $page.markDown.title }}</h1>
      <h2 v-if="$page.markDown.subtitle">{{ $page.markDown.subtitle }}</h2>
      <div v-if="hasToolkitTab()">
        <zui-tabs :selected="selected">
          <zui-tab v-for="(item, index) in tabs" @click="changeTab(index)" :key="item.name">{{ item.name }}</zui-tab>
        </zui-tabs>
        <zui-pages class="zui-layout" :selected="selected">
          <section>
            <VueRemarkContent />
          </section>
          <section>
            <api-viewer :src="pathCustomElementJson"></api-viewer>
          </section>
        </zui-pages>
      </div>
      <VueRemarkContent v-else />
    </section>
  </Layout>
</template>

<page-query>
query ($path: String!) {
  markDown (path: $path) {
    id
    title
    subtitle
    content
    component
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
    data() {
      return {
        selected: 0,
        tabs: [ { name: 'Dev' }, { name: 'Toolkit' }]
      }
    },
    methods: {
      hasToolkitTab: function() {
        return this.$page.markDown.component.length > 0 ? true : false;
      },
      changeTab: function(index) {
        this.selected = index;
      }
    },
    computed: {
      pathCustomElementJson: function() {
        return `/custom-elements-json/${this.$page.markDown.component}.json`;
      }
    }
  }
</script>
