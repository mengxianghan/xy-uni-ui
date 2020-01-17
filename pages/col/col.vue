<template>
	<view class="demo-section demo-col">
		<demo-block title="基础用法" padding>
			<view class="x-row">
				<view class="x-col x-col--8">span: 8</view>
				<view class="x-col x-col--8">span: 8</view>
				<view class="x-col x-col--8">span: 8</view>
			</view>
			<view class="x-row">
				<view class="x-col x-col--4">span: 4</view>
				<view class="x-col x-col--10 x-col--offset-4">offset: 4, span: 10</view>
			</view>
			<view class="x-row"><view class="x-col x-col--12 x-col--offset-12">offset: 12, span: 12</view></view>
		</demo-block>
		<demo-block title="在列元素之间增加间距" padding>
			<view class="x-row" style="margin-left: -10px; margin-right: -10px;">
				<view class="x-col x-col--8" style="padding-left: 10px; padding-right: 10px;">span: 8</view>
				<view class="x-col x-col--8" style="padding-left: 10px; padding-right: 10px;">span: 8</view>
				<view class="x-col x-col--8" style="padding-left: 10px; padding-right: 10px;">span: 8</view>
			</view>
		</demo-block>
		<demo-block title="Flex 布局" padding>
			<view class="x-row x-row--flex">
				<view class="x-col x-col--6">span: 6</view>
				<view class="x-col x-col--6">span: 6</view>
				<view class="x-col x-col--6">span: 6</view>
			</view>
			<view class="x-row x-row--flex x-row--justify-center">
				<view class="x-col x-col--6">span: 6</view>
				<view class="x-col x-col--6">span: 6</view>
				<view class="x-col x-col--6">span: 6</view>
			</view>
			<view class="x-row x-row--flex x-row--justify-end">
				<view class="x-col x-col--6">span: 6</view>
				<view class="x-col x-col--6">span: 6</view>
				<view class="x-col x-col--6">span: 6</view>
			</view>
			<view class="x-row x-row--flex x-row--justify-space-between">
				<view class="x-col x-col--6">span: 6</view>
				<view class="x-col x-col--6">span: 6</view>
				<view class="x-col x-col--6">span: 6</view>
			</view>
			<view class="x-row x-row--flex x-row--justify-space-around">
				<view class="x-col x-col--6">span: 6</view>
				<view class="x-col x-col--6">span: 6</view>
				<view class="x-col x-col--6">span: 6</view>
			</view>
		</demo-block>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.demo-col {
	.x-col {
		margin-bottom: 10px;
		color: #fff;
		font-size: 13px;
		line-height: 30px;
		text-align: center;
		background-clip: content-box;
		&:nth-child(odd) {
			background-color: #39a9ed;
		}
		&:nth-child(even) {
			background-color: #66c6f2;
		}
	}
}
</style>
