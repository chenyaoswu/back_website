<template>
  <div class="bonus-list">
	
			<span class="title">当前账号绑定的有效Bonus Code：</span>
      <el-table
        empty-text="暂无Code"
        :data="codeList || []"
        max-height="220"
        style="width: 100%">
        <el-table-column
          class="bcode-list"
          prop="bcode"
          label="Bonus Code">
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  name: "CodeList",
  props: {
    codeList: ''
  },
  watch: {
    computed: {
      showList: () => {
        return this.codeList || [];
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.bonus-list .bcode-list
  font-size: 12px;
.bonus-list .title{
  font-size: 14px;
  color: #96999B;
  line-height: 14px;
  display: inline-block
  padding-left: 10px
}
.bonus-list 
  border-left: 1px solid #E7EAEC;
  margin-left: 20px;
  padding-left: 20px;
  text-align: left;

</style>
