<template>
	<view class="demo-section">
		<demo-block title="基础用法">
			<view class="x-notice-bar">
				<text class="x-icon x-icon-volume-o x-notice-bar__left-icon"></text>
				<view class="x-notice-bar__wrap">
					<view class="x-notice-bar__content x-notice-bar__play--infinite" style="padding-left: 321px;">
						足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
					</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="禁止滚动">
			<view class="x-notice-bar">
				<view class="x-notice-bar__wrap">
					<view class="x-notice-bar__content x-ellipsis">足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="多行展示">
			<view class="x-notice-bar x-notice-bar--wrapable">
				<view class="x-notice-bar__wrap">
					<view class="x-notice-bar__content">足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="通知栏模式">
			<view class="x-notice-bar">
				<view class="x-notice-bar__wrap">
					<view class="x-notice-bar__content x-notice-bar__play--infinite" style="padding-left: 321px;">
						足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
					</view>
				</view>
				<text class="x-icon x-icon-cross x-notice-bar__right-icon"></text>
			</view>
			<view class="x-notice-bar">
				<view class="x-notice-bar__wrap">
					<view class="x-notice-bar__content x-notice-bar__play--infinite" style="padding-left: 321px;">
						足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
					</view>
				</view>
				<text class="x-icon x-icon-arrow x-notice-bar__right-icon"></text>
			</view>
		</demo-block>
		<demo-block title="自定义样式">
			<view class="x-notice-bar" style="color: rgb(25, 137, 250); background: rgb(236, 249, 255) none repeat scroll 0% 0%;">
				<text class="x-icon x-icon-info-o x-notice-bar__left-icon"></text>
				<view class="x-notice-bar__wrap">
					<view class="x-notice-bar__content x-notice-bar__play--infinite" style="padding-left: 321px;">
						足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
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
