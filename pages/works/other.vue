<script setup>
import { gsap } from "gsap";   
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
</script>

<template>
    <Header/>

    <WorksChildImgBox>
        <template #worksChildImgSlot>
            <div class="worksChildViedoBox">
                <img src="@/assets/images/other/web2.jpg">
            </div>
        </template>
    </WorksChildImgBox>
    <WorksChildTextBox>
        <template #workschildTextSlot>
            <div class="workschildTextFlexBox">
            <div class="workschildTextBox">
                <p class="worksChildContentText">
                    之前設計和開發的網站，網站內容為之前的攝影網站，有著與這個網站不同的體驗設計</p>
                <div class="worksChildTitleBox">
                    <div class="worksChildTitleEnBox">
                        <p class="workschildTitle">web</p>
                        <p class="workschildSubTitle">Design/develop</p>
                        <a class="worksChildptototype" href="https://phnagi.github.io/">link</a>
                    </div>
                    <div class="worksChildTitleChiBox">
                        <p class="workschildTitleChi"></p>

                        <p class="workschildSubTitleChi"></p>
                    </div>

                </div>

            </div>
        </div>
        </template>
    </WorksChildTextBox>


    <Footer/>
</template>

<style scoped></style>