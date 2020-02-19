<template>
	<view class="demo-section demo-checkbox">
		<demo-block title="基本用法" padding>
			<label class="x-checkbox x-checkbox--block">
				<checkbox />
				<text class="x-checkbox__label">复选框</text>
			</label>
		</demo-block>
		<demo-block title="禁用状态" padding>
			<label class="x-checkbox x-checkbox--block x-checkbox--disabled">
				<checkbox :disabled="true" />
				<text class="x-checkbox__label">复选框</text>
			</label>
			<label class="x-checkbox x-checkbox--block x-checkbox--disabled">
				<checkbox :disabled="true" checked />
				<text class="x-checkbox__label">复选框</text>
			</label>
		</demo-block>
		<demo-block title="禁用文本点击" padding>
			<label class="x-checkbox x-checkbox--block">
				<checkbox />
				<text class="x-checkbox__label">复选框</text>
			</label>
		</demo-block>
		<demo-block title="自定义形状" padding>
			<label class="x-checkbox x-checkbox--block x-checkbox--round">
				<checkbox />
				<text class="x-checkbox__label">复选框</text>
			</label>
			<label class="x-checkbox x-checkbox--block x-checkbox--square">
				<checkbox />
				<text class="x-checkbox__label">复选框</text>
			</label>
		</demo-block>
		<demo-block title="自定义颜色" padding>
			<label class="x-checkbox x-checkbox--block custom-color">
				<checkbox />
				<text class="x-checkbox__label">复选框</text>
			</label>
		</demo-block>
		<demo-block title="自定义大小" padding>
			<label class="x-checkbox x-checkbox--block custom-size">
				<checkbox />
				<text class="x-checkbox__label">复选框</text>
			</label>
		</demo-block>
		<demo-block title="与 Cell 组件一起使用">
			<view class="x-cell-group">
				<label class="x-cell x-cell--clickable">
					<view class="x-cell__title">单元格</view>
					<view class="x-checkbox"><checkbox /></view>
				</label>
				<label class="x-cell x-cell--clickable">
					<view class="x-cell__title">单元格</view>
					<view class="x-checkbox"><checkbox /></view>
				</label>
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
.demo-checkbox {
	.x-checkbox {
		margin: 10px 0 0 0;
		&.custom-color {
			--checked-color: #07c160;
		}
		&.custom-size {
			--checkbox-size: 24px;
		}
	}

	.x-cell .x-checkbox {
		margin: 0;
	}
}
</style>
