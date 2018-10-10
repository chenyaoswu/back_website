<template>
  <div class="home">
		<AccountSetLayout layoutType="HARDLIST" layoutTitile="Hardware List">
			<BasiceLayout title="Hardware List">
				<div class="hardware-content">
					<el-table
						:data="hardList"
						align="left"
						empty-text="暂无硬件"
						style="width: 100%">
						<el-table-column
							prop="mac_address"
							label="MAC Address">
						</el-table-column>
						<el-table-column
							prop="bind_at"
							label="The Binding Date">
						</el-table-column>
						<el-table-column
							prop="bcode"
							label="Binding Bonus Code">
						</el-table-column>
						<!-- <el-table-column
							prop=""
							label="Total Online Time"> -->
						<!-- </el-table-column> -->
							<el-table-column
							label="">
							<template slot-scope="scope">
								<div 
									type="danger"
									 @click="checkUnBind(scope.row.id)" 
									 :deviceId="scope.row.id"
									 class="unbind-button">解绑</div>
							</template>
						</el-table-column>
					</el-table>
				</div>
    	</BasiceLayout>	
			<!-- <UnBindDialog v-if="showUnbindDialog" :id="unbindId"></UnBindDialog> -->
		</AccountSetLayout>  
		<el-dialog
			title="Confirm Unbinding"
			:visible.sync="showUnbindDialog"
			width="480px"
			center>
			<div class="unbind-dialog-wrap">
				<span class="key">Image Verfication Code</span>
				<ImageCode
					imageStyle="unbind-style"
					type="text"
					v-model="inputImageCode"
					class="unbind-input forget-code"></ImageCode>
			</div>
			<div class="unbind-dialog-wrap">
				<span  class="key">Email Verfication Code</span>
				<SendEmailCode
					type="text"
					imageStyle="unbind-style"
					class="unbind-input password-email"
					v-model="inputEmailCode"
					needImageCode=true
					:imageCode="inputImageCode"
					:email="email"
					@emailCodeTip="emailCodeTip"></SendEmailCode>
			</div>
			<span slot="footer" class="dialog-footer">
				<div class="sure-unbind button" @click="showUnbindDialog = false">取 消</div>
				<div class="sure-unbind button" type="primary" @click="unbind">确 定</div>
			</span>
		</el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions, mapMutations } from "vuex";
import BasiceLayout from "@/components/common/BasicLayout.vue";
import AccountSetLayout from "@/components/AccountSet/AccountSetLayout.vue";
// import UnBindDialog from "@/components/AccountSet/HardList/UnBindDialog.vue";
import ImageCode from "@/components/ImageCode.vue";
import SendEmailCode from "@/components/SendEmailCode.vue";
import moment from "moment";

export default {
  name: "home",
  components: {
    BasiceLayout,
    AccountSetLayout,
    ImageCode,
    SendEmailCode
  },
  data() {
    return {
      unbindId: "", //解绑Id
      showUnbindDialog: false, // 绑定弹框展示
      inputEmailCode: "", //输入的邮件码
      inputImageCode: "" // 图片验证码
    };
  },
  computed: mapState({
    hardList(state) {
      if (state.hardList.length > 0) {
        let hardList = state.hardList;
        hardList.map(val => {
          val.bind_at = moment().format("YYYY.MM.DD");
        });
        return hardList;
      } else {
        return [];
      }
    },
    // 验证码地址
    // imageCodeSrc: state => state.signUp.imageCodeSrc,
    email: state => state.account.email
  }),
  methods: {
    ...mapActions(["getHardList", "unbindHard"]),
    change() {
      console.log(this.oldPw);
      this.changePw({
        oldPassword: this.oldPw,
        newPassword: this.newPw,
        reNewPassword: this.newSecPw
      });
    },
    checkUnBind(id) {
      this.showUnbindDialog = true;
      this.unbindId = id;
      console.log(id);
    },
    emailCodeTip(tip) {
      console.log(tip);
    },
    unbind() {
      this.unbindHard({
        deviceId: this.unbindId,
        emailVerifyCode: this.inputEmailCode
      }).then(res => {
        if (res.message === 'unbind success') {
          Message({
            type: "success",
            message: "解绑成功"
          });
        } else {
          Message({
            type: "error",
            message: "解绑失败"
          });
        }
        console.log(res);
      });
    }
  },

  created() {
    this.getHardList();
  }
};
</script>

<style lang="stylus">
.hardList-content {
	margin-top: 40px;
}

.unbind-button {
	background: #f56c6c;
	font-family: PingFangSC-Regular;
	font-size: 14px;
	color: #fff;
	text-align: center;
	line-height: 30px;
	width: 90px;
	height: 35px;
}

.unbind-dialog-wrap .key {
	font-family: PingFangSC-Regular;
	font-size: 12px;
	color: #343739;
	text-align: left;
	line-height: 42px;
	display: inline-block;
	width: 250px;
}

.unbind-dialog-wrap {
	display: flex;
	height: 42px;
	margin-bottom: 20px;
}

.unbind-input {
	width: 100%;
}

.unbind-dialog-wrap input.basic-input {
	height: 42px;
}

.button {
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
	height: 35px;
	line-height: 35px;
	margin-left: 20px;
}
</style>

