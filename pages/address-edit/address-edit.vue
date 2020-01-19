<template>
	<view class="demo-section demo-address-edit">
		<demo-block title="基础用法">
			<view class="x-address-edit">
				<view class="x-address-edit__fields">
					<view class="x-cell x-field">
						<view class="x-cell__title x-field__label"><span>姓名</span></view>
						<view class="x-cell__value">
							<view class="x-field__body"><input type="text" placeholder="收货人姓名" class="x-field__control" /></view>
						</view>
					</view>
					<view class="x-cell x-field">
						<view class="x-cell__title x-field__label"><span>电话</span></view>
						<view class="x-cell__value">
							<view class="x-field__body"><input type="tel" placeholder="收货人手机号" class="x-field__control" /></view>
						</view>
					</view>
					<view class="x-cell x-cell--clickable x-field">
						<view class="x-cell__title x-field__label"><span>地区</span></view>
						<view class="x-cell__value">
							<view class="x-field__body">
								<input type="text" placeholder="选择省 / 市 / 区" readonly="readonly" class="x-field__control" />
								<view class="x-field__right-icon"><i class="x-icon x-icon-arrow"></i></view>
							</view>
						</view>
					</view>
					<view class="x-cell x-address-edit-detail x-field">
						<view class="x-cell__title x-field__label"><span>详细地址</span></view>
						<view class="x-cell__value">
							<view class="x-field__body">
								<textarea rows="1" placeholder="街道门牌、楼层房间号等信息" class="x-field__control" auto-height></textarea>
							</view>
						</view>
					</view>
					<view class="x-cell x-field">
						<view class="x-cell__title x-field__label"><span>邮政编码</span></view>
						<view class="x-cell__value">
							<view class="x-field__body"><input type="tel" placeholder="邮政编码" class="x-field__control" /></view>
						</view>
					</view>
				</view>
				<view class="x-cell x-cell--center x-switch-cell x-address-edit__default">
					<view class="x-cell__title"><span>设为默认收货地址</span></view>
					<view class="x-switch"><switch></switch></view>
				</view>
				<view class="x-address-edit__buttons">
					<button class="x-button x-button--danger x-button--normal x-button--block x-button--round"><span class="x-button__text">保存</span></button>
					<button class="x-button x-button--default x-button--normal x-button--block x-button--round"><span class="x-button__text">删除</span></button>
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

<style lang="scss" scoped>
.demo-address-edit {
	.x-switch {
		--switch-size: 24px;
	}
}
</style>
