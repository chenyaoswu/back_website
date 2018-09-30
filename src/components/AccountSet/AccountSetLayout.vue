<template>
  <div class="account-set-layout">
		<Header type='account-header' />
    <el-row class="tac">
      <el-col :span="4">
        <h5 class="panel-wrap">Account Settings</h5>
        <el-menu
          class="bonus-menu"
          background-color="#0A0E22"
          text-color="#989AA2"
          active-text-color="#fff"
					router="router">
          <el-menu-item index="1" route="/accountSet" class="home-page-wrap">
						<img  class="menu-icon home-icon" src="../../assets/accountSet/account-set.png" >
						<span slot="title">Change Password</span>
          </el-menu-item>
           <el-menu-item index="2" route="/hardList">
							<img  class="menu-icon home-icon" src="../../assets/accountSet/hard-list.png">
							<span slot="title">Hardware List</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <img  class="menu-icon home-icon" src="../../assets/accountSet/wallet-bind.png">
            <span slot="title">Wallet Binds</span>
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
import Header from '@/components/Header.vue';

export default {
	name: "AccountSetLayout",
	components: {
		Header,
	},
  props: {
		layoutType: '',
		layoutTitile: ''
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
