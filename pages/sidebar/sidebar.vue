<template>
	<view class="x-doc-demo-section">
		<demo-block title="基础用法" padding>
			<view class="x-sidebar">
				<view class="x-sidebar-item x-sidebar-item--select"><view class="x-sidebar-item__text">标签名</view></view>
				<view class="x-sidebar-item"><view class="x-sidebar-item__text">标签名</view></view>
				<view class="x-sidebar-item"><view class="x-sidebar-item__text">标签名</view></view>
			</view>
		</demo-block>
		<demo-block title="提示信息" padding>
			<view class="x-sidebar">
				<view class="x-sidebar-item x-sidebar-item--select">
					<view class="x-sidebar-item__text">
						标签名
						<view class="x-info x-info--dot x-sidebar-item__info"></view>
					</view>
				</view>
				<view class="x-sidebar-item">
					<view class="x-sidebar-item__text">
						标签名
						<view class="x-info x-sidebar-item__info">5</view>
					</view>
				</view>
				<view class="x-sidebar-item">
					<view class="x-sidebar-item__text">
						标签名
						<view class="x-info x-sidebar-item__info">99+</view>
					</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="禁用选项" padding>
			<view class="x-sidebar">
				<view class="x-sidebar-item x-sidebar-item--select">
					<view class="x-sidebar-item__text">
						标签名
					</view>
				</view>
				<view class="x-sidebar-item x-sidebar-item--disabled">
					<view class="x-sidebar-item__text">
						标签名
					</view>
				</view>
				<view class="x-sidebar-item">
					<view class="x-sidebar-item__text">
						标签名
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
