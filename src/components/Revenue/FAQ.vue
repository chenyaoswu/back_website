  <template>
	<div class="FAQ">
		<BasiceLayout title="FAQ" class="bonus-code-layout"> 
      <div class="qa-item">
        <div class="question">
          <span class="faq-icon">Q</span>
          <div class="faq-tip-background">
            <div class="tipIcon"></div>
            <div class="tipContent">我能获得多少收益？</div>
          </div>
        </div>
        <div class="anwser">
          <span class="faq-icon anwser-icon">A</span>
          <div class="faq-tip-background">
            <div class="tipContent anwserContent">UTC时间每小时区块会产出 79,908 个BxC，按照节点的在线情况全部分发给所有在网节点，单个节点的收益取决于在网稳定情况及当前全网的节点总量。</div>
          </div>
        </div>
      </div>

			<div class="qa-item">
        <div class="question">
          <span class="faq-icon">Q</span>
          <div class="faq-tip-background">
            <div class="tipIcon"></div>
            <div class="tipContent">奖励总额是多少？</div>
          </div>
        </div>
        <div class="anwser">
          <span class="faq-icon anwser-icon">A</span>
          <div class="faq-tip-background">
            <div class="tipContent anwserContent">
							<div><li>奖励总额：7,000,000,000 * 40% = 2,800,000,000 BxC</li></div>
							<div><li>奖励结算周期：UTC时间 60分钟</li></div>
							<div><li>UTC时间 每小时奖励总额为：Total（RT） = 79,908 BxC</li></div>
							</div>
          </div>
        </div>
      </div>
			
			<div class="qa-item">
        <div class="question">
          <span class="faq-icon">Q</span>
          <div class="faq-tip-background">
            <div class="tipIcon"></div>
            <div class="tipContent">网络任务收益计算方式是？</div>
          </div>
        </div>
        <div class="anwser">
          <span class="faq-icon anwser-icon">A</span>
          <div class="faq-tip-background">
            <div class="tipContent anwserContent">
							<div><li>某台在网设备的贡献度<span class="bold"> P =（在线稳定贡献度Po+任务贡献度Pw）* α。</span></li></div>
							<div><li>设用户为 x ，拥有 n 台设备，全网共有 m 个用户，则用户 x 的账户贡献度 Px = P1+P2+P3+......+Pn，全网用户的总贡献度PT = Px1+Px2+Px3+......+Pxm</li></div>
							<div><li>所以 UTC 时间每小时内用户 x 的收益 Rx = （Px / PT）* RT *（100%-1%）（每笔交易收取1%的平台技术服务费用）</li></div>
							<div class="about-center">其中:</div>
							<div><li>Po=单台设备在线分钟数*Ko，Ko为在线稳定性权重系（当前 Ko = 1）</li></div>
							<div><li>Pw=单台设备任务分钟数*Kw，Kw为任务权重系数(网络任务下 Kw = 9，计算任务会增加CPU、存储等权重）</li></div>
							<div><li>α 是由哈希计算得出，分布于 0.95-1.05 之间的挖矿因子，期望为1</li></div>
							<div><li>RT = 79,908</li></div>
						</div>
          </div>
        </div>
      </div>
    </BasiceLayout>
  </div>
  <!-- </div> -->
</template>

<script>
import BasiceLayout from "@/components/common/BasicLayout.vue";

export default {
  name: "FAQ",
  components: {
    BasiceLayout
  },
  props: {
    FAQ: ""
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
.about-center
	margin: 10px 0
.faq-icon {
	display: inline-block;
	width: 20px;
	height: 20px;
	border-radius: 10px;
	// background-image: linear-gradient(-180deg, #15BCAD 2%, #10B2CB 100%)
	background: #0DB4C5;
	font-family: PingFangSC-Medium;
	font-size: 12px;
	color: #FFFFFF;
	text-align: center;
	line-height: 20px;
	margin: 10px 20px 0 0;
	vertical-align: bottom;
	position: absolute;
	left: 0;
}

.faq-tip-background {
	height: 30px;
	margin-left: 40px;
}

.tipIcon {
	display: inline-block;
	width: 0;
	height: 0;
	border: 3px solid transparent;
	border-bottom-color: #0DB4C5;
	border-right-color: #0DB4C5;
	vertical-align: bottom;
}

.tipContent {
	background: #0DB4C5;
	display: inline-block;
	font-size: 12px;
	color: #FFFFFF;
	line-height: 30px;
	padding: 0 20px;
	min-width: 250px;
  border-radius: 4px 4px 4px 0;
}

.faq-tip-background {
	display: inline-block;
}

.qa-item {
	margin-bottom: 22px;
}

.anwser, .question {
	position: relative;
}

.anwser-icon {
	font-size: 12px;
	color: #999B98;
	text-align: center;
	line-height: 18px;
	background: #F5F5F6;
}

.anwserContent {
	color: #65686A;
	background: #F5F5F6;
}

.anwser 
	margin: 18px 0 28px

.anwserIcon {
	border-bottom-color: #F5F5F6;
	border-right-color: #F5F5F6;
}

.bold
	font-weight: 
</style>

