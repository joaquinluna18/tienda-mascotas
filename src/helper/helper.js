import ken from './imagenes/ken.jpg';
import maintenance from './imagenes/maintenance.jpg';
import pedigree from './imagenes/pedigree.jpg';
import raza from './imagenes/raza.jpg';
import ringo from './imagenes/ringo.jpg';
import purina from './imagenes/purina.jpg';
import dongato from './imagenes/dongato.webp';
import royalcaninchico from './imagenes/royalcaninchico.jpg';
import royalcaning from './imagenes/royalcaning+.jpg';
import catpro from './imagenes/catpro.jpg';
import felix from './imagenes/purina-gato.jpg';
import sabrositos from './imagenes/sabrositos.webp';
import gati from './imagenes/gati.jpg';
import sobreswhiskas from './imagenes/whiskasx12.jpg';
import whiskas from './imagenes/whiskasadult.jpg';

const productos =[
    {id:1,
     title:"Ken l",
     descripcion:"21kg Perro",
     price: "$3.900",
     img:[ken],   
    },
    {   id:2,
        title:"Maintenance",
        descripcion:"22kg Perro",
        price:"$5.400",
        img:[maintenance],   
       },
       {id:3,
        title:"Pedigree ",
        descripcion:"21kg Perro",
        price:"$4.300",
        img:[pedigree],   
       },
       {id:4,
        title:"Raza",
        descripcion:"21kg Perro",
        price:"$4.670",
        img:[raza],   
       },
       {id:5,
        title:"Ringo",
        descripcion:"1,5kg Perro",
        price:"$750",
        img:[ringo],   
       },
       {id:6,
        title:"Purina",
        descripcion:"25kg Perro",
        price:"$5.750",
        img:[purina],   
       },
       {id:7,
        title:"Dongato",
        descripcion:"0,5kg Gato",
        price:"$470",
        img:[dongato],   
       },
       {id:8,
        title:"Royal Canin",
        descripcion:"80g Gato",
        price:"$230",
        img:[royalcaninchico],   
       },
       {id:9,
        title:"Royal Canin",
        descripcion:"3kg Gato",
        price:"$830",
        img:[royalcaning],   
       },
       {id:10,
        title:"CatPro ",
        descripcion:"1kg Gato",
        price:"$360",
        img:[catpro],   
       },
       {id:11,
        title:"Purina Felix",
        descripcion:"85g Gato",
        price:"$200",
        img:[felix],   
       },
       {id:12,
        title:"Sabrositos",
        descripcion:"1kg Gato",
        price:"$630",
        img:[sabrositos],   
       },
       {id:13,
        title:"Purina Gati",
        descripcion:"1kg Gato",
        price:"$590",
        img:[gati],   
       },
       {id:14,
        title:"Whiskas Salmon",
        descripcion:"12x 85g Gato",
        price:"$1.370",
        img:[sobreswhiskas],   
       },
       {id:15,
        title:"Whisas ",
        descripcion:"1kg Gato",
        price:"$770",
        img:[whiskas],   
       },
       


]

const getFetch = new Promise((resolve, reject ) =>{
    setTimeout(()=>{
        resolve(productos)
        reject(err => console.log(err))},
        3000)
    })
export default getFetch