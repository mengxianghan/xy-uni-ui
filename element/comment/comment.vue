<template>
	<view class="demo-section">
		<demo-block title="基础用法">
			<view class="x-comment">
				<view class="x-comment-inner">
					<view class="x-comment__avatar">
						<view class="x-image"><image :src="src" mode="scaleToFill" class="x-image__img"></image></view>
					</view>
					<view class="x-comment__content">
						<view class="x-comment__author">
							<view class="x-comment__name">Han Solo</view>
							<view class="x-comment__time">几秒前</view>
						</view>
						<view class="x-rate x-comment__rate">
							<view class="x-rate__item"><text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30);"></text></view>
							<view class="x-rate__item"><text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30);"></text></view>
							<view class="x-rate__item"><text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30);"></text></view>
							<view class="x-rate__item"><text class="x-icon x-icon-star-o x-rate__icon" style="color: rgb(199, 199, 199);"></text></view>
							<view class="x-rate__item"><text class="x-icon x-icon-star-o x-rate__icon" style="color: rgb(199, 199, 199);"></text></view>
						</view>
						<view class="x-comment__detail">
							We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product
							prototypes beautifully and efficiently.
						</view>
						<view class="x-comment__actions">
							<view class="x-comment__action">赞</view>
							<view class="x-comment__action">回复</view>
						</view>
					</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="嵌套用法">
			<view class="x-comment">
				<view class="x-comment-inner">
					<view class="x-comment__avatar">
						<view class="x-image"><image :src="src" mode="scaleToFill" class="x-image__img"></image></view>
					</view>
					<view class="x-comment__content">
						<view class="x-comment__author">
							<view class="x-comment__name">Han Solo</view>
							<view class="x-comment__time">几秒前</view>
						</view>
						<view class="x-rate x-comment__rate">
							<view class="x-rate__item"><text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30);"></text></view>
							<view class="x-rate__item"><text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30);"></text></view>
							<view class="x-rate__item"><text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30);"></text></view>
							<view class="x-rate__item"><text class="x-icon x-icon-star-o x-rate__icon" style="color: rgb(199, 199, 199);"></text></view>
							<view class="x-rate__item"><text class="x-icon x-icon-star-o x-rate__icon" style="color: rgb(199, 199, 199);"></text></view>
						</view>
						<view class="x-comment__detail">
							We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product
							prototypes beautifully and efficiently.
						</view>
						<view class="x-comment__actions">
							<view class="x-comment__action">赞</view>
							<view class="x-comment__action">回复</view>
						</view>
					</view>
				</view>
				<view class="x-comment x-comment--nested">
					<view class="x-comment-inner">
						<view class="x-comment__avatar">
							<view class="x-image"><image :src="src" mode="scaleToFill" class="x-image__img"></image></view>
						</view>
						<view class="x-comment__content">
							<view class="x-comment__author">
								<view class="x-comment__name">Han Solo</view>
								<view class="x-comment__time">几秒前</view>
							</view>
							<view class="x-rate x-comment__rate">
								<view class="x-rate__item"><text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30);"></text></view>
								<view class="x-rate__item"><text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30);"></text></view>
								<view class="x-rate__item"><text class="x-icon x-icon-star x-rate__icon" style="color: rgb(255, 210, 30);"></text></view>
								<view class="x-rate__item"><text class="x-icon x-icon-star-o x-rate__icon" style="color: rgb(199, 199, 199);"></text></view>
								<view class="x-rate__item"><text class="x-icon x-icon-star-o x-rate__icon" style="color: rgb(199, 199, 199);"></text></view>
							</view>
							<view class="x-comment__detail">
								We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their
								product prototypes beautifully and efficiently.
							</view>
							<view class="x-comment__actions">
								<view class="x-comment__action">赞</view>
								<view class="x-comment__action">回复</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</demo-block>
	</view>
</template>

<script>
export default {
	data() {
		return {
			src: 'https://img.yzcdn.cn/vant/cat.jpeg'
		};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.x-comment {
	background: #fff;
	&--nested {
		background: #f8f8f8;
	}
}
</style>
