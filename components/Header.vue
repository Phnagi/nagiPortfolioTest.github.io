
<script setup>
import HeaderPage from './HeaderPage.vue';

    const handleHeader=ref(false);
    function handleF(){

        handleHeader.value = !handleHeader.value;
       console.log(handleHeader.value)
    };
    // onMounted(() => {
    //     setInterval(() => {
    //     console.log(handleHeader.value)
    //     },1000)
    // });
</script>
<template>
    
    <header>
        <input type="checkbox" id="check" >
        <label  id="hamBox" for="check" @click="handleF()">

            <div id="hamberger1"></div>
            <div id="hamberger2"></div>
        </label >
    </header>
    <HeaderPage :handleHeader="handleHeader" />

</template>

<style leng="scss" scoped>
header{
    /* overflow: hidden; */
    position: fixed;
    width: 100%;
    height:40px;
    z-index: 20;
    display: flex;
    justify-content: flex-end;
    top: 0;
    left: 0;
    input{
        display: none;
        overflow: hidden;
    }
    #hamBox{
        position: relative;
        width: 40px;
        height:40px;
        /* background-color: aliceblue; */
        /* margin:3% 7% 0% 0%; */
        top: 3dvh;
        right:7%;
        z-index: 20;
        cursor: pointer;
            #hamberger1{
                position: absolute;
                content: "";
                width: 40px;
                height: 3px;
                background-color:black ;
                top: 10px;
                z-index: 20;
                transform: rotate(0deg);

                transition-property:top,transform;
                transition-delay: 0.5s,0s;
                transition-duration:1s ;

            }
            #hamberger2{
                position: absolute;
                content: "";
                top: 30px;
                width: 40px;
                height: 3px;
                background-color:black ;
                z-index: 20;
                transform: rotate(0deg);
                transition-property:top,transform;
                transition-delay: 0.5s,0s;
                transition-duration:1s ;
            }

        /* &:active > #hamberger{
            background-color:chartreuse;
        } */
    }
    input:checked + #hamBox > #hamberger1{
        top: 20px;
        transform: rotate(45deg);
        /* transition-property:top,transform;
      
        transition-duration:1s ; */
        transition-delay: 0s,0.5s;

    }
    input:checked + #hamBox > #hamberger2{
        top: 20px;
        transform: rotate(-45deg);
        transition-delay: 0s,0.5s;

    }
}


</style>