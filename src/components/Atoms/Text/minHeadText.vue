<template>
	<div class="minHeadText">
		{{ titleText }}
	</div>
</template>

<script>
export default {
	props: { titleText: String },
};
</script>

<style lang="scss" scoped>
.minHeadText {
	font-size: 16px;
	height: 16px;
	line-height: 16px;
	text-align: left;
	font-weight: 500;
}
</style>
