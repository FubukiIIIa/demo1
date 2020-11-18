<template>
	<!-- 这里是个人信息 -->
	<div class="personInfo_wrap">
		<!-- 标题 -->
		<div class="docCon_title">
			<h2>
				<span>个人信息</span>
			</h2>
		</div>
		<!-- 内容 -->
		<div class="docCon_main">
			<!-- 一, 病历夹 -->
			<div class="medicalDetail_title">
				<div class="medicalDetail_title_left">
					我的信息
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
							<p>医生名称</p>
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
								
							</div>
						</div>
						<div class="detail_con_left_side_row">
							<p>出生日期</p>
							<div class="detail_side_doubuleCol">
								<input class="detail_inp8" type="text" value="1988" :disabled="isEidt"><span>年</span>
								<input class="detail_inp8" type="text" value="9" :disabled="isEidt"><span>月</span>
							</div>
						</div>
						<div class="detail_con_left_side_row">
							<p>联系电话</p>
							<input class="detail_inp10" type="text" value="166 1777 8888" :disabled="isEidt">
						</div>
						<div class="detail_con_left_side_row">
							<p>地址</p>
							<input class="detail_inp10" type="text" value="河南省郑州市中原区" :disabled="isEidt">
						</div>
					</div>
					<!-- 中 -->
					<div class="medicalDetail_con_mid">
						<div class="detail_con_left_side_row">
							<p>就职医院</p>
							<input class="detail_inp10" type="text" value="河南省人民医院" :disabled="isEidt">
						</div>
						<div class="detail_con_left_side_row detail_side_doubuleCol">
							<div>
								<p>医院级别</p>
								<input class="detail_inp8" type="text" value="三甲" list="genderlist" :disabled="isEidt">
								<!-- <datalist id="genderlist">
									<option value="男">男</option>
									<option value="女">女</option>
								</datalist> -->
							</div>
							<div>
								
							</div>
						</div>
						<div class="detail_con_left_side_row">
							<p>医院地址</p>
							<div class="detail_side_doubuleCol">
								<input class="detail_inp8" type="text" value="河南" :disabled="isEidt"><span>省</span>
								<input class="detail_inp8" type="text" value="郑州" :disabled="isEidt"><span>市</span>
							</div>
						</div>
						<div class="detail_con_left_side_row">
							<p>所属科室</p>
							<input class="detail_inp10" type="text" value="外科" :disabled="isEidt">
						</div>
						<div class="detail_con_left_side_row">
							<p style="color: red;">医院地址</p>
							<input class="detail_inp10" type="text" value="河南省郑州市中原区" :disabled="isEidt">
						</div>
					</div>
					<!-- 右 -->
					<div class="medicalDetail_con_side">
						<div class="detail_con_right_side_row">
							<p>医生简介</p>
							<textarea class="detail_inp10 diseaseTextarea" :disabled="isEidt">添加简介......</textarea>
						</div>
						<div class="detail_con_right_side_row">
							<p>工作经历</p>
							<textarea class="detail_inp10 diseaseTextarea" :disabled="isEidt">添加简介......</textarea>
						</div>
						<div class="detail_con_right_side_row">
							<p>相关证明上传</p>
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
			}
		},
		computed: {
			emedical() {
				return this.$store.state.emedicalID;
			}
		},
		methods: {
			satarEdit: function() {
				this.isEidt = !this.isEidt;
			},
			saveMedical: function() {
				alert("要保存信息的");
				// 显示修改按钮, 保存和取消按钮隐藏
				this.isEidt = !this.isEidt;
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
