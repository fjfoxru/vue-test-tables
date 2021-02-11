<template>
<main>
     <router-link :to="{name: 'Main'}" class="button">На главную</router-link>
     <HandlerTable1 />
</main>
</template>

<script>
import HandlerTable1 from '@/handlers/HandlerTable1';
export default {

  components: {
       HandlerTable1
  },
  data() {
  return {
      sectionMenu: [
	],
}
},
}
</script>