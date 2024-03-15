import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
//   );
root.render(
  <React.StricMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StricMode>
);
