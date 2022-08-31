import ken from './imagenes/ken.jpg';
import maintenance from './imagenes/maintenance.jpg';
import pedigree from './imagenes/pedigree.jpg';
import raza from './imagenes/raza.jpg';
import ringo from './imagenes/ringo.jpg';
import purina from './imagenes/purina.jpg'

const productos =[
    {id:1,
     title:"Ken l",
     price: "$3.900",
     img:[ken],   
    },
    {   id:2,
        title:"Maintenance",
        price:"$5.400",
        img:[maintenance],   
       },
       {id:3,
        title:"Pedigree ",
        price:"$4.400",
        img:[pedigree],   
       },
       {id:4,
        title:"Raza",
        price:"$4.670",
        img:[raza],   
       },
       {id:5,
        title:"Ringo",
        price:"$4.250",
        img:[ringo],   
       },
       {id:6,
        title:"Purina",
        price:"$3.150",
        img:[purina],   
       },

]

const getFetch = new Promise((resolve, reject ) =>{
    setTimeout(()=>{
        resolve(productos)
        reject(err => console.log(err))},
        3000)
    })
export default getFetch