<template>
	<div class="profile">
		<Header :headTitle="title"></Header>
		<Modal
			ref="modalEvent"
			:cardTitle="modalTitle"
			:cardText="modalText"
			:cardImage="modalImageData"
		></Modal>
		<CardL :cardTitle="title" :cardText="text" :cardImage="imageData"></CardL>
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
import profileData from '../../firebase_data';
const data = new profileData();

export default {
	components: { Header, CardL, CardS, Modal },
	props: { headTitle: String },
	data() {
		return {
			title: 'プロフィール',
			text: 'プロフィールのテキスト',
			imageData: 'project_1_pc.png',
			cardData: data.getData(),
			// cardData: [
			//   {
			//     title: 'ボルダリング',
			//     text: 'プロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキスト',
			//     imageData: 'hobby/hobby_1.png',
			//   },
			//   {
			//     title: 'ポイント',
			//     text: 'プロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキスト',
			//     imageData: 'hobby/hobby_2.png',
			//   },
			//   {
			//     title: 'ゲーム',
			//     text: 'プロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキストプロフィールのテキスト',
			//     imageData: 'hobby/hobby_3.png',
			//   },
			// ],
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
