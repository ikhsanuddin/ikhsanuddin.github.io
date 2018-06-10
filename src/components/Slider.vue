<template>
    <div class="float-slider">
        <div class="slider-item" :style="'background-image: url('+ data_image +')'">
            <slot></slot>
        </div>
        <div class="slider-bg" :style="'background-image: url('+ data_image +')'"></div>
        
    </div>
</template>
<script>
export default {
    name: 'SliderItem',
    props: {
        data_image: {
            type: String,
            default: null,
            required: true
        }
    },
}
</script>
