<template>
	<div class="labelSmall">
		{{ text }}
	</div>
</template>

<script>
export default {
	props: { labelText: String },
	data() {
		return {
			text: this.labelText,
		};
	},
};
</script>

<style lang="scss" scoped>
.labelSmall {
	font-size: 12px;
	font-weight: bold;
	height: 24px;
	line-height: 1;
	border: 1px solid #dfdfdf;
	border-radius: 4px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	padding: 6px 8px;
	background-color: #f7f7f7;
}
</style>
