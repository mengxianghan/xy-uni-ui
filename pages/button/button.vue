<template>
	<view class="demo-section">
		<demo-block title="按钮类型" padding>
			<button class="x-button x-button--default">默认按钮</button>
			<button class="x-button x-button--primary">主要按钮</button>
			<button class="x-button x-button--info">信息按钮</button>
			<button class="x-button x-button--danger">危险按钮</button>
			<button class="x-button x-button--warning">警告按钮</button>
		</demo-block>
		<demo-block title="朴素按钮" padding>
			<button class="x-button x-button--primary x-button--plain">朴素按钮</button>
			<button class="x-button x-button--info x-button--plain">朴素按钮</button>
		</demo-block>
		<demo-block title="细边框" padding>
			<button class="x-button x-button--primary x-button--plain x-button--hairline">朴素按钮</button>
			<button class="x-button x-button--info x-button--plain x-button--hairline">朴素按钮</button>
		</demo-block>
		<demo-block title="禁用状态" padding>
			<button class="x-button x-button--primary x-button--disabled" disabled>禁用状态</button>
			<button class="x-button x-button--info x-button--disabled" disabled>禁用状态</button>
			<button class="x-button x-button--info x-button--plain x-button--disabled" disabled>禁用状态</button>
		</demo-block>
		<demo-block title="加载状态" padding>
			<button class="x-button x-button--primary"><view class="x-loading"></view></button>
			<button class="x-button x-button--info">
				<text class="x-loading"></text>
				加载中...
			</button>
			<button class="x-button x-button--primary" loading>加载中</button>
		</demo-block>
		<demo-block title="按钮形状" padding>
			<button class="x-button x-button--primary x-button--square">方形按钮</button>
			<button class="x-button x-button--info x-button--round">圆形按钮</button>
		</demo-block>
		<demo-block title="图标按钮--延后" padding>
			<button class="x-button x-button--primary"><text class="x-icon x-icon-star-o x-button__icon"></text></button>
			<button class="x-button x-button--primary">
				<text class="x-icon x-icon-star-o x-button__icon"></text>
				按钮
			</button>
		</demo-block>
		<demo-block title="按钮尺寸" padding>
			<button class="x-button x-button--primary x-button--large">大号按钮</button>
			<button class="x-button x-button--primary">普通按钮</button>
			<button class="x-button x-button--primary x-button--small">小型按钮</button>
			<button class="x-button x-button--primary x-button--mini">mini按钮</button>
		</demo-block>
		<demo-block title="块级元素" padding>
			<button class="x-button x-button--primary">普通按钮</button>
			<button class="x-button x-button--primary x-button--block">块级元素</button>
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
.x-button {
	margin: 0 16rpx 16rpx 0;
	.x-loading {
		width: 32rpx;
		height: 32rpx;
		color: currentColor;
	}
}
</style>
