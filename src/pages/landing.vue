<template>
    <div style="overflow: hidden; position: relative; width: 100vw; height: 100vh;">
        <!-- https://images.wallpaperscraft.com/image/man_smoke_ice_floe_122200_3840x2160.jpg -->
        <slider-item :class="curretSlide == 1 ? 'active': ''" data_image="https://images.unsplash.com/photo-1489537235181-fc05daed5805?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=361840d6e5d5e2aa918b05bc7ce87baf&auto=format&fit=crop&w=1502&q=80">
            <div>
                <a href="https://unsplash.com/@anthonydelanoix">
                    <h2>@anthonydelanoix</h2>
                </a>
                <a @click="nextSlide(2)">
                    Next Slide >
                </a>
            </div>
        </slider-item>
        <slider-item :class="curretSlide == 2 ? 'active': ''" data_image="https://images.unsplash.com/photo-1441260038675-7329ab4cc264?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55074573ee10a4290d0e3f400a2b6e0f&auto=format&fit=crop&w=1500&q=80">
            <div>
                <h2>IMAGE NO 2</h2>
                <a @click="nextSlide(3)">Next Slide ></a>
            </div>
        </slider-item>
        <slider-item :class="curretSlide == 3 ? 'active': ''" data_image="https://images.unsplash.com/photo-1495114439165-3fc880396f37?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa9b8f683e6c0d1947d2db0cc21a4aa7&auto=format&fit=crop&w=1498&q=80">
            <div>
                <h2>IMAGE NO 3</h2>
                <a @click="nextSlide(1)">Next Slide ></a>
            </div>
        </slider-item>
    </div>
</template>
<script>
const SliderItem = () => import ('@/components/Slider')
export default {
    components: {
        SliderItem
    },
    data() {
        return {
            curretSlide: 1,
            totalSlide: 3
        }
    }, 
    methods: {
        nextSlide: function(number) {
            this.curretSlide = number
        }
    }
};
</script>
<style lang="scss">
.float-slider{
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(100vw);
    transition: transform 0.5s;
    transition-delay: 0.5s;

    & > .slider-item{
        height: 70%;
        width: 70%;
        background-position: center;
        color: #212121;
        transform: scale(1);
        transition: all 0.5s ease, opacity .1s ease;
        box-shadow: 0 0vh 0vh rgba(0, 0, 0, 0); 
        padding: 50px;
        display: flex;
        align-items: center;
        opacity: 0;
    }
    .slider-bg{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: -1;
        background-position: center;
        filter: blur(0px);
        transition: filter 0.5s;
    }
 
    &.active {
        transform-origin: 100% 50%;
        transform: translate(0%);
        z-index: 2;

        & > .slider-item{
            transform: scale(1.1);
            transition-delay: 1s;
            box-shadow: 0 1vh 6vh rgba(0, 0, 0, 0.2); 
            opacity: 1;
        }
        & > .slider-bg{
            filter: blur(3px);
            transition-delay: 1s;
        }
    }
    &:not(.active){
        @keyframes slide-right{
            0%{
              transform: translateX(0);
              opacity: 1;
            }
            50%{
              transform: translateX(-100vw);
              opacity: 1;
            }
            51%{
              transform: translateX(-100vw);
              opacity: 0;
            }
            52%{
              transform: translateX(100vw);
              opacity: 0;
            }
            100%{
              transform: translateX(100vw);
              opacity: 1;
            }
        }
        animation-name: slide-right;
        animation-duration: 1s;
        animation-delay: 0.5s;
        animation-timing-function: ease;
        & > .slider-item{
            transition: all 0.5s ease, opacity .4s ease;
        }
    }
}
</style>
