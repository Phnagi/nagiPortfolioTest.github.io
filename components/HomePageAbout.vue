
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
    <p id="homePageContent" ref="homePageContent">
        一名喜歡設計、網頁開發以及攝影的大學生，喜歡創建優雅、用戶友好且具有創造性的產品。
        我對於創意和技術的結合充滿著熱情，對於使用者設計等領域的熱忱也驅使我不斷學習和探索新的技術和設計趨勢，
        在網頁開發上也不斷精進自己，在團隊合作上，由於會設計及寫程式，可以很好理解設計時與技術上的問題，
        我相信，通過將技術與設計融合在一起，可以創造出令人更加便利的用戶體驗，這正是我每天努力的目標。
    </p>
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
        height: 30%;
        margin: 0;
        writing-mode: vertical-rl;

        font-family: "Noto Sans TC";
        font-size: 13px;
        font-style: normal;
        letter-spacing: 0.3rem;
        line-height: 1.6rem;

        @media(max-width: 576px){
            font-size: 12px;
            width: 80%;
            height:40%;
            letter-spacing: 0.3rem;
            line-height: 1.4rem;
            writing-mode: horizontal-tb;
        }
        @media(max-width: 280px){
            font-size: 10px;
            width: 80%;
            height:40%;
            letter-spacing: 0.3rem;
            line-height: 1.4rem;
            writing-mode: horizontal-tb;
        }
        
    }
 }

</style>