<template>
  <zui-shell :app-name="$static.metadata.siteName" no-scroll-animation>
    <zui-shell-topbar no-scroll-animation>
      <zui-logo slot="logo"></zui-logo>
      <zui-search></zui-search>
    </zui-shell-topbar>
    <zui-shell-nav></zui-shell-nav>
    <zui-shell-content id="content">
      <slot/>
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
  query meta {
    metadata {
      siteName
    }
    allMarkDown(sort: [{ by: "weight", order: ASC}, { by: "title", order:ASC }]) {
      edges {
        node {
          id
          title
          icon
          weight
          parentIdentifier
          path
          fileInfo {
            directory
          }
        }
      }
    }
  }
</static-query>


<script>

  class NavItem {
    /**
    * @type {?String}
    */
    path;
    
    /**
    * @type {String}
    */
    icon;

    /**
     * @type {String}
    */
    navTitle;

    /**
    * @type {String}
    */
    pageTitle;

    /**
    * @type {Array<NavItem>}
    */
    children;

    /**
    * @type {?String}
    */
    parentIdentifier;

    /**
    * @type {?String}
    */
    weight;

    /**
    * @type {Boolean}
    */
    get isTopLevelNavItem() {
      return this.icon;
    }

    constructor(path, icon, title, parentIdentifier, weight) {
      this.path = path;
      this.icon = icon;
      this.navTitle = title;
      this.pageTitle = title;
      this.children = [];
      this.parentIdentifier = parentIdentifier;
      this.weight = weight;
    }
  }

  export default {
    mounted() {

      const markDownBlob = this.$static.allMarkDown.edges;
      const zuiShellNavEl = document.querySelector('zui-shell-nav');
      let templateFullNav = '';
      const navItems = [];

      function sortNavItems(a, b) {
        // if i.weight is null, order nulls last instead of first
        const aWeight = a.weight === null ? 9999 : a.weight;
        const bWeight = b.weight === null ? 9999 : b.weight;
        // sort by weight then by title
        if (aWeight === bWeight) {
            return a.navTitle > b.navTitle ? 1 : -1;
        } else { 
            return aWeight > bWeight ? 1 : -1;
        }
      }

      function templateNavItemWithSubnav(navItem) {
        templateFullNav += 
        `
          <zui-shell-nav-item subnav>
            <zui-icon icon="${navItem.icon}" slot="icon"></zui-icon>
            <span>${navItem.navTitle}</span>
            ${navItem.children.map(n2 => (
              `<a href="${n2.path}" slot="subnav">${n2.navTitle}</a>`
            )).join('')}
          </zui-shell-nav-item>
        `;
      }

      function templateNavItem(title, icon, path) {
        templateFullNav += 
        `
          <zui-shell-nav-item>
            <zui-icon icon="${icon}" slot="icon"></zui-icon>
            <a href="${path}">${title}</a>
          </zui-shell-nav-item>
        `;
      }

      function createNav() {

        markDownBlob.forEach(edge => {
          const item = edge.node;
          navItems.push(new NavItem(item.path, item.icon, item.title, item.parentIdentifier, item.weight));
        });

        navItems.forEach(n => {
          // if navItem is homepage (based on path) rename navTitle
          if (n.path === '/') {
            n.navTitle = 'Home';
          }
          if (!n.isTopLevelNavItem) {
            const topLevel = navItems.find(n2 => {
              if (!n2.isTopLevelNavItem) return false;
              const p = n2.path.split("/");
              return p[1].toLowerCase() === n.parentIdentifier.split(' ').join('-').toLowerCase();
            });
            if (topLevel) {
              topLevel.children.push(n);
            }
          }
        });

        const topLevelNavItems = navItems.filter(n => n.isTopLevelNavItem);

        // sort parent routes
        topLevelNavItems.sort(sortNavItems);

        // sort children routes
        topLevelNavItems.forEach(n => {
          n.children.sort(sortNavItems);
        });

        topLevelNavItems.forEach(n => {
          n.children.length > 0 ? templateNavItemWithSubnav(n) : templateNavItem(n.navTitle, n.icon, n.path);
        });

        zuiShellNavEl.innerHTML = templateFullNav;
      } // createNav()

      createNav();
    } // mounted()
  }
</script>

<style lang="scss">

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
