<template>
<main>
     <router-link :to="{name: 'Main'}" class="button">На главную</router-link>
     <HandlerTable2 />
</main>
</template>

<script>
import HandlerTable2 from '@/handlers/HandlerTable2';
export default {

  components: {
       HandlerTable2
  },
  data() {
  return {
      sectionMenu: [
	],
}
},
}
</script>