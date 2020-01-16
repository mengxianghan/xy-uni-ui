<template>
	<view class="x-doc-demo-section">
		<demo-block title="基础用法"><view class="x-divider x-divider--hairline"></view></demo-block>
		<demo-block title="展示文本"><view class="x-divider x-divider--hairline x-divider--content-center">文本</view></demo-block>
		<demo-block title="内容位置">
			<view class="x-divider x-divider--hairline x-divider--content-left">文本</view>
			<view class="x-divider x-divider--hairline x-divider--content-right">文本</view>
		</demo-block>
		<demo-block title="虚线"><view class="x-divider x-divider--dashed x-divider--content-center">文本</view></demo-block>
		<demo-block title="自定义样式">
			<view class="x-divider x-divider--hairline x-divider--content-center" style="border-color: rgb(25, 137, 250); color: rgb(25, 137, 250); padding: 0px 16px;">
				文本
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
<style lang="scss">
	page{
		background-color: #fff;
	}
</style>
<style lang="scss" scoped></style>
