<template>
	<view class="demo-section">
		<demo-block title="基本用法" padding>
			<view class="x-slider"><slider :block-size="24" value="50"></slider></view>
		</demo-block>
		<demo-block title="指定选择范围" padding>
			<view class="x-slider"><slider :block-size="24" value="50" :min="0" :max="100"></slider></view>
		</demo-block>
		<demo-block title="禁用" padding>
			<view class="x-slider x-slider--disabled"><slider :block-size="24" disabled value="50"></slider></view>
		</demo-block>
		<demo-block title="指定步长" padding>
			<view class="x-slider"><slider :block-size="24" value="50" step="10"></slider></view>
		</demo-block>
		<demo-block title="自定义样式" padding>
			<view class="x-slider"><slider :block-size="24" value="50" activeColor="rgb(238, 10, 36)"></slider></view>
		</demo-block>
		<demo-block title="自定义按钮" padding>
			<view class="x-slider"><slider :block-size="24" value="50" block-color="#07C160"></slider></view>
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
<style>
page {
	background: #fff;
}
</style>
<style lang="scss" scoped></style>
