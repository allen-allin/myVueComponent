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
const data =  [
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
					gender: 'male'
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
					gender: 'male'
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					gender: 'male'
				}
			]

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
					value: 'gender',
					label: '性别',
					formatter: function(value) {
						return value === 'male' ? '男' : '女'
					}
				},
				{
					value: 'date',
					label: '日期'
				},
				{
					value: 'name',
					label: '姓名'
				},
				{
					value: 'address',
					label: '地址'
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
