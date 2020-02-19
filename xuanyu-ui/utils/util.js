/**
 * 计算导航栏
 */
export function navbar() {
	const navbar = {
		height: 0,
		statusBarHeight: 0
	};
	const canIUse = uni.canIUse('getMenuButtonBoundingClientRect')
	const {
		platform,
		statusBarHeight
	} = uni.getSystemInfoSync();
	navbar.statusBarHeight = statusBarHeight;

	if (canIUse) {
		// #ifndef H5
		const {
			top,
			bottom,
			height
		} = uni.getMenuButtonBoundingClientRect();
		navbar.height = (top - statusBarHeight) * 2 + height;
		// #endif

		// #ifdef H5
		if (platform === 'android') {
			navbar.height = 48;
		} else {
			navbar.height = 44;
		}
		// #endif
	} else {
		if (platform === 'android') {
			navbar.height = 48;
		} else {
			navbar.height = 44;
		}
	}

	return navbar;
}
