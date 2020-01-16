<template>
	<view>
		<view class="demo-home">
			<view class="demo-home__title">XuanYu UI</view>
			<view class="demo-home__desc">轻量、可靠的 UniApp 组件库</view>
			<view class="demo-home-nav" v-for="(item, index) in list" :key="index">
				<view class="demo-home-nav__title">{{ item.title }}</view>
				<view class="demo-home-nav__group">
					<navigator v-for="(nav, navIndex) in item.children" :key="navIndex" :url="nav.url" class="demo-home-nav__block">{{ nav.name }}</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					title: '基础组件',
					children: [
						{
							name: 'Button 按钮',
							url: '/pages/button/button'
						},
						{
							name: 'Cell 单元格',
							url: '/pages/cell/cell'
						},
						{
							name: 'Icon 图标',
							url: '/pages/icon/icon'
						},
						{
							name: 'Layout 布局',
							url: '/pages/col/col'
						},
						{
							name: 'Popup 弹出层',
							url: '/pages/popup/popup'
						}
					]
				},
				{
					title: '表单组件',
					children: [
						{
							name: 'Field 输入框',
							url: '/pages/field/field'
						},
						{
							name: 'Rate 评分',
							url: '/pages/rate/rate'
						},
						{
							name: 'Search 搜索',
							url: '/pages/search/search'
						},
						{
							name: 'Stepper 步进器',
							url: '/pages/stepper/stepper'
						},
						{
							name: 'Uploader 文件上传',
							url: '/pages/uploader/uploader'
						}
					]
				},
				{
					title: '反馈组件',
					children: [
						{
							name: 'ActionSheet 上拉菜单',
							url: '/pages/action-sheet/action-sheet'
						},
						{
							name: 'Dialog 弹出框',
							url: '/pages/dialog/dialog'
						},
						{
							name: 'Loading 加载',
							url: '/pages/loading/loading'
						}
					]
				},
				{
					title: '展示组件',
					children: [
						{
							name: 'Divider 分割线',
							url: '/pages/divider/divider'
						},
						{
							name: 'Panel 面板',
							url: '/pages/panel/panel'
						},
						{
							name: 'Tag 标记',
							url: '/pages/tag/tag'
						}
					]
				},
				{
					title: '导航组件',
					children: [
						{
							name: 'Sidebar 侧边导航',
							url: '/pages/sidebar/sidebar'
						},
						{
							name: 'Tabbar 标签页',
							url: '/pages/tabbar/tabbar'
						}
					]
				},
				{
					title: '业务组件',
					children: [
						{
							name: 'Card 商品卡片',
							url: '/pages/card/card'
						},
						{
							name: 'Contcat 联系人',
							url: '/pages/contact-card/contact-card'
						},
						{
							name: 'GoodsAction 商品导航',
							url: '/pages/goods-action/goods-action'
						},
						{
							name: 'SubmitBar 提交订单栏',
							url: '/pages/submit-bar/submit-bar'
						}
					]
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.demo-home {
	box-sizing: border-box;
	width: 100%;
	min-height: 100vh;
	padding: 46px 20px 20px;
	background: #fff;
	&__title {
		margin: 0 0 16px;
		font-size: 32px;
	}
	&__desc {
		margin: 0 0 40px;
		color: rgba(69, 90, 100, 0.6);
		font-size: 14px;
	}
	&-nav {
		&__title {
			margin: 24px 0 8px 16px;
			color: rgba(69, 90, 100, 0.6);
			font-size: 14px;
		}
		&__block {
			position: relative;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			margin: 0 0 12px;
			padding-left: 20px;
			color: #323233;
			font-weight: 500;
			font-size: 14px;
			line-height: 40px;
			background: #f7f8fa;
			border-radius: 99px;
			-webkit-transition: background 0.3s;
			transition: background 0.3s;
		}
	}
}
</style>
