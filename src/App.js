import React from 'react'
import Login from './pages/Login'
import Payment from './pages/payment'
import Home from './pages/Home'




import { BrowserRouter , Link, Route, Routes} from 'react-router-dom'





function App  () {
  return (
    <div className='App'>
        <BrowserRouter>
        
            
            <Routes>
                                                                                                                                                                                               
              <Route  path="/" element={<Login/>}/>
                
              <Route  path="/payment" element={<Payment/>}/>

              <Route path="Home" element= {<Home/>}/>
              
             

            </Routes>
            
        
        </BrowserRouter>
              
              
    </div>
    
  )
}



export default App