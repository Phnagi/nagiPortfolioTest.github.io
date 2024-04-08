
<script setup>
import { gsap } from "gsap";   
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// onMounted(() => {

//     let secWorkChild = secWork.value.childNodes;
//     const tl = gsap.timeline({
//         scrollTrigger:{
//             trigger:secWork.value,
//             start:'-20% top',
//             end:'100% 100%',
//             scrub:true
//         }
//     });
//     secWorkChild.forEach((child) => {
//         const childSpeed = child.getAttribute('data-speed');
//         tl.from(child,{
//             y:50*childSpeed,
       
//             duration:1
//         },0)
//     });

// });

</script>
<template>
    <slot name="SecontWork">

        <div class="sec" >
                <div class="secWork">
                    <a href="#" class="secWorkVideoBox" data-speed="10">
                        <img src="@/assets/images/VI/HomeTrust/VI.jpg" alt="">
                    </a>
                    <a href="#" class="secWorkContentBox" data-speed="5">
                        <p class="secWorkSubTitle">VI</p>
                        <p class="secWorkTitle">HomeTrust</p>

                        <div class="secWorkMore">更多</div>


                    </a>
                </div>
        </div>
    </slot>
    
</template>

<style leng="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');
.sec{
    margin: 2% 0% 2% 0%;
    .secWork{
        left: 7%;
        position: relative;
        width: 86%;
        height: 35dvh;
        overflow: hidden;
        background-color: #F5F5F5;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        border-radius: 0px;
        @media(max-width: 1420px){
            height: 30dvh;
        }
        @media(max-width: 1200px){
            height: 25dvh;
        }
        @media(max-width: 992px){
            height: 20dvh;
        }
        @media(max-width: 768px){
            height: 80dvh;
            flex-direction: column;
            justify-content: space-evenly;
        }
        &:hover{
            background-color: #b7b7b7;
            border-radius: 20px;
            @media(max-width: 768px){
                border-radius: 0px;
                background-color: #F5F5F5;
            }
            .secWorkVideoBox{
                border-radius: 20px;

                img{
                    filter: grayscale(0%);
                    transform: scale(1);
                }
            }
            .secWorkContentBox{
                .secWorkSubTitle{

                    @media(min-width: 769px){
                        font-size: 24px;
                    }
                }

                .secWorkTitle{
                    @media(min-width: 769px){
                        font-size: 40px;
                    }

                }
                .secWorkMore{
                    @media(min-width: 769px){
                        transform: translateX(0px);
                        opacity: 1;
                    }

                }
            }
        }
        .secWorkVideoBox{
            transition: 0.3s ease-in-out;
            position: relative;
            width: 33%;
            height: 100%;
            /* background-color: rgb(146, 87, 146); */
            /* overflow: hidden; */

            @media(max-width: 768px){
                width: 100%;
                height: 60%;
            }
            
            @media(max-width: 576px){
                width: 100%;
                height: 45%;
            }
            img{
                /* width: 100%; */
                position: relative;
                width: 100%;
                height: 100%;
                object-fit: cover;
                filter: grayscale(90%);
                transform: scale(1.05);
                transition: 0.4s ease-in-out;
                
            }
        }
        .secWorkContentBox{
            
            position: relative;
            width:60%;
            height: 100%;
            text-decoration: none;
            color: #000;
            /* background-color: rgb(255, 68, 255); */
            overflow: hidden;
            display: flex;
            flex-direction: column;
            @media(max-width: 768px){
                width: 100%;
                height: 28%;
            }
            @media(max-width: 576px){
                width: 100%;
                height: 28%;
            }
            .secWorkSubTitle{
                padding: 0 0 0 0;
                margin: 1% 0 0 0;
                width: 100%;
                height: 15%;
                /* background-color: rgb(212, 157, 212); */
                display: flex;
                color: #000;

                font-family: "Noto Sans TC";
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 190%; /* 38px */
                letter-spacing: 3.2px;

                transition: 0.4s ease-in-out;

                @media(max-width: 768px){
                    font-size: 16px;
                }
            }
            .secWorkTitle{

                padding: 0;
                margin: 0;
                width: 100%;
                height: 65%;
                color: #000;
                /* background-color: rgb(212, 157, 212); */
                font-family: "Noto Sans TC";
                font-size: 36px;
                font-style: normal;
                font-weight: 400;
                line-height: 140%; /* 50.4px */
                letter-spacing: 5.76px;
                display: flex;

                transition: 0.4s ease-in-out;
                @media(max-width: 768px){
                    font-size: 28px;

                }

            }
            .secWorkMore{
                    padding: 0;
                    margin: 0 0 2% 0;
                    width: 97%;
                    height:20%;

                    transform: translateX(0px);
                    transition: 0.4s ease-in-out;
                    display: flex;
                    opacity: 1;
                    justify-content: flex-end;
                    align-items: flex-end;
                    
                    @media(min-width: 769px){
                        transform: translateX(-20px);
                        transition: 0.4s ease-in-out;
                        opacity: 0;
                    }
                    color: #000;
                    font-family: "Noto Serif TC";
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 140%; /* 28px */
                    letter-spacing: 13.8px;
            }
            .secWorkMorebox{
                padding: 0;
                margin: 0;
                width: 100%;
                height: 20%;
                text-decoration: none;


            }

        }
    }
}

</style>