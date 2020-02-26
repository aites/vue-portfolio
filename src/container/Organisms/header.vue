<template>
	<div class="header">
		<div @click="changeMenu" class="js-menu">
			<MenuButton class="header__menuIcon"></MenuButton>
		</div>
		<HeadText :headTitle="title"></HeadText>
		<HeadMenu v-if="menuOpen"></HeadMenu>
	</div>
</template>

<script>
import MenuButton from '../../components/Atoms/Button/menuButton.vue';
import HeadText from '../../components/Atoms/Text/headText.vue';
import HeadMenu from '../../container/Organisms/headerMenu.vue';

export default {
	components: { MenuButton, HeadText, HeadMenu },
	props: { headTitle: String },
	data() {
		return {
			title: this.headTitle,
			menuOpen: false,
		};
	},
	methods: {
		changeMenu() {
			this.menuOpen = !this.menuOpen;
		},
		listen(target, eventType, callback) {
			if (!this._eventRemovers) {
				this._eventRemovers = [];
			}
			target.addEventListener(eventType, callback);
			this._eventRemovers.push({
				remove: function() {
					target.removeEventListener(eventType, callback);
				},
			});
		},
	},
	destroyed() {
		if (this._eventRemovers) {
			this._eventRemovers.forEach(function(eventRemover) {
				eventRemover.remove();
			});
		}
	},
	created() {
		this.listen(window, 'click', evnet => {
			if (!evnet.target.classList.contains('js-menu')) {
				this.menuOpen = false;
			}
		});
	},
};
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	padding-top: 16px;
	margin-bottom: 16px;
	position: relative;
}
.header__menuIcon {
	pointer-events: none;
}
</style>
