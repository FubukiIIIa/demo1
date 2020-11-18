<template>
	<div class="hello">
		<span class="log-title">{{ log_title }}</span>
		<img class="login-pic" src="../assets/login.png" alt="">
		<div class="login-div">
			<div class="login-content">
				<span class="login-name">{{ login_name }}</span>
				<input class="login-input" type="text" v-model="userName">
				<i class="fa fa-user"></i>
				<input class="login-input" :type="inputType" v-model="userPwd" @keyup.enter="loginHandler">
				<i class="fa fa-lock"></i>
				<i :class="[iconName,'fa']" @click="changePwdType"></i>
				<span class="login-forget">忘记密码？</span>
				<span class="login-btn" @click="loginHandler">登 录</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				log_title: '医疗管理后台',
				login_name: '医生登录',
				// 输入框类型
				inputType: 'password',
				// 字体图标名称
				iconName: 'fa-eye',
				// 是否显示密码
				isPwdShow: false,
				userName: '',
				userPwd: ''
			}
		},
		methods: {
			// 页面跳转
			loginHandler: function() {
				if (this.userName && this.userPwd) {

					this.$router.push('/Doctor')
				}
			},
			// 切换密码可见性
			changePwdType: function() {
				this.isPwdShow = !this.isPwdShow
				if (this.isPwdShow) {
					this.inputType = 'text'
					this.iconName = 'fa-eye-slash'
				} else {
					this.inputType = 'password'
					this.iconName = 'fa-eye'
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("./css/font-awesome.min.css");


	html,
	body {
		font-size: 10px;
	}

	body,
	ul,
	li,
	dl,
	dt,
	dd,
	p {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	input {
		border: 1px solid #999;
		outline-style: none;
		text-shadow: none;
		text-indent: 5px;
	}

	.div70 {
		height: 70px;
		width: 100%;
		display: inline-block;
	}

	a {
		text-decoration: none;
	}


	.hello {
		position: relative;
		width: 740px;
		margin: 0 auto;
	}

	.log-title {
		position: absolute;
		margin-top: 100px;
		top: 10px;
		left: 200px;
		z-index: 3;
		color: #fff;
	}

	.login-pic {
		margin-top: 100px;
		position: relative;
		z-index: 2;
	}

	.login-div {
		width: 400px;
		height: 300px;
		position: absolute;
		background-color: rgba(220, 220, 220, 0.8);
		margin-top: 305px;
		top: -150px;
		right: 0;
		z-index: 1;
		border-radius: 4px;
	}

	.login-content {
		position: relative;
		width: 300px;
		height: 200px;
		padding-left: 40px;
		margin: 50px 0 0 100px;
	}

	.login-name {
		color: rgb(49, 192, 229);
		padding-bottom: 5px;
		border-bottom: 2px solid rgb(49, 192, 229);
	}

	.login-forget {
		color: rgb(49, 192, 229);
		font-size: 12px;
		cursor: pointer;
		display: inline-block;
		padding: 15px 0;
	}

	.login-forget:hover {
		text-decoration: underline;
	}

	.login-input {
		margin-top: 15px;
		display: block;
		width: 190px;
		height: 30px;
		border-radius: 16px;
		box-shadow: #999 -1px 4px 5px;
		padding-left: 30px;
	}

	i.fa {
		position: absolute;
		color: #777;
	}

	.fa-user {
		top: 45px;
		left: 50px;
		border-right: 1px solid #777;
		padding-right: 5px;
	}

	.fa-lock {
		top: 93px;
		left: 50px;
		border-right: 1px solid #777;
		padding-right: 5px;
	}

	.fa-eye,
	.fa-eye-slash {
		top: 92px;
		left: 235px;
		cursor: pointer;
	}

	.login-btn {
		background: -webkit-linear-gradient(left, rgb(49, 192, 229), rgb(22, 219, 184));
		/* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(right, rgb(49, 192, 229), rgb(22, 219, 184));
		/* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(right, rgb(49, 192, 229), rgb(22, 219, 184));
		/* Firefox 3.6 - 15 */
		background: linear-gradient(to right, rgb(49, 192, 229), rgb(22, 219, 184));
		/* 标准的语法 */
		margin-top: 15px;
		display: block;
		width: 220px;
		height: 30px;
		border-radius: 16px;
		text-align: center;
		color: #fff;
		cursor: pointer;
		line-height: 30px;
		box-shadow: rgb(49, 192, 229) 2px -1px 5px;
	}
</style>
