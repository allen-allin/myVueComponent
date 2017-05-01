<template>
    <button>{{ time | change}}</button>
</template>
<script>
    var isFirst= true;
    export default {
        data() {
            return {
                time: '发送验证码',
                
            }
        },
        props: {
            start: Boolean,
            seconds: {
                type: Number,
                default: 60
            }
        },
        watch: {
            start(val) {
                if(val) {
                    this.time = 60;
                    let timer = setInterval(()=>{
                        this.time--;
                        if(this.time === 0) {
                            isFirst = false;
                            this.time = '没收到？重新发送';
                            clearInterval(timer);
                            this.$emit('countDown')
                        }
                    },100)
                }
            }
        },
        filters: {
            change(value) {
                if (typeof value === 'string') {
                    return value
                } else {
                    return isFirst ? value + 's' : value + 's后重新发送' 
                }
            }
        }
    }
</script>
<style scoped>
    
</style>