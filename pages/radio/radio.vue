<template>
	<view class="demo-section demo-radio">
		<demo-block title="基本用法" padding>
			<radio-group>
				<label class="x-radio">
					<radio />
					<text class="x-radio__label">单选框 1</text>
				</label>
				<label class="x-radio">
					<radio />
					<text class="x-radio__label">单选框 2</text>
				</label>
			</radio-group>
		</demo-block>
		<demo-block title="禁用状态" padding>
			<radio-group>
				<label class="x-radio x-radio--disabled">
					<radio :disabled="true" />
					<text class="x-radio__label">单选框 1</text>
				</label>
				<label class="x-radio x-radio--disabled">
					<radio :disabled="true" checked />
					<text class="x-radio__label">单选框 2</text>
				</label>
			</radio-group>
		</demo-block>
		<demo-block title="禁用文本点击" padding>
			<radio-group>
				<view class="x-radio">
					<radio />
					<text class="x-radio__label">单选框 1</text>
				</view>
				<view class="x-radio">
					<radio />
					<text class="x-radio__label">单选框 2</text>
				</view>
			</radio-group>
		</demo-block>
		<demo-block title="自定义形状" padding>
			<radio-group>
				<label class="x-radio x-radio--square">
					<radio />
					<text class="x-radio__label">单选框 1</text>
				</label>
				<label class="x-radio x-radio--square">
					<radio />
					<text class="x-radio__label">单选框 2</text>
				</label>
			</radio-group>
		</demo-block>
		<demo-block title="自定义颜色" padding>
			<radio-group>
				<label class="x-radio custom-color">
					<radio />
					<text class="x-radio__label">单选框 1</text>
				</label>
				<label class="x-radio custom-color">
					<radio />
					<text class="x-radio__label">单选框 2</text>
				</label>
			</radio-group>
		</demo-block>
		<demo-block title="自定义大小" padding>
			<radio-group>
				<label class="x-radio custom-size">
					<radio />
					<text class="x-radio__label">单选框 1</text>
				</label>
				<label class="x-radio custom-size">
					<radio />
					<text class="x-radio__label">单选框 2</text>
				</label>
			</radio-group>
		</demo-block>
		<demo-block title="与 Cell 组件一起使用">
			<radio-group>
				<view class="x-cell-group">
					<label class="x-cell x-cell--clickable">
						<view class="x-cell__title">单元格</view>
						<view class="x-radio"><radio /></view>
					</label>
					<label class="x-cell x-cell--clickable">
						<view class="x-cell__title">单元格</view>
						<view class="x-radio"><radio /></view>
					</label>
				</view>
			</radio-group>
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
.demo-radio {
	.x-radio {
		margin: 10px 0 0 0;
		&.custom-color {
			--checked-color: #07c160;
		}
		&.custom-size {
			--radio-size: 24px;
		}
	}
	.x-cell .x-radio {
		margin: 0;
	}
}
</style>
