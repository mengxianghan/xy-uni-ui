<template>
	<view class="demo-section demo-panel">
		<demo-block title="基础用法">
			<view class="x-cell-group x-panel">
				<view class="x-cell x-panel__header">
					<view class="x-cell__title">
						<text>标题</text>
						<view class="x-cell__label">描述信息</view>
					</view>
					<view class="x-cell__value x-panel__header-value"><text>状态</text></view>
				</view>
				<view class="x-panel__content"><view>内容</view></view>
			</view>
		</demo-block>
		<demo-block title="高级用法">
			<view class="x-cell-group x-panel">
				<view class="x-cell x-panel__header">
					<view class="x-cell__title">
						<text>标题</text>
						<view class="x-cell__label">描述信息</view>
					</view>
					<view class="x-cell__value x-panel__header-value"><text>状态</text></view>
				</view>
				<view class="x-panel__content"><view>内容</view></view>
				<view class="x-panel__footer x-hairline--top">
					<button class="x-button x-button--default x-button--small"><text class="x-button__text">按钮</text></button>
					<button class="x-button x-button--danger x-button--small"><text class="x-button__text">按钮</text></button>
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
.demo-panel {
	.x-panel__content {
		padding: 20px;
	}
	.x-panel__footer {
		text-align: right;
		.x-button {
			margin-left: 5px;
		}
	}
}
</style>
