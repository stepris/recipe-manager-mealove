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
    margin: 0;
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

    /* Font Styles */
    --font-family: ${openSans.style.fontFamily};

    --font-nav: normal 900 1.5rem/1 var(--font-family);  

    --font-headline-1: normal 700 1.5rem/1 var(--font-family);  
    --font-headline-2: normal 700 1.125rem/1.167 var(--font-family);  
    --font-headline-3: normal 700 0.875rem/1.143 var(--font-family);  

    --font-base: normal 400 0.875rem/1.143 var(--font-family);
    --font-base-special-1: normal 400 1.125rem/1.167 var(--font-family);  

    --font-caption: normal 600 0.688rem/1.182 var(--font-family);

  }
`;
