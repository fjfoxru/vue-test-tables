<template>
<main>
     сама таблица 2
     <Table v-if="get_second_table_data" :data="get_second_table_data" :headers="tableHeaders" :countRows="tableRows">
     <div class="table__cell" slot-scope="props">
        <TableCellImage :element="props.value" />
     </div>
     </Table>
</main>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import Table from '@/components/Table/Table';
import TableCellImage from '@/components/Table/TableCellImage';
export default {
  components: {
       Table,
       TableCellImage
  },
  mounted() {
      this.fetchDataForSecondTable();
  },
computed: {
    ...mapGetters('data', {get_second_table_data: 'get_second_table_data'}),
    tableHeaders() {
        return this.get_second_table_data.map(el => el.day);
    },
    tableRows() {
        return this.get_second_table_data[0].data.length;
    }
},
methods: {
    ...mapActions('data', {fetchDataForSecondTable: 'fetchDataForSecondTable'}),
},
}
</script>