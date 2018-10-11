/** 收益页 **/
<template>
  <div class="home">
    <Layout type="REVENUE" isRevenue="true">
      <RevenueData :allRenvue="allRenvue" :person_invite_revenue="inviteRevenue" :person_account_revenue="accountRevenue">
      </RevenueData>
      <FAQ />
    </Layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Layout from "@/components/DatePanel/Layout.vue";
import RevenueData from "@/components/DatePanel/RevenueData.vue";
import FAQ from "@/components/Revenue/FAQ.vue";
import RevenueContent from "@/components/DatePanel/RevenueContent.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "home",
  data() {
    return {
      person_invite_revenue: "",
      person_account_revenue: "",
      // REVENUE_FAQ: [
      //   {
      //     question: '大概能获得多少收益？',
      //     anwser: 'UTC时间每小时区块会产出 79,908 个BxC，按照节点的在线情况全部分发给所有在网节点，单个节点的收益取决于在网稳定情况及当前全网的节点总量。',
      //   },{
      //     question: '奖励总额',
      //     anwser: '奖励总额：7,000,000,000 * 40% = 2,800,000,000 BxC;  奖励结算周期：UTC时间 60分钟; UTC时间 每小时奖励总额为：Total（RT） = 79,908 BxC',
      //   },{
      //     question: '网络任务收益计算方式',
      //     anwser: '奖励总额：7,000,000,000 * 40% = 2,800,000,000 BxC;  奖励结算周期：UTC时间 60分钟; UTC时间 每小时奖励总额为：Total（RT） = 79,908 BxC',
      //   },
      //  ]
    };
  },
  components: {
    Header,
    Layout,
    RevenueData,
    FAQ,
    RevenueContent
  },
  computed: mapState({
    //  箭头函数可使代码更简练
    inviteRevenue: state => state.revenue.inviteRevenue,
    accountRevenue: state => state.revenue.accountRevenue,
    allRenvue: state => state.revenue.allRenvue,
    // REVENVE_FAQ: function () {
		// 	// `this` 指向 vm 实例
		// 	let REVENVE_FAQ = Object.values(this.$t('REVENVE_FAQ'));
    //   return REVENVE_FAQ;
    // }
  }),
  methods: {
    ...mapActions(["getAllRevenue", "getRevenueList"])
  },
  created() {
    let start = new Date().getTime();
    let end = start - 24 * 60 * 60;

    this.getAllRevenue({ type: "all" });
    this.getAllRevenue({ type: "refer", start, end });
    this.getAllRevenue({ type: "account" });
  }
};
</script>

<style  lang="stylus">

.data-panel-wrap, .data-panel-layout, .home
  height: 100%
.revenue-all-layout {
  height: 100%
}
</style>
