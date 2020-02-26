<template>
	<div class="detail">
		<img class="detail__image" alt="" :src="require('../../../assets/' + imageName)" slot="cover" />
	</div>
</template>

<script>
export default {
	props: ['imageName'],
};
</script>

<style lang="scss" scoped>
.detail {
	width: 100%;
}
.detail__image {
	width: 100%;
}
</style>
