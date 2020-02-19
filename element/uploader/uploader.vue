<template>
	<view class="demo-section">
		<demo-block title="基础用法" padding>
			<view class="x-uploader">
				<view class="x-uploader__wrapper">
					<view class="x-uploader__upload"><text class="x-icon x-icon-plus x-uploader__upload-icon"></text></view>
				</view>
			</view>
		</demo-block>
		<demo-block title="文件预览" padding>
			<view class="x-uploader">
				<view class="x-uploader__wrapper">
					<view class="x-uploader__preview">
						<view class="x-image x-uploader__preview-image">
							<image src="https://img.yzcdn.cn/vant/leaf.jpg" class="x-image__img" />
						</view>
						<text class="x-icon x-icon-clear x-uploader__preview-delete"></text>
					</view>
					<view class="x-uploader__preview">
						<view class="x-image x-uploader__preview-image">
							<image src="https://img.yzcdn.cn/vant/tree.jpg" class="x-image__img" />
						</view>
						<text class="x-icon x-icon-clear x-uploader__preview-delete"></text>
					</view>
					<view class="x-uploader__upload"><text class="x-icon x-icon-plus x-uploader__upload-icon"></text></view>
				</view>
			</view>
		</demo-block>
		<demo-block title="限制上传数量" padding>
			<view class="x-uploader">
				<view class="x-uploader__wrapper">
					<view class="x-uploader__preview">
						<view class="x-image x-uploader__preview-image">
							<image src="https://img.yzcdn.cn/vant/sand.jpg" class="x-image__img" />
						</view>
						<text class="x-icon x-icon-clear x-uploader__preview-delete"></text>
					</view>
					<view class="x-uploader__upload"><text class="x-icon x-icon-plus x-uploader__upload-icon"></text></view>
				</view>
			</view>
		</demo-block>
		<demo-block title="自定义上传样式" padding>
			<view class="x-uploader">
				<view class="x-uploader__wrapper">
					<view class="x-uploader__input-wrapper">
						<button class="x-button x-button--primary x-button--normal">
							<text class="x-icon x-icon-photo x-button__icon"></text>
							<span class="x-button__text">上传文件</span>
						</button>
					</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="上传前校验" padding>
			<view class="x-uploader">
				<view class="x-uploader__wrapper">
					<view class="x-uploader__upload"><text class="x-icon x-icon-plus x-uploader__upload-icon"></text></view>
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

<style lang="scss" scoped></style>
