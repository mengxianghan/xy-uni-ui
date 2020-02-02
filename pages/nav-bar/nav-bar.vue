<template>
	<view class="demo-section">
		<demo-block title="基础用法">
			<view class="x-nav-bar">
				<view class="x-nav-bar__status-bar"></view>
				<view class="x-nav-bar__bar">
					<view class="x-nav-bar__left">
						<text class="x-nav-bar__text">
							<text class="x-icon x-icon-arrow-left"></text>
							返回
						</text>
					</view>
					<view class="x-nav-bar__title x-ellipsis">标题</view>
					<view class="x-nav-bar__right"><text class="x-nav-bar__text">按钮</text></view>
				</view>
			</view>
		</demo-block>
		<demo-block title="高级用法">
			<view class="x-nav-bar">
				<view class="x-nav-bar__status-bar"></view>
				<view class="x-nav-bar__bar">
					<view class="x-nav-bar__left">
						<text class="x-nav-bar__text">
							<text class="x-icon x-icon-arrow-left"></text>
							返回
						</text>
					</view>
					<view class="x-nav-bar__title x-ellipsis">标题</view>
					<view class="x-nav-bar__right">
						<text class="x-nav-bar__text"><text class="x-icon x-icon-search"></text></text>
					</view>
				</view>
			</view>
		</demo-block>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {
	},
	computed: {
		navbar() {
			const navbar = {
				height: 0,
				statusBarHeight: 0
			};
			const { platform, statusBarHeight } = uni.getSystemInfoSync();
			navbar.statusBarHeight = statusBarHeight;
			
			// #ifndef H5
			const { top, bottom, height } = uni.getMenuButtonBoundingClientRect();
			navbar.height = top - statusBarHeight + height * 2;
			// #endif

			// #ifdef H5
			if (platform === 'android') {
				navbar.height = 48;
			} else {
				navbar.height = 44;
			}
			// #endif
			
			return navbar;
		}
	}
};
</script>

<style lang="scss" scoped></style>
