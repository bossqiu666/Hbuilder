// fn = function(){
// 	this.age = 22;
// 	this.name = "邱质海";
// 	this.prototype.color = 'red';
// }	
// var obj = new fn();
// console.log(obj);


// function Word(words) {
// 	this.words = words;
// }

// Word.prototype = {
// 	alert() {
// 		console.log("我是alert")
// 	},
// 	attr1: 123,
// 	attr2: "qiuzhihai"
// }
// console.log(Word.prototype)
// //创建实例
// var w = new Word("hello world");
// w.print = function() {
// 	console.log(this.words);
// 	console.log(this); //Person对象
// }
// w.print(); //hello world
// w.alert(); //hello world


// var a = 1;
// {
//   let a = 2;
//   console.log(a); //2
// }
// console.log(a); //1
// const A = [1,2];
// A.push(3);
// console.log(A); //[1,2,3]
// A = 10; //Error


// 方法新写法


function Person(name) {

	this.name = name;

}

function Mother() {}

Mother.prototype = { //Mother的原型

	age: 18,

	home: ['Beijing']

}
Person.prototype = new Mother(); //Person的原型为Mother

let p = new Person('mike');
Mother.prototype.age = 22;
// console.log(p);
// 数组操作
let arr = [0, 1, 2, 3, 4, 5, 6];
arr.forEach((arg) => {
	// console.log(arg)
})

//定义类
class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	toString() {
		return '(' + this.x + ', ' + this.y + ')';
	}
}

//上面代码定义了一个“类”，可以看到里面有一个constructor方法，这就是构造方法，而this关键字则代表实例对象。
//也就是说，ES5的构造函数Point，对应ES6的Point类的构造方法

//通常情况下
// var first = someArray[0];
// var second = someArray[1];
// var third = someArray[2];
let someArray = [0, 1, 2]
//解构赋值
let [first, second, third] = someArray; //比上面简洁多了吧

//还有下面例子
let [, , third_] = [1, 2, 3];
// console.log(third_); //3

let [first_, ...last_] = [1, 2, 3];
// console.log(last_); //[2,3]

//对象解构
let {
	name,
	age
} = {
	name: "lisi",
	age: "20"
};
// console.log(name); //lisi
// console.log(age); //20

let {
	ept
} = {};
// console.log(ept); //undefined


// class的所有方法都是不可枚举的
// es5
function Bar() {}
Bar.answer = function() {};
Bar.prototype.print = function() {};
// console.log(Object.keys(Bar)); // ["answer"]
// console.log(Object.keys(Bar.prototype)) // ["print"]
// es6
class Foo {
	constructor() {}
	static answer() {}
	print() {}
}
// console.log(Object.keys(Foo)) // []
// console.log(Object.keys(Foo.prototype)); // []



// 对象简写
let arg = 10;
obj = {
	arg
}
// console.log(obj);


//rest操作符  ...obj

function Fn() {
	Fn.prototype.test = function(data) {
		if (data > 0) {
			return '正数'
		} else {
			return '负数'
		}
	}
}

let fn = new Fn
console.log(fn.test(23))

[
	[true, 2, 3],
	[
		[-1, 8], 1, 2
	],
	[
		[-1, 16], 4
	],
	[
		[-1, 12], 0, 4
	]
]

[
	[true, 2, 1],
	[
		[-1, 15], 0, 5
	],
	[
		[-1, 24], 6, 2
	],
	[
		[-1, 5], 1, 1
	]
]

[
	[true, 8, 10, 7],
	[
		[-1, 10], 1, 3, 2
	],
	[
		[-1, 8], 1, 5, 1
	]
]

[
	[true, 2, 3],
	[
		[-1, 4], 1, 2
	],
	[
		[-1, 8], 4
	],
	[
		[-1, 6], 0, 4
	]
]

[ //解:[12/7,15/7,0,19/7,0],min=-120/7
	[false, -5, -4],
	[
		[-1, 6], 1, 2
	],
	[
		[-1, 4], 2, -1
	],
	[
		[-1, 15], 5, 3
	]
]

[ //解:[15/4,3/4,0,0]
	[true, 2, 1],
	[
		[-1, 15], 3, 5
	],
	[
		[-1, 24], 6, 2
	]
]

[ //解:[1,1.5,0,0],max=17.5
	[true, 10, 5],
	[
		[-1, 9], 3, 4
	],
	[
		[-1, 8], 5, 2
	]
]

[ //解:[15,5,0,10,0,0]
	[true, 2, -1, 1],
	[
		[-1, 60], 3, 1, 1
	],
	[
		[-1, 10], 1, -1, 2
	],
	[
		[-1, 20], 1, 1, -1
	]
]

[ //解:无界解
	[true, 6, 2, 10, 8],
	[
		[-1, 20], 5, 6, -4, -4
	],
	[
		[-1, 25], 3, -3, 2, 8
	],
	[
		[-1, 10], 4, -2, 1, 3
	]
]

[ //解:[10,50,0,30,0,0,0,0]
	[false, 1, 1, 1, 1, 1, 1, 1, 1],
	[
		[1, 100], 2, 1, 1, 1
	],
	[
		[1, 100], 0, 2, 1, 0, 3, 2, 1
	],
	[
		[1, 100], 1, 0, 1, 3, 0, 2, 3, 4
	]
]
