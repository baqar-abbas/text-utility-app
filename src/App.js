import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Text Utility" aboutText = "About Us"/>
    <div className="container my-4">
    <TextForm heading = "Enter the Text to Analyze" />
    </div>
    </>
  );
}

export default App;
