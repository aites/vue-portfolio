<template>
	<div class="cardLarge">
		<CardImageL :imageName="cardImage"></CardImageL>
		<div class="cardLarge__contents">
			<TitleText :titleText="cardTitle"> </TitleText>
			<DetailText :detailText="cardText"> </DetailText>
		</div>
	</div>
</template>

<script>
import CardImageL from '../../../components/Atoms/Image/cardImage_L.vue';
import TitleText from '../../../components/Atoms/Text/titleText.vue';
import DetailText from '../../../components/Atoms/Text/detailText.vue';

export default {
	components: { CardImageL, TitleText, DetailText },
	props: { cardTitle: String, cardText: String, cardImage: String },
};
</script>

<style lang="scss" scoped>
.cardLarge {
	width: 100%;
	border-radius: 4px;
	border: 1px solid #ececec;
}
.cardLarge__contents {
	padding: 8px;
}
</style>
