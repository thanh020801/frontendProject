import axios from 'axios'
// import { storeToRefs } from 'pinia'
// import { userStore } from '@/stores/userStore.js'

function httpRequest(method='GET', url='/',data=null){
  // const main = userStore()
  // const { user } = storeToRefs(main)
  // console.log(main)
  // alert(token)

  const token = (data !== null && data.acceptToken !==null) ? data.acceptToken : " " 
  return axios({
      method: method,
      url: `http://localhost:5000${url}`,
      data: data,
      headers:{
        'Content-Type' : 'application/json',
        'token': `beear ${token}`,
      }
    })
    // .catch((err)=>{
    //   alert(err.response.data)
    //    // console.log("Status:",err.response.status,",json: ",err.response.data)
    //       // console.log(err)
    //       // console.log('Ban ko du quyen ')
    // })


}

export default httpRequest
