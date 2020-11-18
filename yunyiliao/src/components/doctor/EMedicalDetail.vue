<template>
	<!-- 电子病历详情页面 -->
	<div class="medical_detail_wrap">
		{{emedicalID}}
		<!-- 标题 -->
		<div class="docCon_title">
			<h2>
				<span>病历查看</span>
			</h2>
		</div>
		<!-- 内容 -->
		<div class="docCon_main">
			<!-- 一, 病历夹 -->
			<div class="medicalDetail_title">
				<div class="medicalDetail_title_left">
					病历夹
				</div>
				<div class="medicalDetail_title_right">
					<div class="medicalDetail_editDiv fr" v-show="isEidt" @click="satarEdit">
						<i class="fa fa-pencil"></i>&nbsp;修改信息
					</div>
				</div>
			</div>
			<!-- 二, 病历内容 -->
			<div class="medicalDetail_content">
				<form class="medicalDetail_content_form" action="###" method="get">
					<!-- 左 -->
					<div class="medicalDetail_con_side">
						<div class="detail_con_left_side_row">
							<p>患者姓名</p>
							<input class="detail_inp10" type="text" value="张某某" :disabled="isEidt">
						</div>
						<div class="detail_con_left_side_row detail_side_doubuleCol">
							<div>
								<p>性别</p>
								<input class="detail_inp8" type="text" value="男" list="genderlist" :disabled="isEidt">
								<!-- <datalist id="genderlist">
									<option value="男">男</option>
									<option value="女">女</option>
								</datalist> -->
							</div>
							<div>
								<p>年龄</p>
								<input class="detail_inp8" type="text" value="34" :disabled="isEidt">
							</div>
						</div>
						<div class="detail_con_left_side_row">
							<p>就诊日期</p>
							<div class="detail_side_doubuleCol">
								<input class="detail_inp8" type="text" value="2018" :disabled="isEidt"><span>年</span>
								<input class="detail_inp8" type="text" value="10" :disabled="isEidt"><span>月</span>
							</div>
						</div>
						<div class="detail_con_left_side_row">
							<p>联系电话</p>
							<input class="detail_inp10" type="text" value="155 8888 9999" :disabled="isEidt">
						</div>
						<div class="detail_con_left_side_row">
							<p>地址</p>
							<input class="detail_inp10" type="text" value="河南省郑州市中原区" :disabled="isEidt">
						</div>
					</div>
					<!-- 中 -->
					<div class="medicalDetail_con_mid">
						<div class="detail_con_left_side_row">
							<p>就诊科室</p>
							<input class="detail_inp10" type="text" value="外科" :disabled="isEidt">
						</div>
						<div class="detail_con_left_side_row diseaseDes_wrap">
							<p>病情描述</p>
							<textarea class="detail_inp10 diseaseTextarea" :disabled="isEidt">感冒, 发烧, 流鼻涕, 腰酸, 背痛, 腿抽筋</textarea>
						</div>
						<div class="detail_con_left_side_row">
							<p>过敏史</p>
							<input class="detail_inp10" type="text" value="无" :disabled="isEidt">
						</div>
						<div class="detail_con_left_side_row">
							<p>诊断医生</p>
							<input class="detail_inp10" type="text" value="王医生" :disabled="isEidt">
						</div>
					</div>
					<!-- 右 -->
					<div class="medicalDetail_con_side">
						<div class="detail_con_right_side_row">
							<p>用药详情</p>
							<textarea class="detail_inp10 diseaseTextarea" :disabled="isEidt">扑尔敏, 阿莫西林胶囊, 头孢</textarea>
						</div>
						<div class="detail_con_right_side_row">
							<p>备注</p>
							<textarea class="detail_inp10 diseaseTextarea" :disabled="isEidt">有吸烟喝酒史</textarea>
						</div>
						<div class="detail_con_right_side_row">
							<p>上传诊断报告</p>
							<div class="detail_upload_wrap detail_inp10 diseaseTextarea">
								<input class="detail_upload" type="file" :disabled="isEidt">
							</div>
						</div>
					</div>
					<!-- 下 -->
					<div v-show="!isEidt" class="medicalDetail_con_bot">
						<input class="detail_save sureBtnHover" type="button" value="保存" @click="saveMedical">
						<input class="detail_cancle cancleBtnHover" type="button" value="取消" @click="isEidt=!isEidt">
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'EMedicalDetail',
		data() {
			return {
				isEidt: true, // 是否编辑
				emedicalID: this.$route.query.emedical_id,// 上一界面传入的病历详情id
			}
		},
		computed: {
		},
		methods: {
			satarEdit: function() {
				this.isEidt = !this.isEidt;
			},
			saveMedical: function() {
				alert("要保存信息的");
			}
		}
	}
</script>

<style>

	/* 病历详情/添加病历页面的样式 */
	@import url("../css/EMedicalDetail.css");
	
	/**
	 * 外部控制元素
	 */
	.personInfo_wrap {
		height: 100%;
	}
	
	/* 相关证明上传 */
	.personInfo_wrap .detail_upload_wrap {
		background: url(../../assets/doctor/doctor_uploadBG.png) no-repeat center;
		background-size: 100%;
	}
</style>
