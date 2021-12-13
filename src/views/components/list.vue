<template>
  <div class="w plist">
    <!-- <div class="tit3">
      <span>
        <a href="/pbootcms_mb/" target="_blank">1F PBootcms模板/VIP</a>
      </span>
      <a href="/pbootcms_mb/" class="more" target="_blank">更多模板</a>
    </div> -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="推荐" name="first">
        <div class="cat">
          <div class="goods clearfix">
            <div class="list" v-for="item in list" :key="item.id">
              <div class="img">
                <a href="#" target="_blank">
                  <!-- <img :src="goodPicture"/> -->
                  <img :src="item.goodPicture" alt="">
                </a>
              </div>
              <div class="goodsName bghei">
                <p class="goods_title">
                  <a href="#" target="_blank">{{item.goodsName}} </a>
                </p>
                <p class="info">
                  <span class="red left">￥{{item.goodPrice}}</span>
                  <span class="right">{{item.like}}人感兴趣</span>
                </p>
              </div>
            </div>
            <!-- <div class="list">
              <div class="img">
                <a href="/pbootcms_mb/4112.html" target="_blank">
                  <img
                    class="lazy"
                    data-original="https://www.xiuzhanwang.com/img/k59suo.jpg"
                    src="https://www.xiuzhanwang.com/img/k59suo.jpg"
                    alt="说说大全新闻资讯pbootcms模板"
                    width="220"
                    height="220"
                    style="display: inline"
                  />
                </a>
                <div class="Woqu_68" style="bottom: -70px">
                  说说大全新闻资讯pbootcms模板，pbootcms内核开发的一套新闻资讯模板，已经设置好广告位，模板简洁大气，自...
                </div>
              </div>
              <div class="goodsName bghei">
                <p class="goods_title">
                  <a href="/pbootcms_mb/4112.html" target="_blank"
                    >PB108-说说大全新闻资讯pbootcms模板</a
                  >
                </p>
                <p class="info">
                  <a>说说大全</a> <a>新闻资讯</a> <a>文章资讯</a>
                </p>
                <p class="infobottom clearfix">
                  <font class="pr Left vip-month-tag">亲测可用</font>
                  <font class="pr Left vip-month">会员免费</font>
                  <font class="Right combg"><em></em>&nbsp;147</font>
                </p>
              </div>
            </div>
            <div class="list">
              <div class="img">
                <a href="/pbootcms_mb/4111.html" target="_blank">
                  <img
                    class="lazy"
                    data-original="https://www.xiuzhanwang.com/img/pb107suo.jpg"
                    src="https://www.xiuzhanwang.com/img/pb107suo.jpg"
                    alt="餐饮美食火锅店pbootcms模板"
                    width="220"
                    height="220"
                    style="display: inline"
                  />
                </a>
                <div class="Woqu_68" style="bottom: -70px">
                  餐饮美食火锅店pbootcms模板下载，pbootcms内核开发的一套餐饮美食公司模板（自适应），模板简洁大气，自适...
                </div>
              </div>
              <div class="goodsName bghei">
                <p class="goods_title">
                  <a href="/pbootcms_mb/4111.html" target="_blank"
                    >PB107-餐饮美食火锅店pbootcms模板</a
                  >
                </p>
                <p class="info"><a>餐饮美食</a> <a>火锅店</a> <a>餐饮店</a></p>
                <p class="infobottom clearfix">
                  <font class="pr Left vip-month-tag">亲测可用</font>
                  <font class="pr Left vip-month">会员免费</font>
                  <font class="Right combg"><em></em>&nbsp;180</font>
                </p>
              </div>
            </div>
            <div class="list first">
              <div class="img">
                <a href="/pbootcms_mb/4110.html" target="_blank">
                  <img
                    class="lazy"
                    data-original="https://www.xiuzhanwang.com/img/x283suo.jpg"
                    src="https://www.xiuzhanwang.com/img/x283suo.jpg"
                    alt="工商注册财务代理记账类pbootcms网站模板下载"
                    width="220"
                    height="220"
                    style="display: inline"
                  />
                </a>
                <div class="Woqu_68" style="bottom: -70px">
                  工商注册财务代理记账类pbootcms网站模板下载，pbootcms内核开发的一套工商注册财务公司织梦模板（自适应）...
                </div>
              </div>
              <div class="goodsName bghei">
                <p class="goods_title">
                  <a href="/pbootcms_mb/4110.html" target="_blank"
                    >PB106-工商注册财务代理记账类pbootcms网站模板下载</a
                  >
                </p>
                <p class="info">
                  <a>工商注册</a> <a>财务公司</a> <a>代理记账</a>
                  <a>公司注册</a>
                </p>
                <p class="infobottom clearfix">
                  <font class="pr Left vip-month-tag">亲测可用</font>
                  <font class="pr Left vip-month">会员免费</font>
                  <font class="Right combg"><em></em>&nbsp;87</font>
                </p>
              </div>
            </div>
            <div class="list">
              <div class="img">
                <a href="/pbootcms_mb/4109.html" target="_blank">
                  <img
                    class="lazy"
                    data-original="https://www.xiuzhanwang.com/img/x284suo.jpg"
                    src="https://www.xiuzhanwang.com/img/x284suo.jpg"
                    alt="硅胶制品日用百货pbootcms模板"
                    width="220"
                    height="220"
                    style="display: inline"
                  />
                </a>
                <div class="Woqu_68" style="bottom: -70px">
                  硅胶制品日用百货pbootcms模板，本套模板整站PC+WAP结构，利于用户体验及百度收录排名。安装后和演示站一样...
                </div>
              </div>
              <div class="goodsName bghei">
                <p class="goods_title">
                  <a href="/pbootcms_mb/4109.html" target="_blank"
                    >PB105-硅胶制品日用百货pbootcms模板</a
                  >
                </p>
                <p class="info">
                  <a>硅胶制品</a> <a>日用百货</a> <a>营销型</a>
                </p>
                <p class="infobottom clearfix">
                  <font class="pr Left vip-month-tag">亲测可用</font>
                  <font class="pr Left vip-month">会员免费</font>
                  <font class="Right combg"><em></em>&nbsp;159</font>
                </p>
              </div>
            </div>
            <div class="list">
              <div class="img">
                <a href="/pbootcms_mb/4108.html" target="_blank">
                  <img
                    class="lazy"
                    data-original="https://www.xiuzhanwang.com/img/qw224suo.jpg"
                    src="https://www.xiuzhanwang.com/img/qw224suo.jpg"
                    alt="品牌广告营销策划公司PbootCMS模板"
                    width="220"
                    height="220"
                    style="display: inline"
                  />
                </a>
                <div class="Woqu_68" style="bottom: -70px">
                  品牌广告营销策划公司PbootCMS模板，本套模板整站自适应结构，利于用户体验及百度收录排名。安装后和演示站...
                </div>
              </div>
              <div class="goodsName bghei">
                <p class="goods_title">
                  <a href="/pbootcms_mb/4108.html" target="_blank"
                    >PB104-品牌广告营销策划公司PbootCMS模板</a
                  >
                </p>
                <p class="info">
                  <a>品牌广告</a> <a>营销策划</a> <a>营销公司</a>
                  <a>自适应</a>
                  <a>HTML5</a>
                </p>
                <p class="infobottom clearfix">
                  <font class="pr Left vip-month-tag">亲测可用</font>
                  <font class="pr Left vip-month">会员免费</font>
                  <font class="Right combg"><em></em>&nbsp;190</font>
                </p>
              </div>
            </div>
            <div class="list">
              <div class="img">
                <a href="/pbootcms_mb/4107.html" target="_blank">
                  <img
                    class="lazy"
                    data-original="https://www.xiuzhanwang.com/img/q264suo.jpg"
                    src="https://www.xiuzhanwang.com/img/q264suo.jpg"
                    alt="装饰门窗建材行业类网站pbootcms模板"
                    width="220"
                    height="220"
                    style="display: inline"
                  />
                </a>
                <div class="Woqu_68" style="bottom: -70px">
                  装修门窗行业类网站pbootcms模板，基于pbootcms内核UTF制作PC+WAP附带数据，代码精简，适合SEO，装后即用!...
                </div>
              </div>
              <div class="goodsName bghei">
                <p class="goods_title">
                  <a href="/pbootcms_mb/4107.html" target="_blank"
                    >PB103-装饰门窗建材行业类网站pbootcms模板</a
                  >
                </p>
                <p class="info"><a>装修门窗</a> <a>装饰建材</a> <a>门窗</a></p>
                <p class="infobottom clearfix">
                  <font class="pr Left vip-month-tag">亲测可用</font>
                  <font class="pr Left vip-month">会员免费</font>
                  <font class="Right combg"><em></em>&nbsp;127</font>
                </p>
              </div>
            </div>
            <div class="list first">
              <div class="img">
                <a href="/pbootcms_mb/4106.html" target="_blank">
                  <img
                    class="lazy"
                    data-original="https://www.xiuzhanwang.com/img/pb102suo.jpg"
                    src="https://www.xiuzhanwang.com/img/pb102suo.jpg"
                    alt="品牌策划广告营销公司网站pbootcms自适应模板"
                    width="220"
                    height="220"
                    style="display: inline"
                  />
                </a>
                <div class="Woqu_68" style="bottom: -70px">
                  品牌策划广告营销公司网站pbootcms自适应模板，本套模板整站自适应结构，利于用户体验及百度收录排名。安装...
                </div>
              </div>
              <div class="goodsName bghei">
                <p class="goods_title">
                  <a href="/pbootcms_mb/4106.html" target="_blank"
                    >PB102-品牌策划广告营销公司网站pbootcms自适应模板</a
                  >
                </p>
                <p class="info">
                  <a>品牌策划</a> <a>广告营销</a> <a>广告设计</a>
                  <a>营销策划</a> <a>自适应</a>
                </p>
                <p class="infobottom clearfix">
                  <font class="pr Left vip-month-tag">亲测可用</font>
                  <font class="pr Left vip-month">会员免费</font>
                  <font class="Right combg"><em></em>&nbsp;176</font>
                </p>
              </div>
            </div> -->
          </div>
          <div class="blank5"></div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="it">IT·互联网</el-tab-pane>
      <el-tab-pane label="角色管理" name="cz">设计·创作</el-tab-pane>
      <el-tab-pane label="考试·考证" name="ks">考试·考证</el-tab-pane>
      <el-tab-pane label="电商·营销" name="ds">电商·营销</el-tab-pane>
      <el-tab-pane label="职业·职场" name="zy">职业·职场</el-tab-pane>
      <el-tab-pane label="语言·留学" name="yy">语言·留学</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import goodsApi from '@/mock/goodsApi'
export default {
  data () {
    return {
      activeName: 'first',
      list: goodsApi.list
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="less" scoped>
.plist {
  margin-top: 20px;
  a {
    color: #545c63;
    font-size: 14.5px;
  }
  .cat {
  .list {
    width: 278.5px;
    float: left;
    margin: 0 24px 24px 0;
    box-shadow: 0 6px 10px 0 rgba(95, 101, 105, 0.15);
    border-radius: 8px;

    // box-shadow: 0px 0px 2px #dddddd;
    // transition: all 0.2s linear;
    img {
      // width: 270px;
      width:100%;
      height: 156.7px;
      border-radius: 8px 8px 0 0;
      // overflow: hidden;
    }
    .bghei {
      background: #fbfbfb;
      border-radius: 0 0 8px 8px;
    }
    .goodsName {
      padding: 8px 8px;

      .goods_title {
        height: 40px;
        overflow: hidden;
        line-height: 20px;
        margin-bottom: 8px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .info {
        height: 20px;
        margin: 15px 0 8px 0;
        font-size: 14px;
        color: #9199a1;
        .red {
          color: red;
        }
      }
    }
  }
}
}

// .tit3 {
//   height: 31px;
//   border-bottom: 2px solid #e10217;
//   overflow: hidden;
// }
// .tit3 span {
//   float: left;
//   width: 210px;
//   text-align: center;
//   font-weight: bold;
//   font-size: 15px;
//   height: 31px;
//   line-height: 31px;
//   background-color: #e10217;
//   margin-right: 80px;
// }
// .tit3 span a {
//   color: #fff;
// }
// .tit3 .more {
//   float: right;
//   background: url(../../assets/images/biao4.gif) right center no-repeat;
//   padding-right: 16px;
//   margin: 7px;
// }
</style>
