<template>
	<!-- 出院打印 -->
	<div class="dischargePrint_wrap">
		<!-- {{dischargePatient}} -->
		<!-- 标题 -->
		<div class="docCon_title dischargePrint_title">
			<h2>
				<router-link to="/DischargeManagement">
					<span>出院管理</span>
				</router-link>
			</h2>
		</div>
		<!-- 内容 -->
		<div class="docCon_main">
			<!-- 一, 病人信息 -->
			<div class="dischargeInfo">
				<div class="dischargeInfo_item fl">
					<div>姓名：<span>{{dischargePatInfo.disP_name}}</span></div>
					<div>住院号：<span>{{dischargePatInfo.disP_hospNum}}</span></div>
				</div>
				<div class="dischargeInfo_item fl">
					<div>性别：<span>{{dischargePatInfo.disP_gender}}</span></div>
					<div>病床号：<span>{{dischargePatInfo.disP_hosBedNum}}</span></div>
				</div>
				<div class="dischargeInfo_item fl">
					<div>年龄：<span>{{dischargePatInfo.disP_age}}</span></div>
					<div>主治医生：<span>{{dischargePatInfo.disP_doctor}}</span></div>
				</div>
				<div class="dischargeInfo_item fl">
					<div>科室：<span>{{dischargePatInfo.disP_section}}</span></div>
					<div>护士：<span>{{dischargePatInfo.disP_nurse}}</span></div>
				</div>
				<div class="dischargeInfo_item fl">
					<div>住院时间：<span>{{dischargePatInfo.disP_hospTime}}</span></div>
				</div>
				<div class="dischargeInfo_item fr">
					<div class="dischargeInfo_printBtn fr" @click="printDischarge">
						<i class="fa fa-pencil-square-o"></i>&nbsp;打印证明
					</div>
				</div>
			</div>
			<!-- 二, 主要事项 -->
			<div class="dischargeCon">
				<ul class="dischargeCon_list">
					<li>诊断症状：<span>{{dischargePatInfo.disP_diagnose}}</span></li>
					<li>手术：<span>{{dischargePatInfo.disP_operation}}</span></li>
					<li>恢复情况：<span>{{dischargePatInfo.disP_recovery}}</span></li>
					<li>备注：<span>{{dischargePatInfo.disP_remark}}</span></li>
				</ul>
			</div>
			<!-- 三, 出院时间 -->
			<div class="dischargeFoot">
				<div class="dischargeFoot_time fl">
					出院时间：<span>{{dischargePatInfo.disP_leaveTime}}</span>
				</div>
				<div class="dischargeFoot_doctor fl">
					核准医生：<span>{{dischargePatInfo.disP_approvedDoc}}</span>
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
				dischargePatient: this.$route.query.dischargePat,// 获取上一界面传入的值
				dischargePatInfo: {
					disP_id:"001", disP_name:"张三", disP_gender:"男", disP_age:"49", disP_section:"骨科", disP_hospTime:"2018-12-4", disP_hospNum:"333999888", disP_hosBedNum:"2407", disP_doctor:"张医生", disP_nurse:"王护士", disP_diagnose:"右手小臂骨折", disP_operation:"钢板固定", disP_recovery:"恢复良好", disP_remark:"", disP_leaveTime:"2018-12-31", disP_approvedDoc:"王医生"
				}
			}
		},
		methods: {
			// 打印
			printDischarge: function() {
// 				// 原来的页面
// 				let oldHTML = window.document.body.innerHTML;
// 				// 需要隐藏的元素
// 				let printBtn = document.getElementsByClassName("dischargeInfo_printBtn")[0];
// 				let docAside = document.getElementsByClassName("doc_aside")[0];
// 				let dischargePrintTitle = document.getElementsByClassName("dischargePrint_title")[0];
// 				let docConFoot = document.getElementsByClassName("doc_con_foot")[0];
//
// 				// 隐藏
// 				printBtn.classList.add("printHidden");
// 				docAside.classList.add("printHidden");
// 				dischargePrintTitle.classList.add("printHidden");
// 				docConFoot.classList.add("printHidden");
// 				// 需要打印的元素
// 				// let printHTML = document.getElementsByClassName("docCon_main")[0];
// 				// console.log(printHTML);
// 				// 重置HTML
// 				// window.document.body.innerHTML = printHTML;
// 				// 打印
// 				window.print();
//
// 				// 恢复原来页面元素
// 				// window.document.body.innerHTML = oldHTML;
// 				// 点击取消打印后刷新页面，恢复点击打印按钮之前的原始数据
// 				window.location.reload();

				/**
				 * 局部打印
				 */
				// 一, 要打印的内容
				let prinHTML = document.getElementsByClassName("docCon_main")[0];
				// 二, 内容替换
				// 原来body中的内容备份
				let oldHTML = window.document.body.innerHTML;
				// 再次获取页面内容
				let newHTML = window.document.documentElement;
				// 获取body, 准备进行替换
				let newBody = newHTML.getElementsByTagName("body")[0];
				// 替换body中的内容为要打印的内容
				newBody.innerHTML = prinHTML.innerHTML;
				// 需要隐藏的元素
				let printBtn = document.getElementsByClassName("dischargeInfo_printBtn")[0];
				// 隐藏
				printBtn.classList.add("printHidden");

				// 打印
				window.print();
				// 重置html页面
				window.document.body.innerHTML = oldHTML;
				// 刷新页面
				window.location.reload();
			}
		},
	}
</script>

<style>


	/* 要隐藏元素 */
	.printHidden {
		display: none;
	}



	/* 外部控制元素 */
	.dischargePrint_wrap {
		height: 100%;
	}
	/* 出院管理 */
	.dischargePrint_title a {
		padding-top: 12px;
		color: white;
	}
	.dischargePrint_title a:hover {
		color: #333;
	}

	/* 一,  */
	.dischargeInfo {
		height: 19%;
		border-bottom: 1px solid #707070;
	}
	.dischargeInfo_item {
		width: 16.5%;
		height: 100%;
		/* 字体 */
		font-size: 14px;
		color: #626262;
	}
	.dischargeInfo_item div {
		height: 30%;
		padding-top: 20px;
	}
	.dischargeInfo_item div span {
		color: #333333;
	}
	/* 打印按钮 */
	.dischargeInfo_item .dischargeInfo_printBtn {
		width: 90%;
		height: 26px;
		padding: 0;
		margin-top: 30px;
		border: 1px solid #16DCB8;
		border-radius: 50px;
		background: #16DCB8;
		color: white;
		text-align: center;
		line-height: 26px;
		cursor: pointer;
	}
	.dischargeInfo_printBtn:hover {
		background: white;
		color: #16DCB8;
	}

	/* 二,  */
	.dischargeCon {
		height: 70%;
		border-bottom: 1px solid #707070;
	}
	.dischargeCon_list {
		height: 100%;
		color: #626262;
		font-size: 14px;
	}
	.dischargeCon_list li {
		height: 19%;
		padding-top: 20px;
	}
	.dischargeCon_list li span {
		color: #333333;
	}

	/* 三,  */
	.dischargeFoot {
		height: 10%;
		font-size: 14px;
		color: #626262;
	}
	.dischargeFoot>div {
		margin-top: 15px;
		width: 30%;
	}
	.dischargeFoot>div span {
		color: #333333;
	}
</style>
