import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Hello from './test';
import MyComponentClass from './component/welcome'
import Logos from './component/logos';
import ClickFunc from './component/experiment';
import Counter from './counter';
import 'bootstrap/dist/css/bootstrap.min.css';
// import PersonList from './component/PersonList';
import PersonInput from './component/PersonInput';
import Table from './component/Table';
// import $ from jquery;



var styles = {
	fontSize: '14px',
	backgroundColor: 'red'
}

//displaying name using id and classname
const name = <h1 style={styles}> prajwala </h1>

ReactDOM.render(name,document.getElementById('myname'));

ReactDOM.render(name,document.getElementsByClassName('myclass')[0]);


//displaying through outer div

const group = (
	<div>
	<p> this is first para </p>
	<p> this is second para</p>
	</div>
);

ReactDOM.render(group, document.getElementById('outer'));



//displaying through for loop in particular div and from test.js

 for (var i = 0; i < document.getElementsByClassName('root').length; i++) {
 	ReactDOM.render(<Hello />, document.getElementsByClassName('root')[i]);
 }
	

//component creation in other page

	var hello = (
		<div className="hii"> learning react</div>
		);


ReactDOM.render(hello, document.getElementById('abc'));



//map array method


const alpha = ['a', 'b', 'c'];

const alphabets = alpha.map(letter =>

	<li key={letter}>{letter}</li>
);


ReactDOM.render(<ul>{alphabets}</ul>, document.getElementById('app'));



//virtual dom concept



ReactDOM.render(name,document.getElementsByClassName('root')[0]);


//javascript rendering

var aa = <h3>{2+3}</h3>

ReactDOM.render(aa,document.getElementsByClassName('myclass')[1]);


//image uploading and styling


const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

const sidelength = "200px";

var newNew = {
	height: '400px',
	width: '400px'
}

// const newObject = (
// 	newNew.height,
// 	newNew.width
// );

const image = (<img src={goose} height={newNew.height} width={newNew.width} />);

ReactDOM.render(image,document.getElementById('images'));


//events onclick



function geese(e) {
	e.target.setAttribute('src','https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg');
}	

const dog = (<img onClick={geese} src='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg' height={sidelength} width={sidelength} />);

ReactDOM.render(dog,document.getElementById('image'));


// ternary operator

function coinToss() {
	return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
	cat: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
	dog: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
  };

  const img = <img className='doggy' src={pics[coinToss() === 'heads'? 'cat' : 'dog']} />

ReactDOM.render(img,document.getElementById('coin'));


// adding class

function activateElement (e) {
	e.target.setAttribute('class','colorchange');
}

const diffColor = (<h1 onMouseOver={activateElement}>color will be changed</h1>);

ReactDOM.render(diffColor,document.getElementById('dif'));


//alert message onclick

function display () {
	alert(
		"you clicked on this page"
	);
}

const message = (<div onClick={display}>hey</div>);

ReactDOM.render(message,document.getElementById('msg'));


// without using jsx creating element

const myDiv = React.createElement(
	"div",	
	null,
	// React.createElement('h1', null, 'hello world')
	"hello world"
);

ReactDOM.render(myDiv,document.getElementById('development'));

// if else


function toss() {
	return	Math.random > 0.5 ? 'head' : 'tail';
}

const animal = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg';
const bird = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

let exampleImg;

if(toss() === 'head') {
	exampleImg = <img src={animal} className='doggy' />
}
else
{
	exampleImg = <img src={bird} className='doggy' />
}

ReactDOM.render(exampleImg,document.getElementById('example'));

// creating component

// ReactDOM.render(<Welcome />, document.getElementById('comp'));

// FUNCTION BASED 
// ReactDOM.render(<Logos />,document.getElementById('myname'));

//function props


function Names(props) {
	return (
			<div className ="ages" >
				<h4>Name:{props.name}</h4>
				<h5>Age:{props.age}</h5>
			</div>
	);
}

var person = (
<div>
<Names name="bala" age="99" />
<Names name="balu" age="30" />
</div>
);

ReactDOM.render(person,document.getElementsByClassName('bala')[0]);

// button click function

ReactDOM.render(<ClickFunc />, document.getElementById('clickme'));

// using create element inside function



// function myFunc() {
	
// 	return (
// 		React.createElement(
// 			"h1",
// 			null,
// 			"prajwala"
// 		)

// 	);

// }

ReactDOM.render(<MyComponentClass name="prajwala" />, document.getElementById('clickme'));

//time in reactjs

function calender() {
	var calenderDate = (
		<div>
		<h1>time is {new Date().toLocaleTimeString()}</h1>
		</div>
	);

ReactDOM.render(calenderDate,document.getElementById('calender'));
}


setInterval(calender(),1000);

// counter


ReactDOM.render(<Counter />,document.getElementById('exp'));




ReactDOM.render(<div><PersonInput /> <Table /></div>, document.getElementsByClassName('axis')[0] );




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
