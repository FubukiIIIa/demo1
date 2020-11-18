<template>
	<!-- 添加病人页面 -->
	<div class="addPatient_wrap medical_detail_wrap">
		<!-- 标题 -->
		<div class="docCon_title add_medical_title">
			<h2 class="lookMedical">
				<router-link to="HospitalizationManagement">
					<span>住院管理</span>
				</router-link>
			</h2>
			<h2 class="add_medical_hover">
				<router-link to="/AddPatient">
					<span>添加病人</span>
				</router-link>
			</h2>
		</div>
		<!-- 内容 -->
		<div class="docCon_main">
			<!-- 一, 病历夹 -->
			<div class="medicalDetail_title">
				<div class="medicalDetail_title_left">
					添加住院信息
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
							<input class="detail_inp10" type="text" v-model="patientInfo.p_name">
						</div>
						<div class="detail_con_left_side_row detail_side_doubuleCol">
							<div>
								<p>性别</p>
								<input class="detail_inp8" type="text" list="genderlist" v-model="patientInfo.p_gender">
								<!-- <datalist id="genderlist">
									<option value="男">男</option>
									<option value="女">女</option>
								</datalist> -->
							</div>
							<div>
								<p>年龄</p>
								<input class="detail_inp8" type="text" v-model="patientInfo.p_age">
							</div>
						</div>
						<div class="detail_con_left_side_row detail_side_doubuleCol">
							<div>
								<p>住院状态</p>
								<input class="detail_inp8" type="text" list="genderlist" v-model="patientInfo.p_hopState">
								<!-- <datalist id="genderlist">
									<option value="男">男</option>
									<option value="女">女</option>
								</datalist> -->
							</div>
							<div>
								<p>入院日期</p>
								<input class="detail_inp8" type="text" v-model="patientInfo.p_hopTime">
							</div>
						</div>
						<div class="detail_con_left_side_row">
							<p>联系电话</p>
							<input class="detail_inp10" type="text" v-model="patientInfo.p_phone">
						</div>
						<div class="detail_con_left_side_row">
							<p>预计出院日期</p>
							<input class="detail_inp10" type="text" v-model="patientInfo.p_leaveHop">
						</div>
					</div>
					<!-- 中 -->
					<div class="medicalDetail_con_mid">
						<div class="detail_con_left_side_row">
							<p>病床号码</p>
							<input class="detail_inp10" type="text" v-model="patientInfo.p_bedNum">
						</div>
						<div class="detail_con_left_side_row">
							<p>病情描述</p>
							<input class="detail_inp10" type="text" v-model="patientInfo.p_sickDes">
						</div>
						<div class="detail_con_left_side_row">
							<p>过敏史</p>
							<input class="detail_inp10" type="text" v-model="patientInfo.p_allergy">
						</div>
						<div class="detail_con_left_side_row">
							<p>主治医生</p>
							<input class="detail_inp10" type="text" v-model="patientInfo.p_doctor">
						</div>
						<div class="detail_con_left_side_row">
							<p>责任护士</p>
							<input class="detail_inp10" type="text" v-model="patientInfo.p_nurse">
						</div>
					</div>
					<!-- 右 -->
					<div class="medicalDetail_con_side">
						<div class="detail_con_right_side_row">
							<p>用药详情</p>
							<textarea class="detail_inp10 diseaseTextarea" v-model="patientInfo.p_medicationDes"></textarea>
						</div>
						<div class="detail_con_right_side_row">
							<p>备注</p>
							<textarea class="detail_inp10 diseaseTextarea" v-model="patientInfo.p_remark"></textarea>
						</div>
						<div class="detail_con_right_side_row">
							<p>上传诊断报告</p>
							<div class="detail_upload_wrap detail_inp10 diseaseTextarea" v-model="patientInfo.p_diagnoseReport">
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
						<router-link class="cancleBtn" to="/HospitalizationManagement">
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
				patientInfo: {p_id: "", p_name: "张某某", p_gender: "男", p_age: "34", p_hopState: "已住院", p_hopTime: "2018-12-3", p_phone: "155 8888 9999", p_leaveHop: "2019-2-3", p_bedNum: "3204", p_sickDes: "感冒, 发烧, 流鼻涕, 腰酸, 背痛, 腿抽筋", p_allergy: "无", p_doctor: "张医生", p_nurse: "王护士", p_medicationDes: "扑尔敏, 阿莫西林胶囊, 头孢", p_remark: "有吸烟喝酒史", p_diagnoseReport: "暂缺"}, // 存储查询到的病人信息
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
	.addPatient_wrap .lookMedical {
		background: url(../../assets/title_bg.png) no-repeat 5px -48px;
	}
	.lookMedical a {
		color: #797979;
	}

	.addPatient_wrap .add_medical_hover {
		background: url(../../assets/title_bg.png) no-repeat 5px 0px;
		/* 鼠标形状 */
		/* cursor: pointer; */
	}
	.add_medical_hover a {
		color: white;
	}
	.add_medical_title a {
		margin-top: 10px;
	}

	/* 字体大小 */
	.medicalDetail_content_form input {
		font-size: 14px;
	}


</style>
