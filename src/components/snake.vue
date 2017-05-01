<template>
    <div class="snake"
         :style="{
            'border-top-color': spinnerColor,
            'border-left-color': spinnerColor,
            'border-bottom-color': spinnerColor,
            'height': spinnerSize,
            'width': spinnerSize
        }">
    
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props: {
        color: String,
        size: Number
    },
    computed: {
        spinnerColor() {
            return this.color || 'red'
        },
        spinnerSize() {
            return (this.size || '0.44') + 'rem'
        }
    }
}
</script>
<style lang="">
.snake {
    animation: ziksang-spinner-rotate 0.8s infinite linear;
    border: 4px solid transparent;
    border-radius: 50%;
}

@keyframes ziksang-spinner-rotate {
    0% {
        transform: rotate(0deg);
        transform: rotate(360deg)
    }
}
</style>