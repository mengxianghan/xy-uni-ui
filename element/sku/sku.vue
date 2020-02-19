<template>
	<view class="demo-section">
		<demo-block title="基础用法" padding>
			<button class="x-button x-button--primary x-button--block" @tap="handleShow('show1')">基础用法</button>

			<view class="x-popup x-popup--round x-popup--bottom x-popup--safe-area-inset-bottom x-sku-container" :class="{'x-popup--show':show1}">
				<view class="x-sku-header x-hairline--bottom">
					<view class="x-sku-header__img-wrap">
						<image src="https://img.yzcdn.cn/upload_files/2017/03/16/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg?imageView2/2/w/100/h/100/q/75/format/jpg" />
					</view>
					<view class="x-sku-header__goods-info">
						<view class="x-sku__goods-price">
							<text class="x-sku__price-symbol">￥</text>
							<text class="x-sku__price-num">1.00</text>
						</view>
						<view class="x-sku-header-item">
							<text class="x-sku__stock">
								剩余
								<text class="x-sku__stock-num">227</text>
								件
							</text>
						</view>
						<view class="x-sku-header-item">选择 颜色；尺寸；加冰；加料</view>
					</view>
				</view>
				<view class="x-sku-body" style="max-height: 467px;">
					<view class="x-sku-group-container">
						<view class="x-sku-row x-hairline--bottom">
							<view class="x-sku-row__title">颜色</view>
							<view class="x-sku-row__item x-sku-row__item--active">
								<image src="https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg" class="x-sku-row__item-img" />
								<text class="x-sku-row__item-name">天蓝色</text>
							</view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">白色</text></view>
						</view>
						<view class="x-sku-row x-hairline--bottom">
							<view class="x-sku-row__title">尺寸</view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">1</text></view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">2</text></view>
						</view>
						<view class="x-sku-row x-hairline--bottom">
							<view class="x-sku-row__title">加冰</view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">少冰</text></view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">去冰</text></view>
						</view>
						<view class="x-sku-row x-hairline--bottom">
							<view class="x-sku-row__title">打包</view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">分开打包</text></view>
						</view>
						<view class="x-sku-row x-hairline--bottom">
							<view class="x-sku-row__title">
								加料
								<text class="x-sku-row__title-multiple">（可多选）</text>
							</view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">布丁</text></view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">波霸</text></view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">珍珠</text></view>
						</view>
					</view>
					<view class="x-sku-stepper-stock" selectedsku="[object Object]">
						<view class="x-sku-stepper-container">
							<view class="x-sku__stepper-title">购买数量</view>
							<view class="x-stepper x-sku__stepper">
								<button type="button" class="x-stepper__minus x-stepper__minus--disabled"></button>
								<input type="number" readonly class="x-stepper__input" />
								<button type="button" class="x-stepper__plus"></button>
							</view>
							<view class="x-sku__stepper-quota">(10件起售，限购15件)</view>
						</view>
					</view>
					<view class="x-cell-group x-hairline--top-bottom x-sku-messages">
						<view class="x-cell x-cell--required x-field">
							<view class="x-cell__title x-field__label"><text>留言1</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="text" placeholder="输入文本" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>留言2</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="text" placeholder="输入身份证号码" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-sku-messages__image-cell">
							<view class="x-cell__title">
								<text>留言3</text>
								<view class="x-cell__label">仅限一张</view>
							</view>
							<view class="x-cell__value x-sku-messages__image-cell-value">
								<view class="x-sku-img-uploader">
									<view class="x-uploader x-sku-img-uploader__uploader">
										<view class="x-uploader__wrapper">
											<view class="x-uploader__input-wrapper">
												<view class="x-sku-img-uploader__img">
													<view class="x-sku-img-uploader__trigger"><text class="x-icon x-icon-photograph" style="font-size: 22px;"></text></view>
												</view>
												<input type="file" accept="image/*" class="x-uploader__input" />
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>数字</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="tel" placeholder="输入数字" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>邮件</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="email" placeholder="输入邮箱" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>日期</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="date" placeholder="点击选择日期" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>时间含日期</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="time" placeholder="点击选择时间" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>时间</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="time" placeholder="点击选择时间" class="x-field__control" /></view>
							</view>
						</view>
					</view>
				</view>
				<view class="x-sku-actions">
					<button class="x-button x-button--warning x-button--large"><text class="x-button__text">加入购物车</text></button>
					<button class="x-button x-button--danger x-button--large"><text class="x-button__text">立即购买</text></button>
				</view>
				<text class="x-icon x-icon-cross x-popup__close-icon x-popup__close-icon--top-right" @tap="handleClose()"></text>
			</view>
		</demo-block>
		<demo-block title="自定义步进器" padding>
			<button class="x-button x-button--primary x-button--block" @tap="handleShow('show2')">自定义步进器</button>

			<view class="x-popup x-popup--round x-popup--bottom x-popup--safe-area-inset-bottom x-sku-container" :class="{'x-popup--show':show2}">
				<view class="x-sku-header x-hairline--bottom">
					<view class="x-sku-header__img-wrap">
						<image src="https://img.yzcdn.cn/upload_files/2017/03/16/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg?imageView2/2/w/100/h/100/q/75/format/jpg" />
					</view>
					<view class="x-sku-header__goods-info">
						<view class="x-sku__goods-price">
							<text class="x-sku__price-symbol">￥</text>
							<text class="x-sku__price-num">1.00</text>
						</view>
						<view class="x-sku-header-item"><text class="x-sku__stock">剩余227件</text></view>
						<view class="x-sku-header-item">选择 颜色；尺寸；加冰；加料</view>
					</view>
				</view>
				<view class="x-sku-body" style="max-height: 467px;">
					<view class="x-sku-group-container">
						<view class="x-sku-row x-hairline--bottom">
							<view class="x-sku-row__title">颜色</view>
							<view class="x-sku-row__item">
								<image src="https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg" class="x-sku-row__item-img" />
								<text class="x-sku-row__item-name">天蓝色</text>
							</view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">白色</text></view>
						</view>
						<view class="x-sku-row x-hairline--bottom">
							<view class="x-sku-row__title">尺寸</view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">1</text></view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">2</text></view>
						</view>
						<view class="x-sku-row x-hairline--bottom">
							<view class="x-sku-row__title">加冰</view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">少冰</text></view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">去冰</text></view>
						</view>
						<view class="x-sku-row x-hairline--bottom">
							<view class="x-sku-row__title">打包</view>
							<view class="x-sku-row__item x-sku-row__item--active"><text class="x-sku-row__item-name">分开打包</text></view>
						</view>
						<view class="x-sku-row x-hairline--bottom">
							<view class="x-sku-row__title">
								加料
								<text class="x-sku-row__title-multiple">（可多选）</text>
							</view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">布丁</text></view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">波霸</text></view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">珍珠</text></view>
						</view>
					</view>
					<view class="x-sku-stepper-stock" selectedsku="[object Object]">
						<view class="x-sku-stepper-container">
							<view class="x-sku__stepper-title">购买数量</view>
							<view class="x-stepper x-sku__stepper">
								<button type="button" class="x-stepper__minus x-stepper__minus--disabled"></button>
								<input type="number" class="x-stepper__input" />
								<button type="button" class="x-stepper__plus"></button>
							</view>
						</view>
					</view>
					<view class="x-cell-group x-hairline--top-bottom x-sku-messages">
						<view class="x-cell x-cell--required x-field">
							<view class="x-cell__title x-field__label"><text>留言1</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="text" placeholder="输入文本" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>留言2</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="text" placeholder="输入身份证号码" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-sku-messages__image-cell">
							<view class="x-cell__title">
								<text>留言3</text>
								<view class="x-cell__label">仅限一张</view>
							</view>
							<view class="x-cell__value x-sku-messages__image-cell-value">
								<view class="x-sku-img-uploader">
									<view class="x-uploader x-sku-img-uploader__uploader">
										<view class="x-uploader__wrapper">
											<view class="x-uploader__input-wrapper">
												<view class="x-sku-img-uploader__img">
													<view class="x-sku-img-uploader__trigger"><text class="x-icon x-icon-photograph" style="font-size: 22px;"></text></view>
												</view>
												<input type="file" accept="image/*" class="x-uploader__input" />
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>数字</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="tel" placeholder="输入数字" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>邮件</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="email" placeholder="输入邮箱" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>日期</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="date" placeholder="点击选择日期" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>时间含日期</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="time" placeholder="点击选择时间" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>时间</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="time" placeholder="点击选择时间" class="x-field__control" /></view>
							</view>
						</view>
					</view>
				</view>
				<view class="x-sku-actions">
					<button class="x-button x-button--warning x-button--large"><text class="x-button__text">加入购物车</text></button>
					<button class="x-button x-button--danger x-button--large"><text class="x-button__text">立即购买</text></button>
				</view>
				<text class="x-icon x-icon-cross x-popup__close-icon x-popup__close-icon--top-right" @tap="handleClose()"></text>
			</view>
		</demo-block>
		<demo-block title="隐藏售罄价格" padding>
			<button class="x-button x-button--primary x-button--block" @tap="handleShow('show3')">隐藏售罄价格</button>

			<view class="x-popup x-popup--round x-popup--bottom x-popup--safe-area-inset-bottom x-sku-container" :class="{'x-popup--show':show3}">
				<view class="x-sku-header x-hairline--bottom">
					<view class="x-sku-header__img-wrap">
						<image src="https://img.yzcdn.cn/upload_files/2017/03/16/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg?imageView2/2/w/100/h/100/q/75/format/jpg" />
					</view>
					<view class="x-sku-header__goods-info">
						<view class="x-sku__goods-price">
							<text class="x-sku__price-symbol">￥</text>
							<text class="x-sku__price-num">1.00</text>
						</view>
						<view class="x-sku-header-item">
							<text class="x-sku__stock">
								剩余
								<text class="x-sku__stock-num">227</text>
								件
							</text>
						</view>
						<view class="x-sku-header-item">选择 颜色；尺寸；加冰；加料</view>
					</view>
				</view>
				<view class="x-sku-body" style="max-height: 467px;">
					<view class="x-sku-group-container">
						<view class="x-sku-row x-hairline--bottom">
							<view class="x-sku-row__title">颜色</view>
							<view class="x-sku-row__item x-sku-row__item--active">
								<image src="https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg" class="x-sku-row__item-img" />
								<text class="x-sku-row__item-name">天蓝色</text>
							</view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">白色</text></view>
						</view>
						<view class="x-sku-row x-hairline--bottom">
							<view class="x-sku-row__title">尺寸</view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">1</text></view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">2</text></view>
						</view>
						<view class="x-sku-row x-hairline--bottom">
							<view class="x-sku-row__title">加冰</view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">少冰</text></view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">去冰</text></view>
						</view>
						<view class="x-sku-row x-hairline--bottom">
							<view class="x-sku-row__title">打包</view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">分开打包</text></view>
						</view>
						<view class="x-sku-row x-hairline--bottom">
							<view class="x-sku-row__title">
								加料
								<text class="x-sku-row__title-multiple">（可多选）</text>
							</view>
							<view class="x-sku-row__item x-sku-row__item--active"><text class="x-sku-row__item-name">布丁</text></view>
							<view class="x-sku-row__item x-sku-row__item--active"><text class="x-sku-row__item-name">波霸</text></view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">珍珠</text></view>
						</view>
					</view>
					<view class="x-sku-stepper-stock" selectedsku="[object Object]">
						<view class="x-sku-stepper-container">
							<view class="x-sku__stepper-title">购买数量</view>
							<view class="x-stepper x-sku__stepper">
								<button type="button" class="x-stepper__minus x-stepper__minus--disabled"></button>
								<input type="number" readonly class="x-stepper__input" />
								<button type="button" class="x-stepper__plus"></button>
							</view>
						</view>
					</view>
					<view class="x-cell-group x-hairline--top-bottom x-sku-messages">
						<view class="x-cell x-cell--required x-field">
							<view class="x-cell__title x-field__label"><text>留言1</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="text" placeholder="输入文本" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>留言2</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="text" placeholder="输入身份证号码" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-sku-messages__image-cell">
							<view class="x-cell__title">
								<text>留言3</text>
								<view class="x-cell__label">仅限一张</view>
							</view>
							<view class="x-cell__value x-sku-messages__image-cell-value">
								<view class="x-sku-img-uploader">
									<view class="x-uploader x-sku-img-uploader__uploader">
										<view class="x-uploader__wrapper">
											<view class="x-uploader__input-wrapper">
												<view class="x-sku-img-uploader__img">
													<view class="x-sku-img-uploader__trigger"><text class="x-icon x-icon-photograph" style="font-size: 22px;"></text></view>
												</view>
												<input type="file" accept="image/*" class="x-uploader__input" />
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>数字</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="tel" placeholder="输入数字" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>邮件</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="email" placeholder="输入邮箱" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>日期</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="date" placeholder="点击选择日期" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>时间含日期</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="time" placeholder="点击选择时间" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>时间</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="time" placeholder="点击选择时间" class="x-field__control" /></view>
							</view>
						</view>
					</view>
				</view>
				<view class="x-sku-actions">
					<button class="x-button x-button--warning x-button--large"><text class="x-button__text">加入购物车</text></button>
					<button class="x-button x-button--danger x-button--large"><text class="x-button__text">立即购买</text></button>
				</view>
				<text class="x-icon x-icon-cross x-popup__close-icon x-popup__close-icon--top-right" @tap="handleClose()"></text>
			</view>
		</demo-block>
		<demo-block title="高级用法" padding>
			<button class="x-button x-button--primary x-button--block" @tap="handleShow('show4')">高级用法</button>
			
			<view class="x-popup x-popup--round x-popup--bottom x-popup--safe-area-inset-bottom x-sku-container" :class="{'x-popup--show':show4}">
				<view class="x-sku-header x-hairline--bottom">
					<view class="x-sku-header__img-wrap"><image src="https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg" /></view>
					<view class="x-sku-header__goods-info">
						<view class="x-sku__goods-price">
							<text class="x-sku__price-symbol">￥</text>
							<text class="x-sku__price-num">1.19</text>
						</view>
						<view class="x-sku-header-item">
							<text class="x-sku__stock">
								剩余
								<text class="x-sku__stock-num">111</text>
								件
							</text>
						</view>
						<view class="x-sku-header-item">已选 天蓝色；1；少冰；波霸；珍珠；分开打包</view>
					</view>
				</view>
				<view class="x-sku-body" style="max-height: 467px;">
					<view class="x-sku-group-container">
						<view class="x-sku-row x-hairline--bottom">
							<view class="x-sku-row__title">颜色</view>
							<view class="x-sku-row__item x-sku-row__item--active">
								<image src="https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg" class="x-sku-row__item-img" />
								<text class="x-sku-row__item-name">天蓝色</text>
							</view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">白色</text></view>
						</view>
						<view class="x-sku-row x-hairline--bottom">
							<view class="x-sku-row__title">尺寸</view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">1</text></view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">2</text></view>
						</view>
						<view class="x-sku-row x-hairline--bottom">
							<view class="x-sku-row__title">加冰</view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">少冰</text></view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">去冰</text></view>
						</view>
						<view class="x-sku-row x-hairline--bottom">
							<view class="x-sku-row__title">打包</view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">分开打包</text></view>
						</view>
						<view class="x-sku-row x-hairline--bottom">
							<view class="x-sku-row__title">
								加料
								<text class="x-sku-row__title-multiple">（可多选）</text>
							</view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">布丁</text></view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">波霸</text></view>
							<view class="x-sku-row__item"><text class="x-sku-row__item-name">珍珠</text></view>
						</view>
					</view>
					<view class="x-sku-stepper-stock" selectedsku="[object Object]">
						<view class="x-sku-stepper-container">
							<view class="x-sku__stepper-title">我要买</view>
							<view class="x-stepper x-sku__stepper">
								<button type="button" class="x-stepper__minus x-stepper__minus--disabled"></button>
								<input type="number" class="x-stepper__input" />
								<button type="button" class="x-stepper__plus"></button>
							</view>
							<text class="x-sku__stepper-quota">(10件起售，限购15件)</text>
						</view>
					</view>
					<view class="x-cell-group x-hairline--top-bottom x-sku-messages">
						<view class="x-cell x-cell--required x-field">
							<view class="x-cell__title x-field__label"><text>留言1</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="text" placeholder="输入文本" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>留言2</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="text" placeholder="输入身份证号码" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-sku-messages__image-cell">
							<view class="x-cell__title">
								<text>留言3</text>
								<view class="x-cell__label">仅限一张</view>
							</view>
							<view class="x-cell__value x-sku-messages__image-cell-value">
								<view class="x-sku-img-uploader">
									<view class="x-uploader x-sku-img-uploader__uploader">
										<view class="x-uploader__wrapper">
											<view class="x-uploader__input-wrapper">
												<view class="x-sku-img-uploader__img">
													<view class="x-sku-img-uploader__trigger"><text class="x-icon x-icon-photograph" style="font-size: 22px;"></text></view>
												</view>
												<input type="file" accept="image/*" class="x-uploader__input" />
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>数字</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="tel" placeholder="输入数字" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>邮件</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="email" placeholder="输入邮箱" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>日期</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="date" placeholder="点击选择日期" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>时间含日期</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="time" placeholder="点击选择时间" class="x-field__control" /></view>
							</view>
						</view>
						<view class="x-cell x-field">
							<view class="x-cell__title x-field__label"><text>时间</text></view>
							<view class="x-cell__value">
								<view class="x-field__body"><input type="time" placeholder="点击选择时间" class="x-field__control" /></view>
							</view>
						</view>
					</view>
				</view>
				<view class="x-sku-actions">
					<button class="x-button x-button--warning x-button--large x-button--square"><text class="x-button__text">积分兑换</text></button>
					<button class="x-button x-button--danger x-button--large x-button--square"><text class="x-button__text">买买买</text></button>
				</view>
				<text class="x-icon x-icon-cross x-popup__close-icon x-popup__close-icon--top-right" @tap="handleClose()"></text>
			</view>
		</demo-block>
		
		<view class="x-overlay" :class="{'x-overlay--show':show1 || show2 || show3 || show4}" @tap="handleClose()"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show1:false,
			show2:false,
			show3:false,
			show4:false
		};
	},
	methods:{
		handleShow(key){
			this[key]=!this[key];
		},
		handleClose(){
			for (let i = 1; i <= 4; i++) {
				this[`show${i}`] = false;
			}
		}
	}
};
</script>

<style lang="scss" scoped></style>
