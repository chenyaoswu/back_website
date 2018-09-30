<template>
  <div class="home">
    <Layout type="HOME">
      <div class="annouce">
        <div class="title">
          <div>Annoucement</div> 
          <div class="more">more >></div>
        </div>
        <div class="annouce-content"><Annouce /></div> 
      </div>    
      <BonusCode :status="inviteCodeStatus"/>
      <Invite />
      <FAQ />
    </Layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Annouce from '@/components/Home/Annouce.vue';
import BonusCode from '@/components/Home/BonusCode.vue';
import FAQ from '@/components/Home/FAQ.vue';
import Invite from '@/components/Home/Invite.vue';
import { mapState, mapActions, mapMutations } from 'vuex';
import Layout from '@/components/DatePanel/Layout.vue';

export default {
  name: 'home',
  components: {
    Header,
    Annouce,
    BonusCode,
    FAQ,
    Invite,
    Layout
  },
  computed: mapState({
    inviteCodeStatus: state => state.inviteCode.status,
  }),
  data() {
    return {
    };
  },
  created() {
    // 获取邀请码状态
    this.getInviteCodeStatus();
    // 获取用户信息
    this.getUserInfo();

  },
  methods: {
    ...mapActions(["getInviteCodeStatus", "getUserInfo"]),
  }
};
</script>

<style scoped lang="stylus">

</style>

