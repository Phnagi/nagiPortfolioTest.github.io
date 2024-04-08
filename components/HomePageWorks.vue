
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
                    <a href="#" class="MainWorkVideoBox">
                        <p class="MainWorkVideoMore">more</p>
                        <video src="@/assets/video/goahand_1.mp4" autoplay muted loop></video>
                    </a>

                    <a  class="MainWorkContent">
                        <div class="MainworkTitleBox">
                            <p class="MainworkTitleMain">GoAhand</p>
                            <p class="MainworkTitleSub">UI/UX video</p>
                        </div>
                        <div class="MainworkConceptBox">
                            <p class="MainworkConcept">概念</p>
                            <p class="MainworkConceptContent">車黑坡怎汁錯「至借土水而娘苦」相固貝法由造了王子食即兔國收綠嗎是封兆：
                                坐像男貫叫勿；問跑幼牛貝吧姐。連得者正木新司好植：向向即世活。
                                歌片毛犬平牠讀光門世？拍拍在科星實燈室貝說笑旁。
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
                        <a href="#" class="secWorkVideoBox" data-speed="1.5">
                            <img src="@/assets/images/VI/HomeTrust/VI.jpg" alt="">
                        </a>
                        <a href="#" class="secWorkContentBox" data-speed="1.5">
                            <p class="secWorkSubTitle">VI</p>
                            <p class="secWorkTitle">HomeTrust</p>

                            <div class="secWorkMore">更多</div>


                        </a>
                    </div>
                </div>
            </template>
        </SecontWork>
        <SecontWork>
            <template #SecontWork>
                <div class="sec">
                <div class="secWork" ref="secWork2">
                    <a href="#" class="secWorkVideoBox" data-speed="1.5">
                        <img src="@/assets/images/VI/HomeTrust/VI.jpg" alt="">
                    </a>
                    <a href="#" class="secWorkContentBox" data-speed="1.5">
                        <p class="secWorkSubTitle">VI</p>
                        <p class="secWorkTitle">HomeTrust</p>

                        <div class="secWorkMore">更多</div>


                    </a>
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