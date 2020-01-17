<template>
	<view class="demo-section">
		<view class="x-cell x-cell--center">
			<view class="x-cell__title"><span>基础用法</span></view>
			<view class="x-cell__value">
				<view class="x-stepper">
					<button type="button" class="x-stepper__minus x-stepper__minus--disabled"></button>
					<input type="number" class="x-stepper__input" />
					<button type="button" class="x-stepper__plus"></button>
				</view>
			</view>
		</view>
		<view class="x-cell x-cell--center">
			<view class="x-cell__title"><span>步长设置</span></view>
			<view class="x-cell__value">
				<view class="x-stepper">
					<button type="button" class="x-stepper__minus x-stepper__minus--disabled"></button>
					<input type="number" class="x-stepper__input" />
					<button type="button" class="x-stepper__plus"></button>
				</view>
			</view>
		</view>
		<view class="x-cell x-cell--center">
			<view class="x-cell__title"><span>限制输入范围</span></view>
			<view class="x-cell__value">
				<view class="x-stepper">
					<button type="button" class="x-stepper__minus x-stepper__minus--disabled"></button>
					<input type="number" class="x-stepper__input" />
					<button type="button" class="x-stepper__plus"></button>
				</view>
			</view>
		</view>
		<view class="x-cell x-cell--center">
			<view class="x-cell__title"><span>限制输入整数</span></view>
			<view class="x-cell__value">
				<view class="x-stepper">
					<button type="button" class="x-stepper__minus x-stepper__minus--disabled"></button>
					<input type="number" class="x-stepper__input" />
					<button type="button" class="x-stepper__plus"></button>
				</view>
			</view>
		</view>
		<view class="x-cell x-cell--center">
			<view class="x-cell__title"><span>禁用状态</span></view>
			<view class="x-cell__value">
				<view class="x-stepper">
					<button type="button" class="x-stepper__minus x-stepper__minus--disabled"></button>
					<input type="number" disabled class="x-stepper__input" />
					<button type="button" class="x-stepper__plus x-stepper__plus--disabled"></button>
				</view>
			</view>
		</view>
		<view class="x-cell x-cell--center">
			<view class="x-cell__title"><span>固定小数位数</span></view>
			<view class="x-cell__value">
				<view class="x-stepper">
					<button type="button" class="x-stepper__minus x-stepper__minus--disabled"></button>
					<input type="number" class="x-stepper__input" />
					<button type="button" class="x-stepper__plus"></button>
				</view>
			</view>
		</view>
		<view class="x-cell x-cell--center">
			<view class="x-cell__title"><span>自定义大小</span></view>
			<view class="x-cell__value">
				<view class="x-stepper">
					<button type="button" class="x-stepper__minus x-stepper__minus--disabled" style="width: 32px; height: 32px;"></button>
					<input type="number" class="x-stepper__input" style="width: 40px; height: 32px;" />
					<button type="button" class="x-stepper__plus" style="width: 32px; height: 32px;"></button>
				</view>
			</view>
		</view>
		<view class="x-cell x-cell--center">
			<view class="x-cell__title"><span>异步变更</span></view>
			<view class="x-cell__value">
				<view class="x-stepper">
					<button type="button" class="x-stepper__minus x-stepper__minus--disabled"></button>
					<input type="number" class="x-stepper__input" />
					<button type="button" class="x-stepper__plus"></button>
				</view>
			</view>
		</view>
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
