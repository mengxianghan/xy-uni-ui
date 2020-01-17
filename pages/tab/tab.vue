<template>
	<view class="demo-section demo-tab">
		<demo-block title="基础用法">
			<view class="x-tabs x-tabs--line">
				<view class="x-tabs__wrap x-hairline--top-bottom">
					<view role="tablist" class="x-tabs__nav x-tabs__nav--line">
						<view role="tab" class="x-tab x-ellipsis"><text class="x-tab__text">标签 1</text></view>
						<view role="tab" class="x-tab x-ellipsis"><text class="x-tab__text">标签 2</text></view>
						<view role="tab" class="x-tab x-tab--active x-ellipsis" aria-selected="true"><text class="x-tab__text">标签 3</text></view>
						<view role="tab" class="x-tab x-ellipsis"><text class="x-tab__text">标签 4</text></view>
						<view class="x-tabs__line" style="width: 47px; transform: translateX(235px) translateX(-50%); transition-duration: 0.3s;"></view>
					</view>
				</view>
				<view class="x-tabs__content">
					<view class="x-tab__pane" style="display: none;">内容 1</view>
					<view class="x-tab__pane" style="display: none;">内容 2</view>
					<view class="x-tab__pane" style="">内容 3</view>
					<view class="x-tab__pane" style="display: none;"></view>
				</view>
			</view>
		</demo-block>
		<demo-block title="通过名称匹配">
			<view class="x-tabs x-tabs--line">
				<view class="x-tabs__wrap x-hairline--top-bottom">
					<view role="tablist" class="x-tabs__nav x-tabs__nav--line">
						<view role="tab" class="x-tab x-tab--active x-ellipsis" aria-selected="true"><text class="x-tab__text">标签 1</text></view>
						<view role="tab" class="x-tab x-ellipsis"><text class="x-tab__text">标签 2</text></view>
						<view role="tab" class="x-tab x-ellipsis"><text class="x-tab__text">标签 3</text></view>
						<view class="x-tabs__line" style="width: 62.5px; transform: translateX(62.5px) translateX(-50%); transition-duration: 0.3s;"></view>
					</view>
				</view>
				<view class="x-tabs__content">
					<view class="x-tab__pane" style="">内容 1</view>
					<view class="x-tab__pane" style="display: none;">内容 2</view>
					<view class="x-tab__pane" style="display: none;"></view>
				</view>
			</view>
		</demo-block>
		<demo-block title="标签栏滚动">
			<view class="x-tabs x-tabs--line">
				<view class="x-tabs__wrap x-tabs__wrap--scrollable x-hairline--top-bottom">
					<view role="tablist" class="x-tabs__nav x-tabs__nav--line">
						<view role="tab" class="x-tab x-ellipsis" style="flex-basis: 22%;"><text class="x-tab__text">标签 1</text></view>
						<view role="tab" class="x-tab x-ellipsis" style="flex-basis: 22%;"><text class="x-tab__text">标签 2</text></view>
						<view role="tab" class="x-tab x-ellipsis" style="flex-basis: 22%;"><text class="x-tab__text">标签 3</text></view>
						<view role="tab" class="x-tab x-tab--active x-ellipsis" style="flex-basis: 22%;" aria-selected="true"><text class="x-tab__text">标签 4</text></view>
						<view role="tab" class="x-tab x-ellipsis" style="flex-basis: 22%;"><text class="x-tab__text">标签 5</text></view>
						<view role="tab" class="x-tab x-ellipsis" style="flex-basis: 22%;"><text class="x-tab__text">标签 6</text></view>
						<view role="tab" class="x-tab x-ellipsis" style="flex-basis: 22%;"><text class="x-tab__text">标签 7</text></view>
						<view role="tab" class="x-tab x-ellipsis" style="flex-basis: 22%;"><text class="x-tab__text">标签 8</text></view>
						<view class="x-tabs__line" style="width: 41.5px; transform: translateX(289.5px) translateX(-50%); transition-duration: 0.3s;"></view>
					</view>
				</view>
				<view class="x-tabs__content">
					<view class="x-tab__pane" style="display: none;">内容 1</view>
					<view class="x-tab__pane" style="display: none;">内容 2</view>
					<view class="x-tab__pane" style="display: none;">内容 3</view>
					<view class="x-tab__pane" style="">内容 4</view>
					<view class="x-tab__pane" style="display: none;"></view>
					<view class="x-tab__pane" style="display: none;"></view>
					<view class="x-tab__pane" style="display: none;"></view>
					<view class="x-tab__pane" style="display: none;"></view>
				</view>
			</view>
		</demo-block>
		<demo-block title="禁用标签">
			<view class="x-tabs x-tabs--line">
				<view class="x-tabs__wrap x-hairline--top-bottom">
					<view role="tablist" class="x-tabs__nav x-tabs__nav--line">
						<view role="tab" aria-selected="true" class="x-tab x-tab--active x-ellipsis"><text class="x-tab__text">标签 1</text></view>
						<view role="tab" class="x-tab x-tab--disabled x-ellipsis"><text class="x-tab__text">标签 2</text></view>
						<view role="tab" class="x-tab x-ellipsis"><text class="x-tab__text">标签 3</text></view>
						<view class="x-tabs__line" style="width: 62.5px; transform: translateX(62.5px) translateX(-50%); transition-duration: 0.3s;"></view>
					</view>
				</view>
				<view class="x-tabs__content">
					<view class="x-tab__pane" style="">内容 1</view>
					<view class="x-tab__pane" style="display: none;"></view>
					<view class="x-tab__pane" style="display: none;"></view>
				</view>
			</view>
		</demo-block>
		<demo-block title="样式风格">
			<view class="x-tabs x-tabs--card">
				<view class="x-tabs__wrap">
					<view role="tablist" class="x-tabs__nav x-tabs__nav--card">
						<view role="tab" aria-selected="true" class="x-tab x-tab--active x-ellipsis"><text class="x-tab__text">标签 1</text></view>
						<view role="tab" class="x-tab x-ellipsis"><text class="x-tab__text">标签 2</text></view>
						<view role="tab" class="x-tab x-ellipsis"><text class="x-tab__text">标签 3</text></view>
					</view>
				</view>
				<view class="x-tabs__content">
					<view class="x-tab__pane" style="">内容 1</view>
					<view class="x-tab__pane" style="display: none;"></view>
					<view class="x-tab__pane" style="display: none;"></view>
				</view>
			</view>
		</demo-block>
		<demo-block title="点击事件">
			<view class="x-tabs x-tabs--line">
				<view class="x-tabs__wrap x-hairline--top-bottom">
					<view role="tablist" class="x-tabs__nav x-tabs__nav--line">
						<view role="tab" aria-selected="true" class="x-tab x-tab--active x-ellipsis"><text class="x-tab__text">标签 1</text></view>
						<view role="tab" class="x-tab x-ellipsis"><text class="x-tab__text">标签 2</text></view>
						<view class="x-tabs__line" style="width: 94px; transform: translateX(94px) translateX(-50%); transition-duration: 0.3s;"></view>
					</view>
				</view>
				<view class="x-tabs__content">
					<view class="x-tab__pane" style="">内容 1</view>
					<view class="x-tab__pane" style="display: none;"></view>
				</view>
			</view>
		</demo-block>
		<demo-block title="粘性布局">
			<view class="x-tabs x-tabs--line">
				<view style="">
					<view class="x-sticky" style="">
						<view class="x-tabs__wrap x-hairline--top-bottom">
							<view role="tablist" class="x-tabs__nav x-tabs__nav--line">
								<view role="tab" class="x-tab x-ellipsis"><text class="x-tab__text">标签 1</text></view>
								<view role="tab" class="x-tab x-ellipsis"><text class="x-tab__text">标签 2</text></view>
								<view role="tab" class="x-tab x-tab--active x-ellipsis" aria-selected="true"><text class="x-tab__text">标签 3</text></view>
								<view role="tab" class="x-tab x-ellipsis"><text class="x-tab__text">标签 4</text></view>
								<view class="x-tabs__line" style="width: 47px; transform: translateX(235px) translateX(-50%); transition-duration: 0.3s;"></view>
							</view>
						</view>
					</view>
				</view>
				<view class="x-tabs__content">
					<view class="x-tab__pane" style="display: none;">内容 1</view>
					<view class="x-tab__pane" style="display: none;">内容 2</view>
					<view class="x-tab__pane" style="">内容 3</view>
					<view class="x-tab__pane" style="display: none;"></view>
				</view>
			</view>
		</demo-block>
		<demo-block title="自定义标签">
			<view class="x-tabs x-tabs--line">
				<view class="x-tabs__wrap x-hairline--top-bottom">
					<view role="tablist" class="x-tabs__nav x-tabs__nav--line">
						<view role="tab" class="x-tab x-tab--active x-ellipsis" aria-selected="true">
							<text class="x-tab__text">
								<text class="x-icon x-icon-more-o"></text>
								标签
							</text>
						</view>
						<view role="tab" class="x-tab x-ellipsis">
							<text class="x-tab__text">
								<text class="x-icon x-icon-more-o"></text>
								标签
							</text>
						</view>
						<view class="x-tabs__line" style="width: 94px; transform: translateX(94px) translateX(-50%); transition-duration: 0.3s;"></view>
					</view>
				</view>
				<view class="x-tabs__content">
					<view class="x-tab__pane" style="">内容 1</view>
					<view class="x-tab__pane" style="display: none;">内容 2</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="切换动画">
			<view class="x-tabs x-tabs--line">
				<view class="x-tabs__wrap x-hairline--top-bottom">
					<view role="tablist" class="x-tabs__nav x-tabs__nav--line">
						<view role="tab" aria-selected="true" class="x-tab x-tab--active x-ellipsis"><text class="x-tab__text">标签 1</text></view>
						<view role="tab" class="x-tab x-ellipsis"><text class="x-tab__text">标签 2</text></view>
						<view role="tab" class="x-tab x-ellipsis"><text class="x-tab__text">标签 3</text></view>
						<view role="tab" class="x-tab x-ellipsis"><text class="x-tab__text">标签 4</text></view>
						<view class="x-tabs__line" style="width: 47px; transform: translateX(47px) translateX(-50%); transition-duration: 0.3s;"></view>
					</view>
				</view>
				<view class="x-tabs__content x-tabs__content--animated">
					<view class="x-tabs__track" style="transform: translate3d(0%, 0px, 0px); transition-duration: 0.3s;">
						<view class="x-tab__pane-wrapper"><view class="x-tab__pane">内容 1</view></view>
						<view aria-hidden="true" class="x-tab__pane-wrapper x-tab__pane-wrapper--inactive"><view class="x-tab__pane"></view></view>
						<view aria-hidden="true" class="x-tab__pane-wrapper x-tab__pane-wrapper--inactive"><view class="x-tab__pane"></view></view>
						<view aria-hidden="true" class="x-tab__pane-wrapper x-tab__pane-wrapper--inactive"><view class="x-tab__pane"></view></view>
					</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="滑动切换">
			<view class="x-tabs x-tabs--line">
				<view class="x-tabs__wrap x-hairline--top-bottom">
					<view role="tablist" class="x-tabs__nav x-tabs__nav--line">
						<view role="tab" class="x-tab x-ellipsis"><text class="x-tab__text">标签 1</text></view>
						<view role="tab" class="x-tab x-ellipsis"><text class="x-tab__text">标签 2</text></view>
						<view role="tab" class="x-tab x-tab--active x-ellipsis" aria-selected="true"><text class="x-tab__text">标签 3</text></view>
						<view role="tab" class="x-tab x-ellipsis"><text class="x-tab__text">标签 4</text></view>
						<view class="x-tabs__line" style="width: 47px; transform: translateX(235px) translateX(-50%); transition-duration: 0.3s;"></view>
					</view>
				</view>
				<view class="x-tabs__content">
					<view class="x-tab__pane" style="display: none;">内容 1</view>
					<view class="x-tab__pane" style="display: none;">内容 2</view>
					<view class="x-tab__pane" style="">内容 3</view>
					<view class="x-tab__pane" style="display: none;"></view>
				</view>
			</view>
		</demo-block>
		<demo-block title="滚动导航">
			<view class="x-tabs x-tabs--line">
				<view style="">
					<view class="x-sticky">
						<view class="x-tabs__wrap x-tabs__wrap--scrollable x-hairline--top-bottom">
							<view role="tablist" class="x-tabs__nav x-tabs__nav--line">
								<view role="tab" class="x-tab x-tab--active x-ellipsis" style="flex-basis: 22%;" aria-selected="true"><text class="x-tab__text">标签 1</text></view>
								<view role="tab" class="x-tab x-ellipsis" style="flex-basis: 22%;"><text class="x-tab__text">标签 2</text></view>
								<view role="tab" class="x-tab x-ellipsis" style="flex-basis: 22%;"><text class="x-tab__text">标签 3</text></view>
								<view role="tab" class="x-tab x-ellipsis" style="flex-basis: 22%;"><text class="x-tab__text">标签 4</text></view>
								<view role="tab" class="x-tab x-ellipsis" style="flex-basis: 22%;"><text class="x-tab__text">标签 5</text></view>
								<view role="tab" class="x-tab x-ellipsis" style="flex-basis: 22%;"><text class="x-tab__text">标签 6</text></view>
								<view role="tab" class="x-tab x-ellipsis" style="flex-basis: 22%;"><text class="x-tab__text">标签 7</text></view>
								<view role="tab" class="x-tab x-ellipsis" style="flex-basis: 22%;"><text class="x-tab__text">标签 8</text></view>
								<view class="x-tabs__line" style="width: 41.5px; transform: translateX(41.5px) translateX(-50%); transition-duration: 0.3s;"></view>
							</view>
						</view>
					</view>
				</view>
				<view class="x-tabs__content">
					<view class="x-tab__pane">内容 1</view>
					<view class="x-tab__pane">内容 2</view>
					<view class="x-tab__pane">内容 3</view>
					<view class="x-tab__pane">内容 4</view>
					<view class="x-tab__pane">内容 5</view>
					<view class="x-tab__pane">内容 6</view>
					<view class="x-tab__pane">内容 7</view>
					<view class="x-tab__pane">内容 8</view>
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
.demo-tab {
	.x-tab__pane {
		padding: 25px 20px;
		background-color: #fff;
	}
}
</style>
