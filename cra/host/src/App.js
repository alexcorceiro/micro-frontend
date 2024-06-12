import React from 'react';
import PreviewPok from '../../sharedComponent/src/components/PreviewPok';
import { Header, Footer } from '../../sharedComponent/src';

const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => (
  <div>
    <Header/>
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
      <PreviewPok/>
    </React.Suspense>
    <Footer/>
  </div>
);

export default App;
