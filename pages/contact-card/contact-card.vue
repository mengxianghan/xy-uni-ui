<template>
	<view class="demo-section demo-contact-card">
		<demo-block title="基础用法">
			<view class="x-cell x-cell--clickable x-cell--center x-cell--borderless x-contact-card x-contact-card--edit" @tap="handleCreate">
				<text class="x-icon x-icon-contact x-cell__left-icon"></text>
				<view class="x-cell__value x-cell__value--alone x-contact-card__value">
					<view>姓名：张三</view>
					<view>电话：13000000000</view>
				</view>
				<text class="x-icon x-icon-arrow x-cell__right-icon"></text>
			</view>
		</demo-block>
		<demo-block title="不可编辑">
			<view class="x-cell x-cell--center x-cell--borderless x-contact-card x-contact-card--edit">
				<text class="x-icon x-icon-contact x-cell__left-icon"></text>
				<view class="x-cell__value x-cell__value--alone x-contact-card__value">
					<view>姓名：张三</view>
					<view>电话：13000000000</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="列表">
			<view class="x-contact-list">
				<view class="x-radio-group x-contact-list__group">
					<view class="x-cell x-cell--clickable x-cell--center x-contact-list__item">
						<text class="x-icon x-icon-edit x-contact-list__edit"></text>
						<view class="x-cell__value x-cell__value--alone x-contact-list__item-value">
							张三，13000000000
							<text class="x-tag x-tag--round x-tag--danger x-contact-list__item-tag">默认</text>
						</view>
						<label class="x-radio">
							<radio />
						</label>
					</view>
				</view>
				<view class="x-contact-list__bottom">
					<button class="x-button x-button--danger x-button--normal x-button--block x-button--round x-contact-list__add"
					 @tap="handleCreate">
						<text class="x-button__text">新建联系人</text>
					</button>
				</view>
			</view>
		</demo-block>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			handleCreate() {
				uni.navigateTo({
					url: '/pages/address-edit/address-edit'
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
</style>
