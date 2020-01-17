<template>
	<view class="demo-section demo-image">
		<demo-block title="基础用法" padding>
			<view class="x-image" style="width: 100px; height: 100px;"><image src="https://img.yzcdn.cn/vant/cat.jpeg" class="x-image__img" /></view>
		</demo-block>
		<demo-block title="圆形图片" padding>
			<view class="x-image x-image--round" style="width: 100px; height: 100px;"><image src="https://img.yzcdn.cn/vant/cat.jpeg" class="x-image__img" /></view>
		</demo-block>
		<demo-block title="加载中提示" padding>
			<view class="x-row" style="margin-left: -10px; margin-right: -10px;">
				<view class="x-col x-col--8" style="padding-left: 10px; padding-right: 10px;">
					<view class="x-image" style="width: 100%; height: 27vw;">
						<view class="x-image__loading"><i class="x-icon x-icon-photo-o x-image__loading-icon"></i></view>
					</view>
					<view class="text">默认提示</view>
				</view>
				<view class="x-col x-col--8" style="padding-left: 10px; padding-right: 10px;">
					<view class="x-image" style="width: 100%; height: 27vw;">
						<img class="x-image__img" />
						<view class="x-image__loading"><view class="x-loading"></view></view>
					</view>
					<view class="text">自定义提示</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="加载失败提示" padding>
			<view class="x-row" style="margin-left: -10px; margin-right: -10px;">
				<view class="x-col x-col--8" style="padding-left: 10px; padding-right: 10px;">
					<view class="x-image" style="width: 100%; height: 27vw;">
						<view class="x-image__error"><i class="x-icon x-icon-warning-o x-image__error-icon"></i></view>
					</view>
					<view class="text">默认提示</view>
				</view>
				<view class="x-col x-col--8" style="padding-left: 10px; padding-right: 10px;">
					<view class="x-image" style="width: 100%; height: 27vw;"><view class="x-image__error">加载失败</view></view>
					<view class="text">自定义提示</view>
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
<style>
page {
	background: #fff;
}
</style>
<style lang="scss" scoped>
.demo-image .text {
	margin-top: 5px;
	color: #646566;
	font-size: 14px;
	text-align: center;
}
</style>
