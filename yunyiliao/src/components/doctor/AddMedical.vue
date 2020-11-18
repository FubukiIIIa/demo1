<template>
	<!-- 添加病历页面 -->
	<div class="medical_detail_wrap">
		<!-- 标题 -->
		<div class="docCon_title add_medical_title">
			<h2 class="lookMedical">
				<router-link to="/EMedicalRecord">
					<span>病历查看</span>
				</router-link>
			</h2>
			<h2 class="add_medical_hover">
				<router-link to="/AddMedical">
					<span>添加病历</span>
				</router-link>
			</h2>
		</div>
		<!-- 内容 -->
		<div class="docCon_main">
			<!-- 一, 病历夹 -->
			<div class="medicalDetail_title">
				<div class="medicalDetail_title_left">
					病历夹
				</div>
				<div class="medicalDetail_title_right"></div>
			</div>
			<!-- 二, 病历内容 -->
			<div class="medicalDetail_content">
				<form class="medicalDetail_content_form" action="###" method="get">
					<!-- 左 -->
					<div class="medicalDetail_con_side">
						<div class="detail_con_left_side_row">
							<p>患者姓名</p>
							<input class="detail_inp10" type="text" value="">
						</div>
						<div class="detail_con_left_side_row detail_side_doubuleCol">
							<div>
								<p>性别</p>
								<input class="detail_inp8" type="text" list="genderlist">
								<!-- <datalist id="genderlist">
									<option value="男">男</option>
									<option value="女">女</option>
								</datalist> -->
							</div>
							<div>
								<p>年龄</p>
								<input class="detail_inp8" type="text">
							</div>
						</div>
						<div class="detail_con_left_side_row">
							<p>就诊日期</p>
							<div class="detail_side_doubuleCol">
								<input class="detail_inp8" type="text"><span>年</span>
								<input class="detail_inp8" type="text"><span>月</span>
							</div>
						</div>
						<div class="detail_con_left_side_row">
							<p>联系电话</p>
							<input class="detail_inp10" type="text">
						</div>
						<div class="detail_con_left_side_row">
							<p>地址</p>
							<input class="detail_inp10" type="text">
						</div>
					</div>
					<!-- 中 -->
					<div class="medicalDetail_con_mid">
						<div class="detail_con_left_side_row">
							<p>就诊科室</p>
							<input class="detail_inp10" type="text">
						</div>
						<div class="detail_con_left_side_row diseaseDes_wrap">
							<p>病情描述</p>
							<textarea class="detail_inp10 diseaseTextarea"></textarea>
						</div>
						<div class="detail_con_left_side_row">
							<p>过敏史</p>
							<input class="detail_inp10" type="text">
						</div>
						<div class="detail_con_left_side_row">
							<p>诊断医生</p>
							<input class="detail_inp10" type="text">
						</div>
					</div>
					<!-- 右 -->
					<div class="medicalDetail_con_side">
						<div class="detail_con_right_side_row">
							<p>用药详情</p>
							<textarea class="detail_inp10 diseaseTextarea"></textarea>
						</div>
						<div class="detail_con_right_side_row">
							<p>备注</p>
							<textarea class="detail_inp10 diseaseTextarea"></textarea>
						</div>
						<div class="detail_con_right_side_row">
							<p>上传诊断报告</p>
							<div class="detail_upload_wrap detail_inp10 diseaseTextarea">
								<input class="detail_upload" type="file">
							</div>
						</div>
					</div>
					<!-- 下 -->
					<div class="medicalDetail_con_bot">
						<input class="detail_save" type="button" value="保存" @click="saveMedical">
						<router-link to="/EMedicalRecord">
							<!-- PS: 感觉这里直接跳转有点坑了, 是不是后期加个弹窗, 缓冲下 -->
							<input class="detail_cancle" type="button" value="取消">
						</router-link>
					</div>
				</form>
			</div>
		</div>
		<!-- 手机号码搜索框 -->
		<div v-show="isShowMask" class="addMedical_alert">
			<div class="alert">
				<!-- 标题提示信息 -->
				<div class="alert_title">
					<h2 v-show="isPatient" class="fl">查询</h2>
					<h2 v-show="!isPatient" class="fl">提示</h2>
					<div class="fr">
						<i class="fa fa-times-circle-o" @click="closeMask"></i>
					</div>
				</div>
				<!-- 警示内容 -->
				<div class="alert_content">
					<!-- 查询时, 显示的内容 -->
					<div v-show="isPatient" class="alert_con_check">
						<p>请输入手机号：</p>
						<div class="alertIpt_wrapDiv"><input type="text" class="phoneNum" autofocus="autofocus" placeholder="请输入手机号查询已有病历" v-model="phoneNum"/></div>
					</div>
					<!-- 提示时, 显示的内容 -->
					<div v-show="!isPatient" class="alert_con_tip">
						<p>未找到患者信息，请输入正确手机号</p>
					</div>
				</div>
				<!-- 按钮 -->
				<div class="alert_button">
					<!-- 查询时, 显示的内容 -->
					<div v-show="isPatient" class="alert_button_check">
						<input class="alert_surebtn" type="button" value="确定" @click="alertCheckSureBtn">
						<router-link class="cancleBtn" to="/EMedicalRecord">
							<!-- PS: 感觉这里直接跳转有点坑了, 是不是后期加个弹窗, 缓冲下 -->
							<input class="alert_canclebtn" type="button" value="取消">
						</router-link>
					</div>
					<!-- 提示时, 显示的内容 -->
					<div v-show="!isPatient" class="alert_button_tip">
						<input class="alert_surebtn" type="button" value="确定" @click="alertTipSureBtn">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AddMedical',
		data() {
			return {
				phoneNum: '',// 存储电话号码
				patientInfo: {}, // 存储查询到的病人信息
				isShowMask: true,// 存储是否展示遮罩层
				isPatient: true,// 存储是否存在患者信息
			}
		},
		methods: {
			saveMedical: function() {
				alert("要保存信息的");
			},
			alertCheckSureBtn: function() {
				/**
				 * 在这里, 应该根据用户输入的手机号进行判断;
				 * 如果用户提供的手机号能够查询到之前的就诊信息, 则显示最新的就诊信息到页面中;
				 * 如果用户提供的手机号无法查到对应的就诊信息, 则显示"未找到患者信息, 请输入正确手机号"警示框
				 */
				alert("用户输入了手机号" + this.phoneNum);
				// 发送网络请求到后台, 根据用户的手机号, 查询对应的病人, 获取基本信息.
				if (false) {
					// 获取到了对应的信息
					// 1, 给病人数据对象赋值

					// 2, 页面遮罩层消失
					this.isShowMask = false;
				} else{
					// 没有获取到对应的信息 ---- 显示 "未找到患者信息" 提示框
					this.isPatient = false;// 没有找到对应的患者信息
				}
			},
			alertTipSureBtn: function() {
				// 医生点击 "提示" 时的确定按钮, 这个时候, 要返回输入电话的警示框状态
				this.isPatient = true;
			},
			closeMask: function() {
				// 页面遮罩层消失
				this.isShowMask = false;
			}
		}
	}
</script>

<style>
	/* 引入外部样式 */
	@import url("../css/EMedicalDetail.css");
	/* 警示框样式 */
	@import url("../css/AlertBox.css");

	/* 头部添加病历 调整背景 */
	.docCon_title .lookMedical {
		background: url(../../assets/title_bg.png) no-repeat 5px -48px;
	}
	.lookMedical a {
		color: #797979;
	}

	.medical_wrap .add_medical_hover {
		background: url(../../assets/title_bg.png) no-repeat 5px 0px;
		/* 鼠标形状 */
		cursor: pointer;
	}
	.add_medical_hover a {
		color: white;
	}
	.add_medical_title a {
		margin-top: 10px;
	}
</style>
