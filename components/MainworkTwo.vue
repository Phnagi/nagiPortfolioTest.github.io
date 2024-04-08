
<script setup>

</script>
<template>

    <div class="MainworkTwoBox">
        <slot name="MainworkTwo" >
            <div class="MainWork">
                <a href="#" class="MainWorkVideoBox">
                    <p class="MainWorkVideoMore">moretest</p>
                    <video src="@/assets/video/goahand_1.mp4" autoplay muted loop></video>
                </a>

                <a href="#" class="MainWorkContent">
                    <div class="MainworkTitleBox">
                        <p class="MainworkTitleMain">GoAhandstees</p>
                        <p class="MainworkTitleSub">UI/UX videostes</p>
                    </div>
                    <div class="MainworkConceptBox">
                        <p class="MainworkConcept">概念sett</p>
                        <p class="MainworkConceptContent">setes車黑坡怎汁錯「至借土水而娘苦」相固貝法由造了王子食即兔國收綠嗎是封兆：
                            坐像男貫叫勿；問跑幼牛貝吧姐。連得者正木新司好植：向向即世活。
                            歌片毛犬平牠讀光門世？拍拍在科星實燈室貝說笑旁。
                        </p>
                    </div>
                </a>
            </div>
        </slot> 
    </div>

</template>

<style leng="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');
@mixin largePad{
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
  @media(max-width:576px){
    @content;
  }
}

.MainworkTwoBox{
    position: relative;
    width: 100%;
    /* height: 100dvh; */
    overflow: hidden;
    margin-bottom: 15dvh;
    @media(max-width: 992px){
        margin-bottom:10dvh;
    }
    @media(max-width: 768px){
        margin-bottom: 5dvh;
    }
    @media(max-width: 576px){
        margin-bottom: 0dvh;
        /* height: 50dvh; */
     }
    .MainWork{
            position: relative;
            width: 100%;
            /* height: 100dvh; */
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .MainWorkVideoBox{
                position: relative;
                width: 86%;
                height: calc(70dvw*0.5);
                overflow: hidden;
                display: flex;
                border-radius: 50px;
                justify-content: center;
                align-items: center;

                color: #000;
                text-decoration: none;
                
                @media(max-width: 576px){
                        border-radius: 15px;
                }
                .MainWorkVideoMore{
                    opacity: 0;
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    right: 3%;
                    bottom: 5%;
                    z-index: 5;
                    color: #ffffffcd;
                    margin: 0;
                    font-family: "Noto Sans TC";
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 300;
                    line-height: 190%; /* 38px */
                    letter-spacing: 1px;
                    background-color: #000000a0;
                    /* padding: 2px 20px 2px 20px; */
                    height: 80px;
                    width: 80px;
                    border-radius: 100%;
                    transition: opacity 0.5s ease-in-out;

                    @media(max-width: 768px){
                        font-size: 14px;
                        height: 60px;
                        width:  60px;
                    }
                    @media(max-width: 576px){
                        font-size: 10px;
                        height: 50px;
                        width:  50px;
                    }
                    &:hover + video{
                        transform: scale(1.05);
                        filter: grayscale(0%);
                    }
                }
                video{
                    position: relative;
                    width: 100%;
                    height: auto;
                    border-radius: 25px;
                    bottom: 32%;
                    background-position: bottom bottom;
                    object-fit:fill;
                    border-radius: 50px;
                    filter: grayscale(95%);
                    transform: scale(1);
                    transition: all 1s ease-in-out;

                    @media(max-width: 576px){
                        border-radius: 15px;
               
                    }

                    &:hover{

                        transform: scale(1.05);
                        filter: grayscale(0%);
                    }

                }

                &:hover .MainWorkVideoMore{
                        opacity: 1;
                }
            }

            .MainWorkContent{
                width: 100%;
                height: 20dvh;
                position: relative;
                text-decoration: none;
                color: black;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

                margin: 3dvh 0dvh 3dvh 0dvh;
                @media(max-width: 768px){
                    height: 20dvh;
                }
                @media(max-width: 576px){
                    height: 24dvh;
                    flex-direction: column;
                    justify-content: space-evenly;
                    margin: 0%;
                }
                @media(max-width: 376px){
                    height: 30dvh;
                    flex-direction: column;
                    justify-content: space-evenly;
                    margin: 0%;
                }
                .MainworkTitleBox{
                    position: relative;
                    width: 40%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    left: 7%;
                    @media(max-width: 576px){
                        width: 100%;
                        height: 20%;
                    }
                    .MainworkTitleMain{
                        font-family: "Noto Sans SC";
                        font-size: 48px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 140%; /* 67.2px */
                        letter-spacing: 7.68px;
                        margin: 0%;
                        @media(max-width: 992px){
                            font-size: 40px;
                        }
                        @media(max-width: 768px){
                            font-size: 36px;
                        }
                        @media(max-width: 576px){
                            font-size: 32px;
                        }
                        @media(max-width: 376px){
                            font-size: 20px;
                        }

                    }
                    .MainworkTitleSub{
                        margin: 0%;
                        color: #000;

                        font-family: "Noto Sans TC";
                        font-size: 20px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 190%; /* 38px */
                        letter-spacing: 3.2px;
                        @media(max-width: 992px){
                            font-size: 16px;
                        }
                        @media(max-width: 768px){
                            font-size: 14px;
                        }
                        @media(max-width: 576px){
                            font-size: 10px;
                        }
                        @media(max-width: 376px){
                            font-size: 10px;
                        }
                    }
                }
                .MainworkConceptBox{
                    position: relative;
                    right:7%;
                    
                    width: 25%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: flex-start;

                    
                    @media(max-width: 992px){
                        width: 25%;
                    }
                    @media(max-width: 768px){
                        width: 30%;
                    }
                    @media(max-width: 576px){
                        width: 86%;

                        height: 40%;
                        right: 0%;
                        left: 0%;
                    }
                    @media(max-width: 376px){
                        width: 86%;
                        height: 40%;
                        right: 0%;
                        left: 0%;
                    }
                    .MainworkConcept{
                        margin: 0;
                        padding: 0;
                        color: #000;

                        font-family: "Noto Serif TC";
                        font-size: 18px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 190%; /* 60.8px */
                        letter-spacing: 11.2px;
                        @media(max-width: 992px){
                            font-size: 16px;
                        }
                        
                    }
                    .MainworkConceptContent{
                        margin: 0;

                        color: #000;

                        font-family: "Noto Serif TC";
                        font-size: 12px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 190%; /* 30.4px */
                        letter-spacing: 1.2px;

                        @media(max-width: 992px){
                            font-size: 10px;
                        }
                        @media(max-width: 376px){
                            font-size: 8px;
                        }
                    }
                }   
            }
    }
}
/* xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px */
  /* @media(max-width:768px){
  .box{
    background: blue;
  }
} */



</style>