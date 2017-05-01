<template>
    <div>
        <button>{{ time | change }}</button>
    </div>
</template>
<script>
    let flag = false;
    export default {
        data() {
            return {
                time: '获取验证码'
            }
        },
        props: {
            start: {
                type: Boolean
            },
            seconds: {
                type: Number,
                default: 60
            }
        },
        watch: {
            start(value) {
                if(value) {
                    this.countDown()
                }
            }
        },
        methods: {
            countDown() {
                this.time = this.seconds;
                let timer = setInterval(()=>{
                    this.time--;
                    if (this.time === 0) {
                        this.time = '没收到？重新获取';
                        clearInterval(timer);
                        this.$emit('countDown');
                        this.isStart = false;
                        flag = true;
                    }
                },100)
            }
        },
        filters: {
            change(value) {
                if (!isNaN(value)) {
                    return  !flag ? value + 's' : `${value}s后重新发送`
                }else {
                    return value
                }
                // return isNaN(value) ? value 
                //                     : flag ? `${value}s后重新发送`
                //                     : value + 's'
            }
        }
    }
</script>
<style scoped>
    
</style>