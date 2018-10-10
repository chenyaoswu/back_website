<template>
  <!-- <div class=" annouce-content"> -->
	<div class="BonusCode">
		<BasiceLayout title="Bonus Code" class="bonus-code-layout"> 
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">
          <el-alert
            :closable="false"
            title="当前BounsClound处于测试网络阶段，需要使用BonusCode激活设备，每个BonusCode仅可以激活一台设备节点奖励权限。"
            type="error"
            center>
          </el-alert>
          <div class="active-wrap">
            <span>本时段激活码领取：</span>
            <div v-bind:class="{ noActive: !inviteStatus }"  v-on:click="clickInviteCode" class="get-invite">立即领取</div>
          </div>
          <div class="count-time">
            <span class="key">下一时段激活码领取倒计时：</span>
            <span class="minute">{{timeMinutes}}</span>
            <span class="seconds">{{timeSeconds}}</span>
          </div>
        </div></el-col>
        <el-col :span="12">
          <CodeList :codeList="codeList"></CodeList>
        </el-col>
      </el-row>
    </BasiceLayout>
  </div>
  <!-- </div> -->
</template>

<script>
import BasiceLayout from "@/components/common/BasicLayout.vue";
import CodeList from "@/components/Home/CodeList.vue";
import { mapState, mapActions } from "vuex";
import { Message } from "element-ui";

export default {
  name: "BonusCode",
  props: {
    status: ""
  },
  components: {
    BasiceLayout,
    CodeList
  },
  data() {
    return {
      timeMinutes: "", // 倒计时分钟数
      timeSeconds: "" // 倒计时秒数
    };
  },
  computed: mapState({
    // 验证码地址
    inviteStatus: state => state.inviteCode.status,
    codeList: state => state.inviteCode.codeList,
  }),
  mounted() {
    this.countTime();
    this.getAbleList();
  },
  methods: {
    ...mapActions(['getInviteCode', 'getAbleList']),
    // 倒计时计算：按照当前时间计算该小时剩余分钟
    countTime() {
      let EACH_HOUR_SECONDS = 60 * 60;
      let thisTime = new Date();
      let minutes = thisTime.getUTCMinutes();
      let seconds = thisTime.getUTCSeconds();
      let leftSeconds = EACH_HOUR_SECONDS - (minutes * 60 + seconds);

      setInterval(() => {
        if (leftSeconds > 0) {
          this.timeMinutes = Math.floor(leftSeconds / 60);
          this.timeSeconds = leftSeconds - this.timeMinutes * 60;
          --leftSeconds;
        } else {
          leftSeconds = 3600;
          --leftSeconds;
        }
      }, 1000);
    },
    // 领取 邀请码
    clickInviteCode() {
      if (this.inviteStatus) {
        console.log('领取邀请码');
        this.getInviteCode().then((res) => {
          try {
            if (res.message === 'getSuccess') {
              Message({
                type: 'success',
                message: '领取成功',
              });
              this.getAbleList();
            } else {
              Message('领取失败');
            }
          } catch (error) {
            console.log(error);
            Message('领取失败');
          }
        });
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style   lang="stylus">
.bonus-code-layout {
  margin-top: 20px;
  font-size: 12px;
}

.active-wrap {
  color: #343739;
  line-height: 12px;
  text-align: left;
  margin-top: 40px;
  font-size: 14px;
  margin-left: 20px;
}

.get-invite {
  line-height: 40px;
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(2%, #15bcad), to(#10b2cb));
  background-image: linear-gradient(-180deg, #15bcad 2%, #10b2cb 100%);
  font-size: 14px;
  color: #fff;
  text-align: center;
  line-height: 18px;
  border-radius: 0;
  border: 0;
  display: inline-block;
  width: 90px;
  height: 30px;
  line-height: 30px;
  margin-left: 20px;
}

.count-time .key {
  font-size: 14px;
  color: #96999B;
  line-height: 36px;
}

.count-time {
  text-align: left;
  margin-top: 40px;
  margin-left: 20px;
}

.minute, .seconds {
  display: inline-block;
  background: #FFFFFF;
  border: 1px solid #E7EAEC;
  border-radius: 2px;
  font-size: 16px;
  color: #65686A;
  text-align: center;
  line-height: 18px;
  padding: 5px;
  margin-left: 10px;
}
.noActive{
  background: #D0D0D0;
}
</style>
