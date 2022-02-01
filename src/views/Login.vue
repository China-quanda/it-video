<template>
  <div class="container">
    <div class="form-box">
      <div class="tran" :class="[!isRegister ? 'show' : 'ss']">
        <!-- 注册 -->
        <div class="register-box" v-show="isRegister">
          <h1>REGISTER</h1>
          <el-form
            :model="registerForm"
            :rules="registerRules"
            ref="registerFormRef"
          >
            <el-form-item>
              <el-input
                v-model="registerForm.userName"
                placeholder="手机号码 / 邮箱 / 用户名"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="registerForm.password"
                placeholder="密码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="registerForm.password2"
                placeholder="确认密码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="registerForm.code"
                placeholder="验证码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                style="
                  width: 100%;
                  background-image: linear-gradient(
                    to bottom right,
                    #1cc7df,
                    #a396c6,
                    #3698d0
                  );
                "
                >注册</el-button
              >
            </el-form-item>
          </el-form>
        </div>
        <!-- 登录 -->
        <div class="login-box" v-show="!isRegister">
          <el-tooltip
            class="item"
            effect="dark"
            content="扫码登录"
            placement="left"
          >
            <div class="login-ewm" @click="isEwm = !isEwm">
              <div class="login-ewm-d"></div>
              <img
                src="https://www.xiuzhanwang.com/style/images/wap.png"
                alt=""
              />
            </div>
          </el-tooltip>

          <h1>LOGIN</h1>
          <div class="showewm" v-show="isEwm">
            <img
              src="https://www.xiuzhanwang.com/style/images/wap.png"
              alt=""
            />
          </div>
          <el-form
            :model="loginForm"
            :rules="loginRules"
            ref="loginFormRef"
            v-show="!isEwm"
          >
            <el-form-item>
              <el-input
                v-model="loginForm.userName"
                placeholder="手机号码 / 邮箱 / 用户名"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="loginForm.password"
                placeholder="密码"
              ></el-input>
            </el-form-item>

            <!-- <el-form-item>

            </el-form-item> -->
          </el-form>
          <el-button
            type="primary"
            style="
              width: 100%;
              background-image: linear-gradient(
                to bottom right,
                #1cc7df,
                #a396c6,
                #3698d0
              );
            "
            >登录</el-button
          >
          <a href="#" class="wjmm">忘记密码？</a>
          <p>——其他方式登录——</p>
          <div class="dsf">
            <ul>
              <li>
                <a href="#"><i class="iconfont icon-shejiaotubiao-09"> </i></a>
                <a href="#"><i class="iconfont icon-weixin"> </i></a>
                <a href="#"><i class="iconfont icon-qq"> </i></a>
                <a href="#"><i class="iconfont icon-xinlangweibo"> </i></a>
                <a href="#"><i class="iconfont icon-weiruan"> </i></a>
                <a href="#"><i class="iconfont icon-github"> </i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="con-box left" :class="{ hidden: isRegister }">
        <img src="@/assets/images/loginbgc.jpg" alt="" />
        <h1>没有账号？</h1>
        <p>立即注册加入我们，和我们一起开始旅程吧</p>
        <button @click="isRegister = !isRegister">去注册</button>
      </div>

      <div class="con-box right" :class="{ hidden: !isRegister }">
        <img src="@/assets/images/loginbgc.jpg" alt="" />
        <h1>已有帐号？</h1>
        <p>请使用您的帐号进行登录</p>
        <button @click="isRegister = !isRegister">去登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data () {
    return {
      registerForm: {
        userName: '',
        password: '',
        password2: '',
        code: ''
      },
      loginForm: {
        userName: '',
        password: '',
        password2: '',
        code: ''
      },
      registerRules: {
        name: [
          {
            required: true,
            message: '手机号码 / 邮箱 / 用户名',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 12,
            message: '长度在 2 到 12 个字符',
            trigger: 'blur'
          }
        ]
      },
      loginRules: {
        name: [
          {
            required: true,
            message: '手机号码 / 邮箱 / 用户名',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 12,
            message: '长度在 2 到 12 个字符',
            trigger: 'blur'
          }
        ]
      },
      isRegister: false,
      isEwm: false
    }
  },
  created () {},
  methods: {
    toRegister () {
      this.isRegister = !this.isRegister
    },
    toLgoin () {
      this.isRegister = !this.isRegister
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1280px;
  background-image: linear-gradient(
    to bottom right,
    #1cc7df,
    #a396c6,
    #3698d0,
    #6989d8,
    #d550a0
  );
  .form-box {
    padding: 0px 20px;
    height: 500px;
    box-sizing: border-box;
    // width: 65%;
    width: 950px;
    background: #fff;
    border-radius: 8px;
    /* 相对定位 */
    position: relative;
    .tran {
      /* 绝对定位 */
      position: absolute;
      margin-top: -50px;
      width: 40%;
      height: 600px;
      box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      border-radius: 8px;
      padding: 120px 20px 0 20px;
      box-sizing: border-box;
      overflow: hidden;
      z-index: 2;
      /* 动画过渡 加速后减速 */
      transition: 0.6s ease-in-out;
      .login-box,
      .register-box {
        .showewm {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: -20px 0px 20px 0px;
          img {
            width: 50%;
          }
        }
        .iconfont {
          font-size: 26px;
          color: #fff;
        }
        .icon-shejiaotubiao-09 {
          font-size: 32px;
        }
        .login-ewm {
          box-sizing: border-box;
          cursor: pointer;
          position: absolute;
          right: 0;
          top: 0;
          width: 64px;
          height: 64px;
          opacity: 0.8;
          border-color: #65c2dd #65c2dd rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
          // box-shadow: 2px 0 10px rgba(134, 130, 130, 0.1);
          border-style: solid;
          border-width: 33px;
          .login-ewm-d {
            position: absolute;
            z-index: 1;
            top: -33px;
            right: -64px;
            width: 0;
            height: 0;
            border-bottom: 100px solid rgb(255, 255, 255);
            border-right: 100px solid transparent;
          }
          img {
            position: absolute;
            top: -28px;
            right: -27px;
            border-radius: 8px;
            // box-shadow: 2px 0 10px rgba(134, 130, 130, 0.1);
            width: 64px;
          }
        }
        .el-button {
          background-color: #65c2dd;
          border: none;
          margin-bottom: 10px;
        }
        h1 {
          text-align: center;
          font-size: 40px;
          color: #AD9B9B;
          margin-bottom: 30px;
          letter-spacing: 8px;
        }
        /deep/.el-input__inner {
          border: 0;
          background: #f9f9f9;
        }
        .wjmm {
          padding-top: 10px;
        }
        a {
          text-decoration: none;
          color: #65c2dd;
          font-size: 14px;
        }
        p {
          margin: 15px auto;
          font-size: 14px;
          text-align: center;
          color: rgb(155, 148, 148);
        }
        .dsf > ul > li {
          display: flex;
          justify-content: space-between;
          text-align: center;
        }
        .dsf > ul > li > a {
          display: block;
          line-height: 45px;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: 50px;
        }
        .dsf > ul > li > a:nth-child(1) {
          background-color: #1a89fa;
        }
        .dsf > ul > li > a:nth-child(2) {
          background-color: #50b674;
        }
        .dsf > ul > li > a:nth-child(3) {
          background-color: #18acfc;
        }
        .dsf > ul > li > a:nth-child(4) {
          background-color: #ea5d5c;
        }
        .dsf > ul > li > a:nth-child(5) {
          background-color: #0c6ef2;
        }
        .dsf > ul > li > a:nth-child(6) {
          background-color: #9a2ae1;
        }
      }
    }
  }
  .con-box {
    width: 55%;
    // background:#d550a0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    h1 {
      // color: #8e9aaf;
      font-size: 25px;
      letter-spacing: 3px;
      margin-top: 25px;
      margin-bottom: 5px;
    }
    p {
      font-size: 14px;
      letter-spacing: 2px;
      color: #8e9aaf;
      text-align: center;
    }
    span {
      color: #d3b7d8;
    }
    img {
      // width: 550px;
      width: 100%;
      // min-width:490px;
    }
    button {
      margin-top: 3%;
      background-color: #fff;
      color: #65c2dd;
      border: 1px solid #65c2dd;
      padding: 10px 100px;
      border-radius: 5px;
      letter-spacing: 1px;
    }
    button:hover {
      background-color: #65c2dd;
      color: #fff;
      cursor: pointer;
    }
  }
  .con-box.left {
    left: 12px;
  }
  .con-box.right {
    right: 12px;
  }
  .hidden {
    display: none;
  }
  .show {
    transform: translateX(139%);
  }
  .ss {
    transform: translateX(0%);
  }
}
</style>
