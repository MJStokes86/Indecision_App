'use strict';

console.log("app.js is now running!");

// JSX - JavaScript XML
// var template = <div><h1>Indecision App</h1><p>This is some info</p></div>;

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

var app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();

	var option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
};

var removeAll = function removeAll() {
	app.options = [];
	render();
};

var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var render = function render() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		app.subtitle && React.createElement(
			'p',
			null,
			app.subtitle
		),
		React.createElement(
			'p',
			null,
			app.options.length > 0 ? 'Here are your options' : 'No options'
		),
		React.createElement(
			'p',
			null,
			app.options.length
		),
		React.createElement(
			'button',
			{ onClick: removeAll },
			'Remove All'
		),
		React.createElement(
			'ol',
			null,
			app.options.map(function (option) {
				return React.createElement(
					'li',
					{ key: option },
					option
				);
			})
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Option'
			)
		)
	);

	ReactDOM.render(template, appRoot);
};

render();
