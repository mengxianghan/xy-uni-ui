<template>
	<view class="demo-section">
		<demo-block title="基础用法">
			<view class="x-cell x-cell--clickable x-cell--center x-cell--borderless x-contact-card x-contact-card--edit">
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
		<demo-block title="编辑">
			<view class="x-contact-edit">
				<view class="x-contact-edit__fields">
					<view class="x-cell x-field">
						<view class="x-cell__title x-field__label"><text>姓名</text></view>
						<view class="x-cell__value">
							<view class="x-field__body"><input type="text" placeholder="请填写姓名" class="x-field__control" /></view>
						</view>
					</view>
					<view class="x-cell x-field">
						<view class="x-cell__title x-field__label"><text>电话</text></view>
						<view class="x-cell__value">
							<view class="x-field__body"><input type="tel" placeholder="请填写电话" class="x-field__control" /></view>
						</view>
					</view>
				</view>
				<view class="x-cell x-cell--borderless x-contact-edit__switch-cell">
					<view class="x-cell__title"><text>设为默认联系人</text></view>
					<view class="x-cell__value">
						<view role="switch" aria-checked="false" class="x-switch" style="font-size: 24px;"><view class="x-switch__node"></view></view>
					</view>
				</view>
				<view class="x-contact-edit__buttons">
					<button class="x-button x-button--danger x-button--normal x-button--block x-button--round"><text class="x-button__text">保存</text></button>
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
						<view aria-checked="false" class="x-radio">
							<view class="x-radio__icon x-radio__icon--round" style="font-size: 16px;">
								<text class="x-icon x-icon-success"></text>
							</view>
						</view>
					</view>
				</view>
				<view class="x-contact-list__bottom">
					<button class="x-button x-button--danger x-button--normal x-button--block x-button--round x-contact-list__add">
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
	}
};
</script>

<style lang="scss" scoped></style>
