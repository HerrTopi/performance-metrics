## Performance metrics

  

A small application for measuring the render times of components. It is built on top of  [create-react-app](https://github.com/facebook/create-react-app)

## Installation

	git clone https://github.com/HerrTopi/performance-metrics.git

	yarn

	yarn start

## Usage

1: Install any component you want to measure from npm

	yarn add <your_package_name>

2: (optional) Make a new component in the `components` folder and render anything you want to measure

3: Import the component you want to measure to `App.js`

```js 
import {<Component_to_test>} from 'package/to/import/from'
```
4: Add the imported component with its path (any unique string) to the `routes` object
```js
const  routes = [{
	path:'<route_you_choose>',
	component:  <Component_to_test/>
},...
]
```

5: Run the application

	Yarn start

6: On the "setup" page pick the component you want to test and add  the number of tries you want the app to make (make it 5-20)

7: click on `run test` 
