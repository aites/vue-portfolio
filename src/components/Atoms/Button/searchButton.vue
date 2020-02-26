<template>
	<a-button type="primary" class="searchButton" @click="clickButton">
		<a-icon type="search" class="searchButton__icon" />
	</a-button>
</template>

<script>
export default {
	methods: {
		clickButton() {
			this.$emit('click-searchButton');
		},
	},
};
</script>

<style lang="scss" scoped>
.searchButton {
	border-right: 1px solid #dfdfdf;
	border-left: none;
	border-top: 1px solid #dfdfdf;
	border-bottom: 1px solid #dfdfdf;
	background-color: #f7f7f7;
	border-radius: 0 4px 4px 0;
}
.searchButton__icon {
	color: #2c3e50;
}
</style>
