import DialogModal from './components/DialogModal'
import ModalContentType from './types/ModalContentType'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>React hooks modal sample</h1>
      <section>
        <h2>Dialog modal by fade</h2>
        <DialogModal contentType={ModalContentType.fade} contentText='This is dialog modal by fade' />
      </section>
      <section>
        <h2>Dialog modal by slide</h2>
        <DialogModal contentType={ModalContentType.slide} contentText='This is dialog modal by slide' />
      </section>
    </div>
  );
}

export default App;
