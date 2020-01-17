<template>
	<view class="demo-section demo-dialog">
		<demo-block title="提示弹窗" padding>
			<button class="x-button x-button--primary" @tap="handleShow('show')">提示弹窗</button>
			<button class="x-button x-button--primary" @tap="handleShow('show1')">提示弹窗（无标题）</button>
			<view class="x-dialog" :class="{ 'x-dialog--show': show }">
				<view class="x-dialog__header">标题</view>
				<view class="x-dialog__content"><view class="x-dialog__message x-dialog__message--has-title">代码是写出来给人看的，附带能在机器上运行</view></view>
				<view class="x-hairline--top x-dialog__footer">
					<button class="x-button x-button--default x-button--large x-dialog__confirm" @tap="handleShow('show')"><text class="x-button__text">确认</text></button>
				</view>
			</view>

			<view class="x-dialog" :class="{ 'x-dialog--show': show1 }">
				<view class="x-dialog__content"><view class="x-dialog__message x-dialog__message--has-title">代码是写出来给人看的，附带能在机器上运行</view></view>
				<view class="x-hairline--top x-dialog__footer">
					<button class="x-button x-button--default x-button--large x-dialog__confirm" @tap="handleShow('show1')"><text class="x-button__text">确认</text></button>
				</view>
			</view>
		</demo-block>
		<demo-block title="确认弹窗" padding>
			<button class="x-button x-button--primary" @tap="handleShow('show2')">确认弹窗</button>
			<view class="x-dialog" :class="{ 'x-dialog--show': show2 }">
				<view class="x-dialog__header">标题</view>
				<view class="x-dialog__content"><view class="x-dialog__message x-dialog__message--has-title">代码是写出来给人看的，附带能在机器上运行</view></view>
				<view class="x-hairline--top x-dialog__footer x-dialog__footer--buttons">
					<button class="x-button x-button--default x-button--large x-dialog__cancel" @tap="handleShow('show2')"><text class="x-button__text">取消</text></button>
					<button class="x-button x-button--default x-button--large x-dialog__confirm x-hairline--left" @tap="handleShow('show2')">
						<text class="x-button__text">确认</text>
					</button>
				</view>
			</view>
		</demo-block>

		<view class="x-overlay" :class="{ 'x-overlay--show': show || show1 || show2 }"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			show1: false,
			show2: false
		};
	},
	methods: {
		handleShow(key) {
			this[key] = !this[key];
		}
	}
};
</script>

<style lang="scss" scoped>
.demo-dialog {
	image {
		box-sizing: border-box;
		width: 100%;
		padding: 25px 20px 0;
	}
	&--doc {
		position: initial;
		transform: none;
	}
	.x-button {
		margin-right: 16rpx;
	}
}
</style>
