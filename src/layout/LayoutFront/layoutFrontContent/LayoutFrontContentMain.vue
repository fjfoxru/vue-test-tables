<template>
<section class="grid__row">
	<!-- Основная колонка -->
	<div class="grid__main-column">
		<router-view></router-view>
	</div>
	<!-- Правая колонка -->
	<div class="grid__right-column">
		<router-view name="sidebar"></router-view>
	</div>

</section>
</template>