import {Routes, Route } from 'react-router-dom'
import Home from './Comps/Home'
import Page from './Comps/Page'
import About from './Comps/About'
import Services from './Comps/Services'
import NoMatch from './Comps/NoMatch'

function App() {
  return (
      <div className="shell">
          <Routes>
              <Route path="/*" element={ <Page /> }>
                  <Route index element={ <Home /> } />
                  <Route path="services" element={ <Services /> } />
                  <Route path="about" element={ <About /> } />
                  <Route path="*" element={ <NoMatch /> } />
              </Route>
          </Routes>
      </div>
  )
}

export default App;
