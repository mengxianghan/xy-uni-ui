<template>
	<view class="x-doc-demo-section">
		<demo-block title="基础用法">
			<view class="x-cell-group">
				<view class="x-cell x-field">
					<view class="x-cell__value x-cell__value--alone">
						<view class="x-field__body"><input type="text" placeholder="请输入文本" class="x-field__control" /></view>
					</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="自定义类型">
			<view class="x-cell-group">
				<view class="x-cell x-field">
					<view class="x-cell__title x-field__label"><span>文本</span></view>
					<view class="x-cell__value">
						<view class="x-field__body"><input type="text" placeholder="请输入文本" class="x-field__control" /></view>
					</view>
				</view>
				<view class="x-cell x-field">
					<view class="x-cell__title x-field__label"><span>手机号</span></view>
					<view class="x-cell__value">
						<view class="x-field__body"><input type="tel" placeholder="请输入手机号" class="x-field__control" /></view>
					</view>
				</view>
				<view class="x-cell x-field">
					<view class="x-cell__title x-field__label"><span>整数</span></view>
					<view class="x-cell__value">
						<view class="x-field__body"><input type="number" placeholder="请输入整数" pattern="\d*" class="x-field__control" /></view>
					</view>
				</view>
				<view class="x-cell x-field">
					<view class="x-cell__title x-field__label"><span>数字</span></view>
					<view class="x-cell__value">
						<view class="x-field__body"><input type="text" placeholder="请输入数字（支持小数）" class="x-field__control" /></view>
					</view>
				</view>
				<view class="x-cell x-field">
					<view class="x-cell__title x-field__label"><span>密码</span></view>
					<view class="x-cell__value">
						<view class="x-field__body"><input type="password" placeholder="请输入密码" class="x-field__control" /></view>
					</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="禁用输入框">
			<view class="x-cell-group">
				<view class="x-cell x-field">
					<view class="x-cell__title x-field__label"><span>文本</span></view>
					<view class="x-cell__value">
						<view class="x-field__body"><input type="text" disabled class="x-field__control" placeholder="输入框已禁用" /></view>
					</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="显示图标">
			<view class="x-cell-group">
				<view class="x-cell x-field">
					<view class="x-field__left-icon">
						<i class="x-icon x-icon-smile-o"></i>
					</view>
					<view class="x-cell__title x-field__label"><span>文本</span></view>
					<view class="x-cell__value">
						<view class="x-field__body">
							<input type="text" placeholder="显示图标" class="x-field__control" />
							<view class="x-field__right-icon">
								<i class="x-icon x-icon-warning-o"></i>
							</view>
						</view>
					</view>
				</view>
				<view class="x-cell x-field">
					<view class="x-field__left-icon">
						<i class="x-icon x-icon-music-o"></i>
					</view>
					<view class="x-cell__title x-field__label"><span>文本</span></view>
					<view class="x-cell__value">
						<view class="x-field__body"><input type="text" placeholder="显示清除图标" class="x-field__control" /></view>
					</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="错误提示">
			<view class="x-cell-group">
				<view class="x-cell x-cell--required x-field x-field--error">
					<view class="x-cell__title x-field__label"><span>用户名</span></view>
					<view class="x-cell__value">
						<view class="x-field__body"><input type="text" placeholder="请输入用户名" class="x-field__control" /></view>
					</view>
				</view>
				<view class="x-cell x-cell--required x-field">
					<view class="x-cell__title x-field__label"><span>手机号</span></view>
					<view class="x-cell__value">
						<view class="x-field__body"><input type="text" placeholder="请输入手机号" class="x-field__control" /></view>
						<view class="x-field__error-message">手机号格式错误</view>
					</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="插入按钮">
			<view class="x-cell-group">
				<view class="x-cell x-cell--center x-field">
					<view class="x-cell__title x-field__label"><span>短信验证码</span></view>
					<view class="x-cell__value">
						<view class="x-field__body">
							<input type="text" placeholder="请输入短信验证码" class="x-field__control" />
							<view class="x-field__button">
								<button class="x-button x-button--primary x-button--small"><span class="x-button__text">发送验证码</span></button>
							</view>
						</view>
					</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="高度自适应">
			<view class="x-cell-group">
				<view class="x-cell x-field">
					<view class="x-cell__title x-field__label"><span>留言</span></view>
					<view class="x-cell__value">
						<view class="x-field__body"><textarea placeholder="请输入留言" auto-height class="x-field__control"></textarea></view>
					</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="显示字数统计">
			<view class="x-cell-group">
				<view class="x-cell x-field">
					<view class="x-cell__title x-field__label"><span>留言</span></view>
					<view class="x-cell__value">
						<view class="x-field__body"><textarea placeholder="请输入留言" class="x-field__control" style="height: 48px;"></textarea></view>
						<view class="x-field__word-limit">0/50</view>
					</view>
				</view>
			</view>
		</demo-block>
		<demo-block title="输入框内容对齐">
			<view class="x-cell-group">
				<view class="x-cell x-field">
					<view class="x-cell__title x-field__label"><span>文本</span></view>
					<view class="x-cell__value">
						<view class="x-field__body"><input type="text" placeholder="输入框内容右对齐" class="x-field__control x-field__control--right" /></view>
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
