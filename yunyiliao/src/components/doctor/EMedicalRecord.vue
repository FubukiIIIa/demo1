<template>
	<!-- 电子病历页面 -->
	<div class="medical_wrap">
		<!-- 标题 -->
		<div class="docCon_title">
			<h2>
				<span>电子病历</span>
			</h2>
			<h2 class="add_medical">
				<router-link to="/AddMedical">
					<span>添加病历</span>
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
							<option value="date">date</option>
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
						<th>就诊科室</th>
						<th>省</th>
						<th>市</th>
						<th>就诊科室</th>
						<th>诊断类型</th>
						<th>就诊时间</th>
						<th>操作</th>
					</tr>
					<tr class="medicai_list_item" v-for="(medical, index) in medical_lists" :key="index">
						<td><input type="checkbox" @click="checkRecord(index)"></td>
						<td>{{ index+1 }}</td>
						<td>{{medical.med_name}}</td>
						<td>{{medical.med_gender}}</td>
						<td>{{medical.med_age}}</td>
						<td>{{medical.med_department}}</td>
						<td>{{medical.med_province}}</td>
						<td>{{medical.med_city}}</td>
						<td>{{medical.med_depart}}</td>
						<td>{{medical.med_type}}</td>
						<td>{{medical.med_time}}</td>
						<td>
							<router-link to="/EMedicalListDetail" @click.native='setMedicalID(index)'>
								<span class="medicai_list_lookdetails">查看详情</span>
							</router-link>
						</td>
					</tr>
				</table>
			</div>
			<!-- 三, 页码操作控制 -->
			<div class="medical_control">
				<!-- 批量删除 -->
				<div class="medical_delete" @click="deleteMore">
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
				// 被删除病历的索引
				delIndexArr: [],
				medical_lists: [
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_department:"外科", med_province:"河南", med_city:"郑州", med_depart:"外科", med_type:"检查/诊断", med_time:"2018-12-4"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_department:"外科", med_province:"河南", med_city:"郑州", med_depart:"外科", med_type:"检查/诊断", med_time:"2018-12-4"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_department:"外科", med_province:"河南", med_city:"郑州", med_depart:"外科", med_type:"检查/诊断", med_time:"2018-12-4"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_department:"外科", med_province:"河南", med_city:"郑州", med_depart:"外科", med_type:"检查/诊断", med_time:"2018-12-4"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_department:"外科", med_province:"河南", med_city:"郑州", med_depart:"外科", med_type:"检查/诊断", med_time:"2018-12-4"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_department:"外科", med_province:"河南", med_city:"郑州", med_depart:"外科", med_type:"检查/诊断", med_time:"2018-12-4"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_department:"外科", med_province:"河南", med_city:"郑州", med_depart:"外科", med_type:"检查/诊断", med_time:"2018-12-4"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_department:"外科", med_province:"河南", med_city:"郑州", med_depart:"外科", med_type:"检查/诊断", med_time:"2018-12-4"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_department:"外科", med_province:"河南", med_city:"郑州", med_depart:"外科", med_type:"检查/诊断", med_time:"2018-12-4"},
					{med_id:"", med_name:"刘德华", med_gender:"男", med_age:"50", med_department:"外科", med_province:"河南", med_city:"郑州", med_depart:"外科", med_type:"检查/诊断", med_time:"2018-12-4"},
				],
			}
		},
		created: function() {
			// 获取数据后增加isChecked属性
			this.addIsChecked()
		},
		methods: {
			// 组件间传值, 传值给 电子病历详情界面, 这里预先设计的是传递 id 过去
			setMedicalID: function(index) {
				console.log(this.medical_lists[index].med_id);
				this.$store.state.emedicalID = "你好这里假装有电子病历的id值";
			},
			addIsChecked: function() {
				this.medical_lists.map( item => {
					item.isChecked = false
				})
			},
			// 勾选病历
			checkRecord: function(index) {
				this.medical_lists[index].isChecked = !this.medical_lists[index].isChecked
				// 这个病历在删除列表中的位置
				let indexInDel = this.delIndexArr.indexOf(index)
				// 将要被删除
				if(this.medical_lists[index].isChecked) {
					if(indexInDel === -1) {
						this.delIndexArr.push(index)
					}
				}else {
					// 从删除列表中剃掉
					this.delIndexArr.splice(indexInDel, 1)
				}
			},
			// 批量删除
			deleteMore: function() {
				// 打印要被删除的病历的索引
				console.log('要删除的病历有：',this.delIndexArr)
			}
		},
	}
</script>

<style>

	/* 病历详情/添加病历页面的样式 */
	@import url("../css/EMedicalDetail.css");
	/* 电子病历页面样式 */
	@import url("../css/EMedicalRecord.css");

	/**
	 * 外部控制元素
	 */
	.medical_wrap {
		height: 100%;
	}

</style>
