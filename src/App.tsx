import './App.css'

import {Content, data} from './data';
import Directory from './directory';
import FileEntry from './file-entry';

function App() {
  return data.contents.map((content: Content) => (
    <>
      {content.type === 'file' && <FileEntry content={content} />}
      {content.type === 'dir' && <Directory content={content} />}
    </>
  ))
}

export default App
