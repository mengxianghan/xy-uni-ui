<template>
	<view class="demo-section demo-goods-action">
		<demo-block title="基础用法">
			<view class="x-goods-action">
				<view class="x-goods-action-icon">
					<view class="x-icon x-icon-chat-o x-goods-action-icon__icon"></view>
					客服
				</view>
				<view class="x-goods-action-icon">
					<view class="x-icon x-icon-cart-o x-goods-action-icon__icon"></view>
					购物车
				</view>
				<button class="x-button x-button--warning x-button--large x-button--square x-goods-action-button x-goods-action-button--first x-goods-action-button--warning">
					<span class="x-button__text">加入购物车</span>
				</button>
				<button class="x-button x-button--danger x-button--large x-button--square x-goods-action-button x-goods-action-button--last x-goods-action-button--danger">
					<span class="x-button__text">立即购买</span>
				</button>
			</view>
		</demo-block>
		<demo-block title="徽标提示">
			<view class="x-goods-action">
				<view class="x-goods-action-icon">
					<view class="x-icon x-icon-chat-o x-goods-action-icon__icon"></view>
					客服
				</view>
				<view class="x-goods-action-icon">
					<view class="x-icon x-icon-cart-o x-goods-action-icon__icon"><view class="x-info">5</view></view>
					购物车
				</view>
				<view class="x-goods-action-icon">
					<view class="x-icon x-icon-shop-o x-goods-action-icon__icon"><view class="x-info">12</view></view>
					店铺
				</view>
				<button class="x-button x-button--warning x-button--large x-button--square x-goods-action-button x-goods-action-button--first x-goods-action-button--warning">
					<span class="x-button__text">加入购物车</span>
				</button>
				<button class="x-button x-button--danger x-button--large x-button--square x-goods-action-button x-goods-action-button--last x-goods-action-button--danger">
					<span class="x-button__text">立即购买</span>
				</button>
			</view>
		</demo-block>
		<demo-block title="自定义图标颜色">
			<view class="x-goods-action">
				<view class="x-goods-action-icon">
					<view class="x-icon x-icon-chat-o x-goods-action-icon__icon" style="color: rgb(7, 193, 96);"></view>
					客服
				</view>
				<view class="x-goods-action-icon">
					<view class="x-icon x-icon-cart-o x-goods-action-icon__icon"></view>
					购物车
				</view>
				<view class="x-goods-action-icon">
					<view class="x-icon x-icon-star x-goods-action-icon__icon" style="color: rgb(255, 80, 0);"></view>
					已收藏
				</view>
				<button class="x-button x-button--warning x-button--large x-button--square x-goods-action-button x-goods-action-button--first x-goods-action-button--warning">
					<span class="x-button__text">加入购物车</span>
				</button>
				<button class="x-button x-button--danger x-button--large x-button--square x-goods-action-button x-goods-action-button--last x-goods-action-button--danger">
					<span class="x-button__text">立即购买</span>
				</button>
			</view>
		</demo-block>
		<demo-block title="自定义按钮颜色">
			<view class="x-goods-action">
				<view class="x-goods-action-icon">
					<view class="x-icon x-icon-chat-o x-goods-action-icon__icon"></view>
					客服
				</view>
				<view class="x-goods-action-icon">
					<view class="x-icon x-icon-cart-o x-goods-action-icon__icon"></view>
					购物车
				</view>
				<button
					class="x-button x-button--warning x-button--large x-button--square x-goods-action-button x-goods-action-button--first x-goods-action-button--warning"
					style="color: rgb(255, 255, 255); background: rgb(190, 153, 255); border-color: rgb(190, 153, 255);"
				>
					<span class="x-button__text">加入购物车</span>
				</button>
				<button
					class="x-button x-button--danger x-button--large x-button--square x-goods-action-button x-goods-action-button--last x-goods-action-button--danger"
					style="color: rgb(255, 255, 255); background: rgb(114, 50, 221); border-color: rgb(114, 50, 221);"
				>
					<span class="x-button__text">立即购买</span>
				</button>
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
	.demo-goods-action{
		.x-goods-action{
			position: initial;
		}
	}
</style>
