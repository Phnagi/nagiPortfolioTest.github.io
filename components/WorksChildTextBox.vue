
<script setup>

</script>

<template>
  
    <slot name="workschildTextSlot">
        <div class="workschildTextFlexBox">
            <div class="workschildTextBox">
                <p class="worksChildContentText">
                車黑坡怎汁錯「至借土水而娘苦」相固貝法由造了王子食即兔國收綠嗎是封兆：
                坐像男貫叫勿；問跑幼牛貝吧姐。連得者正木新司好植：向向即世活。
                歌片毛犬平牠讀光門世？拍拍在科星實燈室貝說笑旁。</p>
                <div class="worksChildTitleBox">
                    <div class="worksChildTitleEnBox">
                        <p class="workschildTitle">GoAhand</p>
                        <p class="workschildSubTitle">UI/UX</p>
                        <a class="worksChildptototype" href="#">ptototype</a>
                    </div>
                    <div class="worksChildTitleChiBox">
                        <p class="workschildSubTitleChi"></p>
                        <p class="workschildTitleChi"></p>


                    </div>

                </div>

            </div>
        </div>

    </slot>

</template>



<style leng="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');
.workschildTextFlexBox{
        position: relative;
        width: 100%;
        height: 50dvh;
        display: flex;
        justify-content: center;

        margin:7% 0% 2% 0% ;
        @media(max-width: 768px){
            margin:0% 0% 2% 0% ;
            height: 100dvh;
        }
        .workschildTextBox{
            width: 800px;/* */
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;

            align-items: flex-start;
            @media(max-width: 768px){
                width:100%;
                height: 100%;
                flex-direction: column;
                align-items: center;
              
            }
            .worksChildTitleBox{
                position: relative;
                width: 30%;
                height: 100%;
                display: flex;
                order: 1;
                flex-direction: column;
                align-items: flex-end;
                justify-content: flex-start;
                margin:-20px 10% 0% 0% ;

                /* background: aqua; */
                @media(max-width: 768px){
                    width: 80%;
                    height: 40%;
                    order: 0;
                    margin:0px 0% 0% 0% ;
                   
                }
                .worksChildTitleEnBox{
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        justify-content: flex-start;
                        @media(max-width: 768px){
                            align-items: flex-end;
                            justify-content: center;
                        
                        }
                        .workschildTitle{
                        padding: 0;
                        margin: 0;

                        color: #000;
                        font-family: "Noto Sans TC";
                        font-size: 28px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 147.917%; /* 47.333px */
                        letter-spacing: 1.6px;

                        }
                        .workschildSubTitle{
                            padding: 0;
                            margin: 0;
                            color: #000;

                            font-family: "Noto Sans TC";
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 500;
                            line-height: 147.917%; /* 29.583px */
                            letter-spacing: 1px;


                        }

                }
                .worksChildTitleChiBox{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                        justify-content: flex-end;
                        @media(max-width: 768px){
                            align-items: flex-start;
                            justify-content: center;
                            margin-top: 20dvh;
                        }
                    .workschildTitleChi{
                        padding: 0;
                        margin: 20px 0px 0px 0px;
                        color: #000;

                        font-family: "Noto Serif TC";
                        font-size: 36px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 190%; /* 68.4px */
                        letter-spacing: 2rem;
                        writing-mode: vertical-rl;
                        @media(max-width: 768px){
                            margin: 0px 0px 0px 0px;
                        
                        }
                    }

                    .workschildSubTitleChi{
                        position: relative;
                        padding: 0;
                        margin: 0;
                        color: #000;
                        margin-top: 21px;
                        margin-left:0px ;
                        font-family: "Noto Serif TC";
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 147.917%; /* 29.583px */
                        letter-spacing: 8px;
                        writing-mode: vertical-rl;
                        @media(max-width: 768px){
                            font-size: 12px;
                            letter-spacing: 5px;
                            margin-top: 20px;
                            margin-left:0px ;
                            left: 10px;
                        }
                    }
                }
                .worksChildptototype{
                    position: relative;
                            text-decoration: none;
                            color: #a9a9a9;

                            font-family: "Noto Sans TC";
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 500;
                            line-height: 147.917%; /* 29.583px */
                            letter-spacing: 1px;
                            z-index: 5;
                            transition: 0.5s ease-in-out;
                            &::before{
                                position: absolute;
                                content: "";
                                height: 15px;
                                width: 2px;
                                background-color: #000;
                                bottom: -1px;
                                right: -5px;
                                transition: 0.5s ease-in-out;
                        }
                            &::after{
                                position: absolute;
                                content: "";
                                height: 2px;
                                width: 50px;
                                background-color: #000;
                                bottom: -5px;
                                right: 0px;
                                transition: 0.5s ease-in-out;
                        }
                        &:hover{
                            color: #000;
                        }
                        &:hover&::before{
                    
                            bottom: -10px;
                        }
                        &:hover&::after{
                            right: -10px;
                        }
                }
                

            }
            .worksChildContentText{
                padding: 0;
                margin: 0;
                width: 70%;
                height: 70%;
                writing-mode: vertical-rl;
                display: flex;
                order: 0;
                justify-content: flex-start;
                align-items: flex-end;

                margin:0% 0% 0% 10% ;


                color: #000;

                font-family: "Noto Serif TC";
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 190%; /* 30.4px */
                letter-spacing: 0.2rem;
                @media(max-width: 768px){
                    width:60%;
                    height: 70%;
                    justify-content: flex-start;
                    align-items: center;
                    writing-mode:horizontal-tb;
                    justify-content: flex-end;
                    order: 1;
                    font-size: 14px;
                    margin:0% 0% 0% 0% ;
                }
            }
        }
}

</style>