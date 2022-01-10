import React, { Component } from 'react';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';

class App extends Component {
	render() { 
		return (
			<>
				<Cart></Cart>
				<Shop></Shop>
			</>
		);
	}
}
 
export default App;