<template>
	<div class="cardImageLarge">
		<img
			class="cardImageLarge__image"
			alt="メインビジュアル"
			:src="require('../../../assets/' + imageName)"
			slot="cover"
		/>
	</div>
</template>

<script>
export default {
	props: ['imageName'],
};
</script>

<style lang="scss" scoped>
.cardImageLarge {
	width: 100%;
}
.cardImageLarge__image {
	width: 100%;
}
</style>
