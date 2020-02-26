<template>
	<div class="modalOverlay" @click.self="closeModal" v-if="modal">
		<div class="modalClose" @click="closeModal">
			<CloseIcon></CloseIcon>
		</div>
		<div class="modal">
			<CardImage :imageName="cardImage"></CardImage>
			<div class="modal__contents">
				<div class="modal__contentsTitle">
					<HeadText :titleText="cardTitle"></HeadText>
				</div>
				<DetailText :detailText="cardText"></DetailText>
			</div>
		</div>
	</div>
</template>

<script>
import HeadText from '../../components/Atoms/Text/minHeadText.vue';
import CardImage from '../../components/Atoms/Image/cardImage_M';
import DetailText from '../../components/Atoms/Text/detailText.vue';
import CloseIcon from '../../components/Atoms/Icon/closeIcon.vue';

export default {
	components: { HeadText, CardImage, DetailText, CloseIcon },
	props: { cardTitle: String, cardText: String, cardImage: String },
	data() {
		return {
			modal: false,
		};
	},
	methods: {
		openModal() {
			const body = document.body;
			const scrollY = window.scrollY;
			body.style.position = 'fixed';
			body.style.top = `-${scrollY}px`;
			this.modal = true;
		},
		closeModal() {
			const body = document.body;
			const scrollY = body.style.top;
			document.body.style.position = '';
			document.body.style.top = '';
			window.scrollTo(0, parseInt(scrollY || '0') * -1);
			this.modal = false;
		},
	},
};
</script>

<style lang="scss" scoped>
.modalOverlay {
	position: fixed;
	z-index: 30;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
}
.modalClose {
	position: absolute;
	right: 16px;
	top: 16px;
	color: #ffffff;
	font-size: 32px;
}
.modal {
	width: 74vw;
	border-radius: 4px;
	border: 1px solid #ececec;
	margin: 15vh auto 0;
	height: 70vh;
	background-color: #fff;
	overflow: scroll;
}
.modal__contents {
	padding: 12px;
}
.modal__contentsTitle {
	margin-bottom: 8px;
}
</style>
