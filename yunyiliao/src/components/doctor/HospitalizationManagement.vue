<template>
	<!-- 住院管理页面 -->
	<div class="hospital_wrap">
		<!-- 标题 -->
		<div class="docCon_title">
			<h2>
				<span>住院管理</span>
			</h2>
			<h2 class="add_medical">
				<router-link to="/AddPatient">
					<span>添加病人</span>
				</router-link>
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
					<!-- 入院时间 -->
					<div class="medical_search_form_inp medical_search_time">
						<input type="text" list="timeList" placeholder="选择入院时间">
						<datalist id="timeList">
							<option value="date">vue-datepicker-local插件</option>
						</datalist>
					</div>
					<!-- 手机号 -->
					<div class="medical_search_form_inp medical_search_name">
						<input type="text" name="" placeholder="请输入手机号" />
					</div>
					<!-- 住院号 -->
					<div class="medical_search_form_inp medical_search_name">
						<input type="text" name="" placeholder="选择住院号" />
					</div>
					<!-- 病床号 -->
					<div class="medical_search_form_inp medical_search_name">
						<input type="text" name="" placeholder="选择病床号" />
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
						<th>住院号</th>
						<th>姓名</th>
						<th>性别</th>
						<th>年龄</th>
						<th>病床号</th>
						<th>主治医生</th>
						<th>护士</th>
						<th>住院状态</th>
						<th>入院时间</th>
						<th>诊断情况</th>
						<th>出院时间</th>
						<th>操作</th>
					</tr>
					<tr class="medicai_list_item"
						v-for="(medical, index) in medical_lists"
						:key="index"
						>
						<td><input type="checkbox"></td>
						<td><!-- {{++index}} -->001</td>
						<td>{{medical.med_name}}</td>
						<td>{{medical.med_gender}}</td>
						<td>{{medical.med_age}}</td>
						<td>{{medical.med_sickbedNum}}</td>
						<td>{{medical.med_doctor}}</td>
						<td>{{medical.med_nurse}}</td>
						<td>{{medical.med_hospitalstate}}</td>
						<td>{{medical.med_hospitalTime}}</td>
						<td>{{medical.med_diagnosis}}</td>
						<td>{{medical.med_leaveHospital}}</td>
						<td class="hospital_handle">
							<!-- 修改住院信息 -->
							<a href="javascript:;" >
								<i class="fa fa-pencil"></i>
							</a>
							<a href="javascript:;" @click="handlerDel(index)">
								<i class="fa fa-times-circle-o"></i>
							</a>
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
	</div>
</template>

<script>
	export default {
		name: "HospitalizationManagement",
		data() {
			return {
				medical_lists: [
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_doctor:"张医生", med_nurse:"王护士", med_hospitalstate:"已住院", med_hospitalTime:"2018-12-4", med_diagnosis:"心脏搭桥", med_leaveHospital: "2019-2-10"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_doctor:"张医生", med_nurse:"王护士", med_hospitalstate:"未住院", med_hospitalTime:"", med_diagnosis:"心脏搭桥", med_leaveHospital: ""},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_doctor:"张医生", med_nurse:"王护士", med_hospitalstate:"预住院", med_hospitalTime:"", med_diagnosis:"心脏搭桥", med_leaveHospital: ""},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_doctor:"张医生", med_nurse:"王护士", med_hospitalstate:"已出院", med_hospitalTime:"2018-12-4", med_diagnosis:"心脏搭桥", med_leaveHospital: "2019-2-10"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_doctor:"张医生", med_nurse:"王护士", med_hospitalstate:"已住院", med_hospitalTime:"2018-12-4", med_diagnosis:"心脏搭桥", med_leaveHospital: "2019-2-10"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_doctor:"张医生", med_nurse:"王护士", med_hospitalstate:"已住院", med_hospitalTime:"2018-12-4", med_diagnosis:"心脏搭桥", med_leaveHospital: "2019-2-10"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_doctor:"张医生", med_nurse:"王护士", med_hospitalstate:"已住院", med_hospitalTime:"2018-12-4", med_diagnosis:"心脏搭桥", med_leaveHospital: "2019-2-10"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_doctor:"张医生", med_nurse:"王护士", med_hospitalstate:"已住院", med_hospitalTime:"2018-12-4", med_diagnosis:"心脏搭桥", med_leaveHospital: "2019-2-10"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_doctor:"张医生", med_nurse:"王护士", med_hospitalstate:"已住院", med_hospitalTime:"2018-12-4", med_diagnosis:"心脏搭桥", med_leaveHospital: "2019-2-10"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_doctor:"张医生", med_nurse:"王护士", med_hospitalstate:"已住院", med_hospitalTime:"2018-12-4", med_diagnosis:"心脏搭桥", med_leaveHospital: "2019-2-10"},
				],
			}
		},
		methods: {
			handlerDel: function(index) {
				console.log(index)
			}
		},
	}
</script>

<style>

	/* 电子病历页面样式 */
	@import url("../css/EMedicalRecord.css");

	/* 外部控制元素 */
	.hospital_wrap {
		height: 100%;
	}

	/* 头部添加病历 */
	.hospital_wrap .add_medical {
		background: url(../../assets/title_bg.png) no-repeat 5px -48px;
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
