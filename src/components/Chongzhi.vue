<template>
  <div class="takeout">
  	<header>
  		<img src="../assets/jiantou.png" @click="toOne()"  />
  	</header>
  	<div class="main">
  		<img src="//image5.benlailife.com/images/sh/active/2017/07/10cz/wap_01axx.jpg?imageView2/2/w/625/format/webp" />
  	</div>
  	<div class="main1">
  		<img src="//image3.benlailife.com/images/sh/active/2017/05/25cz/wap_03x1x.jpg?imageView2/2/w/625/format/webp" />
  	</div>
  	<div class="main2">
  		<img src="//image.benlailife.com/images/sh/active/2017/05/25cz/newh5_02x.jpg?imageView2/2/w/625/format/webp" />
  		<img src="//image2.benlailife.com/images/sh/active/2017/05/25cz/newh5_04.jpg?imageView2/2/w/625/format/webp" class="main2i">
  		<img src="//image.benlailife.com/images/sh/active/2017/07/10cz/sku_01a.jpg?imageView2/2/w/625/format/webp" />
  		<img src="//image6.benlailife.com/images/sh/active/2017/05/25cz/newh5_08.jpg?imageView2/2/w/625/format/webp" style="height: 140px;">
  		<img src="//image.benlailife.com/images/sh/active/2017/05/25cz/wap_09.jpg?imageView2/2/w/625/format/webp" style="height: 85px;">
  		<img src="//image.benlailife.com/images/sh/active/2017/05/25cz/wap_10xx.jpg?imageView2/2/w/625/format/webp" style="height: 310px;">
  		<img src="//image1.benlailife.com/images/sh/active/2017/05/25cz/wap_11.jpg?imageView2/2/w/625/format/webp" style="height: 70px;">
  		<img src="//image2.benlailife.com/images/sh/active/2017/05/25cz/wap_12.jpg?imageView2/2/w/625/format/webp" style="height: 64px;">
  		<img src="//image2.benlailife.com/images/sh/active/2017/05/25cz/wap_21.jpg?imageView2/2/w/625/format/webp" style="height: 325px;">
  		<img src="//image3.benlailife.com/images/sh/active/2017/05/25cz/wap_22.jpg?imageView2/2/w/625/format/webp" style="height: 324px;">
  		<img src="//image4.benlailife.com/images/sh/active/2017/05/25cz/wap_23.jpg?imageView2/2/w/625/format/webp" style="height: 620px;">
  	</div>
  	<div class="zt_rules" id="rule">
        <h1 class="rule_title">充值送礼包活动说明：</h1>
        <p>1.活动时间：7月29日开始</p>
                <p>2.充值赠礼包活动规则如下：</p>
                <p>a.单笔充值2000，送价值200元大礼包1份，多充多送。即单笔充值6000，送价值800元大礼包1份</p>
                <p>b.充值礼包内有多种种商品供选择，分别为：鲜果礼包、休闲礼包、粮油礼包、水产礼包和澳洲牛肉礼包，您可根据自己的喜好选择充值金额及礼包。兑换商品均为生鲜时令商品，随季节变化偶有换品，但商品总价值保持不变。您可以根据喜好和所需，选择喜欢的礼包尽快兑换。</p>
                <p>c.礼包以兑换券的形式绑定到您的下单账户内，兑换券充值成功即刻到账请注意查收，逾期作废。</p>
                <p>d.兑换券有效期至：8月20日</p>
                <p>e.优惠券使用指引：进入“我的本来”－点击“优惠券”页面，找到名为“充值送礼包”的优惠券，点击“可用商品”后，进入商品礼包页面，选择您心仪的礼包点击使用即可。</p>
                <p>3.充值金额可即时到账，在账户中以余额形式出现，余额未设置有效期，余额不能转移、转赠，余额暂不能用于购买礼金卡、宅配卡，不能用于二次充值。</p>
                <p>4、充2000元可享受到的优惠：</p>
                <p>如您是白金卡以下级别的会员（注册、绿卡、银卡、金卡），充值2000后将升级为白金卡会员，除获赠价值200元礼包兑换券1张外，更可享受全场9.9折购物优惠（那么您消费完2000元余额后，能购买到相当于货值2020元的商品）、价值50元升级礼以及每季度1张50元全场优惠券（1年送4张，价值200元）。</p>
                <p>若您已经是白金卡会员，充值2000后将获赠价值200元兑换券1张，除享受白金卡会员福利，更有机会升级为钻石卡会员，钻石卡会员可享全场9.6折的购物优惠（那么您消费完2000元后，能够买到相当于货值2083元的商品）、价值100元升级礼以及每季度1张100元全场优惠券（1年送4张，价值400元）。</p>
                <p>若您已经是钻石卡级别会员，充值2000后获赠价值200元兑换券1张，除享受钻石卡会员福利，更有机会升级为黑卡会员，黑卡会员可享全场9.6折的购物优惠（那么您消费完2000元后，能够买到相当于货值2083元的商品）、价值200元升级礼、每季度1张150元全场优惠券（1年送4张，价值600元）、每季度1张价值20元包邮券（1年送4张，价值80元）。</p>
                <p>5.为保证每位顾客均可享受优惠，公平起见，在购买或充值过程中，如有下列违规行为，本来生活网将有权取消活动参与资格：</p>
                <p>a.以盈利为目的的恶意刷单</p>
                <p>b.通过技术手段恶意刷单</p>
                <p>c.异常手机号多频次下单</p>
                <p>d.违反诚信的其他行为</p>
                <p>6.为保证商品品质，礼包的配送范围仅限以下城市：</p>
                <p>华北：北京，天津，保定，沧州，承德，邯郸，衡水，廊坊，秦皇岛，石家庄，唐山，邢台，张家口，滨州、德州、东营、菏泽、济南、济宁、莱芜、聊城、临沂、青岛、日照、泰安、威海、潍坊、烟台、枣庄、淄博；</p>
                <p>华东：上海、南京、无锡、常州、苏州、南通、扬州、镇江、淮安、盐城、泰州、杭州、嘉兴、绍兴、宁波、温州、湖州、金华、舟山、台州、合肥、六安、芜湖、黄山、蚌埠、淮南、滁州、马鞍山、宣城、亳州、宿州、铜陵、徐州；</p>
                <p>华南：广州、深圳、佛山、江门、惠州、珠海、东莞、中山、汕头（龙湖区、金平区）、茂名（茂南区）、肇庆（端州区）、汕尾（城区）、河源（源城区）、阳江（江城区）、潮州（湘桥区）、揭阳（榕城区）、云浮（云城区）、清远(清城区)</p>
                <p>如有疑问，可拨打客服热线：4006-917-917</p>
    </div>
  </div>
 
</template>

<script>
export default {
  name: 'takeout',
  data () {
    return {
     
    }
  },
  methods:{
  	toOne(){
  			window.location.hash="/classify"
  		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header{
	width: 100%;
	height: 45px;
	background-color: #FFFFFF;
	position: fixed;
	border-bottom: 1px solid #F2F2F2;
	top:0;
	z-index: 999;
	img{
		height: 30px;
		margin-top:7px;
		
	}
	
}
.main img{
	width: 100%;
	height: 500px;
	margin-top: 45px;
}
.main1 img{
	width: 100%;
	height: 200px;
}
.main2 img{
	width: 100%;
	height: 350px;
	
}
.main2 img.main2i{
		height: 75px;
	}
#rule{
	padding: 20px;
	font-size: 14px;
	line-height: 20px;

}
	h1.rule_title{
		font-size: 20px;
		margin: 10px 0;
	}
</style>
