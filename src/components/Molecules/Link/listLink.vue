<template>
	<div class="listLink">
		<div class="listLink__top">
			<a-icon type="right" />
			<h3 class="listLink__title">{{ this.title }}</h3>
		</div>
		<div class="listLink__bottom">
			<ul class="listLink__list">
				<li class="listLink__item" v-for="label in minLabel" :key="label">
					<LabelS :labelText="label"></LabelS>
				</li>
			</ul>
			<div class="listLink__date">
				{{ date }}
			</div>
		</div>
	</div>
</template>

<script>
import LabelS from '../../../components/Atoms/Label/label_S.vue';

export default {
	components: { LabelS },
	props: ['titleText', 'dateText', 'minLabelArray'],
	data() {
		return {
			title: this.titleText,
			date: this.dateText,
			minLabel: this.minLabelArray,
		};
	},
};
</script>

<style lang="scss" scoped>
.listLink {
	padding: 8px 12px;
	color: #333;
	line-height: 36px;
}
.listLink__top {
	display: flex;
	align-items: center;
}
.listLink__bottom {
	display: flex;
}
.listLink__title {
	font-size: 14px;
	line-height: 22px;
	margin-right: 8px;
}
.listLink__list {
	display: flex;
	flex-wrap: wrap;
}
.listLink__date {
	flex-basis: 88px;
	min-width: 88px;
	margin-left: auto;
	font-size: 10px;
	color: #9c9c9c;
	line-height: 36px;
}
.listLink__item {
	margin-top: 8px;
	margin-right: 4px;
}
</style>
