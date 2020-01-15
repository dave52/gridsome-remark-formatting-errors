<template>
  <zui-shell :app-name="$static.metadata.siteName" no-scroll-animation>
    <zui-shell-topbar no-scroll-animation>
      <zui-logo slot="logo"></zui-logo>
      <zui-search></zui-search>
    </zui-shell-topbar>
    <zui-shell-nav>
      <zui-shell-nav-item>
        <zui-icon icon="zui-nav-home" slot="icon"></zui-icon>
        <g-link to="/">Home</g-link>
      </zui-shell-nav-item>
      <zui-shell-nav-item expanded subnav>
        <zui-icon icon="zui-nav-developers" slot="icon"></zui-icon>
        <span>Developers</span>
        <g-link to="/developers/developing-zui" slot="subnav">Developing ZUI</g-link>
      </zui-shell-nav-item>
    </zui-shell-nav>
    <zui-shell-content>
      <div class="layout">
        <header class="header">
          <strong>
            <g-link to="/">{{ $static.metadata.siteName }}</g-link>
          </strong>
          <nav class="nav">
            <g-link class="nav__link" to="/">Home</g-link>
            <g-link class="nav__link" to="/developers/">Developers</g-link>
          </nav>
        </header>
        <transition name="fade" enter>
          <main>
            <router-view />
          </main>
        </transition>
      </div>
    </zui-shell-content>
    <zui-shell-footer>
      <div>
        &copy; 1995 - {{ }} /add date/ Zywave, Inc. All rights reserved.
      </div>
      <a class="zui-link" target="_blank" href="http://www.zywave.com/terms-conditions/">Terms and Conditions</a>
      <a class="zui-link" target="_blank" href="http://www.zywave.com/privacy-statement/">Privacy Statement</a>
      <a class="zui-link" target="_blank" href="http://www.zywave.com/dmca-notice/">DMCA</a></div>
      <a class="zui-link" target="_blank" href="http://www.zywave.com/cookie-usage/">Cookie Usage</a>
      <a class="zui-link" href="mailto:support@zywave.com">Contact</a>
      </zui-shell-footer>
  </zui-shell>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<page-query>
  query {
    allMarkDown {
      edges
      {
        node {
          title
          
          fileInfo {
            directory
            path
            name
          }
        }
      }
    }
  }
</page-query>

<script>
export default {
  methods: {
    created() {
      console.log($page);
    }
  }
}
</script>

<style>

.fade-enter {
  opacity: 0;
}

.fade-enter-active{
  transition: 1s ease opacity;
}


body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
