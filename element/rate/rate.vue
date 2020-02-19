<template>
	<view class="demo-section">
		<demo-block title="基础用法" padding>
			<view class="x-rate">
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star-o x-rate__icon" style="color: rgb(199, 199, 199);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star-o x-rate__icon" style="color: rgb(199, 199, 199);"></text>
				</view>
			</view>
		</demo-block>
		<demo-block title="自定义图标" padding>
			<view class="x-rate">
				<view class="x-rate__item">
					<text class="x-icon x-icon-like x-rate__icon" style="color: rgb(255, 210, 30);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-like x-rate__icon" style="color: rgb(255, 210, 30);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-like x-rate__icon" style="color: rgb(255, 210, 30);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-like-o x-rate__icon" style="color: rgb(199, 199, 199);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-like-o x-rate__icon" style="color: rgb(199, 199, 199);"></text>
				</view>
			</view>
		</demo-block>
		<demo-block title="自定义样式" padding>
			<view class="x-rate">
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(238, 10, 36); font-size: 25px;"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(238, 10, 36); font-size: 25px;"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(238, 10, 36); font-size: 25px;"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(238, 238, 238); font-size: 25px;"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(238, 238, 238); font-size: 25px;"></text>
				</view>
			</view>
		</demo-block>
		<demo-block title="半星" padding>
			<view class="x-rate">
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30); font-size: 25px;"></text>
					<text class="x-icon x-icon-star x-rate__icon x-rate__icon--half" style="color: rgb(255, 210, 30); font-size: 25px;"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30); font-size: 25px;"></text>
					<text class="x-icon x-icon-star x-rate__icon x-rate__icon--half" style="color: rgb(255, 210, 30); font-size: 25px;"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(238, 238, 238); font-size: 25px;"></text>
					<text class="x-icon x-icon-star x-rate__icon x-rate__icon--half" style="color: rgb(255, 210, 30); font-size: 25px;"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(238, 238, 238); font-size: 25px;"></text>
					<text class="x-icon x-icon-star x-rate__icon x-rate__icon--half" style="color: rgb(238, 238, 238); font-size: 25px;"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(238, 238, 238); font-size: 25px;"></text>
					<text class="x-icon x-icon-star x-rate__icon x-rate__icon--half" style="color: rgb(238, 238, 238); font-size: 25px;"></text>
				</view>
			</view>
		</demo-block>
		<demo-block title="自定义数量" padding>
			<view class="x-rate">
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star-o x-rate__icon" style="color: rgb(199, 199, 199);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star-o x-rate__icon" style="color: rgb(199, 199, 199);"></text>
				</view>
			</view>
		</demo-block>
		<demo-block title="禁用状态" padding>
			<view class="x-rate x-rate--disabled">
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(189, 189, 189);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(189, 189, 189);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(189, 189, 189);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star-o x-rate__icon" style="color: rgb(189, 189, 189);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star-o x-rate__icon" style="color: rgb(189, 189, 189);"></text>
				</view>
			</view>
		</demo-block>
		<demo-block title="只读状态" padding>
			<view class="x-rate x-rate--readonly">
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star-o x-rate__icon" style="color: rgb(199, 199, 199);"></text>
				</view>
				<view class="x-rate__item">
					<text class="x-icon x-icon-star-o x-rate__icon" style="color: rgb(199, 199, 199);"></text>
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
