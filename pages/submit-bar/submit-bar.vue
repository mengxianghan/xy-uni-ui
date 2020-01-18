<template>
	<view class="demo-section demo-submit-bar">
		<demo-block title="基础用法">
			<view class="x-submit-bar">
				<view class="x-submit-bar__bar">
					<view class="x-submit-bar__text">
						<text>合计：</text>
						<text class="x-submit-bar__price">
							¥
							<text class="x-submit-bar__price x-submit-bar__price--integer">30</text>
							.50
						</text>
					</view>
					<button class="x-button x-button--danger x-button--round x-submit-bar__button x-submit-bar__button--danger">
						<text class="x-button__text">提交订单</text>
					</button>
				</view>
			</view>
		</demo-block>
		<demo-block title="禁用状态">
			<view class="x-submit-bar">
				<view class="x-submit-bar__tip">
					<text class="x-icon x-icon-info-o x-submit-bar__tip-icon"></text>
					<text class="x-submit-bar__tip-text">你的收货地址不支持同城送, 我们已为你推荐快递</text>
				</view>
				<view class="x-submit-bar__bar">
					<view class="x-submit-bar__text">
						<text>合计：</text>
						<text class="x-submit-bar__price">
							¥
							<text class="x-submit-bar__price x-submit-bar__price--integer">30</text>
							.50
						</text>
					</view>
					<button
						disabled
						class="x-button x-button--danger x-button--disabled x-button--round x-submit-bar__button x-submit-bar__button--danger">
						<text class="x-button__text">提交订单</text>
					</button>
				</view>
			</view>
		</demo-block>
		<demo-block title="加载状态">
			<view class="x-submit-bar">
				<view class="x-submit-bar__bar">
					<view class="x-submit-bar__text">
						<text>合计：</text>
						<text class="x-submit-bar__price">
							¥
							<text class="x-submit-bar__price x-submit-bar__price--integer">30</text>
							.50
						</text>
					</view>
					<button class="x-button x-button--danger x-button--loading x-button--round x-submit-bar__button x-submit-bar__button--danger">
						<text class="x-loading" style="color: currentcolor; width: 32rpx; height: 32rpx;"></text>
					</button>
				</view>
			</view>
		</demo-block>
		<demo-block title="高级用法">
			<view class="x-submit-bar">
				<view class="x-submit-bar__tip">
					你的收货地址不支持同城送,
					<text class="edit-address">修改地址</text>
				</view>
				<view class="x-submit-bar__bar">
					<label class="x-checkbox x-checkbox--round">
						<checkbox />
						<text class="x-checkbox__label">全选</text>
					</label>
					<view class="x-submit-bar__text">
						<text>合计：</text>
						<text class="x-submit-bar__price">
							¥
							<text class="x-submit-bar__price x-submit-bar__price--integer">30</text>
							.50
						</text>
					</view>
					<button class="x-button x-button--danger x-button--round x-submit-bar__button x-submit-bar__button--danger">
						<text class="x-button__text">提交订单</text>
					</button>
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

<style lang="scss" scoped>
	.demo-submit-bar{
		.x-submit-bar{
			position:initial;
		}
	}
</style>
