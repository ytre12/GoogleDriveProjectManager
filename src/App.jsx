import { useState } from 'react'

import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import Project from './components/Projects.jsx'

import PeyPallPNG from './assets/paypal.png'

import DATA from './projectData.js'

function App() {
  const [filterSeting, setFilterSeting] = useState('');
  const [inputFilter, setInputFilter] = useState('');

  return (
    <>
      <Header name={'Google Drive Project Manager'}/>
      <Card userName={'KANZEBA SERHII'} cardGmail={'sgii12main@gmail.com'} typeOfMany={'USD'} icon={PeyPallPNG}/>

      <div className='mx-3'>
        <input type="text" className='w-full bg-blue-200/70 p-2 rounded-xl border-2 border-gray-400' placeholder='Search the name' onChange={(e) => setInputFilter(e.target.value)}/>
      </div>

      <div className='w-full'>
        {DATA.filter((element) => {
          return element.name.toLocaleLowerCase().includes(inputFilter.toLocaleLowerCase())
        }).map((element) => 
          <Project key={element.id} 
          name={element.name}
          status={element.status}
          data={element.data}
          linkToParfolio={element.linkToPortfolio}
          linkToFull={element.linkToFull}/>
        )}
      </div>
    </>
  )
}

export default App
