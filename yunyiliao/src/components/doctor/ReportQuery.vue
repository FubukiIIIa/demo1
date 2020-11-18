<template>
	<!-- 报告查询 -->
	<div class="reportQuery_wrap">
		<!-- 标题 -->
		<div class="docCon_title">
			<h2>
				<span>报告查询</span>
			</h2>
			<h2 class="add_medical add_report">
				<router-link to="/AddReport">
					<span>添加报告</span>
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
					<!-- 日期 -->
					<div class="medical_search_form_inp medical_search_time">
						<input type="text" list="timeList" placeholder="选择就诊时间">
						<datalist id="timeList">
							<option value="date">vue-datepicker-local插件</option>
						</datalist>
					</div>
					<!-- 检查项目 -->
					<div class="medical_search_form_inp medical_search_name">
						<input type="text" name="" placeholder="请输入检查项目" />
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
						<th>就诊科室</th>
						<th>诊断类型</th>
						<th>检查时间</th>
						<th>检查项目</th>
						<th>操作</th>
					</tr>
					<tr class="medicai_list_item" v-for="(medical, index) in medical_lists">
						<td><input type="checkbox"></td>
						<td><!-- {{++index}} -->001</td>
						<td>{{medical.med_name}}</td>
						<td>{{medical.med_gender}}</td>
						<td>{{medical.med_age}}</td>
						<td>{{medical.med_depart}}</td>
						<td>{{medical.med_type}}</td>
						<td>{{medical.med_time}}</td>
						<td>{{medical.med_checkItem}}</td>
						<td>
							<router-link to="/ReportDetail" @click.native='getReportDetail(index)'>
								<span class="medicai_list_lookdetails">查看详情</span>
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
	</div>
</template>

<script>
	export default {
		name: "EMedicalRecord",
		data() {
			return {
				medical_lists: [
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_depart:"外科", med_type:"检查/诊断", med_time:"2018-12-4 12:10:34", med_checkItem: "血糖, 甲状腺, 心肺, 肾脏"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_depart:"外科", med_type:"检查/诊断", med_time:"2018-12-4 12:10:34", med_checkItem: "血糖, 甲状腺, 心肺, 肾脏"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_depart:"外科", med_type:"检查/诊断", med_time:"2018-12-4 12:10:34", med_checkItem: "血糖, 甲状腺, 心肺, 肾脏"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_depart:"外科", med_type:"检查/诊断", med_time:"2018-12-4 12:10:34", med_checkItem: "血糖, 甲状腺, 心肺, 肾脏"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_depart:"外科", med_type:"检查/诊断", med_time:"2018-12-4 12:10:34", med_checkItem: "血糖, 甲状腺, 心肺, 肾脏"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_depart:"外科", med_type:"检查/诊断", med_time:"2018-12-4 12:10:34", med_checkItem: "血糖, 甲状腺, 心肺, 肾脏"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_depart:"外科", med_type:"检查/诊断", med_time:"2018-12-4 12:10:34", med_checkItem: "血糖, 甲状腺, 心肺, 肾脏"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_depart:"外科", med_type:"检查/诊断", med_time:"2018-12-4 12:10:34", med_checkItem: "血糖, 甲状腺, 心肺, 肾脏"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_depart:"外科", med_type:"检查/诊断", med_time:"2018-12-4 12:10:34", med_checkItem: "血糖, 甲状腺, 心肺, 肾脏"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_depart:"外科", med_type:"检查/诊断", med_time:"2018-12-4 12:10:34", med_checkItem: "血糖, 甲状腺, 心肺, 肾脏"},
				],
			}
		},
		methods: {
			// 组件间传值, 传值给 报告详情界面, 这里预先设计的是传递 id 过去
			getReportDetail: function(index) {
				console.log(this.medical_lists[index].med_id);

			}
		},
	}
</script>

<style>

	/* 报告详情/报告修改 页面的样式 */
	@import url("../css/ReportDetail.css");

	/* 电子病历页面样式 */
	@import url("../css/EMedicalRecord.css");

	.reportQuery_wrap {
		height: 100%;
	}

	/* 添加报告 */
	.reportQuery_wrap .add_report {
		background: url(../../assets/title_bg.png) no-repeat 5px -48px;
	}

</style>
