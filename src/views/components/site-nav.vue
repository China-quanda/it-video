<template>
  <div>
    <div class="site-nav">
      <div class="site-nav-bd w">
        <ul class="site-nav-bd-l">
          <li class="menu login-info">
            <div class="menu-hd">
              <p>欢迎来访麦站，优质网站模板提供商！</p>
            </div>
          </li>
          <li class="menu favorite" >

            <div class="menu-hd mobile" @mouseenter="enter" @mouseleave="leave">
              <a href="#">
                <span>手机版</span>
              </a>
            </div>
            <div class="shadow" v-show="shadowmobile" >
              <img
                src="https://www.xiuzhanwang.com/style/images/wap.png"
                alt="手机版"
              />
            </div>
            <!-- a -->
          </li>
          <li class="menu favorite" >
            <div class="menu-hd weixin" @mouseenter="weixinenter" @mouseleave="weixinleave">
              <a href="javascript:">
                <span>微信小程序</span>
              </a>
            </div>
            <div class=" shadow"  v-show="shadowweixin">
              <img
                src="https://www.xiuzhanwang.com/style/images/wx.png"
                alt="微信小程序"
              />
            </div>
          </li>
        </ul>
        <ul class="site-nav-bd-r">
          <li class="menu favorite">
            <div class="menu-hd">
              <a
                href="http://wpa.qq.com/msgrd?v=3&uin=877880098&site=qq&menu=yes"
                target="_blank"
                rel="nofollow"
              >
                <span style="color: #ff0000; font-weight: bold"
                  >在线客服QQ:877880098</span
                >
              </a>
            </div>
          </li>
          <li class="menu favorite">
            <div class="menu-hd">
              <a href="javascript:" rel="nofollow" target="_blank">
                <span>程序下载</span>
              </a>
            </div>
          </li>
          <li class="menu favorite">
            <div class="menu-hd">
              <a
                href="javascript:void(0);"
                @click="Collect"
              >
                <span>收藏本站</span>
              </a>
            </div>
          </li>
          <li class="menu favorite">
            <el-dropdown>
              <span class="el-dropdown-link">
                帮助中心<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>新手指南</el-dropdown-item>
                <el-dropdown-item>支付购买</el-dropdown-item>
                <el-dropdown-item>售后服务</el-dropdown-item>
                <el-dropdown-item>关于我们</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SiteNav',
  data () {
    return {
      shadowmobile: false,
      shadowweixin: false,
      url: window.location.href,
      title: document.title
    }
  },
  methods: {
    enter () {
      this.shadowmobile = true
      // console.log('鼠标进入')
    },
    leave () {
      this.shadowmobile = false
      // console.log('鼠标离开')
    },
    weixinenter () {
      this.shadowweixin = true
    },
    weixinleave () {
      this.shadowweixin = false
      // console.log('鼠标离开')
    },
    // 点击添加收藏当前网址
    Collect () {
      try {
        window.external.addFavorite(this.url, this.title)
      } catch (e) {
        try {
          window.sidebar.addPanel(this.title, this.url, '')
        } catch (e) {
          alert('抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>

.shadow {
  position: absolute;
   z-index: 10001;
   }
   .menu-hd {
  padding-right: 6px;
  padding-left: 6px;
  z-index: 10002;
  padding-bottom: 0px;
  overflow: hidden;
  line-height: 31px;
  padding-top: 0px;
  // position: relative;
  height: 31px;
  color: #444444;
}
.site-nav {
  width: 100%;
  height: 31px;
  line-height: 31px;
  font-size: 12px;
  color: #444;
  background-color: #f7f7f7;
  border-bottom: 1px solid #dfdfdf;
}
a {
  color: #444;
  text: none;
}
.site-nav-bd {
  -webkit-backface-visibility: hidden;
  height: 31px;
}
.site-nav-bd-l {
  display: inline;
  float: left;
}
.menu {
  float: left;
}

.site-nav-bd .menu .menu-hd a {
  display: inline;
  font-size: 12px;
  float: left;
  margin-right: 7px;
  color: #444;
  font-weight: normal;
}
.site-nav-bd .menu .menu-hd A SPAN {
  display: inline;
  float: left;
  cursor: pointer;
}
.site-nav-bd .menu .shadow img {
  box-shadow: 3px 6px 3px rgba(0, 0, 0, 0.1);
}

.site-nav-bd-r {
  display: inline;
  float: right;
}
.mobile {
  background: url(../../assets/images/news_icon.png) no-repeat -5px 8px;
  padding-left: 18px;
  margin-right: 0;
}
.weixin {
  background: url(../../assets/images/news_icon.png) no-repeat -4px -76px;
  padding-left: 22px;
}
.el-dropdown-link {
  padding-left: 6px;
  cursor: pointer;
  color: #444;
}
.el-icon-arrow-down {
  font-size: 12px;
  color: #444;
}
.el-dropdown {
  display: inline-block;
  position: relative;
  color: #444;
  font-size: 12px;
}
</style>
