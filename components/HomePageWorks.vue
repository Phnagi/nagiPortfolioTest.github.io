
<script setup>
import { gsap } from "gsap";   
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
    const secWork1 = ref(null);
    const secWork2 = ref(null);
    onMounted(() => {
        // console.log(secWork1.value.childNodes)
        let secWorkChild1 = secWork1.value.childNodes;
        let secWorkChild2 = secWork2.value.childNodes;
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:secWork1.value,
                start:'0% 80%',
                end:'100% 100%',
                scrub:true
            }
        });
        const tl2 = gsap.timeline({
            scrollTrigger:{
                trigger:secWork2.value,
                start:'0% 80%',
                end:'100% 100%',
                scrub:true
            }
        });
        secWorkChild1.forEach((child) => {
            const childSpeed = child.getAttribute('data-speed');
            tl.fromTo(child,{
                x:50*childSpeed,
                opacity:0,
                duration:1
            },{
                x:0,
                opacity:1,
                duration:1
            },0)
        });

        secWorkChild2.forEach((child) => {
            const childSpeed = child.getAttribute('data-speed');
            tl2.fromTo(child,{
                x:50*childSpeed,
                opacity:0,
                duration:1
            },{
                x:0,
                opacity:1,
                duration:1
            },0)
        });

    });
</script>

<template>
    <div id="homePageWorks">
        <p id="homePageWorksBigTitle">作品</p>
        <!-- <Mainwork/> -->
        
        <MainworkTwo >
            <template #MainworkTwo>
                <div class="MainWork">
                    <NuxtLink to="/works/goAhand" class="MainWorkVideoBox">
                        <p class="MainWorkVideoMore">more</p>
                        <video src="@/assets/video/goahand_1.mp4" autoplay muted loop></video>
                    </NuxtLink>

                    <a  class="MainWorkContent">
                        <div class="MainworkTitleBox">
                            <p class="MainworkTitleMain">GoAhand</p>
                            <p class="MainworkTitleSub">UI/UX video</p>
                        </div>
                        <div class="MainworkConceptBox">
                            <p class="MainworkConcept">簡介</p>
                            <p class="MainworkConceptContent">
                                一個不論是身心障礙者或是普通人都可以拿來規劃無障礙旅行計畫及日常使用的一個app，
                                可以根據你選擇的地點給予使用者無障礙路線導航與盲人輔助導航的需求。

                            </p>
                        </div>
                    </a>
                </div>
            </template>
        </MainworkTwo>
        <SecontWork>
            <template #SecontWork >
                <div class="sec">
                    <div class="secWork" ref="secWork1">
                        <NuxtLink to="/works/homeTrust" class="secWorkVideoBox" data-speed="1.5">
                            <img src="@/assets/images/VI/HomeTrust/VI.jpg" alt="">
                        </NuxtLink>
                        <NuxtLink to="/works/homeTrust" class="secWorkContentBox" data-speed="1.5">
                            <p class="secWorkSubTitle">VI</p>
                            <p class="secWorkTitle">HomeTrust</p>

                            <div class="secWorkMore">更多</div>


                        </NuxtLink>
                    </div>
                </div>
            </template>
        </SecontWork>
        <SecontWork>
            <template #SecontWork>
                <div class="sec">
                <div class="secWork" ref="secWork2">
                    <NuxtLink to="/works/dropCoffee" class="secWorkVideoBox" data-speed="1.5">
                        <img src="@/assets/images/VI/Drop/Drop16.jpg" alt="">
                    </NuxtLink>
                    <NuxtLink to="/works/dropCoffee" class="secWorkContentBox" data-speed="1.5">
                        <p class="secWorkSubTitle">Design</p>
                        <!-- <p class="secWorkTitle" style="font-family: Noto Serif TC">楓茶米</p> -->
                        <p class="secWorkTitle" >DropCoffe</p>
                        <div class="secWorkMore">更多</div>


                    </NuxtLink>
                </div>
        </div>
            </template>
        </SecontWork>
    </div>

</template>


<style leng="scss" scoped>
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
 #homePageWorks{
    position: relative;
    width: 100%;
    overflow: hidden;
    background-color: #F5F5F5;
    #homePageWorksBigTitle{
        /* background-color: yellow; */
        overflow: hidden;
        width: 100%;
        display: flex;

        align-items: flex-start;
        height: 15dvh;
        position: relative;
        left: 7%;
        padding: 0;
        margin: 0;
        font-family: "Noto Serif TC";
        font-size: 30px;
        font-style: normal;
        font-weight:500;

        letter-spacing: 24.84px;

        @media(max-width: 768px){
            align-items: center;
        }

    }


 }
</style>