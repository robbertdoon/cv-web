import PageWrapper from "./layouts/PageWrapper/PageWrapper"
import Main from "./layouts/Main/Main"
import Sidebar from "./layouts/Sidebar/Sidebar"

function App() {
  return (
    <PageWrapper>
      <Sidebar />
      <Main />
    </PageWrapper>
  )
}

export default App
