<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th v-for="th in columns">{{th.label}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tr,index) in currData">
                    <td v-for="(td,key) in tr">{{td}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props: {
        columns: {
            type: Array,
            default () {
                return []
            }
        },
        tableData: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data() {
        return {
            currData: []
        }
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.makeData()
    },
    methods: {
        makeData() {
            let {
                tableData,
                columns
            } = this;
            let trs = [];
            tableData.forEach((row) => {
                let tds = [];
                columns.forEach((cell, index) => {
                    if (cell.formatter && typeof cell.formatter === 'function') {
                        tds.push(cell.formatter(row[cell.value]))
                    } else {
                        tds.push(row[cell.value])
                    }

                })
                trs.push(tds)
            })
            this.currData = trs
        }
    }
}
</script>
<style scoped>
</style>
