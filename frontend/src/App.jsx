import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar2 from './Navbar2'
import Hero2 from './Hero2'
import Card2 from './Card2'
import Footer1 from './Footer1'
import Login1 from './Login1'


function App() {
  const [complaints,setComplaints] = useState([]);
  const[department,setDepartment] = useState("");
  const[description,setDescription] = useState("");
  const[image, setImage] = useState("");
  const[isLoggedIn,setIsLoggedIn] = useState(false);
  
  const addComplaints=()=>{
    const newComplaint={
      department:department, 
      description:description,
      image:image
    }
    setComplaints([...complaints,newComplaint]);

  }
  const deleteComplaint=(index)=>{
    const updatecomplaints=complaints.filter((item,i)=> i !==index)
    setComplaints(updatedComplaints)
  }
  

  return (
    isLoggedIn ?

          <div>
            <Navbar2 setIsLoggedIn={setIsLoggedIn}
            >

            </Navbar2>
            

            
            <Hero2
            setComplaints={setComplaints}
            setDepartment={setDepartment}
            setDescription={setDescription}
            setImage={setImage}
            addComplaints={addComplaints}
            >

            </Hero2>
           
            {
              complaints.map((item,index)=>(
            <Card2 
            department={item.department}
            description={item.description}
            image={item.image}
            deleteComplaint={deleteComplaint}
            index={index}
            
            
            ></Card2> 
))
}

            <Footer1>

            </Footer1>

          </div>
          :
          <Login1 setIsLoggedIn={setIsLoggedIn}/>
  )
}

export default App
