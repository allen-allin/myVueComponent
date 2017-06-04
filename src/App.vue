<template>
    <div id="app">
        <div v-for="item in link">
            <router-link :to="'/'+item.component">{{item.component}}</router-link>
            <br>
        </div>
        <router-view v-if="$route.name === 'countDown'" :start='start' :seconds="50" @countDown='start=false' @click.native='sendCode'></router-view>
        <router-view v-if="$route.name === 'spinner'"></router-view>
        <router-view v-if="$route.name === 'spinner'" type="doubleBounce" color="black" :size="0.6"></router-view>
        <!-- <router-view v-if="$route.name === 'vTable'" :tableData="tableData" :columns="columns"></router-view> -->
        <vTable :tableData="tableData" :columns="columns" @tdClick="tdClick" @thClick="thClick"></vTable>
    </div>
</template>
<script>
import { data } from './tableData.json'

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
                    value: 'cTime',
                    label: '登陆时间'
                }, {
                    value: 'nick',
                    label: '用户名'
                }, {
                    value: 'userID',
                    label: '用户ID'
                },{
                    value: 'company.name',
                    label: '公司',
                    formatter: function (value) {
                        return value && value + '123'
                    },
                    width: '500'
                },{
                    value: 'start',
                    label: '状态'
                },{
                    value: 'operTime',
                    label: 'operTime'
                },{
                    value: 'operNum',
                    label: 'operTime'
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
        },
        tdClick(params) {
            console.log(params)
        },
        thClick(params) {
            console.log(params)
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
