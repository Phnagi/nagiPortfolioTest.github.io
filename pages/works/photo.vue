<script setup>
import Footer from '@/components/Footer.vue';

import img0 from "@/assets/images/photo/first.jpg";
import img1 from "@/assets/images/photo/1.jpg";
import img2 from "@/assets/images/photo/2.jpg";
import img3 from "@/assets/images/photo/3.jpg";
import img4 from "@/assets/images/photo/4.jpg";
import img5 from "@/assets/images/photo/5.jpg";
import img6 from "@/assets/images/photo/6.jpg";
import img7 from "@/assets/images/photo/7.jpg";
import img8 from "@/assets/images/photo/8.jpg";
import img9 from "@/assets/images/photo/9.jpg";
import img10 from "@/assets/images/photo/10.jpg";
import img11 from "@/assets/images/photo/11.jpg";
import img12 from "@/assets/images/photo/12.jpg";
import img13 from "@/assets/images/photo/13.jpg";
import img14 from "@/assets/images/photo/14.jpg";
import img15 from "@/assets/images/photo/15.jpg";
import img16 from "@/assets/images/photo/16.jpg";
import img17 from "@/assets/images/photo/17.jpg";
import img18 from "@/assets/images/photo/18.jpg";
import img19 from "@/assets/images/photo/19.jpg";
import img20 from "@/assets/images/photo/20.jpg";
import img21 from "@/assets/images/photo/21.jpg";
import img22 from "@/assets/images/photo/22.jpg";
import img23 from "@/assets/images/photo/23.jpg";
import img24 from "@/assets/images/photo/24.jpg";
import img25 from "@/assets/images/photo/25.jpg";
import img26 from "@/assets/images/photo/26.jpg";
import img27 from "@/assets/images/photo/27.jpg";
import img28 from "@/assets/images/photo/28.jpg";
import img29 from "@/assets/images/photo/29.jpg";
import img30 from "@/assets/images/photo/30.jpg";

import people1 from "@/assets/images/photo/people/people1.jpg";
import people2 from "@/assets/images/photo/people/people2.jpg";
import people3 from "@/assets/images/photo/people/people3.jpg";
import people4 from "@/assets/images/photo/people/people4.jpg";
import people5 from "@/assets/images/photo/people/people5.jpg";
import people6 from "@/assets/images/photo/people/people6.jpg";
import people7 from "@/assets/images/photo/people/people7.jpg";
import people8 from "@/assets/images/photo/people/people8.jpg";
import people9 from "@/assets/images/photo/people/people9.jpg";
import people10 from "@/assets/images/photo/people/people10.jpg";
import people11 from "@/assets/images/photo/people/people11.jpg";

import { gsap } from "gsap";   
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
const footer = ref(null);
//direction:true=v
// import {onBeforeMonut} from 'vue'

let photoList = reactive([
        {
            src:img0,
            name:0,
            direction:false,

        },
        {
            src:img1,
            name:1,
            direction:true,

        },{
            src:img2,
            name:2,
            direction:true,
        },{
            src:img3,
            name:3,
            direction:false,
        },{
            src:img4,
            name:4,
            direction:false,
        },{
            src:img5,
            name:5,
            direction:false,
        },{
            src:img6,
            name:6,
            direction:false,
        },{
            src:img7,
            name:7,
            direction:true,
        },{
            src:img8,
            name:8,
            direction:true,
        },{
            src:img9,
            name:9,
            direction:true,
        },{
            src:img10,
            name:10,
            direction:false,
        },{
            src:img11,
            name:11,
            direction:true,
        },{
            src:img12,
            name:12,
            direction:true,
        },{
            src:img13,
            name:13,
            direction:true,
        },{
            src:img14,
            name:14,
            direction:true,
        },{
            src:img15,
            name:15,
            direction:true,
        },{
            src:img16,
            name:16,
            direction:true,
        },{
            src:img17,
            name:17,
            direction:true,
        },{
            src:img18,
            name:18,
            direction:false,
        },{
            src:img19,
            name:19,
            direction:true,
        },{
            src:img20,
            name:20,
            direction:false,
        },{
            src:img21,
            name:21,
            direction:false,
        },{
            src:img22,
            name:22,
            direction:false,
        },{
            src:img23,
            name:23,
            direction:false,
        },{
            src:img24,
            name:24,
            direction:true,
        },{
            src:img25,
            name:25,
            direction:true,
        },{
            src:img26,
            name:26,
            direction:true,
        },{
            src:img27,
            name:27,
            direction:true,
        },{
            src:img28,
            name:28,
            direction:true,
        },{
            src:img29,
            name:29,
            direction:true,
        },{
            src:img30,
            name:30,
            direction:false,
        }
    ]);

let photoPeopleList = reactive([
        {
            src:people1,
            name:people1,
            direction:true,

        },{
            src:people2,
            name:people2,
            direction:true,
        },{
            src:people3,
            name:people3,
            direction:true,
        },{
            src:people4,
            name:people4,
            direction:true,
        },{
            src:people5,
            name:people5,
            direction:true,
        },{
            src:people6,
            name:people6,
            direction:true,
        },{
            src:people7,
            name:people7,
            direction:true,
        },{
            src:people8,
            name:people8,
            direction:true,
        },{
            src:people9,
            name:people9,
            direction:false,
        },{
            src:people10,
            name:people10,
            direction:true,
        },{
            src:people11,
            name:people11,
            direction:true,
        },
])
let photoFinalList = photoList;
// console.log(photoFinalList[0])

// let photoList = reactive({});

let HandlePhotoSelect = ref(false);
let phselect = ref(null);
let phSelectTextList = reactive(["街拍","人像"])
let phSelectTextOne=ref("街拍");
let phSelectTextTwo=ref("人像");
let footerReload = ref(false);
let tl =null
function HandlePhotoSelectFn(){
    HandlePhotoSelect.value = !HandlePhotoSelect.value
    // console.log(HandlePhotoSelect.value)
}
function switchPhSelectTextFn(){
    if(phSelectTextOne.value =="街拍"){
        phSelectTextOne.value = "人像";
        phSelectTextTwo.value = "街拍";
        photoFinalList = photoPeopleList;
        footerReload.value=true;
        reloadTl();

        // console.log(photoFinalList);
    }else if(phSelectTextOne.value =="人像"){
        phSelectTextOne.value = "街拍";
        phSelectTextTwo.value = "人像";
        photoFinalList = photoList;
        footerReload.value=true;
        reloadTl();
        // console.log(photoFinalList);
    }
}
function reloadTl(){
        tl = gsap.timeline({
            scrollTrigger:{
                trigger:footer.value,
                start:'-60% top',
                end:'20% 20%',
                scrub:true,
                // markers:true,
            }
        });
        tl.fromTo(footer.value,{
            xPercent:60,
            opacity:0,
        },{
        
            xPercent:0,
            opacity:1,
        })
}
// let a=null;
// let handleFooterRelodFn =(test) =>{
//     a = test
// }
onMounted(() =>{
    // console.log(list.photoList);

    // watch(photoFinalList[0],(newIdx,oldIdx)=>{
    //     console.log(newIdx,oldIdx)
    // });

    // handleFooterRelodFn()
    // console.log(a);

     tl = gsap.timeline({
            scrollTrigger:{
                trigger:footer.value,
                start:'-60% top',
                end:'20% 20%',
                scrub:true,
                // markers:true,
            }
        });


        tl.fromTo(footer.value,{
            xPercent:60,
            opacity:0,
        },{
        
            xPercent:0,
            opacity:1,
        })



});

</script>

<template>
    <Header/>
        <!-- <div class="worksChildPhotoBox"  style="margin-top: 7%;">
            <img class="" src="@/assets/images/photo/first.jpg" alt="">
        </div> -->
        <div class="photoSelectBox" >
            <input type="checkbox" id="checkPhoto" >
            <label class="phselect" for="checkPhoto" ref="phselect" @click="HandlePhotoSelectFn">
                    <p id="selectText">{{phSelectTextOne}}</p>
                    <!-- <p id="people">人像</p> -->
                    <div :class="['phselectList',{phselectList_handle:HandlePhotoSelect}]" >
                        <p id="selectListOne" @click="switchPhSelectTextFn">{{phSelectTextTwo}}</p>
                        <!-- <p id="selectListTwo">人像</p> -->
                    </div>
            </label>

        </div>
        <div v-for="(item,idx) in photoFinalList" :key="item.name" class="worksChildPhotoBox"  >
            <img :class="{worksChildPhotoV:item.direction}" :src="item.src" alt="">
        </div>

        <!-- <div class="worksChildPhotoBox">
            <img class="worksChildPhotoV" src="@/assets/images/photo/1.jpg" alt="">
        </div>

        <div class="worksChildPhotoBox">
            <img class="" src="@/assets/images/photo/3.jpg" alt="">
        </div>
        <div class="worksChildPhotoBox">
            <img class="" src="@/assets/images/photo/4.jpg" alt="">
        </div>
        <div class="worksChildPhotoBox">
            <img class="" src="@/assets/images/photo/5.jpg" alt="">
        </div>
        <div class="worksChildPhotoBox">
            <img class="" src="@/assets/images/photo/6.jpg" alt="">
        </div>
        <div class="worksChildPhotoBox">
            <img class="worksChildPhotoV" src="@/assets/images/photo/7.jpg" alt="">
        </div> -->


    <!-- <Footer/> -->

    <footer >
        <div class="footerBox" ref="footer">
            <div class="footerTittleBox">
                <div class="footerTittleTop">
                    <p>CHUN-CHIEH<br>LIANG</p>
                </div>
                <div class="footerTittleBottom">
                    <p>UI/UX</p>
                    <p>photography</p>
                    <p>Front-End Developer</p>
                </div>
            
            </div>
        <div class="footerContentBox">
            
            <ul class="footerContentIndex">
                <li><NuxtLink to="/">首頁</NuxtLink></li>
                <li><NuxtLink to="/about">關於</NuxtLink></li>
                <li><NuxtLink to="/works">作品</NuxtLink></li>
                <li><NuxtLink to="/contact">聯絡</NuxtLink></li>
            </ul>
            <div class="footerContentsocial">
                <p>Email </p>
                <p>angus.5267@gmail.com</p>
                <p>IG </p>
                <p>Phnagi</p>
            </div>
           
        </div>
        <div class="footerLineBox">
            <div class="footerLineImgBox">
                <img src="@/assets/images/my_qrcode.jpg" alt="">
            </div>
            <p>Line</p>
        </div>
        </div>



    </footer>
</template>

<style leng="scss" scoped>

    .phselectList_handle{
        display: flex !important;
        opacity: 1 !important;
        transform: scaleY(1) !important;
    }
    .photoSelectBox{
        width: 100%;
        height: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* margin:10% 0% 10% 0% ; */
        overflow: hidden;
        #checkPhoto{
            opacity: 0;
            &:checked+.phselect{
                .phselectList{
                    /* display: flex;
                    opacity: 1;
                    transform: scaleY(1); */
                }
                #selectText{
                    &::before{

                    left: 110px;

                }
                &::after{

                    left: 110px;

                }
                }
            }
        }
        .phselect{
            cursor: pointer;
            position:relative;
            z-index: 2;
            margin:2% 0% 2% 0% ;
            width: 200px;
            height: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 1px  rgb(46, 46, 46) solid;
            /* padding: 5px 0px 5px 0px; */
            
            p{
                

                margin: 0;
                padding: 0;
                font-family: "Noto Serif TC";
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 190%; /* 38px */
                letter-spacing: 15px;
                padding-left: 15px;
            }
            #selectText{
                position:relative;
                
                top: 0;


                &::before{
                    position: absolute;
                    content: '';
                    height: 16px;
                    width: 1.5px;
                    background-color: rgb(46, 46, 46) ;
                    top: 8px;
                    left: 115.5px;
                    transform: rotate(45deg);
                    transition: 0.5s ease-in-out;
                }
                &::after{
                    position: absolute;
                    content: '';
                    height: 16px;
                    width: 1.5px;
                    background-color: rgb(46, 46, 46) ;
                    top: 8px;
                    left: 104.5px;
                    transform: rotate(-45deg);
                    transition: 0.5s ease-in-out;
                }
            }

            .selectText{

            }
            .phselectList{
                background-color: #F5F5F5;
                position:absolute;
                top: 39px;
                /* height: 200px; */
                z-index: 2;
                /* margin:2% 0% 2% 0% ; */
                width: 200px;
                height: 40px;
                display: flex;
                flex-direction: column;
                /* justify-content: center; */
                align-items: center;
                border: 1px  rgb(46, 46, 46) solid;
                border-top: none;
                /* padding: 5px 0px 10px 0px; */
                /* display: none; */

                opacity: 0;
                transform: scaleY(0);
                transform-origin:top center;
                transition: 0.5s ease-in-out;

                .selectListOne{
                    position: relative;
     

                }
                .selectListTwo{

                }

            }

            &:hover{

            }

        }
    }


    .worksChildPhotoBox{
        /* margin-top: 10%; */
        position: relative;
        /* margin-bottom: 10%; */
        width: 100%;
        height: auto;
        /* height: 70dvh; */
        display: flex;
        justify-content: center;

        overflow: hidden;
        @media(max-width: 768px){
            margin-top: 0%;
            margin-bottom: 10%;
            align-items: flex-start;
        }
        /* @media(max-width: 576px){
            margin: 0% 0% 0% 0%;
            justify-content: flex-start; 
            align-items: flex-start;
        } */
        img{
            display: flex;
            align-items: flex-start;
            width:900px;
            height: auto;
            /* object-fit: cover; */
            @media(max-width: 992px){
                width:80%;

            }
            @media(max-width: 768px){
                width:100%;

                
            }
        }
        .worksChildPhotoV{
            width:auto;
            height: 90dvh;
    }

    }


    .worksChildPhotoBox+.worksChildPhotoBox{

        margin-top: 15%; 
        margin-bottom: 15%;
    }
</style>
