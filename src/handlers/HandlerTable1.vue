<template>
<main>
     <h1>Таблица 1</h1>
     <p>В стор сохранятся только числовые значения до 6 символов</p>
     <p>Кол-во строк и столбцов можно сменить в параметрах при вызове функции generateFakeData</p>
     <Table v-if="get_first_table_data" :data="get_first_table_data" :headers="tableHeaders" :countRows="tableRows">
     <div class="table__cell" slot-scope="props">
        <TableCell :element="props.value" :itemId="props.itemId" @input="onCellValueChanged($event)"/>
     </div>
     </Table>
</main>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import Table from '@/components/Table/Table';
import TableCell from '@/components/Table/TableCell';
export default {
  components: {
       Table,
       TableCell
  },
  mounted() {
       this.fetchDataForFirstTable();
  },
computed: {
    ...mapGetters('data', {get_first_table_data: 'get_first_table_data'}),
    tableHeaders() {
        return this.get_first_table_data.map(el => el.hour);
    },
    tableRows() {
        return this.get_first_table_data[0].data.length;
    },
},
methods: {
    ...mapActions('data', {fetchDataForFirstTable: 'fetchDataForFirstTable'}),
    ...mapActions('data', {changeDataForFirstTable: 'changeDataForFirstTable'}),
    onCellValueChanged(newValue) {
        this.changeDataForFirstTable(newValue);
    }
},
}
</script>