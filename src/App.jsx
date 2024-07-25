
import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'

function App() {
  const navigation = useNavigation();
  
  return (
    <>
      <Header></Header>

      {
        navigation.state === "loading" ? "Loading...." :
          <div>
            <Outlet></Outlet>
          </div>
      }


    </>
  )
}

export default App
