<template>
	<view class="about">
		<view>欢迎使用 xuanyu ui 组件库</view>
		<view>
			本人在原生小程序和H5开发中使用过不少 ui 组件库；从组件完整度、视觉以及更新频率上，个人感觉Vant 组件库还是不错的，所以 xuanyu ui 组件库借鉴了 Vant
			组件库的基础样式，在此也感谢有赞前端团队。
		</view>
		<view>
			Uniapp 官方也提供了一套 ui，但是还不完整，也没有找到一套完整的 ui 组件库，对于我们这些没有设计的开发来说一套完整的 ui
			是何等的重要，而且我也是懒人一个，不想每个项目都去写一遍那些基础的组件，此时 xuanyu ui 组件库诞生。
		</view>
		<view>
			目前适配了微信小程序、ios App、android App，项目会不定期更新。
		</view>
		<view>
			QQ：1056811341
		</view>
		<view>
			微信：meng_xianghan
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

<style lang="scss" scoped>
.about {
	padding: 24px;
	line-height: 1.7;
	font-size: 15px;
	view{
		margin-bottom:8px;
		text-indent: 2em;
	}
}
</style>
