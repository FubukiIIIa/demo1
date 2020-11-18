<template>
	<!-- 这里是处方管理 -->
	<div class="prescriptionMag_wrap">
		<!-- 标题 -->
		<div class="docCon_title">
			<h2>
				<span>处方管理</span>
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
						<th>护士</th>
						<th>科室</th>
						<th>日期</th>
						<th>处方</th>
						<th>操作</th>
					</tr>
					<tr class="medicai_list_item" v-for="(medical, index) in medical_lists">
						<td>
							<div v-if="medical.med_id"><input type="checkbox"></div>
						</td>
						<td><!-- {{++index}} -->{{medical.med_id}}</td>
						<td>{{medical.med_name}}</td>
						<td>{{medical.med_gender}}</td>
						<td>{{medical.med_age}}</td>
						<td>{{medical.med_sickbedNum}}</td>
						<td>{{medical.med_nurse}}</td>
						<td>{{medical.med_stationOffice}}</td>
						<td>{{medical.med_hospitalTime}}</td>
						<td width="180" class="med_prescription">
							<div>{{medical.med_prescription}}</div>
						</td>
						<td class="hospital_handle">
							<div v-if="medical.med_id">
								<!-- 修改处方 -->
								<router-link to="###" @click.native="changePrescription(index)">
									<i class="fa fa-pencil"></i>
								</router-link>
								<router-link to="###" @click.native="removePrescription(index)">
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
		<!-- 修改处方提示框 -->
		<div v-show="isShowMask" class="addMedical_alert">
			<div class="alert">
				<!-- 标题提示信息 -->
				<div class="alert_title">
					<h2 class="fl">修改处方</h2>
					<div class="fr">
						<i class="fa fa-times-circle-o" @click="closeMask"></i>
					</div>
				</div>
				<!-- 警示内容 -->
				<div class="alert_content">
					<!-- 查询时, 显示的内容 -->
					<div class="alert_con_check textarea_con">
						<p>处方:</p>
						<div class="alertIpt_wrapDiv">
							<textarea v-model="newHospitalization"></textarea>
						</div>
					</div>
				</div>
				<!-- 按钮 -->
				<div class="alert_button">
					<!-- 查询时, 显示的内容 -->
					<div class="alert_button_check">
						<input class="alert_surebtn" type="button" value="确定" @click="alertSureBtn">
						<router-link class="cancleBtn" to="/PrescriptionManagement">
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
				newHospitalization: "", // 处方
				medical_lists: [
					{med_id:"001", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_nurse:"王护士", med_hospitalTime:"2018-12-4", med_stationOffice:"外科", med_prescription: "5%葡萄糖注射液,阿莫西林分散片,注射用利巴韦林......"},
					{med_id:"001", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_nurse:"王护士", med_hospitalTime:"2018-12-4", med_stationOffice:"外科", med_prescription: "5%葡萄糖注射液,阿莫西林分散片,注射用利巴韦林......"},
					{med_id:"001", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_nurse:"王护士", med_hospitalTime:"2018-12-4", med_stationOffice:"外科", med_prescription: "5%葡萄糖注射液,阿莫西林分散片,注射用利巴韦林......"},
					{med_id:"001", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_nurse:"王护士", med_hospitalTime:"2018-12-4", med_stationOffice:"外科", med_prescription: "5%葡萄糖注射液,阿莫西林分散片,注射用利巴韦林......"},
					{med_id:"001", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_nurse:"王护士", med_hospitalTime:"2018-12-4", med_stationOffice:"外科", med_prescription: "5%葡萄糖注射液,阿莫西林分散片,注射用利巴韦林......"},
					{med_id:"001", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_nurse:"王护士", med_hospitalTime:"2018-12-4", med_stationOffice:"外科", med_prescription: "5%葡萄糖注射液,阿莫西林分散片,注射用利巴韦林......"},
					{med_id:"001", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_nurse:"王护士", med_hospitalTime:"2018-12-4", med_stationOffice:"外科", med_prescription: "5%葡萄糖注射液,阿莫西林分散片,注射用利巴韦林......"},
					{med_id:"001", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_nurse:"王护士", med_hospitalTime:"2018-12-4", med_stationOffice:"外科", med_prescription: "5%葡萄糖注射液,阿莫西林分散片,注射用利巴韦林......"},
					{med_id:"001", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_nurse:"王护士", med_hospitalTime:"2018-12-4", med_stationOffice:"外科", med_prescription: "5%葡萄糖注射液,阿莫西林分散片,注射用利巴韦林......"},
					{med_id:"001", med_name:"刘德华", med_gender:"男", med_age:"50", med_sickbedNum:"3028", med_nurse:"王护士", med_hospitalTime:"2018-12-4", med_stationOffice:"外科", med_prescription: "5%葡萄糖注射液,阿莫西林分散片,注射用利巴韦林......"},
				],
			}
		},
		methods: {
			// 修改处方
			changePrescription: function(index) {
				// 保存下标
				this.changeIndex = index;
				// 文本域中赋值(原来的处方)
				this.newHospitalization = this.medical_lists[index].med_prescription;
				// 显示修改处方弹窗
				this.isShowMask = true;
				// alert(this.changeIndex);
				// alert("在这里,一方面要弹出修改窗口, 另一方面 当点击修改窗口中的'确定'按钮时 根据 index, 找到medical_lists数组中对应的对象, 然后修改数组中对象的 med_prescription属性");
			},
			// 删除病人处方
			removePrescription: function(index) {
				// 从数组中删除元素
				this.medical_lists.splice(index, 1);
				// 处理下页面
				var newTemp = {med_id:"", med_name:"", med_gender:"", med_age:"", med_sickbedNum:"", med_nurse:"", med_hospitalTime:"", med_stationOffice:"", med_prescription: ""};
				this.medical_lists.push(newTemp);
				// 向后台发送数据
				alert("发送数据给后台");
			},
			// 关闭弹窗
			closeMask: function() {
				this.isShowMask = false;
			},
			// 点击确定按钮
			alertSureBtn: function() {
				// 获取文本域中的值, 进行数据提取, 重置后, 返回后台一份数据
				// 修改数据对象中的值
				this.medical_lists[this.changeIndex].med_prescription = this.newHospitalization;
				// 修改处方弹窗消失
				this.isShowMask = false;
				// 向后台发送数据
				alert(this.newHospitalization);
			},
			// 点击关闭按钮
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
	.prescriptionMag_wrap {
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

	/* 病情描述, 控制省略号出现 */
	.med_prescription div {
		width: 180px;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap
	}

</style>
