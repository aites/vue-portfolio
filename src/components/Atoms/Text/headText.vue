<template>
	<h1 class="headText">
		{{ headTitle }}
	</h1>
</template>

<script>
export default {
	props: { headTitle: String },
};
</script>

<style lang="scss" scoped>
.headText {
	font-size: 20px;
	height: 28px;
	line-height: 28px;
}
</style>
