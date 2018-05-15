const one = {
	template: `<div class='text-center'>
			   <h1> Aries </h1>
			   <img class = 'img-fluid' src = 'img/aries.png' alt = 'aries'>
			   </div>`    
}
const two = {
	template: `<div class='text-center'>
			   <h1> Taurus </h1>
			   <img class = 'img-fluid' src = 'img/taurus.png' alt = 'taurus'>
			   </div>`
}
const three = {
	template: `<div class='text-center'>
			   <h1> Gemini </h1>
			   <img class = 'img-fluid' src = 'img/gemini.png' alt = 'gemini'>
			   </div>`
}
const four = {
	template: `<div class='text-center'>
			   <h1> Cancer </h1>
			   <img class = 'img-fluid' src = 'img/cancer.png' alt = 'cancer'>
			   </div>`
}

const five = {
	template: `<div class='text-center'>
			   <h1> Leo </h1>
			   <img class = 'img-fluid' src = 'img/leo.png' alt = 'leo'>
			   </div>`
}

const six = {
	template: `<div class='text-center'>
			   <h1> Virgo </h1>
			   <img class = 'img-fluid' src = 'img/virgo.png' alt = 'aquarius'>
			   </div>`
}
const seven = {
	template: `<div class='text-center'>
			   <h1> Libra </h1>
			   <img class = 'img-fluid' src = 'img/libra.png' alt = 'aquarius'>
			   </div>`
}
const eight = {
	template: `<div class='text-center'>
			   <h1> Scorpio </h1>
			   <img class = 'img-fluid' src = 'img/scorpio.png' alt = 'aquarius'>
			   </div>`
}
const nine = {
	template: `<div class='text-center'>
			   <h1> Saggitarius </h1>
			   <img class = 'img-fluid' src = 'img/sagittarius.png' alt = 'aquarius'>
			   </div>`
}
const ten = {
	template: `<div class='text-center'>
			   <h1> Capricorn </h1>
			   <img class = 'img-fluid' src = 'img/capricorn.png' alt = 'capricorn'>
			   </div>`
}
const eleven = {
	template: `<div class='text-center'>
			   <h1> Aquarius </h1>
			   <img class = 'img-fluid' src = 'img/aquarius.png' alt = 'aquarius'>
			   </div>`
}
const twelve = {
	template: `<div class='text-center'>
			   <h1> Pisces </h1>
			   <img class = 'img-fluid' src = 'img/pisces.png' alt = 'pisces'>
			   </div>`
}

const router = new VueRouter ({
	routes: [
		{
			path : '/one' ,
			component: one
		},
		{
			path : '/two' ,
			component: two
		},
		{
			path : '/three' ,
			component: three
		},
		{
			path : '/four' ,
			component: four
		},
		{
			path : '/five' ,
			component: five
		},
		{
			path : '/six' ,
			component: six
		},
		{
			path : '/seven' ,
			component: seven
		},
		{
			path : '/eight' ,
			component: eight
		},
		{
			path : '/nine' ,
			component: nine
		},
		{
			path : '/ten' ,
			component: ten
		},
		{
			path : '/eleven' ,
			component: eleven
		},
		{
			path : '/twelve' ,
			component: twelve
		}
	]
})


var zodiacApp = new Vue ({
	router,
	el: '#app',
	data: {

	},
	methods: {

	}
}).$mount('#app')