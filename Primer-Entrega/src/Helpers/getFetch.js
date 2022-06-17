let productos = [
    {Id:'1',
     Producto:'Remera',
     Talle:'S',
     Precio:'3000',
     Stock:10,
    },
    {Id:'2',
     Producto:'Pantalón',
     Talle:'L',
     Precio:'5000',
     Stock:8,
    },
    {Id:'3',
     Producto:'Short',
     Talle:'M',
     Precio:'3000',
     Stock:2,
    },
    {Id:'4',
     Producto:'Buzo',
     Talle:'L',
     Precio:'8000',
     Stock:5,
    },
    {Id:'5',
     Producto:'Campera',
     Talle:'XL',
     Precio:'10000',
     Stock:3,
    },

]

export const getFetch =()=>{
    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            resolve(productos)
        },2000)
        
        //let condition = true
        //if (condition) {
        //    resolve('202 ok')
        //}else{
        //    reject('404 not found')
        //}
        
    }) 
}

let producto = 
    {Id:'1',
     Producto:'Remera',
     Talle:'S',
     Precio:'3000',
     Stock:10,
    }

 export const getFetchDetails =()=>{
     return new Promise( (resolve, reject)=>{
         setTimeout(()=>{
             resolve(producto)
         },2000)
     }) 
 }

//  export const getFetchDetails =(id)=>{
//       return new Promise( (resolve, reject)=>{
//           setTimeout(()=>{
//               if (id) {
//                 resolve(productos.find(producto => producto.Id === id))
//               }else{
//                   resolve(productos)
//               }  
//           },2000)
//       }) 
//   }