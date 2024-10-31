import './App.css'
import Alerts from './components/Alerts/Alerts'
import { BellRing, CheckCheck, CircleX, Music, TriangleAlert, X } from 'lucide-react';

function App() {


  return (
    <>
     <Alerts  type='alert-warper' header='Upgrade Your Plane' icon1={<BellRing/>} icon2={<X/>} >
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati architecto voluptatibus <a href="/">read more</a>, ex sequi adipisci fugit deserunt perferendis sed tempora"</p>
     </Alerts>

     <Alerts  type='alert-warper alert-danger' header='Note' icon1={ <Music />} icon2={<X/>} text=' consectetur adipisicing elit. Voluptates ea obcaecati quis vel dolore beatae, dolor repellat consequatur cumque, modi et nobis reiciendis, aut facere deleniti' />
     <Alerts  type='alert-warper alert-success' header='Something Wont Wrong' icon1={<CircleX />} icon2={<X/>} text=' adipisicing elit. Voluptates ea obcaecati quis vel dolore beatae, dolor repellat consequatur cumque, modi  consectetur adipisicing elit. Voluptates  dolor repellat consequatur cumque,ere deleniti' />
     <Alerts  type='alert-warper alert-primary' header='Your order Has been Processed ' icon1={<CheckCheck />} icon2={<X/>} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati architecto voluptatibus fugiat, ex sequi adipisci fugit deserunt perferendis sed tempora"' />
     <Alerts  type='alert-warper alert-secondary' header='Tips & Tricks' icon1={<TriangleAlert />} icon2={<X/>} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempora"' />
    </>
  )
}

export default App


