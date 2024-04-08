
<script setup>
import { gsap } from "gsap";   
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
const homePageAbout = ref(null);
const homePageTittle = ref(null);
const homePageContent = ref(null);
    onMounted(() => {
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger:homePageAbout.value,
                start:'-60% top',
                end:'20% 20%',
                scrub:true,
                // markers:true,
            }
        });
        tl.fromTo(homePageTittle.value,{
            xPercent:60,
            opacity:0,
        },{
        
            xPercent:0,
            opacity:1,
        })

        tl.fromTo(homePageContent.value,{
            xPercent:60,
            opacity:0,
        },{
        
            xPercent:0,
            opacity:1,
        })

    });
</script>

<template>
  <div id="homePageAbout" ref="homePageAbout">
    <p id="homePageTittle" ref="homePageTittle">關於</p>
    <p id="homePageContent" ref="homePageContent">車黑坡怎汁錯「至借土水而娘苦」相固貝法由造了王子食即兔國收綠嗎是封兆：坐像男貫叫勿；問跑幼牛貝吧姐。
        連得者正木新司好植：向向即世活。
        歌片毛犬平牠讀光門世？拍拍在科星實燈室貝說笑旁。</p>
  </div>
</template>

<style leng="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');

/* // .noto-serif tc-regular {
//   font-family: "Noto Serif TC", serif;
//   font-weight: 400;
//   font-style: normal;
// }
// .noto-sans tc-<uniquifier> {
//   font-family: "Noto Sans TC", sans-serif;
//   font-optical-sizing: auto;
//   font-weight: <weight>;
//   font-style: normal;
// } */

 #homePageAbout{
    background-color: #F5F5F5;
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    overflow: hidden;
    #homePageTittle{
        /* background-color: green; */
        
        position: relative;
        right:7%;
        margin: 0;
        writing-mode: vertical-lr;
        width: 20%;
        height: 20%;
        letter-spacing: 0.6rem;
        
        font-family: "Noto Serif TC";
        font-size: 40px;
        font-style: normal;
        font-weight: 500;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        @media(max-width: 576px){
            font-size: 36px;
        }

    }
    #homePageContent{
        /* background-color: green; */
        right:7%;
        position: relative;
        width: 20%;
        height: 20%;
        margin: 0;
        writing-mode: vertical-rl;

        font-family: "Noto Sans TC";
        font-size: 12px;
        font-style: normal;
        letter-spacing: 0.3rem;
        line-height: 1.6rem;

        @media(max-width: 576px){
            font-size: 10px;
            height:25%;
            letter-spacing: 0.3rem;
            line-height: 1.4rem;
        }
        
    }
 }

</style>