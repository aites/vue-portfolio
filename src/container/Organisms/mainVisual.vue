<template>
	<div class="mainVisual">
		<CardImageL :imageName="image"></CardImageL>
	</div>
</template>

<script>
import CardImageL from '../../components/Atoms/Image/cardImage_L.vue';
export default {
	components: { CardImageL },
	props: { image: String, text: String },
};
</script>

<style lang="scss" scoped></style>
