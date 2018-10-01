<template>
	<div class="date-panel-layout">
		<Header type='home-header' />
    <el-row class="tac">
      <el-col :span="4">
        <h5 class="panel-wrap">Date Panel</h5>
        <el-menu
          class="bonus-menu"
          background-color="#0A0E22"
          text-color="#989AA2"
          active-text-color="#fff"
					router="router">
          <el-menu-item index="0"  route="/" class="home-page-wrap">
            <img  class="menu-icon home-icon" src="../../assets/homeIcon.png" >
            <span slot="title">Home Page</span>
          </el-menu-item>
          <el-submenu index="1" route="/revenue">
            <template slot="title">
              <img  class="menu-icon home-icon" src="../../assets/revenue.png" >
              <span>Revenue Online</span>
            </template>
            <el-menu-item-group :span="3" >
              <el-menu-item index="1-1" route="/revenue">Revenue</el-menu-item>
              <el-menu-item index="1-2" disabled>Contribution</el-menu-item>
              <el-menu-item index="1-3" disabled>Withdriawal</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2" disabled>
             <template slot="title">
              <img  class="menu-icon home-icon" src="../../assets/revenue.png" >
              <span slot="title" disabled>Task Revenue</span>
            </template>
             <el-menu-item-group :span="3" disabled>
              <!-- <el-menu-item index="2-1" disabled>Revenue</el-menu-item> -->
              <!-- <el-menu-item index="2-2" disabled>Get Task</el-menu-item> -->
              <!-- <el-menu-item index="2-3" disabled>Implementation</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3" disabled>
             <template slot="title">
              <img  class="menu-icon home-icon" src="../../assets/home/task.png" >
              <span slot="title" disabled>Power Analysis</span>
            </template>
             <el-menu-item-group :span="3" disabled>
              <!-- <el-menu-item index="2-1" disabled>Revenue</el-menu-item> -->
              <!-- <el-menu-item index="2-2" disabled>Get Task</el-menu-item> -->
              <!-- <el-menu-item index="2-3" disabled>Implementation</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>
          <!-- <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i> 
            <span slot="title">Power Analysis</span>
          </el-menu-item> -->
          <el-menu-item index="4" disabled>
            <img  class="menu-icon home-icon" src="../../assets/revenue.png" >
            <span slot="title">Network Contribution</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" class="bonus-content">
        <div class="title">Home Page</div>
				<slot></slot>
      </el-col>
    </el-row>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: "DatePanelLayout",
  props: {
    type: '',
	},
	components: {
    Header,
  },
};
</script>

<style lang="stylus">
.content-wrap
  display: flex;
  justify-content: flex-start;
.menu-detail
  width: 168px;
.panel-wrap 
  padding-left: 25px
  text-align: left
  height: 40px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  line-height: 40px;
  opacity: 0.5;
  background: #0A0F22;
  line-height: 40px;
  color: #fff;
.home-panel
  height: 45px
  line-height: 45px
  background: #032031
  position: relative
.home-panel-border
  position: absolute
  left: 0
  top: 0
  position: absolute;
  left: 0;
  top: 0;
  background-image: linear-gradient(-180deg, #15BCAD 2%, #10B2CB 100%);
  width: 4px;
  height: 100%;
.home-panel-text 
  padding: 0 20px;
  color: #fff
  font-size: 12px;
  line-height: 45px;
  display: flex;
  vertical-align: middle;
.home-icon
  display: inline-block;
  margin-top: 15px;
  width: 15px
  height: 15px
.menu-panel
  width: 168px;
  background: #000519;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.10);
.bonus-menu .el-menu-item
  height: 45px
  line-height: 45px
  font-size: 12px
  text-align: left
.bonus-menu  .el-submenu__title 
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    text-align: left
.detail-wrap
  width: 100%;
.el-alert__title {
    font-size: 10px;
}
.home .el-menu
  border-right : 0px;
.menu-icon
  margin: -2px 8px 0 0;
  width: 12px;
  height: 12px;
  padding-top: 2px;
.home-page-wrap
  background-color: #032031;
  border-left: 3px solid #11B6BD
  color: #fff!important;
.bonus-content
  background: #F6F6F7;
  height: 100%
  padding: 0 35px 35px;
.bonus-content
  font-family: PingFangSC-Medium;
.bonus-content  .title
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #65686A;;
  line-height: 35px;
  text-align: left
.annouce 
  background: #FFFFFF;
  border: 1px solid #E3E3E7;
  position: relative
.annouce .more
  font-size: 10px;
  color: #999B98;
  text-align: right;
  line-height: 40px;
  position: absolute
  right: 30px
  top: 0
.annouce .title 
  padding: 0 30px
  font-size: 14px;
  color: #343739;
  line-height: 40px;
  border-bottom: 1px solid #E7EAEC;
.bonus-menu .el-submenu .el-menu-item
  min-width: 20px;
.annouce-content {
  margin: 0 23px
}
</style>
