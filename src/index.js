import ReactDOM from "react-dom/client";
import React from 'react';
// import Button from './components/Button.js'
// import SaveIcon from '@mui/icons-material/Save';

// class App extends React.Component {
// 	render() {
// 		return (
// 			<Button label="Test text" startIcon={<SaveIcon />}/>
// 		);
// 	}
// }

import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);