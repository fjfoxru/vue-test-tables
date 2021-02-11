<template>
	<div class="page">
		<!-- Контентная часть --> 
		<section class="main-content">
		<component :is="layout">
		</component>
		</section>
		<Footer/>
	</div>
</template>

<script>
import LayoutFrontContentDefault from "@/layout/LayoutFront/layoutFrontContent/LayoutFrontContentDefault";
import LayoutFrontContentMain from "@/layout/LayoutFront/layoutFrontContent/LayoutFrontContentMain";

export default {
	components: {
		LayoutFrontContentDefault,
		LayoutFrontContentMain,
	},
	data () {
		return {
			breadcrumbs: [
				{link: '/', name: 'Главная', id: 1},
				{link: '/', name: 'Хлебные крошки 2', id: 2},
				{link: '/', name: 'Хлебные крошки 3', id: 3},
			],
		}
	},
	computed: {
		layout() {
			return this.$route.meta.layout ? this.$route.meta.layout : 'LayoutFrontContentDefault';
		}
	},
}
</script>