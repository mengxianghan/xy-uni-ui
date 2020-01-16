<template>
	<view class="x-doc-demo-section">
		<demo-block title="基础用法">
			<view class="x-cell-group">
				<view class="x-cell">
					<view class="x-cell__title"><text>单元格</text></view>
					<view class="x-cell__value"><text>内容</text></view>
				</view>
				<view class="x-cell">
					<view class="x-cell__title">
						<text>单元格</text>
						<view class="x-cell__label">描述信息</view>
					</view>
					<view class="x-cell__value"><text>内容</text></view>
				</view>
			</view>
		</demo-block>
		<demo-block title="单元格大小">
			<view class="x-cell x-cell--large">
				<view class="x-cell__title"><text>单元格</text></view>
				<view class="x-cell__value"><text>内容</text></view>
			</view>
			<view class="x-cell x-cell--large">
				<view class="x-cell__title">
					<text>单元格</text>
					<view class="x-cell__label">描述信息</view>
				</view>
				<view class="x-cell__value"><text>内容</text></view>
			</view>
		</demo-block>
		<demo-block title="展示图标">
			<view class="x-cell">
				<view class="x-cell__left-icon"><text class="x-icon x-icon-location-o"></text></view>
				<view class="x-cell__title"><text>单元格</text></view>
				<view class="x-cell__value"><text>内容</text></view>
			</view>
			<view class="x-cell">
				<view class="x-cell__left-icon"><text class="x-icon x-icon-shop-o"></text></view>
				<view class="x-cell__title"><text>单元格</text></view>
				<view class="x-cell__right-icon"><text class="x-icon x-icon-search"></text></view>
			</view>
		</demo-block>
		<demo-block title="只设置value">
			<view class="x-cell">
				<view class="x-cell__value x-cell__value--alone"><text>内容</text></view>
			</view>
		</demo-block>
		<demo-block title="展示箭头">
			<view class="x-cell x-cell--clickable">
				<view class="x-cell__title"><text>单元格</text></view>
				<view class="x-cell__right-icon"><text class="x-icon x-icon-arrow"></text></view>
			</view>
			<view class="x-cell x-cell--clickable">
				<view class="x-cell__title"><text>单元格</text></view>
				<view class="x-cell__value">内容</view>
				<view class="x-cell__right-icon"><text class="x-icon x-icon-arrow"></text></view>
			</view>
			<view class="x-cell x-cell--clickable">
				<view class="x-cell__title"><text>单元格</text></view>
				<view class="x-cell__value">内容</view>
				<view class="x-cell__right-icon"><text class="x-icon x-icon-arrow-down"></text></view>
			</view>
		</demo-block>
		<demo-block title="分组标题">
			<view class="x-cell-group">
				<view class="x-cell-group__title">分组1</view>
				<view class="x-cell">
					<view class="x-cell__title"><text>单元格</text></view>
					<view class="x-cell__value">内容</view>
				</view>
			</view>
			<view class="x-cell-group">
				<view class="x-cell-group__title">分组2</view>
				<view class="x-cell">
					<view class="x-cell__title"><text>单元格</text></view>
					<view class="x-cell__value">内容</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="垂直居中">
			<view class="x-cell x-cell--center">
				<view class="x-cell__title">
					<text>单元格</text>
					<view class="x-cell__label">描述信息</view>
				</view>
				<view class="x-cell__value">内容</view>
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
