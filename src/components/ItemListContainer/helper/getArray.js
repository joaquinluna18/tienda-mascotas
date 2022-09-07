export const getArray = (array)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(array)
        },2000);
    })
}
export default getArray