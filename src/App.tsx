import { useState, useRef } from "react"
import PageWrapper from "./layouts/PageWrapper/PageWrapper"
import ProfilePicture from "./components/ProfilePicture/ProfilePicture"
import PageTitle from "./components/PageTitle/PageTitle"
import Sidebar from "./layouts/Sidebar/Sidebar"
import Main from "./layouts/Main/Main"
import Footer from "./layouts/Footer/Footer"
// import { AppContext } from "./contexts/AppContext"

const sup3rS4f3P4ss = 'test';

function App() {  
  const [isProtected, setIsProtected] = useState(true);
  const inputRef = useRef<HTMLInputElement | null>(null)
  // const [contentHeight, setContentHeight] = useState(100);
  // const [isOpen, setIsOpen] = useState(true);

  const handleChange = () => {
    if (!inputRef.current) return;

    if (inputRef.current.value === sup3rS4f3P4ss) {
      setIsProtected(false);
    }
  }

  return (
    // <AppContext.Provider value={{contentHeight, setContentHeight, isOpen, setIsOpen}}>
    <>
      {isProtected ? (
        <input type='text' ref={inputRef} onChange={handleChange} />
      ) : (
        <PageWrapper>
        <ProfilePicture />
        <PageTitle title='Robbert Doon' subtitle='Front-end developer' />
        <Sidebar />
        <Main />
        <Footer />
      </PageWrapper>
      )}
    </>
  // </AppContext.Provider>
  )
      


  
}

export default App
