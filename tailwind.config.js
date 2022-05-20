module.exports = {
	darkMode: 'class',
	content: ['./*.html'],
	theme: {
		screens: {
			'lg': { 'max': '992px' },
			'md': { 'max': '768px' },
			'sm': { 'max': '480px' }
		},
		container: {
			center: true,
			padding: '15px',
		},
		extend: {
			colors: {
				red: '#EB3D35',
				redOrange: '#C35B48',
				blue: '#051655',
				lightblue: '#F3F6F9',
				white: '#fff',
				gray: '#747887',
				lightgray: '#E5E4E1',
			},
		},
	},
	plugins: [],
}
