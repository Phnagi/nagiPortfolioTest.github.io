
<script setup>
import { gsap } from "gsap";   
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
let worksChildViedoBox = ref(null);
// document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0; 
onMounted(()=>{
//     gsap.to(window,{
//     duration: 0, 
//     scrollTo:{y:".worksChildViedoBox" , 
//     offsetY:0}
            
// });

});

</script>
<template>
  <Header/>
  <!-- <h1>gogogogo</h1> -->

    <WorksChildVideoBoxCom>
        <template #worksChildViedoSlot>
            <div class="worksChildViedoBox" ref="worksChildViedoBox">
                <video src="@/assets/video/1.mp4" autoplay muted loop></video>
            </div>
        </template>
    </WorksChildVideoBoxCom>
    <WorksChildTextBox>
        <template #workschildTextSlot>
            <div class="workschildTextFlexBox">
            <div class="workschildTextBox">
                <p class="worksChildContentText">
                    一個不論是身心障礙者或是普通人都可以拿來規劃無障礙旅行計畫及日常使用的一個應用程式，
                    可以根據你選擇的地點給予使用者無障礙路線導航與盲人輔助導航的需求。</p>
                <div class="worksChildTitleBox">
                    <div class="worksChildTitleEnBox">
                        <p class="workschildTitle">GoAhand</p>
                        <p class="workschildSubTitle">UI/UX</p>
                        <a class="worksChildptototype" href="https://www.figma.com/proto/HGcpRdJsOY9vVfDpolfQaB/Go-ahead(V3.0)-(public)?page-id=2545%3A141980&type=design&node-id=2545-142015&viewport=-46%2C803%2C0.89&t=ATx38TAzBgNpblAO-1&scaling=scale-down&starting-point-node-id=2545%3A142015&mode=design">ptototype</a>
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


    <WorksChildVideoBoxCom>
        <template #worksChildViedoSlot>
            <div class="worksChildViedoBox">
                <video src="@/assets/video/2.mp4" autoplay muted loop></video>
            </div>
        </template>
    </WorksChildVideoBoxCom>
    <WorksChildTextBox>
        <template #workschildTextSlot>
            <div class="workschildTextFlexBox">
            <div class="workschildTextBox">
                <p class="worksChildContentText">
                    在行走途中，身心障礙者往往面臨著困境，由於某些地方並未普遍配置無障礙設施，導致他們行動受限，
                    這可能使得他們的外出意願降低，甚至可能對自身產生否定感，
                    讓人格可能更加封閉且怪罪自己。而我們希望能改善這件事情因此我們開始設計這款應用程式，
                    能提供一種無障礙導航體驗，讓導航規劃行進路線是擁有斜坡、導盲磚等輔助設備。</p>
                <div class="worksChildTitleBox">
                    <div class="worksChildTitleEnBox">
                        <p class="workschildTitle"></p>
                        <p class="workschildSubTitle"></p>
                    </div>
                    <div class="worksChildTitleChiBox">
                        <p class="workschildSubTitleChi">核心</p>
                        <p class="workschildTitleChi">概念</p>
                    </div>

                </div>

            </div>
        </div>
        </template>
    </WorksChildTextBox>
    
    <WorksChildVideoBoxCom>
        <template #worksChildViedoSlot>
            <div class="worksChildViedoBox">
                <video src="@/assets/video/10.mp4" autoplay muted loop></video>
            </div>
        </template>
    </WorksChildVideoBoxCom>
    <WorksChildTextBox>
        <template #workschildTextSlot>
            <div class="workschildTextFlexBox">
            <div class="workschildTextBox">
                <p class="worksChildContentText">
                    "GoAhand"意思為"go ahead"，我們希望任何人透過我們個應用程式都可以輕鬆的去往任何地方，
                    不論是誰，只要有想去的地方就勇敢的"前往"吧。這兩個線條代表著需要幫助的人以及幫助他人的人的"手"，
                    有著互相幫助的意思，這兩的圓形代表著人，線也代表著路線，也就是你可以透過我們的應用程式前往任何想去的地方。</p>
                <div class="worksChildTitleBox">
                    <div class="worksChildTitleEnBox">
                        <p class="workschildTitle"></p>
                        <p class="workschildSubTitle"></p>
                    </div>
                    <div class="worksChildTitleChiBox">
                        <p class="workschildSubTitleChi">色彩和標誌</p>
                        <p class="workschildTitleChi">設定</p>
                    </div>

                </div>

            </div>
        </div>
        </template>
    </WorksChildTextBox>

    <WorksChildVideoBoxCom>
        <template #worksChildViedoSlot>
            <div class="worksChildViedoBox">
                <video src="@/assets/video/9.mp4" autoplay muted loop></video>
            </div>
        </template>
    </WorksChildVideoBoxCom>
    <WorksChildTextBox>
        <template #workschildTextSlot>
            <div class="workschildTextFlexBox">
            <div class="workschildTextBox">
                <p class="worksChildContentText">
                    在這個應用程式中有分為好幾個部分，冒險、緊急、回報，
                    目的是為了更好幫助到使用者在旅途中或日常中解決相關問題。</p>
                <div class="worksChildTitleBox">
                    <div class="worksChildTitleEnBox">
                        <p class="workschildTitle"></p>
                        <p class="workschildSubTitle"></p>
                    </div>
                    <div class="worksChildTitleChiBox">
                        <p class="workschildSubTitleChi">重點功能</p>
                        <p class="workschildTitleChi">介紹</p>
                    </div>

                </div>

            </div>
        </div>
        </template>
    </WorksChildTextBox>

    <WorksChildVideoBoxCom>
        <template #worksChildViedoSlot>
            <div class="worksChildViedoBox">
                <video src="@/assets/video/6.mp4" autoplay muted loop></video>
            </div>
        </template>
    </WorksChildVideoBoxCom>
    <WorksChildTextBox>
        <template #workschildTextSlot>
            <div class="workschildTextFlexBox">
            <div class="workschildTextBox">
                <p class="worksChildContentText">
                    在應用程式中會有兩個角色，分別為領航員及冒險家，兩這在某些功能上會有所不同，
                    在冒險家模式代表著專為身障者所使用的路線或需求等，
                    在領航員則會偏向一般人或是想要幫助人的人，但你可以在設定上輕鬆的自由切換模式。</p>
                <div class="worksChildTitleBox">
                    <div class="worksChildTitleEnBox">
                        <p class="workschildTitle"></p>
                        <p class="workschildSubTitle"></p>
                    </div>
                    <div class="worksChildTitleChiBox">
                        <p class="workschildSubTitleChi">領航員或冒險家</p>
                        <p class="workschildTitleChi">角色</p>
                    </div>

                </div>

            </div>
        </div>
        </template>
    </WorksChildTextBox>

    <WorksChildVideoBoxCom>
        <template #worksChildViedoSlot>
            <div class="worksChildViedoBox">
                <video src="@/assets/video/3.mp4" autoplay muted loop></video>
            </div>
        </template>
    </WorksChildVideoBoxCom>
    <WorksChildTextBox>
        <template #workschildTextSlot>
            <div class="workschildTextFlexBox">
            <div class="workschildTextBox">
                <p class="worksChildContentText">
                    在”冒險”頁面中不論你是身障者或是一般人，你都可以透過他來搜尋目的地進行無障礙導航。
                    且在”冒險”頁面中你還可以透過”規劃”功能規劃無障礙旅行計畫
                    ，不論你是身障者獨立出遊或是陪同身障者一起規劃旅行都能利用這個功能來享受生活。
                    在”規劃”中你可以儲存你的旅行企劃以便下次再次使用。
                    我們希望身障者可以能夠更正面的去面對生活，
                    而照顧他的人或是朋友也能透過這個應用程式更好的去親近彼此。</p>
                <div class="worksChildTitleBox">
                    <div class="worksChildTitleEnBox">
                        <p class="workschildTitle"></p>
                        <p class="workschildSubTitle"></p>
                    </div>
                    <div class="worksChildTitleChiBox">
                        <p class="workschildSubTitleChi">旅行規劃或日常使用</p>
                        <p class="workschildTitleChi">冒險</p>
                    </div>

                </div>

            </div>
        </div>
        </template>
    </WorksChildTextBox>

    <WorksChildVideoBoxCom>
        <template #worksChildViedoSlot>
            <div class="worksChildViedoBox">
                <video src="@/assets/video/4.mp4" autoplay muted loop></video>
            </div>
        </template>
    </WorksChildVideoBoxCom>
    <WorksChildTextBox>
        <template #workschildTextSlot>
            <div class="workschildTextFlexBox">
            <div class="workschildTextBox">
                <p class="worksChildContentText">
                    當在路上遇到困難時，或想幫助別人時，可以切換至"緊急"頁面，
                    在”緊急”中，會根據你的身分有不同功能，
                    當你需要幫助時可以切換到冒險家模式"暖色系"，
                    來發出求助訊號。當你想要幫助別人時可以切換到領航員模式"冷色系"，
                    來尋求有需要幫助的人。
                    並且你可以透過按鈕可以來快速切換你的身分，目的是為了讓所有人都可以互相幫助。</p>
                <div class="worksChildTitleBox">
                    <div class="worksChildTitleEnBox">
                        <p class="workschildTitle"></p>
                        <p class="workschildSubTitle"></p>
                    </div>
                    <div class="worksChildTitleChiBox">
                        <p class="workschildSubTitleChi">遇到緊急情況時</p>
                        <p class="workschildTitleChi">緊急</p>
                    </div>

                </div>

            </div>
        </div>
        </template>
    </WorksChildTextBox>



    <WorksChildVideoBoxCom>
        <template #worksChildViedoSlot>
            <div class="worksChildViedoBox">
                <video src="@/assets/video/5.mp4" autoplay muted loop></video>
            </div>
        </template>
    </WorksChildVideoBoxCom>
    <WorksChildTextBox>
        <template #workschildTextSlot>
            <div class="workschildTextFlexBox">
            <div class="workschildTextBox">
                <p class="worksChildContentText">
                在"緊急"頁面中可以使用者個按鈕來快速切換身分，更好及方便的來尋求幫助或幫助他人。</p>
                <div class="worksChildTitleBox">
                    <div class="worksChildTitleEnBox">
                        <p class="workschildTitle"></p>
                        <p class="workschildSubTitle"></p>
                    </div>
                    <div class="worksChildTitleChiBox">
                        <p class="workschildSubTitleChi">隨時切換您的身分</p>
                        <p class="workschildTitleChi">切換</p>
                    </div>

                </div>

            </div>
        </div>
        </template>
    </WorksChildTextBox>

    <WorksChildVideoBoxCom>
        <template #worksChildViedoSlot>
            <div class="worksChildViedoBox">
                <video src="@/assets/video/7.mp4" autoplay muted loop></video>
            </div>
        </template>
    </WorksChildVideoBoxCom>
    <WorksChildTextBox>
        <template #workschildTextSlot>
            <div class="workschildTextFlexBox">
            <div class="workschildTextBox">
                <p class="worksChildContentText">
                當然你也可以在設定裡更換你的身分，目的是希望不只是一般人可以去幫助他人，
                身心障礙者也可以去協助，讓所有人都可以互相幫助，建立更加平等的社會。
            </p>
                <div class="worksChildTitleBox">
                    <div class="worksChildTitleEnBox">
                        <p class="workschildTitle"></p>
                        <p class="workschildSubTitle"></p>
                    </div>
                    <div class="worksChildTitleChiBox">
                        <p class="workschildSubTitleChi">在設定裡更改介面</p>
                        <p class="workschildTitleChi">切換</p>
                    </div>

                </div>

            </div>
        </div>
        </template>
    </WorksChildTextBox>
  <Footer/>
</template>

<style leng="scss" scoped>

</style>