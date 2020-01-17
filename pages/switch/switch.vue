<template>
	<view class="demo-section demo-switch">
		<demo-block title="基础用法" padding>
			<view class="x-switch"><switch checked></switch></view>
		</demo-block>
		<demo-block title="禁用状态" padding>
			<view class="x-switch x-switch--disabled"><switch disabled checked></switch></view>
		</demo-block>
		<demo-block title="自定义大小" padding>
			<view class="x-switch custom-size"><switch checked></switch></view>
		</demo-block>
		<demo-block title="自定义颜色" padding>
			<view class="x-switch"><switch checked color="rgb(7, 193, 96)"></switch></view>
		</demo-block>
		<demo-block title="搭配单元格使用">
			<view class="x-cell-group">
				<view class="x-cell">
					<view class="x-cell__title">标题</view>
					<view class="x-switch custom-size"><switch checked></switch></view>
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
.demo-switch {
	.x-switch {
		&.custom-size {
			--switch-size: 24px;
		}
		&.custom-color {
			--switch-color: rgb(7, 193, 96);
		}
	}
}
</style>
