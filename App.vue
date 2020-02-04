<script>
export default {
	onLaunch: function() {
		// #ifdef MP
		if (uni.canIUse('getUpdateManager')) {
			const updateManager = uni.getUpdateManager();

			updateManager.onCheckForUpdate(function(res) {
				// 请求完新版本信息的回调
				// console.log(res.hasUpdate);
			});

			updateManager.onUpdateReady(function() {
				uni.showModal({
					title: '更新提示',
					content: '新版本已经准备好，是否重启应用？',
					success: function(res) {
						if (res.confirm) {
							// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate();
						}
					}
				});
			});

			updateManager.onUpdateFailed(function() {
				// 新版本下载失败
			});
		}
		// #endif
	},
	onShow: function() {},
	onHide: function() {}
};
</script>

<style lang="scss">
/*每个页面公共css */
@import './xuanyu-ui/xuanyu-ui.scss';
page {
	background: #f8f8f8;
}
uni-page-head {
	font-family: 'PingFang SC';
}
.uni-page-head-btn {
	line-height: 1;
}

.demo-section {
	padding-bottom: 20px;
}
</style>
