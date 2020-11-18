<template>
	<!-- 电子病历详情 -->
	<div class="eMedicalListDetail_wrap">
		<!-- 上衣界面传入的值:{{emedical}} -->
		<!-- 标题 -->
		<div class="docCon_title">
			<h2>
				<span>病历详情</span>
			</h2>
		</div>
		<!-- 内容 -->
		<div class="docCon_main">
			<!-- 一, 病历夹 -->
			<div class="medicalDetail_title">
				<ul class="eMedical_list_title">
					<li>姓名：<span>{{emed_patient.pat_name}}</span></li>
					<li>性别：<span>{{emed_patient.pat_gender}}</span></li>
					<li>年龄：<span>{{emed_patient.pat_age}}</span></li>
					<li>科室：<span>{{emed_patient.pat_section}}</span></li>
					<li>诊断类型：<span>{{emed_patient.pat_type}}</span></li>
				</ul>
			</div>
			<!-- 二, 病历内容 -->
			<div class="medicalDetail_content">
				<ul class="eMedical_list_ul">
					<li class="eMedical_list_item fl"
						@click="goToDetail(index)"
						v-for="(emedical, index) in emed_Infos"
						:key="index"
					>
						<div>就诊时间：<span>{{emedical.emed_date}}</span></div>
						<div>就诊科室：<span>{{emedical.emed_section}}</span></div>
						<div>病情描述：<span>{{emedical.emed_des}}</span></div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import url from '../../service'
	export default {
		name: 'EMedicalListDetail',
		data() {
			return {
				emed_patient: {pat_id: "", pat_name: "张某某", pat_gender: "男", pat_age: "40", pat_section: "骨科", pat_type: "复诊"},
				emed_Infos: [
					{emed_id: "", emed_date: "2019-04-01", emed_section: "骨科", emed_des: "左腿粉碎性骨折左腿粉碎性骨折"},
					{emed_id: "", emed_date: "2019-04-01", emed_section: "骨科", emed_des: "左腿粉碎性骨折左腿粉碎性骨折"},
					{emed_id: "", emed_date: "2019-04-01", emed_section: "骨科", emed_des: "左腿粉碎性骨折左腿粉碎性骨折"},
					{emed_id: "", emed_date: "2019-04-01", emed_section: "骨科", emed_des: "左腿粉碎性骨折左腿粉碎性骨折"},
					{emed_id: "", emed_date: "2019-04-01", emed_section: "骨科", emed_des: "左腿粉碎性骨折左腿粉碎性骨折"},
					{emed_id: "", emed_date: "2019-04-01", emed_section: "骨科", emed_des: "左腿粉碎性骨折左腿粉碎性骨折"},
					{emed_id: "", emed_date: "2019-04-01", emed_section: "骨科", emed_des: "左腿粉碎性骨折左腿粉碎性骨折"},
					{emed_id: "", emed_date: "2019-04-01", emed_section: "骨科", emed_des: "左腿粉碎性骨折左腿粉碎性骨折"},
					{emed_id: "", emed_date: "2019-04-01", emed_section: "骨科", emed_des: "左腿粉碎性骨折左腿粉碎性骨折"},
					{emed_id: "", emed_date: "2019-04-01", emed_section: "骨科", emed_des: "左腿粉碎性骨折左腿粉碎性骨折"},
				]
			}
		},
		computed: {
			emedical() {
				return this.$store.state.emedicalID;
			}
		},
		methods: {
			// 进入单个病历详情界面
			goToDetail: function (index) {
				// 数据下标 index, 用于传值
				let emedID = this.emed_Infos[index].emed_id;
				// 姑且认为传的是 id
				this.$router.push({name: 'EMedicalDetail', query: {emedical_id: emedID}});
			},
		}
	}
</script>

<style>



	.eMedicalListDetail_wrap {
		width: 100%;
		height: 100%;
	}
	/* 姓名title */
	.eMedical_list_title {
		width: 80%;
		height: 100%;
		border: none;
		/* 弹性布局 */
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.eMedical_list_title span {
		color: #333333;
	}

	.medicalDetail_content {

	}

	.eMedical_list_ul {
		width: 100%;
		height: 100%;
	}

	.eMedical_list_item {
		width: 23%;
		height: 29%;
		border-radius: 5px;
		margin: 0px 14px 20px 0;
		border: 1px solid lightgray;
		background: #f8f8f8;
		/* 盒阴影 */
		-webkit-box-shadow: -2px 2px 5px lightgrey;
		-moz-box-shadow: -2px 2px 5px lightgrey;
		-ms-box-shadow: -2px 2px 5px lightgrey;
		-o-box-shadow: -2px 2px 5px lightgrey;
		box-shadow: -2px 2px 5px lightgrey;
		/* 文字 */
		line-height: 20px;
		font-size: 14px;
		color: #666666;
		cursor: pointer;
	}
	.eMedical_list_item:hover {
		background: #eaeaea;
	}
	.eMedical_list_item div {
		padding: 10px;
		overflow: hidden;
		/* 出现省略号 */
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.eMedical_list_item span {
		color: #333333;
	}

</style>
