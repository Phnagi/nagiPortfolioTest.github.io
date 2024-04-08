<script setup>
// import { onMounted } from 'vue';
// export default{
//     props:{
//         handleHeader:{
//             type:Boolean,
//             default:true,
//         },
//     },
//     setup(props){
//         console.log(props.handleHeader)
//         onMounted(()=>{
//             setInterval(() => {
//             console.log(props.handleHeader)
//             },1000)
//         })
//         return{
//             props
//         }
//     },

// }

    const props = defineProps({
        handleHeader:{
            type:Boolean,
            default:true,
        },
    });

    let useHandleHeader = ref(props.handleHeader);

    // onMounted(() => {
    //     setInterval(() => {
    //     console.log(useHandleHeader.value)
    //     },1000)
    // });

</script>
<template>
  <div  :class="['headerPage',{headerPageAct:props.handleHeader}]">
    <div class="headerContentBox">
      
      <NuxtLink to="/">首頁</NuxtLink>
      <NuxtLink to="/">Home</NuxtLink>
    </div>
    <div class="headerContentBox">
      
        <NuxtLink to="/about">關於</NuxtLink>
        <NuxtLink to="/about">ABout</NuxtLink>
    </div>
    <div class="headerContentBox">
        <NuxtLink to="/works" >作品</NuxtLink>
        <NuxtLink to="/works" >Works</NuxtLink>
    </div>
    <div class="headerContentBox">
        <NuxtLink to="/contact">聯絡</NuxtLink>
        <NuxtLink to="/contact">contact</NuxtLink>
    </div>
    <div class="headerContentBox2">
        <a href="">IG</a>
        <a href="">Behance</a>
    </div>
  </div>
</template>
<style leng="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');
/* // .noto-serif tc-regular {
//   font-family: "Noto Serif TC", serif;
//   font-weight: 400;
//   font-style: normal;
// }
// .noto-sans tc-<uniquifier> {
//   font-family: "Noto Sans TC", sans-serif;
//   font-optical-sizing: auto;
//   font-weight: <weight>;
//   font-style: normal;
// } */
    .headerPage{
        overflow: hidden;
        width: 100%;
        opacity: 0;
        height: 0dvh;
        padding: 0;
        margin: 0;
        position: fixed;
        top: 0;
        z-index: 9;
        background-color: #F5F5F5;
        font-family:"Noto Serif TC", serif;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
         /* animation */
        transition-property:opacity,height;
        transition-delay: 0.1s,0s;
        transition-duration:1s ;

        .headerContentBox{
            position: relative;
            /* background-color: violet; */
            width: 100dvw;
            /* height: 20dvh; */
            display: flex;
            flex-direction: column;
            /* justify-content: end; */
            align-items: flex-end;
            right: 7%;
            bottom: 3dvh;
            color: black;
            a{
                width: 50%;
                list-style: none;
                color: black;
                text-decoration: none;
                display: flex;
                justify-content: flex-end;
            }
            a:nth-child(1){
                position: relative;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 15px;
                left:15px;
                margin: 0;
            }
            a:nth-child(2){
                position: relative;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 3px;
                margin: 0;
            }

        }
        .headerContentBox + .headerContentBox{
            margin-top: 7dvh;
        }
        .headerContentBox2{
             /* background-color: violet; */
            position: relative;
            width: 20dvw;
            /* background-color: antiquewhite; */
            height: 10dvh;
            display: flex;
            flex-direction:row;
            justify-content: flex-end;
            align-items: flex-end;
            /* margin: 0% 7% 3% 0%;*/
            right: 7%;
            bottom: 4dvh;
            a{
                width: 50%;
                list-style: none;
                color: black;
                text-decoration: none;
                display: flex;
                justify-content:flex-end;

                position: relative;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 3px;
                margin: 0;
                padding: 0;
            }
            a+a{
                margin:0 0px 0 40px;
                @media(max-width: 992px){
                    margin:0 0px 0 80px;
                }
                @media(max-width: 576px){
                    margin:0 1px 0 100px;
                }
            }

        }
    }
    .headerPageAct{

        height: 100dvh;
        opacity: 1;
        transition-property:opacity,height;
        transition-delay: 0s,0.1s;
        transition-duration:1s ;
    }
</style>