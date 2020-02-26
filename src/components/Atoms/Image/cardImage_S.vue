<template>
	<div class="cardImageSmall">
		<img
			class="cardImageSmall__image"
			alt="画像"
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
.cardSmcardImageSmallall {
	max-height: 42vw;
}
.cardImageSmall__image {
	width: 100%;
}
</style>
