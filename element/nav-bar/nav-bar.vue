<template>
	<view class="demo-section">
		<demo-block title="基础用法">
			<view class="x-nav-bar">
				<view class="x-nav-bar__status-bar"></view>
				<view class="x-nav-bar__bar">
					<view class="x-nav-bar__left">
						<view class="x-nav-bar__text">
							<text class="x-icon x-icon-arrow-left"></text>
							返回
						</view>
					</view>
					<view class="x-nav-bar__title x-ellipsis">标题</view>
					<view class="x-nav-bar__right"><view class="x-nav-bar__text">按钮</view></view>
				</view>
			</view>
		</demo-block>
		<demo-block title="高级用法">
			<view class="x-nav-bar">
				<view class="x-nav-bar__status-bar"></view>
				<view class="x-nav-bar__bar">
					<view class="x-nav-bar__left">
						<view class="x-nav-bar__text">
							<text class="x-icon x-icon-arrow-left"></text>
							返回
						</view>
					</view>
					<view class="x-nav-bar__title x-ellipsis">标题</view>
					<view class="x-nav-bar__right">
						<view class="x-nav-bar__text"><text class="x-icon x-icon-search"></text></view>
					</view>
				</view>
			</view>
		</demo-block>
	</view>
</template>

<script>
import { navbar } from '@/xuanyu-ui/utils/util.js';
export default {
	data() {
		return {};
	},
	onLoad() {},
	computed: {
		// 计算导航栏高度
		// 说明：由于自定义组件内部无法使用变量，请开发者打印出 navbar 变量自定义赋值即可
		navbar() {
			return navbar();
		}
	}
};
</script>

<style lang="scss" scoped></style>
