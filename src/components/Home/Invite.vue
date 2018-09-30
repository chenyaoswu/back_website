<template>
  <!-- <div class=" annouce-content"> -->
	<div class="BonusCode">
		<BasiceLayout title="Invite" class="bonus-code-layout"> 
      <span>您的邀请链接：</span>
    </BasiceLayout>
  </div>
  <!-- </div> -->
</template>

<script>
import BasiceLayout from '@/components/common/BasicLayout.vue';


export default {
  name: "Invite",
  components: {
    BasiceLayout,
  },
  data() {
    return {
      //	输入错误信息时提示
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scopes lang="stylus">
.bonus-code-layout 
  margin-top: 20px
</style>
