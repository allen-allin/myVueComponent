<template>
    <div @scroll="handleScroll($event)" @click.stop="handleTableClick($event)" class="table-container">
        <table>
            <thead>
                <tr>
                    <th v-for="(col,colIndex) in columns" 
                        :style="{minWidth: (col.width + 'px') || 'none'}"
                        :class="getClassName()"
                        @click.stop="handleThClick({target: $event.target,col,colIndex})">
                        <span class="marginR">{{col.label}}</span>
                        <span class="triangle-up-th" :class="{rotate180: isThRotate && currThTri === colIndex,rotate360: !isThRotate}"></span>
                        <slot name="thSlot" :thInfo="{col,colIndex}"></slot>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row,rowIndex) in currData">
                    <td v-for="(col,colIndex) in row"
                        @click.stop="handleTdClick({target: $event.target,row: tableData[rowIndex],rowIndex,col,colIndex})">
                        <span class="marginR">{{col}}</span>
                        <span class="triangle-up-td" 
                              :class="{rotate180: isTdRotate && currTdTriRow === rowIndex && currTdTriCol === colIndex,
                                        rotate360: !isTdRotate}">
                        </span>
                        <slot name="thSlot" :tdInfo="{col,row: tableData[rowIndex],colIndex,rowIndex}"></slot>
                    </td>
                </tr>
            </tbody>`
        </table>
    </div>
</template>
<script>
export default {
    props: {
        tableData: {
            type: Array,
            default () {
                return []
            }
        },
        columns: {
            type: Array,
            default () {
                let data = this.tableData[0];
                let arr = [];
                for(let key in data) {
                    arr.push({
                        label: key,
                        value: key
                    })
                };
                return arr
            }
        },
        thClassName: Object
    },
    data() {
        return {
            currData: [],
            isThRotate: false,
            isTdRotate: false,
            currThTri: -1,
            currTdTriRow: -1,
            currTdTriCol: -1,
            currThTriRow: -1
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
                        if (cell.value.includes('.')) {
                            let arr = cell.value.split('.');
                            if (row[arr[0]]) {
                                tds.push(cell.formatter(row[arr[0]][arr[1]]))
                            }else {
                                tds.push('')
                            }                           
                        }else {
                            tds.push(cell.formatter(row[cell.value])); 
                        }                        
                    } else {
                        if (cell.value.includes('.')) {
                            let arr = cell.value.split('.');
                            if (row[arr[0]]) {
                                tds.push(row[arr[0]][arr[1]])
                            }else {
                                tds.push('')
                            }                           
                        }else {
                            tds.push(row[cell.value]); 
                        }
                    }
                })
                trs.push(tds)
            })
            this.currData = trs
        },
        handleScroll(e) {
            this.$emit('tableScroll',{
                scrollTop: e.target.scrollTop,
                scrollLeft: e.target.scrollLeft,
            })
        },
        handleTableClick(e) {
            this.$emit('tableClick',e.target)
        },
        handleThClick(params) {
            this.currThTri = params.colIndex;
            this.isThRotate = !this.isThRotate;
            this.$emit('thClick',params)
        },
        handleTdClick(params) {
            this.currTdTriCol = params.colIndex;
            this.currTdTriRow = params.rowIndex;
            this.isTdRotate = !this.isTdRotate;
            this.$emit('tdClick',params)
        },
        getClassName() {
            return this.thClassName ?  {[thClassName]: true} : {th: true}
        }
    }
}
</script>
<style scoped>
.table-container {
    font-size: 12px;
    overflow: scroll;
}
table {
    border-collapse: separate;
    width: 100%;
}
td {
    height: 20px;
    position: relative;
    padding: 8px 10px;
    border: 1px solid #ddd;
    border-top: 0;
    border-left: 0;
    border-radius: 0;
}
td:first-child {
    border-left: 1px solid #ddd;
}
.th {
    height: 20px;
    position: relative;
    padding: 8px 10px;
    white-space: nowrap;
    border-right: 1px solid #292929;
    border-bottom: 1px solid #292929;
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, .15), 0 0 0, 0 0 0, 0 0 0;
    background: -moz-linear-gradient(top, #3f3f3f, #333334);
    background: -webkit-linear-gradient(top, #3f3f3f, #333334);
    background: -o-linear-gradient(top, #3f3f3f, #333334);
    background: -ms-linear-gradient(top, #3f3f3f, #333334);
    background: linear-gradient(to bottom, #3f3f3f, #333334); // background: #3f3f3f;
    color: white;
    border-radius: 0;
}
.table-container::-webkit-scrollbar-thumb {
    background-color: rgba(136, 136, 136, .5);
    border-radius: 20px;
    z-index: 999;
}

.table-container::-webkit-scrollbar {
    height: 5px;
    width: 10px;
}

.table-container::-webkit-scrollbar-track {
    border-radius: 20px;
}
.triangle-up-th,.triangle-up-td {
    position: absolute;
    top: 50%;
    margin-top: -3px;
    right: 8px;
    transition: all .5s;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    border-top: 6px solid #fff;
}
.triangle-up-td {
    border-top: 6px solid black;
}
.rotate180 {
    transform: rotate(180deg);
}
.marginR {
    margin-right: 20px;
}
</style>
