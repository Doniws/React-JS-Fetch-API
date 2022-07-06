import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Superman from './components/Superhero'
import "./style/LandingPage.css"

function App() {
  return (
    <div>
      {/* intro section  */}
      <div className='myBG ' >
        <NavigationBar />
        <Intro /> 
      </div>
      {/* end intro section  */}

      {/* trending section  */} 
      <div className='trending'>
        <Trending />
      </div>
      {/* end trending section  */}

      {/* superhero section  */}
      <div className='superhero'>
        <Superman />
      </div>
    </div>
  );
}

export default App
