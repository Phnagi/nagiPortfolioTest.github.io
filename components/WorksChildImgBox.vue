
<script setup>

</script>

<template>
    <slot name="worksChildImgSlot">
        <div class="worksChildViedoBox">
            <img src="@/assets/images/VI/HomeTrust/VI.jpg">
        </div>
    </slot>
</template>

<style leng="scss">
    .worksChildViedoBox{
        margin-top: 2%;
        position: relative;
        margin-bottom: 0%;
        width: 100%;
        height: auto;
        /* height: 70dvh; */
        display: flex;
        justify-content: center;

        overflow: hidden;
        @media(max-width: 768px){
            margin-top: 0%;
            margin-bottom: 10%;
            align-items: flex-start;
        }
        /* @media(max-width: 576px){
            margin: 0% 0% 0% 0%;
            justify-content: flex-start; 
            align-items: flex-start;
        } */
        img{
            display: flex;
            align-items: flex-start;
            width:800px;
            height: auto;
            /* object-fit: cover; */
            @media(max-width: 992px){
                width:80%;

            }
            @media(max-width: 768px){
                width:100%;

                
            }
        }
    }
    
</style>