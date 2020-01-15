<template>
    <div class="spacer" :class="size"></div>
</template>
<style lang="scss" scoped>
    .spacer {
        display: block;
        width: 100%;
        height: 1.875rem;
        transition: height 100ms ease-in-out;

        @media (min-width: 960px) {
            height: 3.75rem;
        }

        @media (min-width: 1024px) {
            height: 5.625rem;
        }

        &.small {
            height: 0.9375rem;

            @media (min-width: 960px) {
                height: 1.25rem;
            }

            @media (min-width: 1024px) {
                height: 2.8125rem;
            }
        }
    }
</style>
<script>
    export default {
        props: {
            size: {
                type: String,
                required: false,
                default: null
            }
        }
    }
</script>