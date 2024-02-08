
import { useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import Request from './components/Request/Request'
import Response from './components/Response/Response'
import { useGlobalStore } from './components/Context/ContextProvider'

function App() {

  const {state} = useGlobalStore()
  const [loading,setLoading] = useState(false)

  return (
    <>
          <Layout>
            <main className='bg-white px-5 '>
                <div className='pt-[80px] pb-5'>
                  <Request setLoading={setLoading}/>
                  <Response loading={loading}/>  
                </div> 
            </main>
          </Layout>
    </>
  )
}

export default App
