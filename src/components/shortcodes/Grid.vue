<template>
    <div class='grid'>
        <slot />
    </div>
</template>
<style lang="scss" scoped>
     .grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 40px;
        width: 100%;
        margin: 0 auto;
    }

    @media (min-width: 960px) {
        .grid {
            grid-template-columns: repeat(12, 1fr);
        }
    }
</style>