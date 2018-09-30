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
				height="40px"
				prop="content">
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
        date: '2018.08.19',
        content: 'BounsClound 白皮书  点击下载'
      }, {
        date: '2018.08.19',
        content: 'BounsClound 白皮书  点击下载'
      }, {
        date: '2018.08.19',
        content: 'BounsClound 白皮书  点击下载'
      }]
    };
  },
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

	</style>
