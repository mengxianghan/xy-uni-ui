<template>
	<view class="demo-block" :class="padding ? 'demo-block--padding' : ''">
		<view class="demo-block__title">{{ title }}</view>
		<slot></slot>
	</view>
</template>

<script>
export default {
	name: 'DemoBlock',
	props: {
		title: {
			type: String,
			default: ''
		},
		padding: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.demo-block {
	padding: 0;
	&__title {
		margin: 0;
		padding: 32px 16px 16px;
		color: rgba(69, 90, 100, 0.6);
		font-weight: normal;
		font-size: 14px;
		line-height: 16px;
	}
	&--padding {
		padding: 0 16px;
		.demo-block__title {
			padding-left: 0;
			padding-right: 0;
		}
	}
}
</style>
