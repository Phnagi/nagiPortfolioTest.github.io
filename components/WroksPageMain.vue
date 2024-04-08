
<script setup>
import { gsap } from "gsap";   
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { NuxtLink } from "#build/components";

let worksPageMainBox = ref(null)
let worksPageMainScroll = ref(null)
let worksPageMainScroll0 = ref(null)
let worksPageMainScroll1 = ref(null)
let worksPageMainScroll2 = ref(null)
let worksPageMainScroll3 = ref(null)
let worksPageMainScroll4 = ref(null)
////改變DOM
    //控制影片/照片
    let videoImgControl = ref(true);
    //選取影片
    let worksVideo = ref(null);
    //選取照片
    let worksImg = ref(null);
    let worksImgBox =ref(null);
  
    // 選取worksPageindex
    let worksPageindexBoxGoAhand = ref(null);
    let worksPageindexBoxHomeTrust = ref(null);
    let worksPageindexBoxMaple = ref(null);
    let worksPageindexBoxPhoto = ref(null);
    let worksPageindexBoxOther = ref(null);
    //控制
    let worksindex_GoAhandBolean = ref(true);
    let worksindex_HomeTrustBolean = ref(false);
    let worksindex_MapleBolean = ref(false);
    let worksindex_PhotoBolean = ref(false);
    let worksindex_OtherBolean = ref(false);
    //選取簡介內容
    let worksPageintroTitle = ref(null);
    let worksPageintroContent = ref(null);
    //選取底下標題
    let worksPageSubTitle = ref(null);
    let worksPageTitle = ref(null);
    //換顏色
    let changeColor = ref(false);
    //
    let MainImg = reactive({
        HomeTrust:'_nuxt/assets/images/VI/VI1.jpg',
        Maple:'_nuxt/assets/images/VI/VI2.jpg',
        Photo:'_nuxt/assets/images/photo/2.jpg',
        Other:'_nuxt/assets/images/VI/VI1.jpg',

    
    })
//
onMounted(() =>{
    let worksImg2 = document.querySelector(".worksImg");
    // document.addEventListener("scroll",(e) => {
    //     console.log(e)
    // })

        // console.log(worksPageMainScroll)
        //第一條timerLine homeTrust
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger:worksPageMainScroll1.value,
                start:'top top',
                end:'top 80%',
                scrub:true,
                // markers:true,
                onEnter: worksPageMainScroll_FirstOnEnter,
                // onLeave: worksPageMainScroll_FirstOnLeave,
                onEnterBack: worksPageMainScroll_FirstonEnterBack,
                // onLeaveBack: worksPageMainScroll_FirstonLeaveBack
            }
        });
        tl.to(worksPageMainScroll1.value,{
            // xPercent:60,
            // opacity:0,
        },{
        
            // xPercent:0,
            // opacity:1,
        })

        //第二條timerLine 楓茶米
        let tl2 = gsap.timeline({
            scrollTrigger:{
                trigger:worksPageMainScroll2.value,
                start:'top top',
                end:'top 80%',
                scrub:true,
                // markers:true,
                onEnter: worksPageMainScroll_SecOnEnter,
                onEnterBack: worksPageMainScroll_SecOnEnterBack,

            }
        });
        tl2.to(worksPageMainScroll2.value,{
            // xPercent:60,
            // opacity:0,
        },{
        
            // xPercent:0,
            // opacity:1,
        })

        //第三條timerLine 照片
        let tl3 = gsap.timeline({
            scrollTrigger:{
                trigger:worksPageMainScroll3.value,
                start:'top top',
                end:'top 80%',
                scrub:true,
                // markers:true,
                onEnter: worksPageMainScroll_ThirdOnEnter,
                onEnterBack: worksPageMainScroll_ThirdOnEnterBack,

            }
        });
        tl3.to(worksPageMainScroll3.value,{
            // xPercent:60,
            // opacity:0,
        },{
        
            // xPercent:0,
            // opacity:1,
        })
        //第四條timerLine 照片
        let tl4 = gsap.timeline({
            scrollTrigger:{
                trigger:worksPageMainScroll4.value,
                start:'top top',
                end:'top 80%',
                scrub:true,
                // markers:true,
                onEnter: worksPageMainScroll_fourthOnEnter,
                onEnterBack: worksPageMainScroll_fourthOnEnterBack,

            }
        });
        tl4.to(worksPageMainScroll4.value,{
            // xPercent:60,
            // opacity:0,
        },{
        
            // xPercent:0,
            // opacity:1,
        })
        
        //進入第二頁的DOM改變function
            //進入
            function worksPageMainScroll_FirstOnEnter(){
                worksImg2 = document.querySelector(".worksImg");
                // console.log('worksPageMainScroll1OnEnter')
                worksindex_GoAhandBolean.value=false;
                worksindex_HomeTrustBolean.value=true;

                worksPageintroContent.value.innerText=
                `e-2-2s車黑坡怎汁錯「至借土水而娘苦」相固貝法由造了王子食即兔國收綠嗎是封兆,
                坐像男貫叫勿；問跑幼牛貝吧姐。連得者正木新司好植：向向即世活。`
                
                worksPageSubTitle.value.innerText=`VI`;
                worksPageTitle.value.innerText=`HomeTrust`;

                videoImgControl.value=false;

                // worksImg2.src =MainImg.HomeTrust;

                // worksImg.value.src='@/assets/images/VI/VI1.jpg';
            }
            // function worksPageMainScroll_FirstOnLeave(){
            //     console.log('worksPageMainScroll1onLeave')
            // }
            //離開
            function worksPageMainScroll_FirstonEnterBack(){
                worksImg2 = document.querySelector(".worksImg");

                // console.log('worksPageMainScroll1onEnterBack')
                worksindex_GoAhandBolean.value=true;
                worksindex_HomeTrustBolean.value=false;
                worksPageintroContent.value.innerText=
                `setes車黑坡怎汁錯「至借土水而娘苦」相固貝法由造了王子食即兔國收綠嗎是封兆,
                坐像男貫叫勿；問跑幼牛貝吧姐。連得者正木新司好植：向向即世活。`
                worksPageSubTitle.value.innerText=`UI/UX`;
                worksPageTitle.value.innerText=`GoAhand`;
               
                videoImgControl.value=true;
                    //相片改變
                    // console.log(worksImg.value.src);
                    // worksImg.value.src="@/assets/images/VI/VI2.jpg";
                    // worksImgBox.value.innerHTML=`<img class="worksImg" ref="worksImg" src="@/assets/images/VI/VI2.jpg" alt="">`
                    // console.log(worksImg2.src);
                  
                    // console.log(worksImg2.src);

                    // worksImg2.src =MainImg.HomeTrust;
            }
            // function worksPageMainScroll_FirstonLeaveBack(){
            //     console.log('worksPageMainScroll1onLeaveBack')
            // }
        //

        //進入第三頁的DOM改變function
            //進入
                function worksPageMainScroll_SecOnEnter(){
                    worksImg2 = document.querySelector(".worksImg");
                    worksindex_HomeTrustBolean.value=false;
                    worksindex_MapleBolean.value=true;

                    worksPageintroContent.value.innerText=
                    `333333車黑坡怎汁錯「至借土水而娘苦」相固貝法由造了王子食即兔國收綠嗎是封兆,
                    坐像男貫叫勿；問跑幼牛貝吧姐。連得者正木新司好植：向向即世活。`

                    worksPageSubTitle.value.innerText=`VI`;
                    worksPageTitle.value.innerText=`楓茶米`;
                    worksPageTitle.value.style.fontFamily ="Noto Serif TC";
                    worksPageTitle.value.style.letterSpacing= "8.2px";

                    // worksImg2.src =MainImg.Maple;
                }
            //離開    
                function worksPageMainScroll_SecOnEnterBack(){
                    worksImg2 = document.querySelector(".worksImg");
                    worksindex_HomeTrustBolean.value=true;
                    worksindex_MapleBolean.value=false;

                    worksPageintroContent.value.innerText=
                    `e-2-2s車黑坡怎汁錯「至借土水而娘苦」相固貝法由造了王子食即兔國收綠嗎是封兆,
                    坐像男貫叫勿；問跑幼牛貝吧姐。連得者正木新司好植：向向即世活。`

                    worksPageSubTitle.value.innerText=`VI`;
                    worksPageTitle.value.innerText=`HomeTrust`;
                    worksPageTitle.value.style.fontFamily ="Noto Sans TC";
                    worksPageTitle.value.style.letterSpacing= "1.6px";

                    // worksImg2.src =MainImg.HomeTrust;
                }


        //進入第四頁的DOM改變function
            //進入
            function worksPageMainScroll_ThirdOnEnter(){
                    worksImg2 = document.querySelector(".worksImg");
                    worksindex_MapleBolean.value=false;
                    worksindex_PhotoBolean.value=true;

                    worksPageintroContent.value.innerText=
                    `44444車黑坡怎汁錯「至借土水而娘苦」相固貝法由造了王子食即兔國收綠嗎是封兆,
                    坐像男貫叫勿；問跑幼牛貝吧姐。連得者正木新司好植：向向即世活。`

                    worksPageSubTitle.value.innerText=`photo`;
                    worksPageTitle.value.innerText=`Nagi`;
                    worksPageTitle.value.style.fontFamily ="Noto Sans TC";
                    worksPageTitle.value.style.letterSpacing= "1.6px";
                        //顏色改變
                    changeColor.value=true;


                    // worksImg2.src =MainImg.Photo;


                }
            //離開    
                function worksPageMainScroll_ThirdOnEnterBack(){
                    worksImg2 = document.querySelector(".worksImg");
                    worksindex_MapleBolean.value=true;
                    worksindex_PhotoBolean.value=false;

                    worksPageintroContent.value.innerText=
                    `333333車黑坡怎汁錯「至借土水而娘苦」相固貝法由造了王子食即兔國收綠嗎是封兆,
                    坐像男貫叫勿；問跑幼牛貝吧姐。連得者正木新司好植：向向即世活。`

                    worksPageSubTitle.value.innerText=`VI`;
                    worksPageTitle.value.innerText=`楓茶米`;
                    worksPageTitle.value.style.fontFamily ="Noto Serif TC";
                    worksPageTitle.value.style.letterSpacing= "8.2px";

                    changeColor.value=false;

                    // worksImg2.src =MainImg.Maple;
                }

            //進入第五頁的DOM改變function
            //進入
            function worksPageMainScroll_fourthOnEnter(){
                    worksImg2 = document.querySelector(".worksImg");
                    worksindex_PhotoBolean.value=false;
                    worksindex_OtherBolean.value=true;

                    worksPageintroContent.value.innerText=
                    `5555555車黑坡怎汁錯「至借土水而娘苦」相固貝法由造了王子食即兔國收綠嗎是封兆,
                    坐像男貫叫勿；問跑幼牛貝吧姐。連得者正木新司好植：向向即世活。`

                    worksPageSubTitle.value.innerText=`Design`;
                    worksPageTitle.value.innerText=`other`;
                    // worksPageTitle.value.style.fontFamily ="Noto Sans TC";
                    // worksPageTitle.value.style.letterSpacing= "1.6px";
                        //顏色改變
                    changeColor.value=false;


                    // worksImg2.src =MainImg.Other;


                }
            //離開    
                function worksPageMainScroll_fourthOnEnterBack(){
                    worksImg2 = document.querySelector(".worksImg");
                    worksindex_PhotoBolean.value=true;
                    worksindex_OtherBolean.value=false;

                    worksPageintroContent.value.innerText=
                    `44444車黑坡怎汁錯「至借土水而娘苦」相固貝法由造了王子食即兔國收綠嗎是封兆,
                    坐像男貫叫勿；問跑幼牛貝吧姐。連得者正木新司好植：向向即世活。`

                    worksPageSubTitle.value.innerText=`photo`;
                    worksPageTitle.value.innerText=`Nagi`;
                    // worksPageTitle.value.style.fontFamily ="Noto Sans TC";
                    // worksPageTitle.value.style.letterSpacing= "1.6px";

                    changeColor.value=true;

                    // worksImg2.src =MainImg.Photo;
                }

        //index按鈕互動
        worksPageindexBoxGoAhand.value.addEventListener("click",()=> {
            gsap.to(window,
                {duration: 0.5, 
                scrollTo:{y:".worksPageMainScroll0" , 
                offsetY:-1}
            
            });
        })
        worksPageindexBoxHomeTrust.value.addEventListener("click",()=> {
            gsap.to(window,
                {duration: 0.5, 
                scrollTo:{y:".worksPageMainScroll1", 
                offsetY:-1}
            
            });
        })
        worksPageindexBoxMaple.value.addEventListener("click",()=> {
            gsap.to(window,
                {duration: 0.5, 
                scrollTo:{y:".worksPageMainScroll2", 
                offsetY:-1}
            
            });
        })
        worksPageindexBoxPhoto.value.addEventListener("click",()=> {
            gsap.to(window,
                {duration: 0.5, 
                scrollTo:{y:".worksPageMainScroll3", 
                offsetY:-1}
            
            });
        })
        worksPageindexBoxOther.value.addEventListener("click",()=> {
            gsap.to(window,
                {duration: 0.5, 
                scrollTo:{y:".worksPageMainScroll4", 
                offsetY:-1}
            
            });
        })
});

</script>

<template>
  <div class="worksPageMainScroll"></div>
  <div class="worksPageMainBox" ref="worksPageMainBox">
    <div class="worksPageMain">

        <NuxtLink to="/works/goAhand"    :class="['worksVideoBox',{workPageOpacity:worksindex_GoAhandBolean}]" >
            <video id="goAhandVideo" class="{worksVideo}"  ref="worksVideo" src="@/assets/video/1-1.mp4" autoplay muted loop></video>
        </NuxtLink>
        <NuxtLink to="/works/homeTrust"  :class="['worksImgBox','worksImgBox1',{workPageOpacity:worksindex_HomeTrustBolean}]" ref="worksImgBox1"  >
            <img id="homeTrustImg" class="worksImg" ref="worksImg" src="@/assets/images/VI/HomeTrust/VI.jpg" alt="">
        </NuxtLink>
        <NuxtLink to="/works/mapleTeaRice"   :class="['worksImgBox','worksImgBox2',{workPageOpacity:worksindex_MapleBolean}]" ref="worksImgBox2" >
            <img id="mapleImg" class="worksImg" ref="worksImg" src="@/assets/images/VI/Maple/VI2.jpg" alt="">
        </NuxtLink>
        <NuxtLink to="/works/photo"   :class="['worksImgBox','worksImgBox3',{workPageOpacity:worksindex_PhotoBolean}]" ref="worksImgBox3"  >
            <img id="photoImg" class="worksImg" ref="worksImg" src="@/assets/images/photo/first.jpg" alt="">
        </NuxtLink>
        <NuxtLink to="/works/other"   :class="['worksImgBox','worksImgBox4',{workPageOpacity:worksindex_OtherBolean}]" ref="worksImgBox4">
            <img id="otherImg" class="worksImg" ref="worksImg" src="@/assets/images/VI/HomeTrust/VI.jpg" alt="">
        </NuxtLink>
        <div class="worksPageTextBox">
            <div class="worksPageindexBox">
                <p id="worksPageindex1" :class="{worksPageindexAnime:worksindex_GoAhandBolean,changeSubColor:changeColor}" ref="worksPageindexBoxGoAhand">01.GoAhand</p>
                <p id="worksPageindex2" :class="{worksPageindexAnime:worksindex_HomeTrustBolean,changeSubColor:changeColor}" ref="worksPageindexBoxHomeTrust">02.HomeTrust</p>
                <p id="worksPageindex3" :class="{worksPageindexAnime:worksindex_MapleBolean,changeSubColor:changeColor}" ref="worksPageindexBoxMaple">03.楓茶米</p>
                <p id="worksPageindex4" :class="{worksPageindexAnime:worksindex_PhotoBolean ,changeColor:changeColor}" ref="worksPageindexBoxPhoto">04.Photo</p>
                <p id="worksPageindex4" :class="{worksPageindexAnime:worksindex_OtherBolean,changeSubColor:changeColor}" ref="worksPageindexBoxOther">05.other</p>
            </div>
            <div class="worksPageintroBox">
                <a :class="['worksPageintroTitle',{changeColor:changeColor}]" ref="worksPageintroTitle" href="#" >簡介</a>
                <a :class="['worksPageintroContent',{changeColor:changeColor}]" ref="worksPageintroContent" href="#">setes車黑坡怎汁錯「至借土水而娘苦」相固貝法由造了王子食即兔國收綠嗎是封兆：
                                坐像男貫叫勿；問跑幼牛貝吧姐。連得者正木新司好植：向向即世活。</a>
            </div>
            <div class="worksPageTitleBox">
                <p :class="['worksPageSubTitle',{changeColor:changeColor}]" ref="worksPageSubTitle">UI/UX</p>
                <p :class="['worksPageTitle',{changeColor:changeColor}]" ref="worksPageTitle">GoAhand</p>

            </div>
        </div>
    </div>
    <div class="worksPageMainScroll0 worksPageMainScroll" ref="worksPageMainScroll0"></div>
    <div class="worksPageMainScroll1 worksPageMainScroll" ref="worksPageMainScroll1"></div>
    <div class="worksPageMainScroll2 worksPageMainScroll" ref="worksPageMainScroll2"></div>
    <div class="worksPageMainScroll3 worksPageMainScroll" ref="worksPageMainScroll3"></div>
    <div class="worksPageMainScroll4 worksPageMainScroll" ref="worksPageMainScroll4"></div>
  </div>

</template>

<style leng="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');
body::-webkit-scrollbar {
    display: none;
}
.worksPageMainScroll0{

    position: absolute;
}
.worksPageMainScroll1{
    content: '';
    position: absolute;
    height: 1px;
    top: 40dvh;
}

.worksPageMainScroll2{
    height: 1px;
    position: absolute;
    top: 80dvh;
}

.worksPageMainScroll3{
    height: 1px;
    position: absolute;
    top: 120dvh;
}
.worksPageMainScroll4{
    height: 1px;
    position: absolute;
    top: 160dvh;
}




.worksPageMainScroll{
        position: absolute;
        height: 400dvh; 
        /* /* width: 100%; */
  
    
}
.workPageOpacity{

    /* display: flex!important; */
    opacity: 1 !important;
    z-index: 2!important;
}
.changeColor{
    color: rgb(232, 232, 232) !important;
    transition: 0.5s ease-in-out;
}
.changeSubColor{
    color: rgb(183, 183, 183) !important;
    transition: 0.5s ease-in-out;
}
.worksPageMainBox{
    height: 300dvh;
    width: 100%;
    .worksPageMain{
        height: 100dvh;
        width: 100%;
        overflow: hidden;
        position: fixed;
        /* position: absolute; */
        .worksVideoBox{
            position: absolute;
            height: 100%;
            width: 100%;

            transition-property:index,opacity;
            transition-delay: 0s,0.1s;
            transition-duration:0.8s;
            transition-timing-function: ease-in-out;

            opacity: 0;
            z-index: 1;
            /* display: none; */
            video{
                position: relative;
                width: 100%;
                height:100dvh;
                
                transition: 0.5s ease-in-out;
                /* background-position: bottom bottom; */
                object-fit:cover;
                
            }
            #goAhandVideo{
                left: 0%;

                width: 100%;
                height:100dvh;
                @media(max-width: 992px){
                    width: auto;
                    height:100dvh;
                }
                @media(max-width: 768px){
                    left: -10%;
                }
                @media(max-width: 576px){
                    left: -20%;
                }
            }
        }
        .worksImgBox{
            position: absolute;
            height: 100%;
            width: 100%;
            overflow: hidden;
            /* background-image: url("@/assets/images/VI/VI1.jpg"); */
            /* transition-property:top,transform;
                transition-delay: 0.5s,0s;
                transition-duration:1s ; */
            /* transition: display 0s ease-in-out 0s;
            transition: opacity 0.5s ease-in-out 0.1s; */
            transition-property:index,opacity;
            transition-delay: 0s,0.1s;
            transition-duration:0.8s;
            transition-timing-function: ease-in-out;
            opacity: 0;
            z-index: 1;
            /* display: none; */
            img{
                position: relative;
                width: 100%;
                height:100dvh;
                /* background-image: url("@/assets/images/VI/VI1.jpg") cover no-repeat; */

                /* background-position: bottom bottom; */
                object-fit:cover;

                transition: 0.5s ease-in-out;
            }
            #homeTrustImg{
                @media(max-width: 992px){
                width: auto;
                height:100dvh;
                }
                @media(max-width: 768px){
                    left: -10%;
                }
                @media(max-width: 576px){
                    left: -40%;
                }
            }
            #mapleImg{
                left: 0%;

            width: 100%;
            height:100dvh;
            @media(max-width: 992px){
                width: auto;
                height:100dvh;
            }
            @media(max-width: 768px){
                left: -10%;
            }
            @media(max-width: 576px){
                left: -40%;
            }
            }
            #photoImg{
                left: 0%;

                width: 100%;
                height:100dvh;
                @media(max-width: 992px){
                    width: auto;
                    height:100dvh;
                }
                @media(max-width: 768px){
                    left: -10%;
                }
                @media(max-width: 576px){
                    left: -20%;
                }
            }
            #otherImg{

            }
        }
        .worksImgBox3{

        }
        .worksPageTextBox{
            margin: 0;
            padding: 0;
            z-index: 20;
            position: absolute;
            height: 100dvh;
            width: 40%;
            /* background-color: aqua; */
            display: flex;
            flex-direction: column;

            
            .worksPageindexBox{
                width: 100%;
                height: 20%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin: 0 0 0 7%;
                cursor: pointer;
                p{
                    margin: 0;
                    padding: 0;
                    color: #5F5F5F;

                    font-family: "Noto Sans TC";
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 147.917%; /* 22.188px */
                    letter-spacing: 0.75px;
                    transform: translateX(0);
                    transition: 0.5s ease-in-out;
                }
                #worksPageindex1{
                    /* color: #000000;
                    font-weight: 500;
                    transform: translateX(-2%);
                     */
                }
                .worksPageindexAnime{
                    color: #000000;
                    font-weight: 500;
                    transform: translateX(-2%);
                    
                }

            }
            .worksPageintroBox{
                width: 100%;
                height: 60%;
                margin: 0 0 0 7%;
                display: flex;
                flex-direction: column;
                justify-content: center;

                a{
                    margin: 0;
                    padding: 0;
                    cursor: pointer;
                    text-decoration: none;
                    color: black;
                    transition: 0.5s ease-in-out;
                }
                a:nth-child(1){
                    position: relative;
                    color: #000;

                    font-family: "Noto Serif TC";
                    font-size: 28px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 147.917%; /* 59.167px */
                    letter-spacing: 25.2px;
                    @media(max-width: 992px){
                        font-size: 28px;
                    }
                    @media(max-width: 768px){
                        font-size: 26px;
                    }
                    @media(max-width: 576px){
                        font-size: 24px;
                    }
                }
                a:nth-child(2){
                    position: relative;
                    left: 3px;
                    /* height: 90%; */
                    width:200px ;

                    color: #000;

                    font-family: "Noto Serif TC";
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 190%; /* 26.6px */
                    letter-spacing: 0.7px;

                    @media(max-width: 992px){
                        font-size: 12px;
                    }
                    @media(max-width: 768px){
                        font-size: 12px;

                    }
                    @media(max-width: 576px){
                        font-size: 10px;
                        width:150px ;
                    }
                }
            }
            .worksPageTitleBox{
                width: 100%;
                height: 20%;
                margin: 0 0 0 7%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                p{
                    margin: 0;
                    padding: 0;

                    transition: 0.5s ease-in-out;
                }
                p:nth-child(1){
                    color: #000;

                    font-family: "Noto Sans TC";
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 147.917%; /* 29.583px */
                    letter-spacing: 1px;
                }
                p:nth-child(2){
                    color: #000;

                    font-family: "Noto Sans TC";
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 147.917%; /* 47.333px */
                    letter-spacing: 1.6px;
                }
            }
        }
    }
}

</style>