import './App.css'
import Dashbody from './Components/Dashbody'
import Navbar from './Components/Navbar'
import Sidenav from './Components/Sidenav'

function App() {

  return (
    <>
      <div className='flex'>
          <Sidenav />
          <div className='w-[100%]'>
                <Navbar />
                <Dashbody/>
          </div>
      </div>
    </>
  )
}

export default App
