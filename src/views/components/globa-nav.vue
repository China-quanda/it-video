<template>
  <div class="globa-nav">
    <div class="w">
      <div class="allGoodsCat left">
        <a href="/" class="menuEvent" style="position: absolute; top: 0px; left: 0px; width: 240px; height: 44px;"><strong class="catName">所有产品分类</strong></a>
      </div>
      <div class="menu Left">
     <ul>
     <li><a href="https://www.xiuzhanwang.com/" class="index">网站首页</a></li>
     <li><a class="index" href="/pbootcms_mb/">会员模板</a>
      <ul class="second_ul">
        <a href="/pbootcms_mb/" class="second_a">PBoot模板</a>
        <a href="/dedecms_mf/" class="second_a">织梦模板</a>
        <a href="/html/" class="second_a">HTML模板</a>
        <a href="/sucai/" class="second_a">网页素材</a>
       </ul>
     </li>
     <li><a class="index" href="/yunucms/">商业模板</a>
      <ul class="second_ul">
        <a href="/yunucms/" class="second_a">云优模板</a>
        <a href="/dedecms_mb/" class="second_a">织梦模板</a>
        <a href="/pboot_mb/" class="second_a">PBoot模板</a>
       </ul>
     </li>
     <li><a href="/custom/" class="index">特价仿站</a></li>
     <li><a class="index">CMS教程</a>
       <ul class="second_ul">
        <a href="/dedecms/" class="second_a">织梦大学</a>
        <a href="/pbootcms/" class="second_a">PBootcms教程</a>
       </ul>
     </li>
     <li><a href="/Webmaster/" class="index">站长学院</a></li>
     </ul>
     <span class="icon_hot"></span>
    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.globa-nav{
  height: 45px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 10%);
    background: #ed2d38;
}
.globa-nav .allGoodsCat {
    height: 45px;
    position: relative;
    width: 250px;
    display: block;
    z-index: 100;
    background: url(../../assets/images/btitle.png) no-repeat #383838 25px center;
}
.globa-nav .allGoodsCat .menuEvent {
    display: block;
    font-family: Microsoft Jhenghei;
    font-weight: 700;
    height: 42px;
    line-height: 42px;
    text-align: center;
    text-decoration: none;
    background: url(../../assets/images/bdown.png) no-repeat 200px center;
}
.globa-nav .allGoodsCat .menuEvent .catName {
    font-size: 15px;
    height: 42px;
    line-height: 42px;
    color: #fff;
}
.globa-nav .menu {
    font-size: 15px;
    font-weight: 700;
    line-height: 45px;
    text-align: center;
    position: relative;
    padding-left: 20px;
}
.globa-nav .menu li {
    position: relative;
    float: left;
    height: 45px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.globa-nav .menu li a {
    display: block;
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 45px;
    height: 45px;
    width: 110px;
    letter-spacing: 1px;
}
</style>
