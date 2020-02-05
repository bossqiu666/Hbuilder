var obj = {
	data: [
		[3, 9, 1, 0, 0, 540],
		[5, 5, 0, 1, 0, 450],
		[9, 3, 0, 0, 1, 720],
		[70, 30, 0, 0, 0, 0]
	],
	rowMax: function(data) {
		let max, column, z = data[3]
		for (var i = 0; i < z.length; i++) {
			if (i == 0) {
				max = z[0]
				column = 0

			} else if (z[i] != 0 && z[i] > max) {
				max = z[i]
				column = i
			}
		}
		console.log('max:', max, 'column:', column)
		if (max > 0) {
			// console.log('计算Q')
			this.countQ(data,column)
		} else{
			console.log('处理完成:' ,this.data)
		}
	},
	
	// 计算Q
	countQ: function(data,column){
		let min, row
		for (var i = 0; i < data.length-1; i++) {
			data[i][6] = data[i][5]/data[i][column]
			if (i == 0) {
				row = 0
				min = data[i][6]
			} else if (i > 0 && data[i][6] < min) {
				row = i
				min = data[i][6]
			}
		}
		console.log('min:', min, 'row:', row)
		let data1 = JSON.parse(JSON.stringify(data))
		// console.log( 'data1:', data1)
		this.thin(data,row,column)
	},
	
	// 当前行系数化为1
	thin: function(data,row,column){
		let multiplier = 1/data[row][column]
		for (var i = 0; i < data[row].length; i++) {
			data[row][i] = data[row][i] * multiplier
		}
		let data2 =JSON.parse(JSON.stringify(data))
		// console.log('data2:', data2)
		this.conversion(data,row,column)
	},
	
	// 其他系数化为0
	conversion:function(data,row,column){
		for (var i = 0; i < data.length; i++) {
			if (i != row) {
				let tempArr = JSON.parse(JSON.stringify(data[row])) 
				let multiplier = data[i][column]
				// 放大临时数组
				for (var j = 0; j < tempArr.length; j++) {
					tempArr[j] = tempArr[j] * multiplier
				}
				for (var k = 0; k < data[i].length; k++) {
					data[i][k] = data[i][k] - tempArr[k]
				}
				// console.log(tempArr)
			}
		}
		let data3 = JSON.parse(JSON.stringify(data))
		// console.log('data3:', data3)
		this.rowMax(data)
	}
	
}
obj.rowMax(obj.data)
