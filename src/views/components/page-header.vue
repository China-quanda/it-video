<template>
  <div>
    <div class="page-header">
      <div class="w">
        <div class="logo Left">
          <a href="#" title="免费和优质的网站模板下载站"></a>
        </div>
        <div class="topArea Left">
          <div class="btMap">
            <div class="search">
              <div style="margin-top: 15px;">
  <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>
            </div>
          </div>
          <div class="key">
            <span >热搜：</span>
            <a href="https://www.xiuzhanwang.com/agent/" target="_blank"
              ><font color="#FF0000">代理</font></a
            >
            <a
              href="https://www.aliyun.com/minisite/goods?source=5176.11533457&userCode=3g0dcr18"
              target="_blank"
              rel="nofollow"
              ><font color="#FF0000">阿里云代金券</font></a
            >
            <a href="/dedecms_yx/">营销型网站</a>
            <a href="/html5/">自适应模板</a>
            <a href="/dedecms_zx/">文章/图库</a>
            <a href="https://www.xiuzhanwang.com/tags.html" target="_blank"
              >TAG</a
            >
            <a href="/sucai/">网页素材</a>
          </div>
        </div>
        <div class="svip Right">
          <a href="#">
            <img src="../../assets/images/ico-svip.png" alt="立马加入终身会员">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      select: ''
    }
  }
}
</script>

<style lang="less" scoped>
.page-header {
  height: 90px;
  padding: 10px 0;
  background-color: #fff;
}

.page-header .logo {
  height: 63px;
  padding: 14px 0;
  width: 420px;
  display: inline;
  margin-right: 60px;
}
.Left {
  float: left;
}
.Right{
  float: right;
}
.logo a {
  display: block;
  height: 63px;
  background: url(../../assets/images/logo.jpg) no-repeat center left;
}
.page-header .btMap .search {
  height: 36px;
  position: relative;
  width: 491px;
  z-index: 105;
}
.page-header .key {
  padding-top: 5px;
  overflow: hidden;
  height: 20px;
  width: 480px;

}
.page-header .key a {
    padding-right: 7px;
    font-size:12px
}
a {
    color: #666;
    text-decoration: none;
}
.key span{
  font-size:12px
}
/deep/ .input-with-select  {
box-sizing: border-box;
width: 460px;
}
/deep/.el-input__inner:nth-child(1){
  width: 123px;
}
/deep/.el-el-input__inner{

  webkit-box-shadow: 0 0 0 1000px white inset !important;
}
/deep/ .page-header .btMap .search[data-v-357b43ac]{
  height: 40px;
}

</style>
