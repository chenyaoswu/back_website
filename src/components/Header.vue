<template>
  <div class="header"  v-bind:class="type">
    <el-row class="header-panel">
      <el-col :span="4"><div class="grid-content bg-purple">
        <img  class="header-logo " alt="header-logo" src="../assets/bonus-logo.png" >
        <div class="line"></div>
      </div></el-col>
      <el-col :span="20" class="header-login-panel"  v-if="type !== 'login-header'">
        <router-link to="/">
          <div  class="header-date-panel header-each-tab">
            <img  class="menu-icon home-icon" src="../assets/home/data-panel-login.png" >            
            Date Panel
          </div>
        </router-link>
        <router-link to="/accountSet">
          <div class="account-settings header-each-tab">
            <img  class="menu-icon home-icon" src="../assets/home/account-setting.png" >            
            Account Settings
          </div>
        </router-link>
        <div class="header-email header-each-tab">{{email}}</div>
        <div class="header-logout header-each-tab" @click="clickLogout">Logout</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// import { Table, elRow } from 'element-ui';
// import { Layout, elRow } from 'element-ui';

export default {
  name: 'Header',
  components: {
    // Table,
    // elRow,
    // Layout,
    // elRow,
  },
  props: {
    type: ''
  },
  computed: mapState({
    email: state => state.account.email,
  }),
  methods: {
    ...mapActions(['logout']),
    clickLogout() {
      this.logout();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.header
    font-size: 18px
    background: #171E22
    width: 100%
    height: 62px
    position: relative
    display: flex
.header-logo
    width: 130px
    height:  23.5px
    margin: 19px 25px
.login-header
  background: #000519;
.home-header
  background: #000519;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.10);
.line
    border-bottom: 1px solid #979797
    opacity: 0.3
    width: 100%
    top: 62px
    position: absolute
.header-each-tab
  height: 62px;
  line-height: 62px;
  font-size: 14px;
  color: #FFFFFF;
  line-height: 62px;
  margin-left: 30px
.header-panel
  width: 100%
  text-align: left
.header-login-panel 
  display: flex
  position: relative
.account-settings
  margin-left: 50px
.header-logout
  position: absolute
  right: 30px;
.header-email 
  position: absolute
  right: 100px
  padding-left: 1px solid #E7EAEC
</style>
