/** 收益页 **/
<template>
  <div class="home">
    <Layout type="REVENUE">
      <RevenueData :allRenvue="allRenvue" :person_invite_revenue="person_invite_revenue" :person_account_revenue="person_account_revenue">
      </RevenueData>
      <FAQ></FAQ>
    </Layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Layout from '@/components/DatePanel/Layout.vue';
import RevenueData from '@/components/DatePanel/RevenueData.vue';
import FAQ from '@/components/DatePanel/FAQ.vue';
import RevenueContent from '@/components/DatePanel/RevenueContent.vue';
import { mapActions, mapState } from "vuex";

export default {
  name: 'home',
  data() {
    return {
      person_invite_revenue: '',
      person_account_revenue: '', 
    }
  },
  components: {
    Header,
    Layout,
    RevenueData,
    FAQ,
    RevenueContent,
  },
  computed: mapState({
    //  箭头函数可使代码更简练
    inviteRevenue: state => state.revenue.inviteRevenue,
    accountRevenue: state => state.revenue.accountRevenue,
    allRenvue: state => state.revenue.allRenvue,
  }),
  methods: {
    ...mapActions(['getAllRevenue', 'getRevenueList']),
  },
  created() {
    this.getAllRevenue('all');
    this.getRevenueList('refer');
    this.getRevenueList('account');
  },
  watch: {
    inviteRevenue: function (val) {
      let {inviteRevenue} = this;
      let person_account_revenue = 0;
      if (inviteRevenue.length) {
        inviteRevenue.map(val => {
          person_account_revenue += val.revenue;
        });
      }

      this.person_account_revenue = person_account_revenue;
    },
    accountRevenue: function (val) {
      let {accountRevenue} = this;
      let person_invite_revenue = 0;
      if (accountRevenue.length) {
        accountRevenue.map(() => {
          person_invite_revenue += val.revenue;
        });
      }
      this.person_invite_revenue = person_invite_revenue;
    }
  }
};

</script>

<style lang="stylus" scoped>

</style>

