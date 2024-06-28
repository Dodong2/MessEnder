import './App.css'
import { lazy, Suspense} from 'react'
const Main = lazy(() => import('./pages/Main'))

function App() {

  return (
    <>
     <Suspense fallback={<div className=''>Loading.....</div>}>
     <Main/>
     </Suspense>
    </>
  )
}

export default App
