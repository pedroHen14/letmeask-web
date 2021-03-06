import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body {
		background-color: #f8f8f8;
		color: #29292e;
	}

	@media (prefers-color-scheme: light) {
		body {
			background-color: #202E3A; // 🌑
			color: #f0ece2;
		}

		.logo-img-dark-mode {
			align-self: center;

			path:nth-child(1) {
				fill: #f8f8f8;
			}

			path:nth-child(2) {
				fill: #f8f8f8;
			}

			path:nth-child(3) {
				fill: #f8f8f8;
			}

			path:nth-child(4) {
				fill: #f8f8f8;
			}

			path:nth-child(5) {
				fill: #f8f8f8;
			}
		}

		h1 {
			color: #7579e7;
		}

		h3 {
			color: #69779b;
		}

		img {
			filter: brightness(0.9);
		}
	}

	body,
	input,
	button,
	textarea {
		font: 400 16px "Roboto", sans-serif;
	}
`;