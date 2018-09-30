<template>
  <div class="home">
		<AccountSetLayout layoutType="HARDLIST" layoutTitile="Hardware List">
			<BasiceLayout title="Hardware List">
				<div class="hardware-content">
					<el-table
						:data="hardList"
						align="left"
						style="width: 100%">
						<el-table-column
							prop="mac_address"
							label="MAC Address"
							width="180">
						</el-table-column>
						<el-table-column
							prop="bcode"
							label="The Binding Date"
							width="180">
						</el-table-column>
						<el-table-column
							prop="address"
							label="Binding Bonus Code"
							width="180">
						</el-table-column>
						<el-table-column
							prop="bind_at"
							label="Total Online Time">
						</el-table-column>
					</el-table>
				</div>
    	</BasiceLayout>	
		</AccountSetLayout>  
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions, mapMutations } from "vuex";
import BasiceLayout from "@/components/common/BasicLayout.vue";
import AccountSetLayout from "@/components/AccountSet/AccountSetLayout.vue";

export default {
  name: "home",
  components: {
    BasiceLayout,
    AccountSetLayout
  },
	computed: mapState({
		hardList: state => state.hardList,
	}),
  methods: {
    ...mapActions(["getHardList"]),
    change() {
      console.log(this.oldPw);
      this.changePw({
        oldPassword: this.oldPw,
        newPassword: this.newPw,
        reNewPassword: this.newSecPw
      });
    }
	},
	created() {
		this.getHardList();
	},
};
</script>

<style scoped lang="stylus">
.hardList-content {
    margin-top: 40px;
}


</style>

