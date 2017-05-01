<template>
    <div id="app">
        <div v-for="item in link">
            <router-link :to="'/'+item.component">{{item.component}}</router-link>
            <br>
        </div>
        <router-view v-if="$route.name === 'countDown'" :start='start' :seconds="50" @countDown='start=false' @click.native='sendCode'></router-view>
        <router-view v-if="$route.name === 'spinner'"></router-view>
        <router-view v-if="$route.name === 'spinner'" type="doubleBounce" color="blue" :size="0.8"></router-view>
        <!-- <router-view v-if="$route.name === 'vTable'" :tableData="tableData" :columns="columns"></router-view> -->
        <vTable :tableData="tableData" :columns="columns"></vTable>
    </div>
</template>
<script>
import { loginList } from './tableData.json'
let { data } = loginList;
import vTable from '@/components/vTable.vue'

export default {
    name: 'app',
    data () {
        return {
            link: [{
                component: 'countDown'
            }, {
                component: 'spinner'
            }, {
                component: 'vTable'
            }],
            start: false,
            seconds: 50,
            columns: [
                {
                    value: 'logTime',
                    label: '登陆时间'
                }, {
                    value: 'userName',
                    label: '用户名'
                }, {
                    value: 'operTime',
                    label: '操作时长',
                    formatter (value) {
                        return (value / 60).toFixed(2) + 'min'
                    }
                }, {
                    value: 'userID',
                    label: '用户ID'
                }
            ]
        }
    },
    computed: {
        tableData () {
            return data;
        }
    },
    methods: {
        sendCode () {
            this.start = true
        }
    },
    components: { vTable }
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 0.2rem;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
