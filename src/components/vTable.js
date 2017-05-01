
export default {
	props: {
		columns: {
			type: Array,
			default() {
				return	[]
			}
		},
		tableData: {
			type: Array,
			default() {
				return []
			}
		}
	},
	data() {
		return {
			currCol: [],
			currData: []
		}
	},
	created() {
		this.makeCols();
		this.makeData();
	},
	methods: {
		makeCols() {
			this.currCol = this.columns/*.map((col,index) => {
				col._index = index;
				return col
			})
			console.log(this.currCol)*/
		},
		makeData() {
			this.currData = this.tableData/*.map((row,index) => {
				row._index = index;
				return row
			})
			console.log(this.currData)*/
		}
	},
	render(h) {
		let ths = [];
		let trs = [];
		let {currCol,currData} = this;

		currCol.forEach((col)=> {
			ths.push(h('th',col.label))
		})

		currData.forEach((row)=>{
			let tds = [];
			currCol.forEach((cell,index)=>{
				if (cell.formatter && typeof cell.formatter === 'function') {
					tds.push(h('td',cell.formatter(row[cell.value])))
				}else {
					tds.push(h('td',row[cell.value]))
				}
				
			})
			trs.push(h('tr',tds))
		})


		return h('table',[
			h('thead',[
				h('tr',ths)
			]),
			h('tbody',trs)
		])
	}
}
