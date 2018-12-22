<template>
    <div>
        <Header headerTitle="控制台"></Header>
        <section class="console">
            <section class="console-item">
                <p>0</p>
                <span>监控状态</span>
            </section>
            <section class="console-item">
                <p>0</p>
                <span>急需进货</span>
            </section>
            <section class="console-item">
                <p>0</p>
                <span>客服中心</span>
            </section>
        </section>
        <div class="line"></div>
        <p class="bot">常用工具</p>
        <section class="data">
            <section class="data-item">
                <img src="../../images/console/goods.svg">
                <span>商品管理</span>
            </section>
            <section class="data-item">
                <img src="../../images/console/orders.svg">
                <span>订单管理</span>
            </section>
            <section class="data-item">
                <img src="../../images/console/users.svg">
                <span>用户管理</span>
            </section>
        </section>
        <div class="linew"></div>

        <section class="one">
            <section class="one-item border">
                <img src="../../images/console/addgoods.svg" alt="">
                <span>添加商品</span>
            </section>
            <section class="one-item border">
                <img src="../../images/console/addadvertise.svg" alt="">
                <span>添加广告</span>
            </section>
            <section class="one-item">
                <img src="../../images/console/play.svg" alt="">
                <span>店铺活动</span>
            </section>
        </section>

        <section class="one">
            <section class="one-item border">
                <img src="../../images/console/talks.svg" alt="">
                <span>评论管理</span>
            </section>
            <section class="one-item border">
                <img src="../../images/console/vips.svg" alt="">
                <span>会员管理</span>
            </section>
            <section class="one-item">
                <img src="../../images/console/around.svg" alt="">
                <span>用户分布</span>
            </section>
        </section>

        <section class="one">
            <section class="one-item border">
                <img src="../../images/console/biguser.svg" alt="">
                <span>代理商</span>
            </section>
            <section class="one-item border">
                <img src="../../images/console/baround.svg" alt="">
                <span>代理分布</span>
            </section>
            <section class="one-item">
                <img src="../../images/console/biggoods.svg" alt="">
                <span>仓库库存</span>
            </section>
        </section>
       
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '../../components/footer';
import Header from '../../components/header/Header';
export default {
    components:{
        Footer,
        Header
    }
}
</script>
<style lang="scss" scoped>
    @import '../../style/common';
   @import '../../style/fragment';
   .console{
       display: flex;
        @include wh(100%,6rem);
        background: $bgcolor;
        .console-item{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            p{
                @include sc(1.5rem,$w)
            }
            span{
                 @include sc(1rem,$w)
            }
        }
   }
   .bot{
       text-align:start;
       line-height:2.4rem;
       @include wh(100%,2.4rem);
       border-bottom:0.005rem solid $line;
   }
   .data{
       display: flex;
       @include wh(100%,5rem);
       .data-item{
           display: flex;
           flex: 1;
           justify-content: center;
           flex-direction: column;
            align-items: center;
           img{
               @include wh(2rem,2rem)
           }
           span{
               padding-top:0.5rem;
               @include sc(0.9rem,$bgcolor)
           }
       }
   }
   .one{
       display: flex;
       @include wh(100%,6rem);
        border-bottom:0.005rem solid $line;
        .border{
           border-right:0.005rem solid $line;
        }
       .one-item{
           flex: 1;
           display: flex;
           justify-content: center;
           flex-direction: column;
           align-items: center;
           img{
               @include wh(1.8rem,1.8rem)
           }
           span{
               padding-top:0.5rem;
               @include sc(0.9rem,$bgcolor)
           }
       }
   }
  
</style>