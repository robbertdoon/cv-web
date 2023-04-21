// import { useState } from "react"
import PageWrapper from "./layouts/PageWrapper/PageWrapper"
import Main from "./layouts/Main/Main"
import Sidebar from "./layouts/Sidebar/Sidebar"
// import { AppContext } from "./contexts/AppContext"

function App() {  
  // const [contentHeight, setContentHeight] = useState(100);
  // const [isOpen, setIsOpen] = useState(true);

  return (
    // <AppContext.Provider value={{contentHeight, setContentHeight, isOpen, setIsOpen}}>
      <PageWrapper>
        <Sidebar />
        <Main />
      </PageWrapper>
    // </AppContext.Provider>
  )
}

export default App
