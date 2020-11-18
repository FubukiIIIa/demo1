<template>
	<!-- 这里是就诊咨询 -->
	<div class="doctorConsultation_wrap">
		<!-- 标题 -->
		<div class="docCon_title">
			<h2>
				<span>就诊资讯</span>
			</h2>
		</div>
		<!-- 内容 -->
		<div class="docCon_main">
			<!-- 一, 搜索框 -->
			<div class="medical_search">
				<form class="medical_search_form">
					<!-- 姓名 -->
					<div class="medical_search_form_inp medical_search_name">
						<input type="text" name="" placeholder="请输入用户姓名" />
					</div>
					<!-- 时间 -->
					<div class="medical_search_form_inp medical_search_time">
						<input type="text" list="timeList" placeholder="选择时间">
						<datalist id="timeList">
							<option value="date">vue-datepicker-local插件</option>
						</datalist>
					</div>
					<!-- 搜索 -->
					<div class="medical_search_btn">
						<i class="fa fa-search"></i>
					</div>
				</form>
			</div>
			<!-- 二, 内容 -->
			<div class="medical_content">
				<table class="medical_list" cellspacing="0">
					<tr class="medicai_list_title">
						<th class="medicai_list_check"><input type="checkbox"></th>
						<th>序号</th>
						<th>姓名</th>
						<th>性别</th>
						<th>年龄</th>
						<th>日期</th>
						<th>问题描述</th>
						<th>主要症状</th>
						<th>所用药物</th>
						<!-- <th>操作</th> -->
					</tr>
					<tr class="medicai_list_item" v-for="(medical, index) in medical_lists">
						<td><input type="checkbox"></td>
						<td><!-- {{++index}} -->001</td>
						<td>{{medical.med_name}}</td>
						<td>{{medical.med_gender}}</td>
						<td>{{medical.med_age}}</td>
						<td>{{medical.med_hospitalTime}}</td>
						<td>{{medical.med_problemDes}}</td>
						<td>{{medical.med_mainSymptoms}}</td>
						<td>{{medical.med_medicine}}</td>
						<td class="hospital_handle">
							<router-link to="###" @click.native='saveProblem(index)'>
								<span class="medicai_list_lookdetails">解答问题</span>
							</router-link>
						</td>
					</tr>
				</table>
			</div>
			<!-- 三, 页码操作控制 -->
			<div class="medical_control">
				<!-- 批量删除 -->
				<div class="medical_delete">
					<i class="fa fa-trash"></i>
					批量删除
				</div>
				<!-- 页面切换组件 -->
				<div class="medical_pagenation">
					<router-view></router-view>
				</div>
			</div>
		</div>
		<!-- 问题解答提示框 -->
		<div v-show="isShowMask" class="addMedical_alert">
			<div class="alert">
				<!-- 标题提示信息 -->
				<div class="alert_title">
					<h2 class="fl">问题解答</h2>
					<div class="fr">
						<i class="fa fa-times-circle-o" @click="closeMask"></i>
					</div>
				</div>
				<!-- 警示内容 -->
				<div class="alert_content">
					<!-- 查询时, 显示的内容 -->
					<div class="alert_con_check textarea_con">
						<p>解答:</p>
						<div class="alertIpt_wrapDiv">
							<textarea v-model="saveScheme" placeholder="请输入您的解决办法"></textarea>
						</div>
					</div>
				</div>
				<!-- 按钮 -->
				<div class="alert_button">
					<!-- 查询时, 显示的内容 -->
					<div class="alert_button_check">
						<input class="alert_surebtn" type="button" value="确定" @click="alertSureBtn">
						<router-link class="cancleBtn" to="/DoctorConsultation">
							<!-- PS: 感觉这里直接跳转有点坑了, 是不是后期加个弹窗, 缓冲下 -->
							<input class="alert_canclebtn" type="button" value="取消" @click="cancleBtn">
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "HospitalizationManagement",
		data() {
			return {
				changeIndex: 0,// 记录要修改的处方对象的下标
				isShowMask: false,// 是否显示问题解答提示框
				saveScheme: "", // 存储解决方法
				medical_lists: [
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_hospitalTime:"2018-12-4", med_problemDes:"感冒发烧流鼻涕", med_mainSymptoms:"头痛, 恶心, 食欲不振", med_medicine:"红霉素, 左氧氟沙星"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_hospitalTime:"2018-12-4", med_problemDes:"感冒发烧流鼻涕", med_mainSymptoms:"头痛, 恶心, 食欲不振", med_medicine:"红霉素, 左氧氟沙星"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_hospitalTime:"2018-12-4", med_problemDes:"感冒发烧流鼻涕", med_mainSymptoms:"头痛, 恶心, 食欲不振", med_medicine:"红霉素, 左氧氟沙星"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_hospitalTime:"2018-12-4", med_problemDes:"感冒发烧流鼻涕", med_mainSymptoms:"头痛, 恶心, 食欲不振", med_medicine:"红霉素, 左氧氟沙星"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_hospitalTime:"2018-12-4", med_problemDes:"感冒发烧流鼻涕", med_mainSymptoms:"头痛, 恶心, 食欲不振", med_medicine:"红霉素, 左氧氟沙星"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_hospitalTime:"2018-12-4", med_problemDes:"感冒发烧流鼻涕", med_mainSymptoms:"头痛, 恶心, 食欲不振", med_medicine:"红霉素, 左氧氟沙星"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_hospitalTime:"2018-12-4", med_problemDes:"感冒发烧流鼻涕", med_mainSymptoms:"头痛, 恶心, 食欲不振", med_medicine:"红霉素, 左氧氟沙星"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_hospitalTime:"2018-12-4", med_problemDes:"感冒发烧流鼻涕", med_mainSymptoms:"头痛, 恶心, 食欲不振", med_medicine:"红霉素, 左氧氟沙星"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_hospitalTime:"2018-12-4", med_problemDes:"感冒发烧流鼻涕", med_mainSymptoms:"头痛, 恶心, 食欲不振", med_medicine:"红霉素, 左氧氟沙星"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_hospitalTime:"2018-12-4", med_problemDes:"感冒发烧流鼻涕", med_mainSymptoms:"头痛, 恶心, 食欲不振", med_medicine:"红霉素, 左氧氟沙星"},
				],
			}
		},
		methods: {
			saveProblem: function(index) {
				// 记录数据下标
				this.changeIndex = index;
				// 显示弹窗
				this.isShowMask = true;
				alert("在这里,一方面要弹出修改窗口, 另一方面 当点击修改窗口中的'确定'按钮时 根据 index, 找到medical_lists数组中对应的对象, 然后修改数组中对象的 med_prescription属性");
				//this.isShowMask = false;
			},
			closeMask: function() {
				this.isShowMask = false;
			},
			alertSureBtn: function() {
				// 获取文本域中的值, 进行数据提取, 重置后, 返回后台一份数据
				alert(this.saveScheme);
				this.isShowMask = false;
			},
			cancleBtn: function() {
				this.isShowMask = false;
			}
		},
	}
</script>

<style>

	/* 电子病历页面样式 */
	@import url("../css/EMedicalRecord.css");
	/* 弹窗 */
	@import url("../css/AlertBox.css");
	/* 文本域警示框样式 */
	@import url("../css/AlertTextarea.css");

	/* 外部控制元素 */
	.doctorConsultation_wrap {
		height: 100%;
	}

	/* 输入框外层控制div的大小重置 */
	.medical_search_form_inp {
		width: 100px;
	}

	/* 操作 */
	.hospital_handle {
		font-size: 0;
		word-spacing: 14px;
	}
	.hospital_handle a {
		color: #16DCB8;
		font-size: 14px;
	}
	.hospital_handle a:hover {
		color: #999999;
	}
</style>
