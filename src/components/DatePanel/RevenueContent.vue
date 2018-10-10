/** 图片验证码 **/
<template>
  <div class="BasicInput">
    <div class="revenueWrap">
      <div class="one_day_total_revenue each_item_wrap">
				<div class="revenue_item">
					<img  class="revenue-icon home-icon" src="../../assets/revenue/total_venue.png" >
					<div class="revenue_title">过去24小时在线奖励总量（BXC）</div>
				</div>
				<div class="revunue_value">191,708</div>
			</div>
			<div class="one_day_revenue each_item_wrap">
				<div class="revenue_item">
					<img  class="revenue-icon home-icon" src="../../assets/revenue/online_revunue.png" >
					<div class="revenue_title">过去24小时挖矿总量（BXC）</div>
				</div>
				<div class="revunue_value">{{person_account_revenue || 0}} </div>
			</div>
			<div class="one_day_invite_revenue each_item_wrap">
				<div class="revenue_item">
					<img  class="revenue-icon home-icon" src="../../assets/revenue/online_invite.png" >
					<div class="revenue_title">过去24小时邀请奖励（BXC）</div>
				</div>
				<div class="revunue_value">{{person_invite_revenue || 0}} </div>
			</div>
			<div class="total_revenue each_item_wrap">
				<div class="revenue_item">
					<img  class="revenue-icon home-icon" src="../../assets/revenue/person_total_revenue.png" >
					<div class="revenue_title">账号累计收益（BXC）</div>
				</div>
				<div class="revunue_value">{{allRenvue || 0}}</div>
			</div>
  	</div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";

export default {
  name: 'RevenueContent',
  props: {
    allRenvue: '',
    person_invite_revenue: '',
    person_account_revenue: '',
  },
  data() {
    return {

    };
  },
  methods: {
		// ...mapActions(['getAllRevenue', 'getRevenueList']),

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.revenueWrap
  display flex
  justify-content space-between
.revenue_item
  display: flex;
	justify-content center
.revenue-icon
	margin: 0px 8px 0 0;
	width: 12px;
	height: 12px;
	padding-top: 4px;
.revenue_title
	height: 20px;
	line-height: 20px;
	font-size: 12px;
	color: #343739;
.revunue_value
	text-align: left;
	font-family: PingFangSC-Regular;
	font-size: 28px;
	color: #65686A;
	margin: 19px 0 10px 20px
.each_item_wrap
	width: 25%
</style>

