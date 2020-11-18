<template>
	<!-- 添加报告 -->
	<div class="addReport_wrap">
		<!-- 标题 -->
		<div class="docCon_title">
			<h2 class="reportDetail_title addReport_title">
				<router-link to="/ReportQuery">
					<span>报告查询</span>
				</router-link>
			</h2>
			<h2 class="add_medical add_report add_report_self">
				<router-link to="/AddReport">
					<span>添加报告</span>
				</router-link>
			</h2>
		</div>
		<!-- 内容 -->
		<div class="docCon_main">
			<!-- 一, 病人信息 -->
			<div class="medical_search">
				<div class="reportDetail_patientInfo addReport_patientInfo">
					<!-- 左侧病人信息 -->
					<ul class="repDet_patientWrap">
						<li>患者姓名：<input class="name_ipt" type="text" placeholder="请输入患者姓名" v-model="report_info.rep_name"></li>
						<li>性别：<input type="text" placeholder="性别" v-model="report_info.rep_gender"></li>
						<li>年龄：<input type="text" placeholder="年龄" v-model="report_info.rep_age"></li>
						<li>科别：<input type="text" placeholder="科别" v-model="report_info.rep_branch"></li>
						<li>诊断类型：<input type="text" placeholder="诊断类型" v-model="report_info.rep_diagnosisType"></li>
					</ul>
				</div>
			</div>
			<!-- 二, 内容 -->
			<div class="medical_content">
				<!-- 一, 报告内容项填写 -->
				<ul class="reportDetail_con addReport_con">
					<li class="reportDetail_con_item">
						<span>临床诊断：</span><textarea class="editItem" v-model="report_info.rep_diagnosis"></textarea>
					</li>
					<li class="reportDetail_con_item">
						<span>大体检查：</span><textarea class="editItem" v-model="report_info.rep_check"></textarea>
					</li>
					<li class="reportDetail_con_item">
						<span>病理诊断：</span><textarea class="editItem" v-model="report_info.rep_blzd"></textarea>
					</li>
					<li class="reportDetail_con_item">
						<span>免疫/组化：</span><textarea class="editItem" v-model="report_info.rep_immunity"></textarea>
					</li>
					<li class="reportDetail_con_item">
						<span>结果：</span><textarea class="editItem" v-model="report_info.rep_reportRel"></textarea>
					</li>
					<li class="reportDetail_con_item">
						<span>备注：</span><textarea class="editItem" v-model="report_info.rep_remark"></textarea>
					</li>
				</ul>
				<!-- 二, 报告上传项 -->
				<div class="report_upload">
					<ul class="addReport_uploadList">
						<li class="reportDetail_con_item">
							<span>上传附件：</span><span class="addReport_uploadTip">最多上传3个附件，每个附件大小不超过2M</span>
						</li>
						<li class="reportDetail_con_item">
							<span>文件描述：</span>
							<div class="addReport_fileDes fr">
								<input type="text" v-model="report_info.rep_accessoryDes">
								<div class="addReport_fileBtn grayBtn">浏览<input type="file"></div>
								<div class="addReport_uploadBtn greenBtn" @click="uploadAccessory">上传</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<!-- 三, 报告医师, 审核医师项 -->
			<div class="medical_control addReport_btns">
				<div class="addReport_btns_wrap">
					<div class="addReportSave greenBtn" @click="saveAddReport">保存</div>
					<div class="addReportCancel grayBtn">
						<router-link to="/ReportQuery">
							<span>取消</span>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "AddReport",
		data() {
			return {
				report_info: {
					rep_id:"",
					rep_name:"",
					rep_gender:"男",
					rep_age:"34",
					rep_branch:"骨科",
					rep_diagnosisType:"复诊",
					// 临床诊断
					rep_diagnosis:"双足畸形, 皮下纤维脂肪增生",
					// 大体检查
					rep_check:"因(双足巨趾畸形)行畸形趾切除;送检(左3, 4, 右1, 2, 3, 4, 5均为皮肤)皮下纤维脂肪增生请结合临床...",
					// 病理诊断
					rep_blzd:"因(双足巨趾畸形)行畸形趾切除;送检(左3, 4, 右1, 2, 3, 4, 5均为皮肤)皮下纤维脂肪增生请结合临床...",
					// 免疫/组化
					rep_immunity:"",
					// 结果
					rep_reportRel:"因(双足巨趾畸形)行畸形趾切除;送检(左3, 4, 右1, 2, 3, 4, 5均为皮肤)皮下纤维脂肪增生请结合临床",
					// 备注
					rep_remark:"",
					// 附件描述
					rep_accessoryDes:"",
					// 附件
					rep_accessory:"",
				}
			}
		},
		methods: {
			// 上传
			uploadAccessory: function() {
				alert("上传附件信息...吧");
			},
			// 保存
			saveAddReport: function() {
				alert("将新添加的报告, 发送给服务器进行保存");
			}
		},
	}
</script>

<style>
	/* 报告详情页面样式 */
	@import url("../css/ReportDetail.css");
	/* 电子病历页面样式 */
	@import url("../css/EMedicalRecord.css");

	/* 外层包裹元素 */
	.addReport_wrap {
		width: 100%;
		height: 100%;
	}
	/* 报告查询 */
	.addReport_wrap .addReport_title {
		background: url(../../assets/title_bg.png) no-repeat 5px -48px;
	}
	.addReport_wrap .addReport_title a {
		padding-top: 12px;
		text-decoration: none;
		color: #797979;
	}
	.addReport_title a:hover {
		color: #16DCB8;
	}
	/* 添加报告 */
	.reportDetail_wrap .add_report {
		/* background: url(../../assets/title_bg.png) no-repeat 5px 0px; */
	}
	.add_report_self a {
		color: white;
		padding-top: 10px;
	}

	/**
	 * 添加报告本界面样式
	 */
	/**
	 * 头部患者基本信息
	 */
	.reportDetail_patientInfo {
		/* background: #16DCB8; */
	}
	.addReport_patientInfo ul {
		width: 80%;
	}
	.repDet_patientWrap {
		/* background: red; */
	}
	.repDet_patientWrap li input {
		width: 40px;
		padding: 3px;
		border: 1px solid #dddddd;
		border-radius: 2px;
		outline: none;
	}
	.repDet_patientWrap li input:focus {
		border: 1px solid #32c0e6;
	}
	/* 姓名输入框 */
	.repDet_patientWrap li .name_ipt {
		width: 100px;
	}

	/**
	 * 报告正文
	 */
	.addReport_wrap .addReport_con {
		height: 85%;
		border: none;
	}
	/* 报告上传外层div */
	.report_upload {
		height: 15%;
	}
	/* 内部ul */
	.addReport_uploadList {
		height: 100%;
	}
	.addReport_uploadList li {
		height: 45%;
		margin-bottom: 0;
	}
	/* 文件上传提示 */
	.addReport_uploadList .addReport_uploadTip {
		width: 276px;
		color: #16dcb8;
	}
	/* 文件描述内容项设置 */
	.addReport_fileDes {
		width: 90%;
		height: 100%;
		display: flex;
	}
	.addReport_fileDes input {
		width: 200px;
		height: 70%;
		border: 1px solid #999999;
		border-radius: 2px;
		outline: none;
	}
	.addReport_fileDes input:focus {
		border: 1px solid #32c0e6;
	}
	/* 浏览按钮 */
	.addReport_fileBtn, .addReport_uploadBtn {
		width: 60px;
		height: 70%;
		margin: 0 20px;
		line-height: 22px;
		position: relative;
	}
	.addReport_fileBtn input {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		opacity: 0;
	}
	/* 上传按钮 */
	.addReport_uploadBtn {
		margin: 0;
	}

	/* 灰色背景按钮 */
	.grayBtn {
		border: 1px solid #999999;
		border-radius: 2px;
		background: #999999;
		color: white;
		text-align: center;
		cursor: pointer;
	}
	.grayBtn:hover {
		background: white;
		color: #999999;
	}
	/* 主题色背景按钮 */
	.greenBtn {
		border: 1px solid #16DCB8;
		border-radius: 2px;
		background: #16DCB8;
		text-align: center;
		color: white;
		cursor: pointer;
	}
	.greenBtn:hover {
		background: white;
		color: #16DCB8;
	}

	/**
	 * 底部按钮区
	 */
	.addReport_wrap .addReport_btns {
		background: rgba(0, 0, 0, 0);
	}
	.addReport_btns_wrap {
		height: 100%;
		display: flex;
		align-items: center;
	}
	.addReport_btns_wrap>div {
		width: 100px;
		height: 40%;
		padding: 5px;
		margin-right: 30px;
	}
	.addReport_btns_wrap>div a {
		display: inline-block;
		width: 100%;
		height: 100%;
		color: white;
	}
	.addReport_btns_wrap>div a:hover {
		color: #999999;
	}
</style>
