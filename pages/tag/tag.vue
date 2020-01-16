<template>
	<view class="x-doc-demo-section">
		<demo-block title="基础用法" padding>
			<view class="x-tag x-tag--default">标签</view>
			<view class="x-tag x-tag--primary">标签</view>
			<view class="x-tag x-tag--success">标签</view>
			<view class="x-tag x-tag--danger">标签</view>
			<view class="x-tag x-tag--warning">标签</view>
		</demo-block>
		<demo-block title="圆角样式" padding>
			<view class="x-tag x-tag--default x-tag--round">标签</view>
			<view class="x-tag x-tag--primary x-tag--round">标签</view>
			<view class="x-tag x-tag--success x-tag--round">标签</view>
			<view class="x-tag x-tag--danger x-tag--round">标签</view>
			<view class="x-tag x-tag--warning x-tag--round">标签</view>
		</demo-block>
		<demo-block title="标记样式" padding>
			<view class="x-tag x-tag--default x-tag--mark">标签</view>
			<view class="x-tag x-tag--primary x-tag--mark">标签</view>
			<view class="x-tag x-tag--success x-tag--mark">标签</view>
			<view class="x-tag x-tag--danger x-tag--mark">标签</view>
			<view class="x-tag x-tag--warning x-tag--mark">标签</view>
		</demo-block>
		<demo-block title="空心样式" padding>
			<view class="x-tag x-tag--default x-tag--plain x-hairline--surround">标签</view>
			<view class="x-tag x-tag--primary x-tag--plain x-hairline--surround">标签</view>
			<view class="x-tag x-tag--success x-tag--plain x-hairline--surround">标签</view>
			<view class="x-tag x-tag--danger x-tag--plain x-hairline--surround">标签</view>
			<view class="x-tag x-tag--warning x-tag--plain x-hairline--surround">标签</view>
		</demo-block>
		<demo-block title="标签大小" padding>
			<view class="x-tag x-tag--success">标签</view>
			<view class="x-tag x-tag--medium x-tag--success">标签</view>
			<view class="x-tag x-tag--large x-tag--success">标签</view>
		</demo-block>
		<demo-block title="可关闭的标签" padding>
			<view class="x-tag x-tag--medium x-tag--primary">
				标签
				<text class="x-icon x-icon-cross x-tag__close"></text>
			</view>
			<view class="x-tag x-tag--medium x-tag--success">
				标签
				<text class="x-icon x-icon-cross x-tag__close"></text>
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
