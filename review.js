// local reviews data
const reviews = [
	{
		id: 1,
		name: "susan smith",
		job: "web developer",
		img: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
		text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		name: "anna johnson",
		job: "web designer",
		img: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
		text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
	},
	{
		id: 3,
		name: "peter jones",
		job: "intern",
		img: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
		text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
	},
	{
		id: 4,
		name: "bill anderson",
		job: "the boss",
		img: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
		text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
	},
	{
		id: 5,
		name: "Chisom Asiegbu",
		job: "Lawyer",
		img: "./images/WhatsApp Image 2023-02-21 at 21.07.08.jpg",
		text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
	},
	{
		id: 6,
		name: "Victoria  cromwell",
		job: "computer scientist",
		img: "./images/pexels-andrea-piacquadio-733872.jpg",
		text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
	},
	{
		id: 7,
		name: "Mark  Ford",
		job: "Bartender ",
		img: "./images/pexels-andrea-piacquadio-874158.jpg",
		text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
	},
	{
		id: 8,
		name: "Lewis Wilson ",
		job: "Civil engineer",
		img: "./images/pexels-creation-hill-1681010.jpg",
		text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
	},
	{
		id: 9,
		name: "Peter Hendrix",
		job: "Project manager ",
		img: "./images/pexels-elena-rubtsova-15764525.jpg",
		text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
	},
	{
		id: 10,
		name: "David Anderson",
		job: "Mobile developer",
		img: "./images/pexels-simon-robben-614810.jpg",
		text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
	},
	{
		id: 11,
		name: "Alex Hart",
		job: "UI designer",
		img: "./images/pexels-alexandra-folster-6307706.jpg",
		text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
	},
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
	const item = reviews[currentItem];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
	const item = reviews[person];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}
// show next person

nextBtn.addEventListener("click", function () {
	currentItem++;
	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson(currentItem);
});

// show prev person

prevBtn.addEventListener("click", function () {
	currentItem--;
	if (currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showPerson(currentItem);
});

// show random person
randomBtn.addEventListener("click", function () {
	console.log("hello");

	currentItem = Math.floor(Math.random() * reviews.length);
	showPerson(currentItem);
});
