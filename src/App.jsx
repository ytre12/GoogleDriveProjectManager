import { useState } from 'react'

import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import Project from './components/Projects.jsx'

import PeyPallPNG from './assets/paypal.png'

import DATA from './projectData.js'

function App() {
  const [filterSeting, setFilterSeting] = useState('');

  return (
    <>
      <Header name={'Google Drive Project Manager'}/>
      <Card userName={'KANZEBA SERHII'} cardGmail={'sgii12main@gmail.com'} typeOfMany={'USD'} icon={PeyPallPNG}/>
      <div className='w-full'>
        {DATA.map((element) => 
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
