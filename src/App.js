import React, { useState } from 'react'
import Navbar from './Componants/Navbar'
import News from './Componants/News'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'  

// exact path we use because of this search exactly path and move
// we use key in news component becoz of shifting from one link to other link
// we use the class based component so any function or variable van be access using (function/variable name )

const App=()=>{
  const apiKey='7a1bd84b0c4f4638a5f63423fd0661e9';
  const pageSize=9;

  const [progress,setprogress]=useState(0);
 
    return (
      <>
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        // setProgress(progress);
      />
        <Routes>
          <Route path='/' element={<News setProgress={setprogress} apiKey={apiKey} key="general"  pageSize={pageSize} country='in' category='general'/>}></Route>
          <Route exact path='/business' element={<News setProgress={setprogress} apiKey={apiKey} key="business"pageSize={pageSize} country='in' category='business'/>}></Route>
          <Route exact path='/health' element={<News setProgress={setprogress} apiKey={apiKey}  key="health" pageSize={pageSize} country='in' category='health'/>}></Route>
          <Route exact path='/sports' element={<News setProgress={setprogress} apiKey={apiKey}  key="sports" pageSize={pageSize} country='in' category='sports'/>}></Route>
          <Route exact path='/general' element={<News setProgress={setprogress}  apiKey={apiKey} key="general" pageSize={pageSize} country='in' category='general'/>}></Route>
          <Route exact path='/science' element={<News setProgress={setprogress} apiKey={apiKey} key="science"  pageSize={pageSize} country='in' category='science'/>}></Route>
          <Route exact path='/technology' element={<News setProgress={setprogress} apiKey={apiKey} key="technology"  pageSize={pageSize} country='in' category='technology'/>}></Route>
          <Route exact path='/entertainment' element={<News setProgress={setprogress} apiKey={apiKey} key="entertainment"  pageSize={pageSize} country='in' category='entertainment'/>}></Route>
        </Routes>
      </BrowserRouter> 
      </>
    )
}

export default App;
