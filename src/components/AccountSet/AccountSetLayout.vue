<template>
  <div class="account-set-layout">
		<Header type='home-header' />
    <el-row class="tac">
      <el-col :span="4">
        <h5 class="panel-wrap">{{$t('account_set_menu')}}</h5>
        <el-menu
          class="bonus-menu"
          background-color="#0A0E22"
          text-color="#989AA2"
          active-text-color="#fff"
          @select="handleOpen"
					router="router">
          <el-menu-item index="1" route="/accountSet" class="home-page-wrap" v-bind:class="{ isActive: changeActive }">
						<img  class="menu-icon home-icon" src="../../assets/accountSet/account-set.png" >
						<span slot="title">{{$t('account_set_1')}}</span>
          </el-menu-item>
           <el-menu-item index="2" route="/hardList" v-bind:class="{ isActive: !changeActive }">
							<img  class="menu-icon home-icon" src="../../assets/accountSet/hard-list.png">
							<span slot="title">{{$t('account_set_2')}}</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <img  class="menu-icon home-icon" src="../../assets/accountSet/wallet-bind.png">
            <span slot="title">{{$t('account_set_3')}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" class="bonus-content">
        <div class="title">{{layoutTitile}}</div>
				<slot></slot>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "AccountSetLayout",
  components: {
    Header
  },
  props: {
    layoutType: "",
    layoutTitile: ""
  },
  data() {
    return {
      changeActive: true
    };
  },
  methods: {
    handleOpen(index) {
      this.changeActive = index === 1;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.isActive, .el-menu-item.is-active {
  background-color: #032031;
  border-left: 3px solid #11B6BD;
  color: #fff !important;
}

.account-set-layout, .tac {
  height: 100%;
}
</style>
