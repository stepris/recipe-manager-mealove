import { createGlobalStyle } from 'styled-components';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${openSans.style.fontFamily};
    padding: 0;
    margin: 0 auto;
    max-width: 375px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
  font-size: inherit;
  font-weight: inherit;
  }

  a {
  color: inherit;
  text-decoration: inherit;
}

  p {
    margin: 0;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-feature-settings: inherit; /* 1 */
    font-variation-settings: inherit; /* 1 */
    font-size: 100%; /* 1 */
    font-weight: inherit; /* 1 */
    line-height: inherit; /* 1 */
    letter-spacing: inherit; /* 1 */
    color: inherit; /* 1 */
    margin: 0; /* 2 */
    padding: 0; /* 3 */
  }

  ol,
  ul,
  menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block; /* 1 */
    vertical-align: middle; /* 2 */
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }


  :root{
    /* Color Styles */
    --color-primary-1: #F43F5E;
    --color-primary-2: #881337;

    --color-neutral-1: #f5f5f4;
    --color-neutral-2: #d6d3d1;
    --color-neutral-3: #1C1917;
    --color-neutral-4: #0c0a09;

    --color-neutral-1-alpha90: #f5f5f4cc;
    --color-neutral-3-alpha50: #1C191780;
    --color-neutral-4-alpha25: #0c0a0940;

    --color-feedback-warning: #b91c1c;
    --color-feedback-success: #65a30d;
    --color-information-rating: #f59e0b;

    --color-cat1-red: #fecaca;
    --color-cat2-blue: #bfdbfe;
    --color-cat3-purple: #e9d5ff;
    --color-cat4-lime: #d9f99d;
    --color-cat5-yellow: #fef08a;
    --color-cat6-slate: #e2e8f0;
    --color-cat7-orange: #fed7aa;

    --color-cat1-red-alpha: #fecacacc;
    --color-cat2-blue-alpha: #bfdbfecc;
    --color-cat3-purple-alpha: #e9d5ffcc;
    --color-cat4-lime-alpha: #d9f99dcc;
    --color-cat5-yellow-alpha: #fef08acc;
    --color-cat6-slate-alpha: #e2e8f0cc;
    --color-cat7-orange-alpha: #fed7aacc;
    
    /* Font Styles */
    --font-family: ${openSans.style.fontFamily};

    --font-size-small: 0.875rem;
    --font-size-base: 1rem; 

    --font-scaler: 1.125

    --font-size-l: calc(var(--font-size-base) * var(--font-scaler))
    --font-size-xl: calc(var(--font-size-l) * var(--font-scaler))
    --font-size-xxl: calc(var(--font-size-xl) * var(--font-scaler))
    --font-size-xxxl: calc(var(--font-size-xxl) * var(--font-scaler))
    --font-size-xxxxl: calc(var(--font-size-xxxl) * var(--font-scaler))
    --font-size-xxxxxl: calc(var(--font-size-xxxxl) * var(--font-scaler))

    --font-nav: normal 900 var(--font-size-xl) var(--font-family);  
    --font-headline-1: normal 700 var(--font-size-xl) var(--font-family);  
    --font-headline-2: normal 700 var(--font-size-l) var(--font-family);  
    --font-headline-3: normal 700 var(--font-size-small) var(--font-family);  
    --font-base: normal 400 var(--font-size-base) var(--font-family);
    --font-caption: normal 600 var(--font-size-small) var(--font-family);

    /* Radius */
    --radius-s: 5px;
    --radius-m: 10px;
    --radius-l: 15px;

    /* Spacing */
    --spacing-1: 5px;
    --spacing-2: 10px;
    --spacing-3: 15px;
    --spacing-4: 20px;
    --spacing-5: 25px;
    --spacing-6: 30px;
    --spacing-7: 35px;
    --spacing-8: 40px;
    --spacing-9: 45px;
    --spacing-10: 50px;
  }
`;
