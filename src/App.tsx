import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageEditor from './editor';
import PageShow from './show';
import { ToastComponent } from 'amis-ui'

function App() {
  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/editor-app' : '/'}>
      <Routes>
        <Route path="/" element={<PageEditor />}></Route>
        <Route path="/edit/:pageId" element={<PageEditor />}></Route>
        <Route path="/show/:pageId" element={<PageShow />}></Route>
      </Routes>

      <ToastComponent></ToastComponent>
    </BrowserRouter>
  );
}

export default App;
