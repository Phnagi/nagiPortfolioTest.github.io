<script setup>
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
import { gsap } from "gsap";   
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
//direction:true=v
// import {onBeforeMonut} from 'vue'

let photoList = reactive([
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

// let photoList = reactive({});
onMounted(() =>{
    // console.log(list.photoList);
    // photoList = reactive([
    //     {
    //         name:1,
    //         direction:true,

    //     },{
    //         name:2,
    //         direction:true,
    //     },{
    //         name:3,
    //         direction:false,
    //     },{
    //                     name:4,
    //         direction:false,
    //     },{
    //                     name:5,
    //         direction:false,
    //     },{
    //                     name:6,
    //         direction:false,
    //     },{
    //                     name:7,
    //         direction:false,
    //     },{
    //                     name:8,
    //         direction:false,
    //     },{
    //                     name:9,
    //         direction:true,
    //     },{
            
    //         name:10,
    //         direction:false,
    //     },{
            
    //         name:11,
    //         direction:true,
    //     },{
            
    //         name:12,
    //         direction:true,
    //     },{
            
    //         name:13,
    //         direction:true,
    //     },{
            
    //         name:14,
    //         direction:true,
    //     },{
            
    //         name:15,
    //         direction:true,
    //     },{
            
    //         name:16,
    //         direction:true,
    //     },{
            
    //         name:17,
    //         direction:true,
    //     },{
            
    //         name:18,
    //         direction:false,
    //     },{
            
    //         name:19,
    //         direction:true,
    //     },{
            
    //         name:20,
    //         direction:false,
    //     },{
            
    //         name:21,
    //         direction:false,
    //     },{
            
    //         name:22,
    //         direction:false,
    //     },{
            
    //         name:23,
    //         direction:false,
    //     },{
            
    //         name:24,
    //         direction:true,
    //     },{
            
    //         name:25,
    //         direction:true,
    //     },{
            
    //         name:26,
    //         direction:true,
    //     },{
            
    //         name:27,
    //         direction:true,
    //     },{
            
    //         name:28,
    //         direction:true,
    //     },{
            
    //         name:29,
    //         direction:true,
    //     },{
            
    //         name:30,
    //         direction:false,
    //     }
    // ]);


});

</script>

<template>
    <Header/>
        <div class="worksChildPhotoBox"  style="margin-top: 7%;">
            <img class="" src="@/assets/images/photo/first.jpg" alt="">
        </div>

        <div v-for="(item,idx) in photoList" :key="item.name" class="worksChildPhotoBox"  >
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


    <Footer/>
</template>

<style leng="scss" scoped>
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
