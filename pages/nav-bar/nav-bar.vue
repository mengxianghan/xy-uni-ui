<template>
	<view class="demo-section">
		<demo-block title="基础用法">
			<view class="x-nav-bar x-hairline--bottom" style="z-index: 1;">
				<view class="x-nav-bar__left">
					<text class="x-icon x-icon-arrow-left x-nav-bar__arrow"></text>
					<text class="x-nav-bar__text">返回</text>
				</view>
				<view class="x-nav-bar__title x-ellipsis">标题</view>
				<view class="x-nav-bar__right"><text class="x-nav-bar__text">按钮</text></view>
			</view>
		</demo-block>
		<demo-block title="高级用法">
			<view class="x-nav-bar x-hairline--bottom" style="z-index: 1;">
				<view class="x-nav-bar__left">
					<text class="x-icon x-icon-arrow-left x-nav-bar__arrow"></text>
					<text class="x-nav-bar__text">返回</text>
				</view>
				<view class="x-nav-bar__title x-ellipsis">标题</view>
				<view class="x-nav-bar__right">
					<text class="x-icon x-icon-search"></text>
				</view>
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

<style lang="scss" scoped></style>
