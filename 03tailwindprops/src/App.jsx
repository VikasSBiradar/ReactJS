import './App.css'
import Card from './components/Card'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>TailwindCSS</h1>
      <Card name='Angelina Jolie' description ='Fashion model showcasing trends, elegance, style, confidence, and creativity in photoshoots, runway shows, and brand campaigns worldwide.' imgsrc='https://images.pexels.com/photos/8864285/pexels-photo-8864285.jpeg?auto=compress&cs=tinysrgb&w=600'/>
      <Card name='Gigi hadi' description='Fashion model embodying beauty, poise, and versatility, representing top designers, brands, and inspiring style across global runways and campaigns.' imgsrc='https://images.pexels.com/photos/29479572/pexels-photo-29479572/free-photo-of-vibrant-fashion-portrait-of-a-model-in-nigeria.jpeg?auto=compress&cs=tinysrgb&w=600'/> 
      <Card/>
    </>
  )
}

export default App
