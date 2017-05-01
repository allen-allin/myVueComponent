<template>
    <compontent :is="currSpinner"></compontent>
</template>
<script>
import doubleBounce from '@/components/double-bounce.vue'
import snake from '@/components/snake.vue'

    export default {
        props: {
            type: {
                type: String,
                default: 'snake'
            },
            color: {
                type: String,
                default: 'red'
            },
            size: {
                type: Number,
                default: 0.6
            }
        },
        data() {
            return {
                
            }
        },
        computed: {
            currSpinner() {
                return this.type
            }
        },
        components: {snake,doubleBounce}
    }
</script>
<style>
    
</style>