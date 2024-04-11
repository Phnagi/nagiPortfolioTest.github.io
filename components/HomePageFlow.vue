
<script setup>
import { gsap } from "gsap";   
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
const flow = ref(null);
onMounted(() => {
    // console.log(flow.value)
    // console.log(flow.value.childNodes);
    let flowChild = flow.value.childNodes;
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:flow.value,
            start:'-20% top',
            end:'100% 100%',
            scrub:true
        }
    })
    flowChild.forEach((child) => {
        const childSpeed = child.getAttribute('data-speed');
        tl.from(child,{
            y:50*childSpeed,
       
            duration:1
        },0)
    });
});
</script>
<template>
    <div class="flowbox" >
        <p class="flowTitle">攝影作品</p>
        <div class="flow" ref="flow">
            <NuxtLink href="" class="flowImgBox" id="fl-1" data-speed="1">
                <img src="@/assets/images/photo/1.jpg" alt="">
            </NuxtLink>
            <NuxtLink href="" class="flowImgBox" id="fl-2" data-speed="2">
                <img src="@/assets/images/photo/first.jpg" alt="">
            </NuxtLink >
            <NuxtLink href="" class="flowImgBox" id="fl-3" data-speed="3">
                <img src="@/assets/images/photo/3.jpg" alt="">
            </NuxtLink>
            <NuxtLink href="" class="flowImgBox" id="fl-4" data-speed="6">
                <img src="@/assets/images/photo/4.jpg" alt="">
            </NuxtLink>
            <NuxtLink href="" class="flowImgBox" id="fl-5" data-speed="4">
                <img src="@/assets/images/photo/5.jpg" alt="">
            </NuxtLink >
            <NuxtLink href="" class="flowImgBox" id="fl-6" data-speed="10">
                <img src="@/assets/images/photo/6.jpg" alt="">
            </NuxtLink>
            <NuxtLink href="" class="flowImgBox" id="fl-7" data-speed="7">
                <img src="@/assets/images/photo/7.jpg" alt="">
            </NuxtLink>
            <NuxtLink href="" class="flowImgBox" id="fl-8" data-speed="5">
                <img src="@/assets/images/photo/8.jpg" alt="">
            </NuxtLink >
            <NuxtLink href="" class="flowImgBox" id="fl-9" data-speed="8">
                <img src="@/assets/images/photo/9.jpg" alt="">
            </NuxtLink>
            <NuxtLink href="" class="flowImgBox" id="fl-10" data-speed="10">
                <img src="@/assets/images/photo/10.jpg" alt="">
            </NuxtLink>
            <NuxtLink href="" class="flowImgBox" id="fl-11" data-speed="7">
                <img src="@/assets/images/photo/11.jpg" alt="">
            </NuxtLink >
            <NuxtLink to="/works/photo" class="flowImgBox" id="fl-12" data-speed="5">
                <div class="flowPBox">
                    <p>更多</p>
                </div>

            </NuxtLink>
        </div>
    </div>

</template>

<style leng="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');
.flowbox{

    position: relative;
    background-color: #F5F5F5;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .flowTitle{
        overflow: hidden;
        width: 86%;
        display: flex;

        align-items: flex-end;
        height: 15dvh;
        position: relative;
        padding: 0;
        margin: 0;
        font-family: "Noto Serif TC";
        font-size: 30px;
        font-style: normal;
        font-weight:500;

        letter-spacing: 24.84px;
    }
    .flow{
        margin: 2% 0 2% 0;
        width: 86%;
        height: 200dvh;
        overflow: hidden;
        display: grid;
        grid-column-gap: 3%;
        grid-row-gap: 2%;
        grid-template-columns: repeat(3, 1fr);
        /* grid-template-row: repeat(10, 1fr); */
        grid-auto-rows: 1fr;
        grid-template-areas: 
            "fl-1 .    fl-2"
            "fl-1 fl-3 fl-2"
            "fl-1 fl-3 fl-2"
            "fl-5 fl-3 fl-4"
            "fl-5 fl-6 fl-6"
            "fl-7 fl-6 fl-6"
            "fl-7 fl-8 fl-10"
            "fl-9 fl-8 fl-10"
            "fl-9 fl-8 fl-10"
            "fl-11 fl-11 fl-10"
            "fl-11 fl-11 fl-12";
        @media(max-width: 576px){
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 1fr;
        grid-template-areas: 
            "fl-1 fl-2"
            "fl-1 fl-2"
            "fl-1 fl-3"
            "fl-4 fl-3"
            "fl-4 fl-5"
            "fl-6 fl-5"
            "fl-6 fl-5"
            "fl-6 fl-7"
            "fl-8 fl-7"
            "fl-8 fl-7"
            "fl-8 fl-9"
            "fl-10 fl-9"
            "fl-10 fl-9"
            "fl-11 fl-9"
            "fl-11 fl-12";
        }
        .flowImgBox{
            width: 100%;
            height: 100%;
            border-radius: 20px;
            overflow: hidden;
            text-decoration: none;
            
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 20px;
                transition: 0.5s ease-in-out;
                filter:grayscale(90%);
                transform: scale(1);
            }
            .flowPBox{
                padding: 0;
                margin: 0;
                width: 100%;
                height: 100%;
                background-color: #ffffff;
                border-radius: 20px;
                display: flex;
                justify-content: center;
                align-items: center;

                color: #000;

                font-family: "Noto Serif TC";
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 140%; /* 50.4px */
                letter-spacing: 16px;


                p{
                    opacity: 0;
                    transform: translateX(-20px);
                    transition: 0.5s ease-in-out;

                }
            }
            &:hover{

                img{
                    position: relative;
                    width: 100%;
                    transform: scale(0.9);
                    filter:grayscale(0%);
                }
                .flowPBox{

                    p{
                        transform: translateX(0px);
                        opacity: 1;
                    }
                }
            }
        }
        #fl-1{
            grid-area: fl-1;
        }
        #fl-2{
            grid-area: fl-2;
        }
        #fl-3{
            grid-area: fl-3;
        }
        #fl-4{
            grid-area: fl-4;
            img{
                object-position: 50% 20%;
            }
        }
        #fl-5{
            grid-area: fl-5;
        }
        #fl-6{
            grid-area: fl-6;
            img{
                object-position: 50% 60%;
            }

        }
        #fl-7{
            grid-area: fl-7;
        }
        #fl-8{
            grid-area: fl-8;
        }
        #fl-9{
            grid-area: fl-9;
        }
        #fl-10{
            grid-area: fl-10;
        }
        #fl-11{
            
            grid-area: fl-11;
            img{
                object-position: 50% 40%;
            }
        }
        #fl-12{
            grid-area: fl-12;
        }
        
    }

}


</style>