<template>
	<view class="demo-section">
		<demo-block title="基础用法">
			<view class="x-cell x-cell--clickable" @tap="handleShow('show1')">
				<view class="x-cell__title"><text>展示弹出层</text></view>
				<text class="x-icon x-icon-arrow x-cell__right-icon"></text>
			</view>

			<view class="x-popup x-popup--center" :class="{ 'x-popup--show': show1 }" style="padding: 30px 50px; z-index: 2135;">内容</view>
		</demo-block>
		<demo-block title="弹出位置">
			<view class="x-cell x-cell--clickable" @tap="handleShow('show2')">
				<view class="x-cell__title"><text>顶部弹出</text></view>
				<text class="x-icon x-icon-arrow x-cell__right-icon"></text>
			</view>
			<view class="x-popup x-popup--top" :class="{ 'x-popup--show': show2 }" style="height: 20%; z-index: 2141;"></view>

			<view class="x-cell x-cell--clickable" @tap="handleShow('show3')">
				<view class="x-cell__title"><text>底部弹出</text></view>
				<text class="x-icon x-icon-arrow x-cell__right-icon"></text>
			</view>
			<view class="x-popup x-popup--bottom" :class="{ 'x-popup--show': show3 }" style="height: 20%; z-index: 2143;"></view>

			<view class="x-cell x-cell--clickable" @tap="handleShow('show4')">
				<view class="x-cell__title"><text>左侧弹出</text></view>
				<text class="x-icon x-icon-arrow x-cell__right-icon"></text>
			</view>
			<view class="x-popup x-popup--left" :class="{ 'x-popup--show': show4 }" style="width: 20%; height: 100%; z-index: 2145;"></view>

			<view class="x-cell x-cell--clickable" @tap="handleShow('show5')">
				<view class="x-cell__title"><text>右侧弹出</text></view>
				<text class="x-icon x-icon-arrow x-cell__right-icon"></text>
			</view>
			<view class="x-popup x-popup--right" :class="{ 'x-popup--show': show5 }" style="width: 20%; height: 100%; z-index: 2147;"></view>
		</demo-block>
		<demo-block title="关闭图标">
			<view class="x-cell x-cell--clickable" @tap="handleShow('show6')">
				<view class="x-cell__title"><text>关闭图标</text></view>
				<text class="x-icon x-icon-arrow x-cell__right-icon"></text>
			</view>
			<view class="x-popup x-popup--bottom" :class="{ 'x-popup--show': show6 }" style="height: 20%; z-index: 2149;">
				<text class="x-icon x-icon-cross x-popup__close-icon x-popup__close-icon--top-right"></text>
			</view>

			<view class="x-cell x-cell--clickable" @tap="handleShow('show7')">
				<view class="x-cell__title"><text>自定义图标</text></view>
				<text class="x-icon x-icon-arrow x-cell__right-icon"></text>
			</view>
			<view class="x-popup x-popup--bottom" :class="{ 'x-popup--show': show7 }" style="height: 20%; z-index: 2151;">
				<text class="x-icon x-icon-close x-popup__close-icon x-popup__close-icon--top-right"></text>
			</view>

			<view class="x-cell x-cell--clickable" @tap="handleShow('show8')">
				<view class="x-cell__title"><text>图标位置</text></view>
				<text class="x-icon x-icon-arrow x-cell__right-icon"></text>
			</view>
			<view class="x-popup x-popup--bottom" :class="{ 'x-popup--show': show8 }" style="height: 20%; z-index: 2153;">
				<text class="x-icon x-icon-cross x-popup__close-icon x-popup__close-icon--top-left"></text>
			</view>
		</demo-block>
		<demo-block title="圆角弹窗">
			<view class="x-cell x-cell--clickable" @tap="handleShow('show9')">
				<view class="x-cell__title"><text>圆角弹窗</text></view>
				<text class="x-icon x-icon-arrow x-cell__right-icon"></text>
			</view>
			<view class="x-popup x-popup--round x-popup--bottom" :class="{ 'x-popup--show': show9 }" style="height: 20%; z-index: 2155;"></view>
		</demo-block>

		<view class="x-overlay" :class="{ 'x-overlay--show': show1 || show2 || show3 || show4 || show5 || show6 || show7 || show8 || show9 }" @tap="handleClose"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show1: false,
			show2: false,
			show3: false,
			show4: false,
			show5: false,
			show6: false,
			show7: false,
			show8: false,
			show9: false
		};
	},
	methods: {
		handleShow(key) {
			this[key] = !this[key];
		},
		handleClose() {
			for (let i = 1; i <= 9; i++) {
				this[`show${i}`] = false;
			}
		}
	}
};
</script>

<style lang="scss" scoped></style>
