<template>
	<view class="user">
		<!-- 用户信息 -->
		<view class="user-info">
			<view class="user-info__avatar">
				<view class="x-image"><image src="http://cdn.xuanyunet.com/common%2Fimages%2Flogo.svg" mode="widthFix" class="x-image__img"></image></view>
			</view>
			<view class="user-info__title">xuanyu ui 组件库</view>
			<view class="user-info__author">孟祥涵</view>
		</view>

		<!-- 菜单 -->
		<view class="x-cell-group user-menu">
			<view class="x-cell x-cell--clickable" @tap="handleGithub">
				<view class="x-cell__value x-cell__value--alone"><text>Github</text></view>
				<view class="x-cell__right-icon"><text class="x-icon x-icon-arrow"></text></view>
			</view>
			<view class="x-cell x-cell--clickable x-cell--borderless" @tap="handelAbout">
				<view class="x-cell__value x-cell__value--alone"><text>关于</text></view>
				<view class="x-cell__right-icon"><text class="x-icon x-icon-arrow"></text></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		handleGithub() {
			const url = 'https://github.com/mengxianghan/xuanyu-ui-uniapp';
			// #ifdef H5
			window.location.href = url;
			// #endif

			// #ifndef H5
			uni.setClipboardData({
				data: url
			});
			// #endif
		},
		handelAbout() {
			uni.navigateTo({
				url:'/pages/about/about'
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.user {
	&-info {
		background: #fff;
		padding: 16px 0 32px;
		display: flex;
		flex-direction: column;
		align-items: center;
		&__avatar {
			.x-image {
				width: 80px;
				height: 80px;
			}
		}
		&__title {
			margin-top: 8px;
			font-size: 16px;
		}
		&__author {
			font-size: 12px;
			margin-top: 8px;
			color: rgba(0, 0, 0, 0.65);
		}
	}

	&-menu {
		margin-top: 12px;
		.x-cell {
			padding-top: 12px;
			padding-bottom: 12px;
			&__value {
				font-size: 15px;
			}
		}
	}
}
</style>
