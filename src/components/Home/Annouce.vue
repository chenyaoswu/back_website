<template>
  <!-- <div class=" annouce-content"> -->
  	<div class="Annouce">
		<el-table
			max-height="150"
			:data="tableData"
			style="width: 100%">
				<el-table-column
				class-name="data"
				prop="date"
				height="40px"
				width="90px">
				</el-table-column>
				<el-table-column
					class-name="detail-more"
					height="40px">
					<template slot-scope="scope">
						<a  target="_blank" :href="scope.row.link" >
							<span >{{scope.row.content}}</span>
						</a>
					</template>
				</el-table-column>
			</el-table>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "Annouce",
	data() {
    return {
      //	输入错误信息时提示
      tableData: [{
        date: '2018.10.10',
				content: 'BonusCloud 白皮书',
				link: 'https://bonuscloud.gitbook.io/help/bonuscloud-bai-pi-shu-v1.0'
      }, {
        date: '2018.10.10',
				content: 'BonusCloud Lite节点接入教程',
				link: 'http://www.right.com.cn/forum/forum-183-1.html',
      }, {
        date: '2018.10.10',
				content: 'Lite 节点设备支持列表',
				link: 'https://bonuscloud.gitbook.io/help/lite-jie-dian-she-bei-zhi-chi-lie-biao',				
      }]
    };
	},
	methods: {
		// redirectTo(res) {
		// 	console.log('跳转' + res);
		// 	this.$router.push('/demo')  //将你的跳转写在这里。
		// },
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="stylus">
.annouce .el-table__header-wrapper
	display: none
.annouce .el-table th
	padding: 5px 0
	font-sice: 12px
.el-table .el-table__body td 
	font-sice: 12px
.annouce  td
	padding: 5px 0
.detail-more .cell
	text-align: left
.annouce-content .data{
  font-size: 14px;
	color: #96999B;
  line-height: 23px;
}
.annouce-content .cell{
	font-size: 12px
}
.annouce-content .data .cell{
  text-align: left;
	font-size: 12px
}
a
	color: #96999b;
</style>
