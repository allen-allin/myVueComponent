<template>
    <div class="wrapper">
        <div class="double-bounce" :style='{
                width:spinnerSize,
                height:spinnerSize
            }'>
            <div class="double-bounce1" :style='{backgroundColor : spinnerColor}'></div>
            <div class="double-bounce2" :style='{backgroundColor : spinnerColor}'></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'double-bounce',
    computed: {
        spinnerColor () {
            return this.color || this.$parent.color || 'red'
        },
        spinnerSize () {
            return (this.size || this.$parent.size || .44) + 'rem'
        }
    },
    props: {
        color: String,
        size: Number
    }
}
</script>

<style scoped>
.wrapper {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    background: rgba(255, 255, 255, 0.7);
    justify-content: center;
    align-items: center;
}

.double-bounce {
    position: relative;
}

.double-bounce1,
.double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #67CF22;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: bounce 2.5s infinite ease-in-out;
    animation: bounce 2.5s infinite ease-in-out;
}

.double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
}

@-webkit-keyframes bounce {
    0%,
    100% {
        -webkit-transform: scale(0.0)
    }
    50% {
        -webkit-transform: scale(1.0)
    }
}

@keyframes bounce {
    0%,
    100% {
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
    }
    50% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
    }
}
</style>