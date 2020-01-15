<template>
    <ul>
        <li v-for="edge in $static.allCustomElementsJson.edges">
            <a :href="getBasePath(edge.node.fileInfo.name)">{{ edge.node.fileInfo.name }}</a>
        </li>
    </ul>
</template>
<static-query>
    query {
        allCustomElementsJson(sortBy: "name") {
            edges {
                node {
                    fileInfo {
                        name
                    }
                }
            }
        }
    }
</static-query>
<style lang="scss" scoped>
    hr {
        color: red;
        background: hotpink;
    }
</style>
<script>
    export default {
        methods: {
            getBasePath(name) {
                return `/developers/${name}`;
            }
        }
    }
</script>