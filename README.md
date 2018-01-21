# 自己写的一些vue小组件



#### 1. 短信倒计时组件(src/components/countDown)


常见的发送短信验证码倒计时组件

属性
`start | Boolen`: 控制是否开始计时
`seconds | Number`: 倒计时的秒数，默认60s

方法 
`countDown`: 倒计时结束时触发

#### 2. 表格组件(src/components/vTable.vue)

使用示例：
```
<template>
	<div>
		<vTable :tableData="tableData"
		        :columns="columns"
		        @tdClick="tdClick"
		        @thClick="thClick"
		        @tableScroll="tableScroll">
                
		</vTable>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tableData: [
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
			],
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
	methods: {
            tdClick({target,row,rowIndex,col,colIndex}) {
                console.log(`点击的单元格为第${rowIndex}行第${colIndex}列，该行的数据为${row}，该列的数据为${col}`)
            },
            thClick({target,col,colIndex}) {
                console.log(`点击的表头为第${colIndex}列，该列的数据为${col}`)
            },
            tableScroll({target,scrollTop,scrollLeft}) {
                console.log(`横向滚动距离${scrollLeft};竖向滚动距离${scrollTop}`)
            }
	}
}
</script>
```
属性：

props | type | default |  说明 |
------------ | ------------- | ------------ | ----
tableData | Array| - | 要显示的数据。数组的每一项代表一行的数据。具体格式见上面的代码。
columns | Array | - | 控制每一列显示的内容和顺序，数组的每一项代表一列的显示，`value`对应`tableData`中每一个对象的键，`label`表示该列要展示的列名，'formatter'可以对列中每个单元格的内容进行格式化，参数为该单元格的内容。
highLightCurrRow | Boolean| true | 是否高亮当前行
thClassName | Object| - | 自定义单元格的`className`

事件：
`thClick`: 表头被点击时触发，参数见代码

`tdClick`: 单元格被点击时触发，参数见代码

`tableScroll`: 表格滚动时触发，参数见代码

slot：
可对表头单元格和表身单元格自定义一些内容，
name | props | 说明 |
------------ | ------------- | ------------ |
thSlot | col,colIndex | 表头单元格的自定义插槽 | 
tdSlot | col,colIndex,row,rowIndex | 表身单元格的自定义插槽 |




