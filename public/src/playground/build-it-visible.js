
let visibility = false;



const createToggleVisibility = () => {
	visibility = !visibility
	render();
}




const app = {
	title: "Visibility Toggle"
}


const appRoot = document.getElementById('app');




const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>

			<button onClick={createToggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>

   {visibility && (<div><p> I'm showing some details!</p></div>)}

		</div>

		);


	ReactDOM.render(template, appRoot)
};

render();


