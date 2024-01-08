import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
		--blue: #007bff;
        --light-blue: #0069d9;
        --grey: #343a40;
        --theme-text: var(--invert);
	}
    body {
        background-color: var(--theme);
    }
    html[data-theme=light] {
	    --theme: white;
        --invert: black;
    }

    html[data-theme=dark] {
		--theme: black;
        --invert: white;
    }

`

export default GlobalStyles;