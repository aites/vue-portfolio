<template>
	<a-button type="primary" class="resetButton" @click="clickButton">
		<a-icon type="undo" class="resetButton__icon" />
	</a-button>
</template>

<script>
export default {
	methods: {
		clickButton() {
			this.$emit('click-resetButton');
		},
	},
};
</script>

<style lang="scss" scoped>
.resetButton {
	border: 1px solid #dfdfdf;
	background-color: #f7f7f7;
	border-radius: 4px;
}
.resetButton__icon {
	color: #2c3e50;
}
</style>
