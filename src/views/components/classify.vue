<template>
  <div class="system-class-show w">
    <a class="show-box" href="#" target="_blank">
      <div class="system-class-icon" :style="{backgroundImage:'url('+bgImg.url1+')'}"></div>
      <div class="describe">
        <h4>Java架构师P7</h4>
        <p>千万级电商架构0-100</p>
      </div>
    </a>
    <a class="show-box" href="#" target="_blank">
      <div
        class="system-class-icon "
        :style="{backgroundImage:'url('+bgImg.url2+')'}"
      ></div>
      <div class="describe">
        <h4>Java架构师P7</h4>
        <p>千万级电商架构0-100</p>
      </div>
    </a>
      <a class="show-box" href="#" target="_blank">
      <div class="system-class-icon" :style="{backgroundImage:'url('+bgImg.url3+')'}" ></div>
      <div class="describe">
        <h4>Java架构师P7</h4>
        <p>千万级电商架构0-100</p>
      </div>
    </a>
     <a class="show-box" href="#" target="_blank">
      <div class="system-class-icon" :style="{backgroundImage:'url('+bgImg.url4+')'}" ></div>
      <div class="describe">
        <h4>Java架构师P7</h4>
        <p>千万级电商架构0-100</p>
      </div>
    </a>
     <a class="show-box" href="#" target="_blank">
      <div class="system-class-icon" :style="{backgroundImage:'url('+bgImg.url5+')'}" ></div>
      <div class="describe">
        <h4>Java架构师P7</h4>
        <p>千万级电商架构0-100</p>
      </div>
    </a>
     <a class="show-box" href="#" target="_blank">
      <div class="system-class-icon" :style="{backgroundImage:'url('+bgImg.url1+')'}" ></div>
      <div class="describe">
        <h4>Java架构师P7</h4>
        <p>千万级电商架构0-100</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bgImg: {
        url1: require('../../assets/images/classify1.jpg'),
        url2: require('../../assets/images/classify2.jpg'),
        url3: require('../../assets/images/classify3.jpg'),
        url4: require('../../assets/images/classify4.jpg'),
        url5: require('../../assets/images/classify5.jpg')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.system-class-show {
  height: 100px;
  background: #ffffff;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3);
  border-radius: 0 0 8px 8px;
  .show-box {
    display: block;
    width: 192px;
    height: 45px;
    float: left;
    margin-left: 16px;
    margin: 28px 0 0 8px;
    // background-color: red;
    .system-class-icon {
      float: left;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-size: cover;
      margin-right: 8px;
      // background-image: url(../../assets/images/classify4.jpg);
    }
    .describe h4 {
      width: 139px;
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #1c1f21;
      letter-spacing: 0.76px;
      line-height: 22px;
      margin-bottom: 4px;
      white-space: nowrap;
      overflow: hidden;
    }
    .describe p {
      width: 139px;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #545c63;
      line-height: 18px;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: 400;
}

</style>
