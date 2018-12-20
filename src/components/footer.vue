<template>
    <div id="foot-container">
       
        <section class="guide-item" v-if="$route.path.indexOf('home') !== -1"  @click="goAddress('/home')">
            <img src="../images/footer/home02.svg" >
            <span class="spana">首页</span>
        </section>
         <section class="guide-item" v-else  @click="goAddress('/home')">
            <img src="../images/footer/home01.svg" >
            <span>首页</span>
        </section>
      
         <section class="guide-item" v-if="$route.path.indexOf('console') !== -1" @click="goAddress('/console')">
            <img src="../images/footer/console02.svg" >
            <span class="spana">控制台</span>
        </section>
         <section class="guide-item" v-else @click="goAddress('/console')">
            <img src="../images/footer/console01.svg" >
            <span>控制台</span>
        </section>
       
        <section class="guide-item" v-if="$route.path.indexOf('forum') !== -1" @click="goAddress('/forum')">
            <img src="../images/footer/forum02.svg" >
            <span class="spana">文档</span>
        </section>
         <section class="guide-item" v-else @click="goAddress('/forum')">
            <img src="../images/footer/forum01.svg" >
            <span>文档</span>
        </section>
      
       
         <section class="guide-item" v-if="$route.path.indexOf('profile') !== -1" @click="goAddress('/profile')">
            <img src="../images/footer/profile02.svg" >
            <span class="spana">我的</span>
        </section>
         <section class="guide-item" v-else @click="goAddress('/profile')">
            <img src="../images/footer/profile01.svg" >
            <span>我的</span>
        </section>
        
    </div>
</template>
<script>
export default {
   data(){
       return{
          
       }
    },
    methods:{
        goAddress(path){
            this.$router.push(path)
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../style/fragment';
     #foot-container{
        background-color: #CDCDB4;
        position: fixed;
        z-index: 100;
        left: 0;
        right: 0;
        bottom: 0;
        @include wh(100%, 3rem);
        display: flex;
        box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
        border-top:0.01rem solid rgb(185, 185, 169)
    }
    .guide-item{
    	flex: 1;
    	display: flex;
    	text-align: center;
    	flex-direction: column;
    	align-items: center;
		img{
			@include wh(1.8rem, 1.8rem);
		}
		span{
			@include sc(.45rem, #666);
		}
    }
    .spana{
	    color: $red !important;
    }
</style>