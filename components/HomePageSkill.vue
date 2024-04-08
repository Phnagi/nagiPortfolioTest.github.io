
<script setup>
import Lenis from '@studio-freight/lenis'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const HomePageSkill = ref(null);
const HomePageSkillTitle = ref(null);
const skillBox = ref(null);
const EducationBox = ref(null);

onMounted(() => {
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger:HomePageSkill.value,
                start:'-60% top',
                end:'20% 20%',
                scrub:true,


                // markers:true,
            }
        });
        tl.fromTo(HomePageSkillTitle.value,{
            xPercent:10,
            opacity:0,

        },{
        
            xPercent:0,
            opacity:1,
            duration:15,
            ease: "power1.out"
        })
        
        tl.fromTo(skillBox.value,{
            xPercent:10,
            opacity:0,
        },{
        
            xPercent:0,
            opacity:1,
            duration:15,
            ease: "power1.out"
        })

        tl.fromTo(EducationBox.value,{
            xPercent:10,
            opacity:0,
        },{
        
            xPercent:0,
            opacity:1,
            duration:15,
            ease: "power1.out"
        })

    });

</script>
<template>

    <div class="HomePageSkill" ref="HomePageSkill">
        <p class="HomePageSkillTitle" ref="HomePageSkillTitle">其他</p>
        <div class="skillBox" ref="skillBox">
            <div class="skillTitle">
                <p>UX/UI</p>
                <p>Front-End Developer</p>
                <p>photography</p>

            </div>
            <div class="codingSkillBox">
                <div class="codingSkillTitle">
                    <p>程式</p>
                </div>
                <div class="codingSkillContent">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>SCSS</p>
                    <p>Bootstrap5</p>
                    <p>javascript</p>
                    <p>Vue3</p>

                </div>
            </div>
            <div class="softSkillBox">
                <div class="softSkillTitle">
                    <p>軟體</p>
                </div>
                <div class="softSkillContent">
                    <p>Figma</p>
                    <p>illustrator</p>  
                    <p>Photoshop</p>    
                    <p>Lightroom</p>    
                    <p>PremierePro</p>    
                    <p>DaVinci Relve</p>    
                    <p>Visual Studio Code</p>     

                </div>
            </div>
        </div>

        <div class="EducationBox" ref="EducationBox">
            <div class="EducationTitle">
                <p>UX/UI</p>
                <p>Front-End Developer</p>
                <p>photography</p>

            </div>
            <div class="heightSchooldegreeBox">
                <div class="heightSchooldegreeTitle">
                    <p>2019</p>
                    <p>2021</p>
                </div>
                <div class="heightSchooldegreeContent">
                    <p>桃園市中壢區中央大學</p>
                    <p>附屬中壢高級中學</p>
                </div>
            </div>
            <div class="universitydegreeBox">
                <div class="universitydegreeTitle">
                    <p>2021</p>
                    <p>now</p>
                </div>
                <div class="universitydegreeContent">
                    <p>銘傳大學數位媒體設計</p>
                    <p>學系</p>
                    

                </div>
            </div>
        </div>
    </div>
</template>

<style leng="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');
    .HomePageSkill{
        position: relative;
        width: 100%;
        overflow: hidden;
        background-color: #F5F5F5;
        display: flex;
        flex-direction:column ;
        justify-content: center;
        align-items: center;
        margin-bottom: 10dvh;

        .HomePageSkillTitle{
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
        .skillBox{
            position: relative;
            width: 86%;
            height: 30dvh;
            display: flex;

            margin: 2% 0 2% 0;
            @media(max-width: 576px){
                flex-direction:column;
                width: 86%;
                height: 55dvh;

            }
            .skillTitle{
                width: 60%;
                height: 100%;
                /* background-color: rgb(186, 135, 69); */
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-start;

                @media(max-width: 576px){
                    justify-content: center;
                    align-items: flex-start;
                    
                    /* width: 100%; */
                    
                }

                p{
                    margin: 0;

                    color: #000;

                    font-family: "Noto Sans TC";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 147%; /* 29.583px */
                    letter-spacing: 1px;
                    @media(max-width: 768px){
                            font-size: 12px;
                    }
                }
            }
            .codingSkillBox{
                width: 20%;
                height: 100%;
                /* background-color: aqua; */
                margin-right: 0%;
                @media(max-width: 992px){
                    width: 30%;
                }
                @media(max-width: 768px){
                    width: 42%;
                }
                @media(max-width: 576px){
                    width: 100%;
                   
                }
                .codingSkillTitle{
                    width: 100%;
                    height:45%;
                    display: flex;
                    flex-direction: column;
                    justify-content:  center;
                    align-items: flex-end;
                    margin: 0;
                    padding: 0;
                    @media(max-width: 576px){
                        height:45%;
                        justify-content:  flex-start;
                       
                    }
                    p{
                        display: flex;
                        justify-content: flex-end;
                        align-items: flex-end;
                        margin: 0;
                        padding: 0;

                        color: #000;

                        font-family: "Noto Sans TC";
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 147%; /* 29.583px */
                        letter-spacing: 1px;
                        @media(max-width: 992px){
                            font-size: 14px;
                        }
                    }
                }
                .codingSkillContent{
                    
                    width: 100%;
                    height:55% ;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: flex-end;
                    /* background-color: antiquewhite; */
                    margin: 0;
                    padding: 0;
                    @media(max-width: 576px){
                        height:55%;
                    }
                    p{
                        display: flex;
                        justify-content: flex-end;
                        align-items: flex-end;
                        margin: 0;
                        padding: 0;

                        font-family: "Noto Sans TC";
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 147%; /* 29.583px */
                        letter-spacing: 1px;

                        @media(max-width: 992px){
                            font-size: 12px;
                        }
                        @media(max-width: 576px){
                            font-size: 10px;
                        }
                        
                    }
                }
            }
            .softSkillBox{
                width: 20%;
                height: 100%;
                
                @media(max-width: 992px){
                    width: 30%;
                }
                @media(max-width: 768px){
                    width: 42%;
                }
                @media(max-width: 575px){
                    width: 60%;
                }
                .softSkillTitle{
                    width: 100%;
                    height:45%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-end;
                    margin: 0;
                    padding: 0;
                    @media(max-width: 576px){
                        height:45%;
                        justify-content:  flex-start;
                    }
                    p{
                        display: flex;
                        justify-content: flex-end;
                        align-items: flex-end;
                        margin: 0;
                        padding: 0;

                        font-family: "Noto Sans TC";
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 147%; /* 29.583px */
                        letter-spacing: 1px;
                        
                        @media(max-width: 992px){
                            font-size: 14px;
                        }
                    }

                }
                .softSkillContent{
                    width: 100%;
                    height:55% ;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: flex-end;
                    /* background-color: antiquewhite; */
                    margin: 0;
                    padding: 0;
                    p{
                        display: flex;
                        justify-content: flex-end;
                        align-items: flex-end;
                        margin: 0;
                        padding: 0;

                        font-family: "Noto Sans TC";
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 147%; /* 29.583px */
                        letter-spacing: 1px;
                        @media(max-width: 992px){
                            font-size: 12px;
                        }
                        @media(max-width: 576px){
                            font-size: 10px;
                        }
                    }

                }
            }
        }
        .EducationBox{
            position: relative;
            width: 86%;
            height: 30dvh;
            display: flex;
            margin: 2% 0 2% 0;
            @media(max-width: 576px){
                flex-direction:column;
                width: 86%;
                height: 55dvh;

            }
            .EducationTitle{
                width: 60%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-start;

                @media(max-width: 576px){
                    justify-content: center;
                    align-items: flex-start;
                    
                    /* width: 100%; */
                    
                }
                p{
                    margin: 0;

                    color: #000;

                    font-family: "Noto Sans TC";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 147%; /* 29.583px */
                    letter-spacing: 1px;
                    @media(max-width: 768px){
                            font-size: 12px;
                    }
                    
                }
            }
            .heightSchooldegreeBox{
                width: 20%;
                height: 100%;
                @media(max-width: 992px){
                    width: 30%;
                }
                @media(max-width: 768px){
                    width: 42%;
                }
                @media(max-width: 576px){
                    width: 100%;
                    height: 60%;
                }
                .heightSchooldegreeTitle{
                    width: 100%;
                    height:45%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: flex-end;
                    margin: 0;
                    padding: 0;
                    @media(max-width: 576px){
                        height:45%;
                        justify-content:  flex-start;
                       
                    }
                    p{
                        display: flex;
                        justify-content: flex-end;
                        align-items: flex-end;
                        margin: 0;
                        padding: 0;

                        color: #000;

                        font-family: "Noto Sans TC";
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 147%; /* 29.583px */
                        letter-spacing: 1px;
                        @media(max-width: 992px){
                            font-size: 14px;
                        }
                        
                    }
                }
                .heightSchooldegreeContent{
                    width: 100%;
                    height:55% ;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: flex-end;
                    /* background-color: antiquewhite; */
                    margin: 0;
                    padding: 0;
                    @media(max-width: 576px){
                        height:55%;
                    }
                    p{
                        display: flex;
                        justify-content: flex-end;
                        align-items: flex-end;
                        margin: 0;
                        padding: 0;

                        font-family: "Noto Sans TC";
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 147%; /* 29.583px */
                        letter-spacing: 1px;

                        @media(max-width: 992px){
                            font-size: 12px;
                        }
                        
                    }
                }
            }
            .universitydegreeBox{
                width: 20%;
                height: 100%;

                @media(max-width: 992px){
                    width: 30%;
                }
                @media(max-width: 768px){
                    width: 42%;
                }
                @media(max-width: 575px){
                    width: 60%;
                }
                @media(max-width: 576px){
                    margin-top: 20%;
                    width: 60%;
                    height: 60%;
                }
                .universitydegreeTitle{
                    width: 100%;
                    height:45%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: flex-end;
                    margin: 0;
                    padding: 0;
                    @media(max-width: 576px){
                        height:45%;
                        justify-content:  flex-start;
                    }
                    p{
                        display: flex;
                        justify-content: flex-end;
                        align-items: flex-end;
                        margin: 0;
                        padding: 0;

                        font-family: "Noto Sans TC";
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 147%; /* 29.583px */
                        letter-spacing: 1px;
                        @media(max-width: 992px){
                            font-size: 14px;
                        }
                    }

                }
                .universitydegreeContent{
                    width: 100%;
                    height:55% ;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: flex-end;
                    /* background-color: antiquewhite; */
                    margin: 0;
                    padding: 0;
                    p{
                        display: flex;
                        justify-content: flex-end;
                        align-items: flex-end;
                        margin: 0;
                        padding: 0;

                        font-family: "Noto Sans TC";
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 147%; /* 29.583px */
                        letter-spacing: 1px;

                        @media(max-width: 992px){
                            font-size: 12px;
                        }
                    }

                }
            }
        }

    }
</style>