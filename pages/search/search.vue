<template>
	<view class="x-doc-demo-section">
		<demo-block title="基础用法">
			<view class="x-search" style="background: rgb(255, 255, 255);">
				<view class="x-search__content x-search__content--square">
					<view class="x-cell x-cell--borderless x-field">
						<view class="x-field__left-icon">
							<text class="x-icon x-icon-search"></text>
						</view>
						<view class="x-cell__value x-cell__value--alone">
							<view class="x-field__body"><input type="search" placeholder="请输入搜索关键词" class="x-field__control" /></view>
						</view>
					</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="事件监听">
			<view class="x-search x-search--show-action" style="background: rgb(255, 255, 255);">
				<view class="x-search__content x-search__content--square">
					<view class="x-cell x-cell--borderless x-field">
						<view class="x-field__left-icon">
							<text class="x-icon x-icon-search"></text>
						</view>
						<view class="x-cell__value x-cell__value--alone">
							<view class="x-field__body"><input type="search" placeholder="请输入搜索关键词" class="x-field__control" /></view>
						</view>
					</view>
				</view>
				<view role="button" tabindex="0" class="x-search__action">取消</view>
			</view>
		</demo-block>
		<demo-block title="自定义按钮">
			<view class="x-search x-search--show-action" style="background: rgb(255, 255, 255);">
				<view class="x-search__content x-search__content--round">
					<view class="x-search__label">地址</view>
					<view class="x-cell x-cell--borderless x-field">
						<view class="x-field__left-icon">
							<text class="x-icon x-icon-search"></text>
						</view>
						<view class="x-cell__value x-cell__value--alone">
							<view class="x-field__body"><input type="search" placeholder="请输入搜索关键词" class="x-field__control" /></view>
						</view>
					</view>
				</view>
				<view role="button" tabindex="0" class="x-search__action"><view>搜索</view></view>
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
