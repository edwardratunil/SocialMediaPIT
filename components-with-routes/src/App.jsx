import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Layout from "./components/shared/Layout"
import Profile from "./components/Profile"
import Notification from "./components/Notification"
import Login from "./components/Login"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"
import FriendMember from "./components/FriendMember"
import FriendSection from "./components/FriendSection"
import Temporary from "./components/Temporary"
import Settings from "./components/Settings"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="friendsection" element={<FriendSection/>}/>
          <Route path="notification" element={<Notification/>}/>
          <Route path="temporary" element={<Temporary/>}/>
        </Route>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="friendmember" element={<FriendMember/>}/>
        <Route path="friendsection" element={<FriendSection/>}/>
        <Route path="settings" element={<Settings/>}/>
      </Routes>
    </Router>
  )
}

export default App;

