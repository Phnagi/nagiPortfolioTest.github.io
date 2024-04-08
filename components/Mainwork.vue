
<script setup>

</script>
<template>
    <div id="MainWork">
        <a href="#" id="MainWorkVideoBox">
            <p id="MainWorkVideoMore">more</p>
            <video src="@/assets/video/goahand_1.mp4" autoplay muted loop></video>
        </a>

        <a  id="MainWorkContent">
            <div id="MainworkTitleBox">
                <p id="MainworkTitleMain">GoAhand</p>
                <p id="MainworkTitleSub">UI/UX video</p>
            </div>
            <div id="MainworkConceptBox">
                <p id="MainworkConcept">概念</p>
                <p id="MainworkConceptContent">車黑坡怎汁錯「至借土水而娘苦」相固貝法由造了王子食即兔國收綠嗎是封兆：
                    坐像男貫叫勿；問跑幼牛貝吧姐。連得者正木新司好植：向向即世活。
                    歌片毛犬平牠讀光門世？拍拍在科星實燈室貝說笑旁。
                </p>
            </div>
        </a>
    </div>

</template>

<style leng="scss" scoped>
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
    #MainWork{
        position: relative;
        width: 100%;
        height: 100dvh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        bottom: 0dvh;
        #MainWorkVideoBox{
            position: relative;
            width: 86%;
            height: calc(73dvw*0.5);
            overflow: hidden;
            display: flex;
            border-radius: 50px;
            justify-content: center;
            align-items: center;

            color: #000;
            text-decoration: none;
            #MainWorkVideoMore{
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

                &:hover{

                    transform: scale(1.05);
                    filter: grayscale(0%);
                }

            }

            &:hover #MainWorkVideoMore{
                    opacity: 1;
            }
        }

        #MainWorkContent{
            width: 100%;
            height: 20dvh;
            position: relative;
            text-decoration: none;
            color: black;
            display: flex;
            justify-content: space-between;
            align-items: center;

            margin: 3dvh 0dvh 3dvh 0dvh;
            
            #MainworkTitleBox{
                position: relative;
                width: 40%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                left: 7%;
                #MainworkTitleMain{
                    font-family: "Noto Sans SC";
                    font-size: 48px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 140%; /* 67.2px */
                    letter-spacing: 7.68px;
                    margin: 0%;
                }
                #MainworkTitleSub{
                    margin: 0%;
                    color: #000;

                    font-family: "Noto Sans TC";
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 190%; /* 38px */
                    letter-spacing: 3.2px;
                }
            }
            #MainworkConceptBox{
                position: relative;
                right:7%;

                width: 25%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
  
                #MainworkConcept{
                    margin: 0;
                    color: #000;

                    font-family: "Noto Serif TC";
                    font-size: 28px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 190%; /* 60.8px */
                    letter-spacing: 11.2px;
                }
                #MainworkConceptContent{
                    margin: 0;

                    color: #000;

                    font-family: "Noto Serif TC";
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 190%; /* 30.4px */
                    letter-spacing: 1.2px;
                }
            }   
        }
    }
</style>