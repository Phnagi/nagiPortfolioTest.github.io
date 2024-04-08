
<script setup>

</script>

<template>
    <div class="contentBox">
        <div class="contentTitleBox">
            <p class="ContentTitle">聯繫</p>
            <div class="contnetTitleLine"></div>
            <p class="ContentSubTitle">contact</p>
        </div>
        <form class="contentFormBox">
            <div class="inputBox">
                <input type="text" class="input" id="name" autocomplete="off">
                <div class="inputBoxTitleBox">
                    <label id="nameLabel" for="name">稱呼</label>
                    <div class="feedback">必填</div>
                </div>



            </div>

            <div class="inputBox">
                <input type="tel" class="input" id="tel" autocomplete="off">
                <div class="inputBoxTitleBox">
                    <label id="telLabel" for="tel">電話</label>
                    <div class="feedback">必填</div>
                </div>



            </div>

            <div class="inputBox">
                <input type="email" class="input" id="email" autocomplete="off">
                <div class="inputBoxTitleBox">
                    <label id="emailLabel" for="email">電子郵件</label>
                    <div class="feedback">必填</div>
                </div>



            </div>

            
            <div class="inputBox">
                <textarea  class="textarea" id="other" autocomplete="off"></textarea>
                <div class="inputBoxTitleBox">
                    <label id="otherLabel" for="other">其他</label>
                    <div class="feedback">必填</div>
                </div>



            </div>
            <input class="submit" type="submit" value="提交">
        </form>
        
    </div>

</template>

<style leng="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');
    .contentBox{
        width: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        .contentTitleBox{
            margin-top: 5%;
            width:50%;
            /* height: 100px; */
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            @media(max-width: 768px){
                width: 70%;

            }
            .ContentTitle{
                padding: 0;
                margin: 0;
                color: #000;

                position: relative;
                font-family: "Noto Serif TC";
                font-size: 36px;
                font-style: normal;
                font-weight: 400;
                line-height: 190%; /* 76px */
                letter-spacing: 30px;
                /* &::after{
                    position: absolute;
                    content: '';
                    background-color: #000;
                    width: 1px;
                    height: 50px;
                } */
            }
            .contnetTitleLine{
                position: relative;
                    content: '';
                    background-color: #000;
                    width: 2px;
                    height: 30px;
                    top:-5px;
                    left: 2px;
            }
            .ContentSubTitle{
                padding: 0;
                margin: 0;
                color: #000;

                font-family: "Noto Sans TC";
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 147.917%; /* 35.5px */
                letter-spacing: 1.2px;
            }
        }
        .contentFormBox{
            margin-top: 20%;
            width: 50%;
            /* height: 100px; */
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            @media(max-width: 768px){
                width: 70%;

            }
            .inputBox{
                width: 100%;
                display: flex;
                flex-direction: column;
                .inputBoxTitleBox{
                    
                    display: flex;
                    justify-content: space-between;
                    order: 0;
                    label{

                        display: flex;
                        justify-content: flex-start;

                        color: rgb(86, 86, 86);
                        font-family: "Noto Serif TC";
                        font-size: 16px;
                        font-style: normal;
                        font-weight:300;
                        line-height: 190%; /* 38px */
                        letter-spacing: 10px;
                        transition: 0.3s ease-in-out;

                    }

                    .feedback{
                        position: relative;
                        width: 50%;
                        display: flex;
                        justify-content: flex-end;

                        color: rgb(86, 86, 86);
                        font-family: "Noto Serif TC";
                        font-size: 12px;
                        font-style: normal;
                        font-weight:300;
                        line-height: 190%; /* 38px */
                        letter-spacing: 10px;
                        right: -10px;
                    }
                }
                .input{
                background-color: transparent;
                order: 1;
                /* border-bottom: 2px black ; */
                border: none;
                border-bottom: rgb(86, 86, 86) 1px solid;
                padding-top: 10px;
                padding-bottom: 3px;
                color: rgb(86, 86, 86);
                font-family: "Noto Serif TC";
                font-size: 16px;
                font-style: normal;
                font-weight: 300;
                line-height: 147.917%; /* 35.5px */
                letter-spacing: 3px;
                &:focus-visible{
                    /* border: none !important;
                    border-bottom: #000 2px solid !important; */
                    outline: none;
                    background-color: none !important;
                }
                &:focus{
                    /* border: none !important;
                    border-bottom: #000 2px solid !important; */

                    outline: none;
                }
                

                }
                input:focus{

                    +.inputBoxTitleBox{
                        label{
                            color: #000;
                            transform: scale(110%);
                        }

         
                    }
                }
                
                textarea{
                    order: 1;
                    background-color: transparent;
                    height: 300px;
                    width:calc(100%-20px);                    /* border-bottom: 2px black ; */
                    border:rgb(86, 86, 86) 1px solid;

                    margin-top: 5%;
                    padding: 10px 10px 10px 10px;

                    font-family: "Noto Serif TC";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 300;
                    line-height: 147.917%; /* 35.5px */
                    letter-spacing: 0px;

                    &:focus-visible{
                        /* border: none !important;
                        border-bottom: #000 2px solid !important; */
                        /* border: #000 2px solid; */
                        outline: none;
                        background-color: none !important;
                    }
                    &:focus{
                        outline: none;
                        background-color: none !important;
                        +.inputBoxTitleBox{
                        label{
                            color: #000;
                            transform: scale(110%);
                        }

         
                    }

                    }
                }

                &+&{
                    margin-top: 50px;
                }
            }
            .submit{
                width: 200px;
                height: 50px;
                margin-top: 10%;
                background-color: transparent;
                border: 1px  rgb(46, 46, 46) solid;


                color: rgb(46, 46, 46);

                font-family: "Noto Serif TC";
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 190%; /* 38px */
                letter-spacing: 10px;
                padding-left: 10px;
                cursor: pointer;
                transition: 0.3s ease-in-out;

                &:hover{
                    background-color: rgb(46, 46, 46);
                    color: white;
                }
            }

            input:-internal-autofill-selected {
                appearance: menulist-button;
                background-image: none !important;
                background-color:transparent !important;
                color: fieldtext !important;
            }

        }
    }
</style>