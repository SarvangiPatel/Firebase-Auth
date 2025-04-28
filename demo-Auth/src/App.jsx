
import './App.css'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'

function App() {


  return (
    <>
      <div className="main" style={{display:"flex",justifyContent:"space-around",width:'80%',margin:"auto"}}>
      <SignUp />
      <SignIn />
      </div>
    </>
  )
}

export default App
