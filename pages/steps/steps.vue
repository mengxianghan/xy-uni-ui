<template>
	<view class="demo-section">
		<demo-block title="基础用法">
			<view class="x-steps x-steps--horizontal">
				<view class="x-steps__items">
					<view class="x-hairline x-step x-step--horizontal x-step--finish">
						<view class="x-step__title" style="">买家下单</view>
						<view class="x-step__circle-container"><text class="x-step__circle" style=""></text></view>
						<view class="x-step__line"></view>
					</view>
					<view class="x-hairline x-step x-step--horizontal x-step--process">
						<view class="x-step__title" style="color: rgb(7, 193, 96);">商家接单</view>
						<view class="x-step__circle-container"><text class="x-icon x-icon-checked x-step__icon" style="color: rgb(7, 193, 96);"></text></view>
						<view class="x-step__line"></view>
					</view>
					<view class="x-hairline x-step x-step--horizontal">
						<view class="x-step__title" style="">买家提货</view>
						<view class="x-step__circle-container"><text class="x-step__circle" style=""></text></view>
						<view class="x-step__line"></view>
					</view>
					<view class="x-hairline x-step x-step--horizontal">
						<view class="x-step__title" style="">交易完成</view>
						<view class="x-step__circle-container"><text class="x-step__circle" style=""></text></view>
						<view class="x-step__line"></view>
					</view>
				</view>
			</view>
		</demo-block>

		<demo-block title="自定义样式">
			<view class="x-steps x-steps--horizontal">
				<view class="x-steps__items">
					<view class="x-hairline x-step x-step--horizontal x-step--finish">
						<view class="x-step__title">买家下单</view>
						<view class="x-step__circle-container"><text class="x-icon x-icon-arrow x-step__icon" style=""></text></view>
						<view class="x-step__line"></view>
					</view>
					<view class="x-hairline x-step x-step--horizontal x-step--process">
						<view class="x-step__title" style="color: rgb(51, 136, 255);">商家接单</view>
						<view class="x-step__circle-container"><text class="x-icon x-icon-success x-step__icon" style="color: rgb(51, 136, 255);"></text></view>
						<view class="x-step__line"></view>
					</view>
					<view class="x-hairline x-step x-step--horizontal">
						<view class="x-step__title" style="">买家提货</view>
						<view class="x-step__circle-container"><text class="x-icon x-icon-arrow x-step__icon" style=""></text></view>
						<view class="x-step__line"></view>
					</view>
					<view class="x-hairline x-step x-step--horizontal">
						<view class="x-step__title" style="">交易完成</view>
						<view class="x-step__circle-container"><text class="x-icon x-icon-arrow x-step__icon" style=""></text></view>
						<view class="x-step__line"></view>
					</view>
				</view>
			</view>
		</demo-block>

		<demo-block title="竖向步骤条">
			<view class="x-steps x-steps--vertical">
				<view class="x-steps__items">
					<view class="x-hairline x-step x-step--vertical x-step--process">
						<view class="x-step__title" style="color: rgb(7, 193, 96);">
							<view>【城市】物流状态1</view>
							<view>2016-07-12 12:40</view>
						</view>
						<view class="x-step__circle-container"><text class="x-icon x-icon-checked x-step__icon" style="color: rgb(7, 193, 96);"></text></view>
						<view class="x-step__line"></view>
					</view>
					<view class="x-hairline x-step x-step--vertical">
						<view class="x-step__title">
							<view>【城市】物流状态</view>
							<view>2016-07-11 10:00</view>
						</view>
						<view class="x-step__circle-container"><text class="x-step__circle"></text></view>
						<view class="x-step__line"></view>
					</view>
					<view class="x-hairline x-step x-step--vertical">
						<view class="x-step__title">
							<view>快件已发货</view>
							<view>2016-07-10 09:30</view>
						</view>
						<view class="x-step__circle-container"><text class="x-step__circle"></text></view>
						<view class="x-step__line"></view>
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

<style lang="scss" scoped></style>
