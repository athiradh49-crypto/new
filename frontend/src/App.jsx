import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar2 from './Navbar2'
import Hero2 from './Hero2'
import Card2 from './Card2'
import Footer1 from './Footer1'
import Login1 from './Login1'
import axios from 'axios'


function App() {
  const [complaints,setComplaints] = useState([]);
  const[department,setDepartment] = useState("");
  const[description,setDescription] = useState("");
  const[image, setImage] = useState("");
  const[isLoggedIn,setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    if (isLoggedIn) {
      getComplaints();

    }
  }, [isLoggedIn]);
  const addComplaints= async () => {
    const newComplaint = {
      department: department, 
      description: description,
      image: image
    };
    await axios.post ("http://localhost:3000/complaints", newComplaint);
    getComplaints();

  };
  const getComplaints = async () => {
    const response = await axios.get("http://localhost:3000/complaints");
    setComplaints(response.data);
  };
  const deleteComplaint = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/complaints/${id}`);
      getComplaints();
    } catch (error) {
      console.error("Error deleting complaint", error);
  }
  };
  

  return (
    isLoggedIn ?

          <div style={{width:"100%"}}>
            <Navbar2 setIsLoggedIn={setIsLoggedIn}></Navbar2>
            <div className='mt-3'>

            

            <Hero2
            setDepartment={setDepartment}
            setDescription={setDescription}
            setImage={setImage}
            addComplaints={addComplaints}
            >

            </Hero2>
           </div>
           <div className='flex-wrap p-4 mt-3 d-flex gap-4'>
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
          </div>
          :
          <Login1 setIsLoggedIn={setIsLoggedIn}/>
          

  )
}

export default App
