<template>
<div class="table">
    <div class="table__inner">

    <div class="table__sidebar">
        <div class="table__cell table__sidebar_cell">№</div>
        <div v-for="(i, index) in countRows" :key="index" class="table__cell table__sidebar_cell">
            {{index + 1}}
        </div>
    </div>

    <div class="table__main">
    <div class="table__header">
        <div v-for="(header, index) in headers" :key="index" class="table__cell table__cell_header">{{header}}</div>
    </div>
    <div class="table__content">
    <div v-for="(item, index) in data" :key="index" class="table__column">
        <slot v-for="element in item.data" :value="element" :itemId="item.id"></slot>
    </div>
    </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
        },
        headers: {
            type: Array,
        },
        countRows: {
            type: Number,
        }
    },
}
</script>