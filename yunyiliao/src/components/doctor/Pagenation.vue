<template>
	<!-- 页码插件封装 -->
	<div class="page" v-show="show">
		<div class="pagelist">
			<span class="controlPage noSelect fa fa-angle-left" :class="{disabled:pstart}" @click="lastPage()"></span>
			<span v-show="current_page>5" class="jump" @click="jumpPage(1)">1</span>
			<span class="ellipsis" v-show="efont">...</span>
			<span class="jump" v-for="num in indexs" :class="{bgprimary:current_page==num}" @click="jumpPage(num)">{{num}}</span>
			<span class="ellipsis" v-show="ebehind">...</span>

			<span v-show="current_page<pages-4" class="jump" @click="jumpPage(pages)">{{pages}}</span>
			<span class="controlPage noSelect fa fa-angle-right" :class="{disabled:pend}" @click="nextPage()"></span>


			<span class="jumppoint noSelect">到</span>
			<span class="jumpinp"><input type="text" v-model="changePage"></span>
			<span class="noSelect">页</span>
			<!-- <span class="gobtn noSelect" :class="{disabled:gotart}" @click="jumpPage(changePage)">GO</span> -->
			<button class="gobtn noSelect" :class="{disabled:gotart}" :disabled="!changePage" @click="jumpPage(changePage)">GO</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'myPatient',
		data() {
			return {
				current_page: 1, // 当前页
				pages: 10, //总页数
				changePage: '', //跳转页
				nowIndex: 0
			}
		},
		computed: {
			gotart: function() {
				return !this.changePage;
			},
			show: function() {
				return this.pages && this.pages != 1;
			},
			pstart: function() {
				return this.current_page == 1;
			},
			pend: function() {
				return this.current_page == this.pages;
			},
			efont: function() {
				if (this.pages <= 7) {
					return false;
				}
				return this.current_page > 5;
			},
			ebehind: function() {
				if (this.pages <= 7) {
					return false;
				}
				var nowAy = this.indexs;
				return nowAy[nowAy.length - 1] != this.pages;
			},
			indexs: function() {
				var left = 1,
					right = this.pages,
					ar = [];
				if (this.pages >= 7) {
					if (this.current_page > 5 && this.current_page < this.pages - 4) {
						left = Number(this.current_page) - 3; // 当前页左边几个数字
						right = Number(this.current_page) + 3; // 当前页右边几个数字
					} else {
						if (this.current_page <= 5) {
							left = 1;
							right = 7;
						} else {
							right = this.pages;

							left = this.pages - 6;
						}
					}
				}
				while (left <= right) {
					ar.push(left);
					left++;
				}
				return ar;
			},
		},
		methods: {
			jumpPage: function(id) {
				this.current_page = id;
			},
			lastPage: function() {
				this.current_page--;
				this.changePage = "";
				// 数据处理

			},
			nextPage: function() {
				this.current_page++;
				this.changePage = "";
				// 数据处理

			}
		}
	}
</script>

<style>
	/* 引入外部样式文件 */
	@import url("../css/pagenation.css");
</style>
