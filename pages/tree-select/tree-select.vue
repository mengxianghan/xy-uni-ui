<template>
	<view class="demo-section">
		<demo-block title="单选模式">
			<view class="x-tree-select" style="height: 300px;">
				<view class="x-sidebar x-tree-select__nav">
					<view class="x-sidebar-item x-sidebar-item--select x-tree-select__nav-item"><view class="x-sidebar-item__text">浙江</view></view>
					<view class="x-sidebar-item x-tree-select__nav-item"><view class="x-sidebar-item__text">江苏</view></view>
					<view class="x-sidebar-item x-sidebar-item--disabled x-tree-select__nav-item"><view class="x-sidebar-item__text">福建</view></view>
				</view>
				<view class="x-tree-select__content">
					<view class="x-ellipsis x-tree-select__item x-tree-select__item--active">
						杭州
						<text class="x-icon x-icon-checked x-tree-select__selected"></text>
					</view>
					<view class="x-ellipsis x-tree-select__item">温州</view>
					<view class="x-ellipsis x-tree-select__item x-tree-select__item--disabled">宁波</view>
					<view class="x-ellipsis x-tree-select__item">义乌</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="多选模式">
			<view class="x-tree-select" style="height: 300px;">
				<view class="x-sidebar x-tree-select__nav">
					<view class="x-sidebar-item x-sidebar-item--select x-tree-select__nav-item"><view class="x-sidebar-item__text">浙江</view></view>
					<view class="x-sidebar-item x-tree-select__nav-item"><view class="x-sidebar-item__text">江苏</view></view>
					<view class="x-sidebar-item x-sidebar-item--disabled x-tree-select__nav-item"><view class="x-sidebar-item__text">福建</view></view>
				</view>
				<view class="x-tree-select__content">
					<view class="x-ellipsis x-tree-select__item x-tree-select__item--active">
						杭州
						<text class="x-icon x-icon-checked x-tree-select__selected"></text>
					</view>
					<view class="x-ellipsis x-tree-select__item x-tree-select__item--active">
						温州
						<text class="x-icon x-icon-checked x-tree-select__selected"></text>
					</view>
					<view class="x-ellipsis x-tree-select__item x-tree-select__item--disabled">宁波</view>
					<view class="x-ellipsis x-tree-select__item">义乌</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="自定义内容">
			<view class="x-tree-select" style="height: 55vw;">
				<view class="x-sidebar x-tree-select__nav">
					<view class="x-sidebar-item x-sidebar-item--select x-tree-select__nav-item"><view class="x-sidebar-item__text">分组 1</view></view>
					<view class="x-sidebar-item x-tree-select__nav-item"><view class="x-sidebar-item__text">分组 2</view></view>
				</view>
				<view class="x-tree-select__content">
					<view class="x-image" style="width:100%;"><image mode="widthFix" src="https://img.yzcdn.cn/vant/apple-1.jpg" class="x-image__img" /></view>
				</view>
			</view>
		</demo-block>
		<demo-block title="提示信息">
			<view class="x-tree-select" style="height: 55vw;">
				<view class="x-sidebar x-tree-select__nav">
					<view class="x-sidebar-item x-sidebar-item--select x-tree-select__nav-item">
						<view class="x-sidebar-item__text">
							浙江
							<view class="x-info x-info--dot x-sidebar-item__info"></view>
						</view>
					</view>
					<view class="x-sidebar-item x-tree-select__nav-item">
						<view class="x-sidebar-item__text">
							江苏
							<view class="x-info x-sidebar-item__info">5</view>
						</view>
					</view>
				</view>
				<view class="x-tree-select__content">
					<view class="x-ellipsis x-tree-select__item x-tree-select__item--active">
						杭州
						<text class="x-icon x-icon-checked x-tree-select__selected"></text>
					</view>
					<view class="x-ellipsis x-tree-select__item">温州</view>
					<view class="x-ellipsis x-tree-select__item x-tree-select__item--disabled">宁波</view>
					<view class="x-ellipsis x-tree-select__item">义乌</view>
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
