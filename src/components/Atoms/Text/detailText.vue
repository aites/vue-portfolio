<template>
	<p class="detailText">
		{{ detailText }}
	</p>
</template>

<script>
export default {
	props: { detailText: String },
};
</script>

<style lang="scss" scoped>
.detailText {
	font-size: 12px;
	line-height: 16px;
	text-align: left;
}
</style>
