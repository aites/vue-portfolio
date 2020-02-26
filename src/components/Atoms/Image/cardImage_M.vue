<template>
	<div class="cardImageMiddle">
		<img
			class="cardImageMiddle__image"
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
.cardImageMiddle {
	width: 100%;
}
.cardImageMiddle__image {
	width: 100%;
}
</style>
