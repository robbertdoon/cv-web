// import { useState } from "react"
import PageWrapper from "./layouts/PageWrapper/PageWrapper"
import ProfilePicture from "./components/ProfilePicture/ProfilePicture"
import PageTitle from "./components/PageTitle/PageTitle"
import Sidebar from "./layouts/Sidebar/Sidebar"
import Main from "./layouts/Main/Main"
// import { AppContext } from "./contexts/AppContext"

function App() {  
  // const [contentHeight, setContentHeight] = useState(100);
  // const [isOpen, setIsOpen] = useState(true);

  return (
    // <AppContext.Provider value={{contentHeight, setContentHeight, isOpen, setIsOpen}}>
      <PageWrapper>
        <ProfilePicture />
        <PageTitle title='Robbert Doon' subtitle='Front-end developer' />
        <Sidebar />
        <Main />
      </PageWrapper>
    // </AppContext.Provider>
  )
}

export default App
