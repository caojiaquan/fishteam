<template>
        <div id="nav-wrapper-box">
          <div id="nav">
            <div id="nav-box">
              <div><span><i class="iconfontyyy">&#xe612;</i></span><span class="nav-list">首页</span></div>
              <div><span><i class="iconfontyyy">&#xe679;</i></span><span class="nav-list">鱼塘</span></div>
              <div><span id="nav-add" @click="addproduct()"><i class="iconfontyyy animated rotateIn">&#xe600;</i></span><span class="nav-list">发布</span></div>
              <div><span><i class="iconfontyyy">&#xe624;</i></span><span class="nav-list">消息</span></div>
              <div><span><i class="iconfontyyy">&#xe615;</i></span><span class="nav-list">我的</span></div>
            </div>
        </div>
            <div id="popups" v-show="popdia" @click="addproduct();" >
                <div class="nav-wrapper">
                    <h3>咸鱼赚钱指南</h3>
                    <div id="nav-popups-middle">
                        <div class="nav-popups-middle-box">
                            <div><span>买什么更赚钱<br /></span><span class="nav-middle-sm">教你买什么更赚</span></div>
                        </div>
                        <div class="nav-popups-middle-box">
                            <div><span>学生拍卖<br /></span><span class="nav-middle-sm">大学生第一桶金指南</span></div>
                        </div>
                        <div class="nav-popups-middle-box">
                            <div><span>房东故事<br /></span><span class="nav-middle-sm">沙发可变声创业</span></div>
                        </div>
                    </div>
                    <div id="nav-popups-bottom" >
                        <div class="nav-popups-bottom-box animated bounceInUp">
                            <div><span><router-link to="/push" class="iconfontyyy">&#xe603;</router-link></span><span></span></div>
                        </div>
                        <div class="nav-popups-bottom-box animated bounceInLeft">
                            <div><span><i class="iconfontyyy">&#xe6db;</i></span><span></span></div>
                        </div>
                        <div class="nav-popups-bottom-box animated bounceInUp">
                            <div><span><i class="iconfontyyy">&#xe601;</i></span><span></span></div>
                        </div>
                    </div>
                </div>
                <transition name="move">
                    <span id="nav-add-close" v-show="popdia"><i class="iconfontyyy">&#xe600;</i></span>
                </transition>
            </div>
    </div>
</template>
<script>

export default {
  name: 'nav',
  data () {
    return {
        msg: 'Welcome to Your Vue.js App',
        popdia:false
    }
  },
    methods:{
        addproduct:function(){
//            this.popdia = true;
            this.popdia = !this.popdia;
        }

    }
}
</script>

<style scoped>
    @import "../assets/css/common.css";
    @import "../assets/css/nav.css";
    @import "//at.alicdn.com/t/font_eus9a7rmry3c8fr.css";
    @import "../../node_modules/animate.css/animate.min.css";
</style>
