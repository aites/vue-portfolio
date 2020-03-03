<template>
	<div class="profile">
		<Header :headTitle="title"></Header>
		<Modal
			ref="modalEvent"
			:cardTitle="modalTitle"
			:cardText="modalText"
			:cardImage="modalImageData"
		></Modal>
		<CardL :cardTitle="cardTitle" :cardText="cardText" :cardImage="imageData"></CardL>
		<ul class="profile__slider">
			<li class="profile__sliderItem" v-for="(card, index) of this.cardData" :key="index">
				<CardS
					:cardTitle="card.title"
					:cardText="card.text"
					:cardImage="card.imageData"
					@open="openModal(card.title, card.text, card.imageData)"
				></CardS>
			</li>
		</ul>
	</div>
</template>

<script>
import Header from '../../container/Organisms/header.vue';
import CardL from '../../components/Molecules/card/card_L.vue';
import CardS from '../../components/Molecules/card/card_S.vue';
import Modal from '../../container/Organisms/modal.vue';
import profileData from '../../firebase_profile';
const data = new profileData();

export default {
	components: { Header, CardL, CardS, Modal },
	props: { headTitle: String },
	data() {
		return {
			title: 'プロフィール',
			cardTitle: '荒木　杏久里',
			cardText: 'ユニークネームを持っている、フロントエンドエンジニア。',
			imageData: '',
			cardData: data.getData(),
			modalTitle: '',
			modalText: '',
			modalImageData: '',
		};
	},
	methods: {
		openModal(title, text, image) {
			this.modalTitle = title;
			this.modalText = text;
			this.modalImageData = image;
			this.$refs.modalEvent.openModal();
		},
	},
};
</script>

<style lang="scss" scoped>
.profile__slider {
	display: flex;
	margin-top: 20px;
	overflow: scroll;
	position: relative;
	left: -8px;
	width: 100vw;
}
.profile__sliderItem {
	min-width: 42%;
	flex-basis: 42%;
}
</style>
