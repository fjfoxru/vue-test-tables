<template>
<div class="cell__content">
    <img :src="element.img" class="cell__img">
</div>    
</template>
<script>
export default {
    props: {
        element: {
            type: Object,
        },
    },
}
</script>