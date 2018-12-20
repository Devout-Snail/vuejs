<template>
    <div id="header-container">
          <section class="home-item">
              <img src="../../images/homeHeader/homeHeader01.svg" >
          </section>

           <section class="home-item0">
              <input type="text">
          </section>

           <section class="home-item1">
              <div>
                  <img src="">
                  <span></span>
              </div>
          </section>

    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
     @import '../../style/fragment';
     #header-container{
        background-color: rgb(66, 66, 61);
        position: fixed;
        z-index: 100;
        left: 0;
        right: 0;
        top:0;
        @include wh(100%, 3rem);
        display: flex;
    }
    .home-item{
        display: flex;
        @include wh(10%,inherit);
        align-items: center;
        justify-content: center;
        img{
           @include wh(1.8rem ,1.8rem); 
        }
    }
    .home-item0{
        display: flex;
        @include wh(80%,inherit);
        align-items: center;
        justify-content: center;
        input{
            @include wh(15rem,1.6rem);
            background-color: #666;
            @include borderRadius(1.8rem);
            @include  bis('../../images/homeHeader/homeHeader02.svg');
            background-position-x:-6.5rem;
            padding-left:2rem; 
            color: white
        }
    }
</style>