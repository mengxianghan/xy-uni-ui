<template>
	<view class="x-doc-demo-section">
		<demo-block title="基础用法">
			<view class="x-card">
				<view class="x-card__header">
					<view class="x-card__thumb">
						<view class="x-image"><image src="https://img.yzcdn.cn/vant/t-thirt.jpg" mode="aspectFit" class="x-image__img" /></view>
					</view>
					<view class="x-card__content">
						<view>
							<view class="x-card__title x-multi-ellipsis--l2">商品名称</view>
							<view class="x-card__desc x-ellipsis">描述信息</view>
						</view>
						<view class="x-card__bottom">
							<view class="x-card__price">
								<view>
									<text class="x-card__price-currency">¥</text>
									<text class="x-card__price-integer">2</text>
									.
									<text class="x-card__price-decimal">00</text>
								</view>
							</view>
							<view class="x-card__num">x2</view>
						</view>
					</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="营销信息">
			<view class="x-card">
				<view class="x-card__header">
					<view class="x-card__thumb">
						<view class="x-image"><image src="https://img.yzcdn.cn/vant/t-thirt.jpg" mode="aspectFit" class="x-image__img" /></view>
						<view class="x-card__tag"><text class="x-tag x-tag--mark x-tag--danger">标签</text></view>
					</view>
					<view class="x-card__content">
						<view>
							<view class="x-card__title x-multi-ellipsis--l2">商品名称</view>
							<view class="x-card__desc x-ellipsis">描述信息</view>
						</view>
						<view class="x-card__bottom">
							<view class="x-card__price">
								<view>
									<text class="x-card__price-currency">¥</text>
									<text class="x-card__price-integer">2</text>
									.
									<text class="x-card__price-decimal">00</text>
								</view>
							</view>
							<view class="x-card__origin-price">¥ 10.00</view>
							<view class="x-card__num">x2</view>
						</view>
					</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="自定义内容">
			<view class="x-card">
				<view class="x-card__header">
					<view class="x-card__thumb">
						<view class="x-image"><image src="https://img.yzcdn.cn/vant/t-thirt.jpg" mode="aspectFit" class="x-image__img" /></view>
					</view>
					<view class="x-card__content">
						<view>
							<view class="x-card__title x-multi-ellipsis--l2">商品名称</view>
							<view class="x-card__desc x-ellipsis">描述信息</view>
							<view>
								<text class="x-tag x-tag--plain x-tag--danger x-hairline--surround" style="margin-right: 5px;">标签</text>
								<text class="x-tag x-tag--plain x-tag--danger x-hairline--surround">标签</text>
							</view>
						</view>
						<view class="x-card__bottom">
							<view class="x-card__price">
								<view>
									<text class="x-card__price-currency">¥</text>
									<text class="x-card__price-integer">2</text>
									.
									<text class="x-card__price-decimal">00</text>
								</view>
							</view>
							<view class="x-card__num">x2</view>
						</view>
					</view>
				</view>
				<view class="x-card__footer">
					<view>
						<button class="x-button x-button--default x-button--mini x-button--round"><text class="x-button__text">按钮</text></button>
						<button class="x-button x-button--default x-button--mini x-button--round"><text class="x-button__text">按钮</text></button>
					</view>
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
<style lang="scss">
page {
	background: #fff;
}
</style>
<style lang="scss" scoped></style>
