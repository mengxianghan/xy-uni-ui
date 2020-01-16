<template>
	<view class="x-doc-demo-section">
		<demo-block title="基础用法">
			<view class="x-hairline--top-bottom x-tabbar">
				<view class="x-tabbar-item x-tabbar-item--active">
					<view class="x-tabbar-item__icon"><text class="x-icon x-icon-home-o"></text></view>
					<view class="x-tabbar-item__text">标签</view>
				</view>
				<view class="x-tabbar-item">
					<view class="x-tabbar-item__icon"><text class="x-icon x-icon-search"></text></view>
					<view class="x-tabbar-item__text">标签</view>
				</view>
				<view class="x-tabbar-item">
					<view class="x-tabbar-item__icon"><text class="x-icon x-icon-friends-o"></text></view>
					<view class="x-tabbar-item__text">标签</view>
				</view>
				<view class="x-tabbar-item">
					<view class="x-tabbar-item__icon"><text class="x-icon x-icon-setting-o"></text></view>
					<view class="x-tabbar-item__text">标签</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="提示信息">
			<view class="x-hairline--top-bottom x-tabbar">
				<view class="x-tabbar-item x-tabbar-item--active">
					<view class="x-tabbar-item__icon"><text class="x-icon x-icon-home-o"></text></view>
					<view class="x-tabbar-item__text">标签</view>
				</view>
				<view class="x-tabbar-item">
					<view class="x-tabbar-item__icon">
						<text class="x-icon x-icon-search"></text>
						<view class="x-info x-info--dot"></view>
					</view>
					<view class="x-tabbar-item__text">标签</view>
				</view>
				<view class="x-tabbar-item">
					<view class="x-tabbar-item__icon">
						<text class="x-icon x-icon-friends-o"></text>
						<view class="x-info">5</view>
					</view>
					<view class="x-tabbar-item__text">标签</view>
				</view>
				<view class="x-tabbar-item">
					<view class="x-tabbar-item__icon">
						<text class="x-icon x-icon-setting-o"></text>
						<view class="x-info">20</view>
					</view>
					<view class="x-tabbar-item__text">标签</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="自定义图标">
			<view class="x-hairline--top-bottom x-tabbar">
				<view class="x-tabbar-item x-tabbar-item--active">
					<view class="x-tabbar-item__icon">
						<image mode="widthFix" src="https://img.yzcdn.cn/vant/user-active.png" class="customIcon" />
						<view class="x-info">3</view>
					</view>
					<view class="x-tabbar-item__text"><span>自定义</span></view>
				</view>
				<view class="x-tabbar-item">
					<view class="x-tabbar-item__icon"><text class="x-icon x-icon-search"></text></view>
					<view class="x-tabbar-item__text">标签</view>
				</view>
				<view class="x-tabbar-item">
					<view class="x-tabbar-item__icon"><text class="x-icon x-icon-setting-o"></text></view>
					<view class="x-tabbar-item__text">标签</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="自定义颜色">
			<view class="x-hairline--top-bottom x-tabbar">
				<view class="x-tabbar-item x-tabbar-item--active" style="color: rgb(7, 193, 96);">
					<view class="x-tabbar-item__icon"><text class="x-icon x-icon-home-o"></text></view>
					<view class="x-tabbar-item__text">标签</view>
				</view>
				<view class="x-tabbar-item" style="color: rgb(0, 0, 0);">
					<view class="x-tabbar-item__icon"><text class="x-icon x-icon-search"></text></view>
					<view class="x-tabbar-item__text">标签</view>
				</view>
				<view class="x-tabbar-item" style="color: rgb(0, 0, 0);">
					<view class="x-tabbar-item__icon"><text class="x-icon x-icon-friends-o"></text></view>
					<view class="x-tabbar-item__text">标签</view>
				</view>
				<view class="x-tabbar-item" style="color: rgb(0, 0, 0);">
					<view class="x-tabbar-item__icon"><text class="x-icon x-icon-setting-o"></text></view>
					<view class="x-tabbar-item__text">标签</view>
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

<style lang="scss" scoped>
.customIcon {
	width: 36rpx;
}
</style>
