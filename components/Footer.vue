<script setup>
import { gsap } from "gsap";   
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
const footer = ref(null);

onMounted(() => {
        let tl = gsap.timeline({
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');
footer{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
    background-color: #F5F5F5;
    .footerBox{
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        overflow: hidden;
        @media(max-width: 762px){
                flex-direction: column;
        }
        .footerTittleBox{
            width: 24%;
            height: 100dvh;
            /* background-color: beige; */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @media(max-width: 762px){
                height: 20dvh;
                width: 86%;
            }
            .footerTittleTop{
                width: 100%;
                margin: 15% 0 0% 0;
                @media(max-width: 762px){
                    margin: 8% 0 2% 0;
                }
                p{
                    width: 150%;
                    margin:0;
                    padding: 0;

                    color: #000;
                    font-family: "Noto Sans TC";
                    font-size: 40px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 140%; /* 67.2px */
                    letter-spacing: 4.8px;
                    @media(max-width: 992px){
                        font-size: 36px;
                    }
                    @media(max-width: 762px){
                        font-size: 32px;
                    }
                    @media(max-width: 390px){
                        font-size: 20px;
                    }


                }
                
            }
            .footerTittleBottom{
                margin: 0 0 15% 0;
                @media(max-width: 762px){
                    margin: 0 0 2% 0;
                }
                p{
                    margin: 0;
                    padding: 0;

                    color: #000;

                    font-family: "Noto Sans TC";
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 147.917%; /* 29.583px */
                    letter-spacing: 1px;
                    @media(max-width: 992px){
                            font-size: 14px;
                    }
                    @media(max-width: 762px){
                        font-size: 14px;
           
                    }
                    @media(max-width: 390px){
                        font-size: 12px;
                        line-height: 130%;
                    }
                }
                p+p{
                    margin: 3% 0 0% 0;
                    @media(max-width: 762px){
                        margin: 1% 0 0% 0;
                    }
                }
            }
        
        }
        .footerContentBox{
            width: 24%;
            /* background-color: beige; */
            height: 100dvh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            @media(max-width: 762px){
                height: 40dvh;
                width: 86%;
                justify-content: center;
                
            }
            .footerContentIndex{
                margin: 0;
                padding: 0;
                height: 15%;
                /* background-color: rgb(183, 183, 80); */
                width: 100%;
                list-style: none;
                /* display: flex;
                flex-direction: ; */
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                @media(max-width: 762px){
                    height: 55%;
                }
                li{
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    a{
                        width: 100%;
                        position: relative;
                        margin: 0;
                        padding: 0;
                        text-decoration: none;

                        color: #000;

                        font-family: "Noto Serif TC";
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 147.917%; /* 29.583px */
                        letter-spacing: 8px;
                        left: 0px;
                        transition: 0.5s ease-in-out;

                        @media(max-width: 992px){
                            font-size: 14px;
                        }
                        &:hover{
                            color: #868686;
                            left: 10px;

                        }
                    }


                }   
                li+li{
                    margin: 3% 0 0% 0;
                    @media(max-width: 992px){
                        margin: 8% 0 0% 0;
                    }
                    @media(max-width: 762px){
                        margin: 2% 0 0% 0;
                    }
                }

            }
            .footerContentsocial{
                height: 20%;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                @media(max-width: 762px){
                    height: 20%;
                }
                p{
                    color: #000;

                    font-family: "Noto Sans TC";
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 147.917%; /* 29.583px */
                    letter-spacing: 2px;
                    padding: 0;
                    margin: 0;

                    @media(max-width: 992px){
                        font-size: 14px;
                    }
                    
                }
                p+p{
                    margin: 3% 0 0% 0;
                    @media(max-width: 762px){
                        margin: 1% 0 0% 0;
                    }
                }
            }
        }
        .footerLineBox{
            position: relative;
            width: 24%;
            height: 100dvh;
            /* background-color: beige; */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            @media(max-width: 762px){
                height: 40dvh;
                width: 86%;
            }
            .footerLineImgBox{
                width: 23dvw;
                height: 23dvw;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
                background-color: #F5F5F5;
                margin: 0% 0 0 0;
                @media(max-width: 762px){
                    width: 40dvw;
                    height: 40dvw;
                
                }
                @media(max-width: 575px){
                    width: 50dvw;
                    height: 50dvw;
                
                }
                img{
                    width: 100%;
                    object-fit: cover; 
                    /* background: url("@/assets/images/my_qrcode.jpg") ;

                    mix-blend-mode: darken; */

                    mix-blend-mode: darken;
                }
            }
            p{
                width: 100%;
                height: 15%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0;
                padding: 0;

                color: #000;

                font-family: "Noto Sans TC";
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 147.917%; /* 29.583px */
                letter-spacing: 1px;
                font-size: 16px;

                
                @media(max-width: 992px){
                        font-size: 14px;
                        height: 5%;
                        margin: 0 0 20% 0;
                        /* background-color: aqua; */
                }
                @media(max-width: 762px){
                        font-size: 14px;
                        height: 5%;
                        margin: 0 0 3% 0;
                        /* background-color: aqua; */
                }
            }
        }
    }

}

</style>