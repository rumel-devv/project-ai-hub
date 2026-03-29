import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Models from './Components/Models'
import NavBar from './Components/Navbar'
import Cart from './Components/Cart'
import { ToastContainer } from 'react-toastify'


const getModels = async () => {
  const res = await fetch('/models.json')
  return res.json()
}
// console.log(getModels);

const modelPromise = getModels()

function App() {
    const [activeTab,setACtiveTab] = useState('model')
    const [carts,setCarts] = useState([])
    console.log(carts);
  return (

    <>
      <NavBar></NavBar>
      <Banner></Banner>

{/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent p-4">
  <input onClick={() => {setACtiveTab('model')} }  type="radio" name="tabs" className="tab w-30 md:w-40 rounded-full"  aria-label="Models" defaultChecked />
  <input onClick={() => {setACtiveTab('cart')} } type="radio" name="tabs" className="tab w-30 md:w-40 rounded-full" aria-label={`Cart (${carts.length})`}  />
</div>

   {activeTab === 'model' ? <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} ></Models> : <Cart setCarts={setCarts} carts={carts}></Cart>}
    <ToastContainer></ToastContainer>
      <Footer></Footer>
    </>
  )
}

export default App
