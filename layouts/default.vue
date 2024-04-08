<script  setup>
import Lenis from '@studio-freight/lenis'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

onMounted(()=>{
  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  // console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
});





</script>

<template>
  <NuxtPage/>
  <!-- <div class="bg">
    <div id="111">
    aaaaa
    </div>
    <NuxtPage/>
    <div class="footer">
    ssss
    </div>
  </div> -->

</template>

<style>
/* @mixin largePad{
  @media(max-width:992px){
    @content;
  }
}
@mixin pad{
  @media(max-width:768px){
    @content;
  }
}
@mixin mobile{
  @media(max-width:375px){
    @content;
  }
} */
body::-webkit-scrollbar {
    display: none;
}

body{
  background-color: #F5F5F5;
}
.bg{
  height: 200dvh;
}

html.lenis, html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
</style>
