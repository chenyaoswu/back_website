<template>
  <div class="bonus-list">
			<span class="title">{{ $t('title') }}</span>
      <el-table
        empty-text="No BCode"
        :data="codeList || []"
        height="410px"
        style="width: 100%">
        <el-table-column
          class="bcode-list"
          prop="bcode"
          :label="totalText">
        </el-table-column>
      </el-table>
      <!-- <div class="down-list" v-if="codeList.length > 8" @click="scroll"><i class="el-icon-caret-bottom"></i></div> -->
  </div>
</template>

<script>
export default {
  name: "CodeList",
  data() {
    return {
      totalText: "Total BCode:",
      showList: []
    };
  },
  props: {
    codeList: ""
  },
  methods: {
    scroll() {
      console.log(11)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.bonus-list .bcode-list {
  font-size: 14px;
}

.bonus-list .title {
  font-size: 14px;
  color: #96999B;
  line-height: 14px;
  display: inline-block;
  padding-left: 10px;
}

.bonus-list {
  border-left: 1px solid #E7EAEC;
  margin-left: 20px;
  padding-left: 20px;
  text-align: left;
}

.down-list
  border-top: 1px solid #eaeefb;
  height: 44px;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  margin-top: -1px;
  color: #d3dce6;
  cursor: pointer;
  position: relative;

.down-list i 
  line-height: 43px
</style>

<i18n>
{
  "en": {
    "title": "The valid BonusCode for the current account binding:"
  },
  "zn": {
    "title": "当前账号绑定的有效BonusCode:"
  }
}
</i18n>
