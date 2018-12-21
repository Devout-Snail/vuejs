<template>
    <div id="console-container">
        <section class="console-item">
            <span>{{headerTitle}}</span>
            <img src='../../images/homeHeader/homeHeader03.svg'>
            <span class="dot"></span>
        </section>
    </div>
</template>
<script>
export default {
    props:["headerTitle"]
}
</script>
<style lang="scss" scoped>
    @import '../../style/fragment';
     #console-container{
        background-color: rgb(66, 66, 61);
        position: fixed;
        z-index: 100;
        left: 0;
        right: 0;
        top:0;
        @include wh(100%, 3rem);
        display: flex;
    }
    .console-item{
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
        @include wh(100%, 3rem);
        position: relative;
        span{
            color: white;
            font-weight:bolder;
            font-family: 'Courier New', Courier, monospace;
            font-size: 1.1rem
        }
        img{
            position: absolute;
             @include wh(1.8rem, 1.8rem);
             right:0.5rem;
        }
        .dot{
            position: absolute;
            @include wh(1rem,1rem);
            background: red;
            @include borderRadius(1rem);
            right:0.1rem;
            top:0.6rem
            }
    }
</style>