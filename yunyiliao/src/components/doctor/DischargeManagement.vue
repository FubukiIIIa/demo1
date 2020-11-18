<template>
	<!-- 这里是出院管理 -->
	<div class="dischargeMag_wrap">
		<!-- 标题 -->
		<div class="docCon_title">
			<h2>
				<span>出院管理</span>
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
						<input type="text" list="timeList" placeholder="选择出院时间">
						<datalist id="timeList">
							<option value="date">vue-datepicker-local插件</option>
						</datalist>
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
						<th>入院时间</th>
						<th>科室</th>
						<th>核准</th>
						<th>出院时间</th>
						<th>操作</th>
					</tr>
					<tr class="medicai_list_item" v-for="(medical, index) in medical_lists" @click="goToPrint(index)">
						<td>
							<div v-if="medical.med_id"><input @click.stop="" type="checkbox" ></div>
						</td>
						<td><!-- {{++index}} -->{{medical.med_id}}</td>
						<td>{{medical.med_name}}</td>
						<td>{{medical.med_gender}}</td>
						<td>{{medical.med_age}}</td>
						<td>{{medical.med_sickbedNum}}</td>
						<td>{{medical.med_doctor}}</td>
						<td>{{medical.med_nurse}}</td>
						<td>{{medical.med_hospitalTime}}</td>
						<td>{{medical.med_stationOffice}}</td>
						<td>{{medical.med_approve}}</td>
						<td>{{medical.med_leaveHospital}}</td>
						<td class="hospital_handle">
							<!-- 修改住院信息 -->
							<!-- <router-link to="###" >
								<i class="fa fa-pencil"></i>
							</router-link>
							<router-link to="###" >
								<i class="fa fa-times-circle-o"></i>
							</router-link> -->

							<div v-if="medical.med_id">
								<!-- 修改处方 -->
								<router-link to="###" @click.native.stop="changeDischargeInfo(index)">
									<i class="fa fa-pencil"></i>
								</router-link>
								<router-link to="###" @click.native.stop="removeDischarge(index)">
									<i class="fa fa-times-circle-o"></i>
								</router-link>
							</div>
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
					{med_id:"001", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_doctor:"张医生", med_nurse:"王护士", med_hospitalTime:"2018-12-4", med_stationOffice:"外科", med_approve: "已核准", med_leaveHospital: "2019-2-10"},
					{med_id:"001", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_doctor:"张医生", med_nurse:"王护士", med_hospitalTime:"2018-12-4", med_stationOffice:"外科", med_approve: "未核准", med_leaveHospital: ""},
					{med_id:"001", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_doctor:"张医生", med_nurse:"王护士", med_hospitalTime:"2018-12-4", med_stationOffice:"外科", med_approve: "未核准", med_leaveHospital: ""},
					{med_id:"001", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_doctor:"张医生", med_nurse:"王护士", med_hospitalTime:"2018-12-4", med_stationOffice:"外科", med_approve: "未核准", med_leaveHospital: ""},
					{med_id:"001", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_doctor:"张医生", med_nurse:"王护士", med_hospitalTime:"2018-12-4", med_stationOffice:"外科", med_approve: "已核准", med_leaveHospital: "2019-2-10"},
					{med_id:"001", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_doctor:"张医生", med_nurse:"王护士", med_hospitalTime:"2018-12-4", med_stationOffice:"外科", med_approve: "已核准", med_leaveHospital: "2019-2-10"},
					{med_id:"001", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_doctor:"张医生", med_nurse:"王护士", med_hospitalTime:"2018-12-4", med_stationOffice:"外科", med_approve: "已核准", med_leaveHospital: "2019-2-10"},
					{med_id:"001", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_doctor:"张医生", med_nurse:"王护士", med_hospitalTime:"2018-12-4", med_stationOffice:"外科", med_approve: "已核准", med_leaveHospital: "2019-2-10"},
					{med_id:"001", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_doctor:"张医生", med_nurse:"王护士", med_hospitalTime:"2018-12-4", med_stationOffice:"外科", med_approve: "已核准", med_leaveHospital: "2019-2-10"},
					{med_id:"001", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_doctor:"张医生", med_nurse:"王护士", med_hospitalTime:"2018-12-4", med_stationOffice:"外科", med_approve: "已核准", med_leaveHospital: "2019-2-10"},
				],
			}
		},
		methods: {
			// 修改出院信息
			changeDischargeInfo: function(index) {

			},
			// 删除出院信息
			removeDischarge: function(index) {
				// 从数组中删除元素
				this.medical_lists.splice(index, 1);
				// 处理下页面
				let newTemp = {med_id:"", med_name:"", med_gender:"", med_age:"", med_sickbedNum:"", med_nurse:"", med_hospitalTime:"", med_stationOffice:"", med_prescription: ""};
				this.medical_lists.push(newTemp);
				// 向后台发送数据
				//alert("发送数据给后台");
			},
			// 出院信息打印
			goToPrint: function(index) {
				// 记录点击过 出院管理 按钮, 保存, 保证打印之后, 选中左侧侧边栏选中第四个出院管理
				localStorage.outHos = 4;
				// 这里应该涉及传值
				let dischargePatient = this.medical_lists[index];
				// 最好传值传 id
				// 下面的代码直接传的是对象, 不太好吧!!!
				// 跳转到出院打印界面
				this.$router.push({name: 'DischargePrint', query:{dischargePat: dischargePatient}});
			}
		},
	}
</script>

<style>
	/* 电子病历页面样式 */
	@import url("../css/EMedicalRecord.css");

	/* 外部控制元素 */
	.dischargeMag_wrap {
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
