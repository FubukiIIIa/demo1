<template>
	<div class="doc_wrap">
		<!-- 左边导航开始 -->
		<div class="doc_aside fl">
			<!-- 头部logo -->
			<h1 class="logo">
				<router-link to="/Doctor">
					<img src="../../assets/title1_bg.png">
				</router-link>
			</h1>
			<!-- 左侧中间内容 -->
			<div class="aside_content">
				<ul class="content_ul">
					<li v-for="(info, index) in infos" :key="index">
						<router-link :class="activeClass == index ? 'hover':''" :key="index" @click.native='changeColor(index)' :to="info.icon_to">
							<i class="fa" :class="info.icon_class"></i><span>{{info.info_text}}</span>
						</router-link>
					</li>
				</ul>
			</div>
			<!-- 底部个人信息 -->
			<div class="aside_foot">
				<div class="foot_docMes">
					<img src="../../assets/doctor/doctor.png" alt=""><span>{{doctorInfo.name}}</span>
				</div>
				<div class="foot_logout">
					<div>
						<router-link to="/">
							<i class="fa fa-power-off"></i><span>退出登录</span>
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<!-- 左边导航结束 -->
		<!-- 右侧内容开始 -->
		<div class="doc_content">
			<!-- 上方主要内容区域 -->
			<div class="doc_con_wrap">
				<!-- 路由 -->
				<router-view></router-view>
			</div>
			<!-- 下方白色背景设置条 -->
			<div class="doc_con_foot">
				<i class="fa fa-moon-o"></i>
				<i class="fa fa-bell"></i>
				<i class="fa fa-cog"></i>
			</div>
		</div>
		<!-- 右侧内容结束 -->

	</div>
</template>

<script>
	export default {
		name: 'Doctor',
		data() {
			return {
				activeClass: localStorage.outHos || 0, // 默认选中第一个侧边栏内容
				doctorInfo: {
					name: "张医生",
				},
				infos: [{
						icon_class: "fa-id-badge",
						info_text: "我的病人",
						icon_to: "Doctor"
					},
					{
						icon_class: "fa-file-text",
						info_text: "电子病历",
						icon_to: "EMedicalRecord"
					},
					{
						icon_class: "fa-newspaper-o",
						info_text: "住院管理",
						icon_to: "HospitalizationManagement"
					},
					{
						icon_class: "fa-file-text",
						info_text: "报告查询",
						icon_to: "ReportQuery"
					},
					{
						icon_class: "fa-hospital-o",
						info_text: "出院管理",
						icon_to: "DischargeManagement"
					},
					{
						icon_class: "fa-file-text-o",
						info_text: "处方管理",
						icon_to: "PrescriptionManagement"
					},
					{
						icon_class: "fa-question",
						info_text: "就诊资讯",
						icon_to: "DoctorConsultation"
					},
					{
						icon_class: "fa-user",
						info_text: "个人信息",
						icon_to: "PersonalInformation"
					},
				],

			}
		},
		methods: {
			changeColor(index) {
				localStorage.outHos = index;
				// 把当前点击元素的index，赋值给activeClass
				this.activeClass = index;
			}
		}
	}
</script>

<style>
	/* 引入外部样式文件 */
	@import url("../css/reset.css");
	@import url("../css/font-awesome.min.css");
	@import url("../css/doctor.css");
</style>
