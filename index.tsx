import React from 'react'
import ReactDOM from 'react-dom'

import App from '~/src/App'

function enable_hmr() {
	if (module.hot) {
		module.hot.accept()
	}
}

function render_application() {
	console.log('testi')
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	)
}

function main() {
	enable_hmr()
	render_application()
}

main()