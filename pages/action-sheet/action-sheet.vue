<template>
	<view class="demo-section">
		<demo-block title="基础用法" padding>
			<button class="x-button x-button--primary" @tap="handleShow('show1')">弹出菜单</button>
			<view class="x-popup x-popup--round x-popup--bottom x-popup--safe-area-inset-bottom x-action-sheet" :class="{ 'x-popup--show': show1 }">
				<view class="x-action-sheet__item x-hairline--top"><text class="x-action-sheet__name">选项</text></view>
				<view class="x-action-sheet__item x-hairline--top"><text class="x-action-sheet__name">选项</text></view>
				<view class="x-action-sheet__item x-hairline--top">
					<text class="x-action-sheet__name">选项</text>
					<text class="x-action-sheet__subname">副文本</text>
				</view>
			</view>
		</demo-block>
		<demo-block title="选项状态" padding>
			<button class="x-button x-button--primary" @tap="handleShow('show2')">弹出菜单</button>
			<view class="x-popup x-popup--round x-popup--bottom x-popup--safe-area-inset-bottom x-action-sheet" :class="{ 'x-popup--show': show2 }">
				<view class="x-action-sheet__item x-hairline--top" style="color: rgb(7, 193, 96);"><text class="x-action-sheet__name">选项</text></view>
				<view class="x-action-sheet__item x-action-sheet__item--loading x-hairline--top"><view class="x-loading" style="width:32rpx;height:32rpx"></view></view>
				<view class="x-action-sheet__item x-action-sheet__item--disabled x-hairline--top"><text class="x-action-sheet__name">禁用选项</text></view>
			</view>
		</demo-block>
		<demo-block title="展示取消按钮" padding>
			<button class="x-button x-button--primary" @tap="handleShow('show3')">弹出菜单</button>
			<view class="x-popup x-popup--round x-popup--bottom x-popup--safe-area-inset-bottom x-action-sheet" :class="{ 'x-popup--show': show3 }">
				<view class="x-action-sheet__item x-hairline--top"><text class="x-action-sheet__name">选项</text></view>
				<view class="x-action-sheet__item x-hairline--top"><text class="x-action-sheet__name">选项</text></view>
				<view class="x-action-sheet__item x-hairline--top">
					<text class="x-action-sheet__name">选项</text>
					<text class="x-action-sheet__subname">副文本</text>
				</view>
				<view class="x-action-sheet__cancel" @tap="handleClose">取消</view>
			</view>
		</demo-block>
		<demo-block title="展示描述信息" padding>
			<button class="x-button x-button--primary" @tap="handleShow('show4')">弹出菜单</button>
			<view class="x-popup x-popup--round x-popup--bottom x-popup--safe-area-inset-bottom x-action-sheet" :class="{ 'x-popup--show': show4 }">
				<view class="x-action-sheet__description">这是一段描述信息</view>
				<view class="x-action-sheet__item x-hairline--top"><text class="x-action-sheet__name">选项</text></view>
				<view class="x-action-sheet__item x-hairline--top"><text class="x-action-sheet__name">选项</text></view>
				<view class="x-action-sheet__item x-hairline--top">
					<text class="x-action-sheet__name">选项</text>
					<text class="x-action-sheet__subname">副文本</text>
				</view>
			</view>
		</demo-block>
		<demo-block title="展示标题栏" padding>
			<button class="x-button x-button--primary" @tap="handleShow('show5')">弹出菜单</button>
			<view class="x-popup x-popup--round x-popup--bottom x-popup--safe-area-inset-bottom x-action-sheet" :class="{ 'x-popup--show': show5 }">
				<view class="x-action-sheet__header">
					标题
					<text class="x-icon x-icon-cross x-action-sheet__close" @tap="handleClose"></text>
				</view>
				<view class="x-action-sheet__content"><view style="padding: 16px 16px 160px;">内容</view></view>
			</view>
		</demo-block>

		<view class="x-overlay" :class="{ 'x-overlay--show': show1 || show2 || show3 || show4 || show5 }" @tap="handleClose"></view>
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
			show5: false
		};
	},
	methods: {
		handleShow(key) {
			this[key] = !this[key];
		},
		handleClose() {
			for (let i = 1; i <= 5; i++) {
				this[`show${i}`] = false;
			}
		}
	}
};
</script>

<style lang="scss" scoped></style>
