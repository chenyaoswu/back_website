/** 登陆框组件 **/
<template>
  <div class="BasicInput">
    <div class="icon-wrap">
      <div  v-bind:class="iconType" class="icon"></div>
    </div>
    <input
      class="basic-input"
      v-bind:placeholder="placeValue"
      v-bind:type="type"
      v-bind:value="value"
      v-on:change="$emit('change', $event.target.value)"
      />
    <div v-if="sendStatus" class="send-code" v-on:click="sendCode">Send verification code</div>
    <div v-if="!sendStatus" class="send-code">{{ count }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Message } from "element-ui";

export default {
  name: "SendEmailCode",
  props: {
    iconType: '', // icon图地址
    defaultValue: '',
    placeValue: '', // input placehoder
    type: '', // input类型,
    value: '',
    imageCodeSrc: '', //图片验证码地址,

    email: '', //邮箱地址
    needImageCode: false,
    imageCode: '', // 图片验证码
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data() {
    return {
      inputValue: this.value,
      sendStatus: true, // 验证码点击状态
      TIME_COUNT: 60, //倒计时时间
      count: '', // 计数
      timer: null // 记录循环
    };
  },
  methods: {
    ...mapActions(["sendEmailCode"]),
    sendCode() {
      const emailRule = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
      if (!this.email || !emailRule.test(this.email)) {
        Message("email error");
        return;
      }

      if (this.needImageCode && !this.imageCode) {
        Message("please input Image Verfication Code");
        return;
      }

      // 倒计时
      this.startCountBack();

      let sendStatus = this.sendEmailCode({
        email: this.email,
        captcha: this.imageCode
      }).then(res => {
        try {
          let { step, status } = res.ret;
          if (status === "failed") {
            this.sendStatus = true;
            Message(step + "is error");
          } 
        } catch (error) {
          let message = eriror.message || 'network error';
          Message(message);
        }
      });
    },
    startCountBack() {
      this.sendStatus = false; //倒计时
      const TIME_COUNT = this.TIME_COUNT;
      this.count = TIME_COUNT;

      this.timer = setInterval(() => {
        if (this.count > 0 && this.count <= TIME_COUNT) {
          this.count--;
        } else {
          this.show = true;
          clearInterval(this.timer);
          this.timer = null;
          this.sendStatus = true;
        }
      }, 1000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.BasicInput {
	height: 30px;
	display: flex;
	position: relative;
}

.icon-wrap {
	box-sizing: border-box;
	height: 30px;
	width: 30px;
	background: #F1F2F2;
	border: 1px solid #D2D5D6;
	border-right: 0px;
	background-size: 30px 30px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.icon {
	width: 10px;
	height: 10px;
	background-size: contain;
}

input.basic-input {
	height: 30px;
	-webkit-appearance: none;
	background-color: #fff;
	background-image: none;
	border: 1px solid #dcdfe6;
	box-sizing: border-box;
	color: #C7CACC;
	display: inline-block;
	font-size: inherit;
	height: 30px;
	line-height: 30px;
	outline: none;
	padding: 0 10px;
	transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
	width: 100%;
	font-size: 10px;
}

.emailCode {
	background-image: url('../assets/account/emailCode.png');
}

.send-code {
	font-family: PingFangSC-Regular;
	font-size: 10px;
	color: #13B8BC;
	text-align: right;
	position: absolute;
	right: 5px;
	line-height: 30px;
}
</style>

