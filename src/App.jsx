
import { Suspense } from 'react';
import './App.css'
import Countries from './Components/Countries/Countries'
const countryPromise = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  return res.json();
}
function App() {
  return (
    <>
      <h1>Here My Simple React Country Project</h1>
      <Suspense fallback={<h4>Loading...</h4>}>
        <Countries countryPromise={countryPromise()}></Countries>
      </Suspense>
    </>
  )
}

export default App
