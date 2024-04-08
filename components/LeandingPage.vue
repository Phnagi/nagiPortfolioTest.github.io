<script setup>
import { gsap } from "gsap";   
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
const imgBox = ref(null);
const textBox = ref(null);
const lendingPage = ref(null);

onMounted(() => {
  // let lend = document.querySelectorAll('.lendingPage');
  // console.log(imgBox.value);
  // console.log(lendingPage.value.childNodes[0]);
  let lendingPageChild = lendingPage.value.childNodes;
  const imgSpeed = imgBox.value.getAttribute('data-speed');
  const textBoxSpeed = textBox.value.getAttribute('data-speed');
  const tl = gsap.timeline({
    scrollTrigger:{
      trigger:lendingPage.value,
      start:'top top',
      scrub:true
    }
  })
  lendingPageChild.forEach(child => {
    // console.log(child)
    const childSpeed = child.getAttribute('data-speed');
    tl.to(child,{
      y:100*childSpeed,
      duration:2
    },0)
  });

});

</script>

<template>
  <div class="lendingPage"  ref="lendingPage">
    <img  class="scrollBox" src="@/assets/images/me_2.jpg" alt="" ref="imgBox"  data-speed="3">
    <div id="textBox" class="scrollBox"  ref="textBox">
        <div id="textBoxTitle">
          <h3>CHUN-CHIEH</h3>
          <h3>Liang</h3>
        </div>
        <div id="textBoxContent"  data-speed="10" >
          <h5>UX/UI</h5>
          <h5>Font-End Developer</h5>
        </div>
    </div>
  </div>


</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');

// .noto-serif tc-regular {
//   font-family: "Noto Serif TC", serif;
//   font-weight: 400;
//   font-style: normal;
// }
// .noto-sans tc-<uniquifier> {
//   font-family: "Noto Sans TC", sans-serif;
//   font-optical-sizing: auto;
//   font-weight: <weight>;
//   font-style: normal;
// }

.lendingPage{
  overflow: hidden;
  background-color: #F5F5F5;
    width: 100%;
    height: 100dvh;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      height:calc(100dvh - 60px);
      width: calc(100% - 60px);
      object-fit: cover;
      filter: grayscale(80%);
      position:absolute ;
      
      background-position: bottom center;
    }
    #textBox{
      width: 500px;
      height: 500px;
      background: rgba(255, 255, 255, 0.93);
      backdrop-filter: blur(3.450000047683716px);
      position: relative;
      margin: 0%;
      padding: 2% 3% 3% 3%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-position: bottom center;

      #textBoxTitle{
        width: 100%;
        height: 20%;
        // background-color: antiquewhite;
        margin: 0%;
        // padding-top:2% ;
        // padding-left:4% ;
        position: relative;
        // top: 2%;
        // left: 4%;
        h3{
          margin: 0%;
          padding: 0%;
          font-size: 2.5rem;
          letter-spacing: 0.1rem;
          font-family: "Noto Sans TC", sans-serif;
         
        }
      }
      #textBoxContent{
        width: 100%;
        height: 30%;
        // background-color: antiquewhite;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;//end
        align-items: flex-end;//end
        position: relative;
        // right: 4%;
        // bottom: 4%;
        h5{
          margin: 0%;
          padding: 0%;
          font-size: 1.5rem;
          letter-spacing: 0.1rem;
          font-family: "Noto Sans TC", sans-serif;
        }
      }
    }
    
  }
</style>
