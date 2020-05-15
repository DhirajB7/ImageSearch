import axios from 'axios'

const baseUrl = 'https://api.unsplash.com/search/photos'
const token = 'Client-ID waYxvl29y_4aeCznpou-fjnHLz3eWBUK0EksdKSDvNk'

async function getImagesByName (data) {
    
    return await axios.get(baseUrl,{
        params:{
          query:data
        },
        headers:{
          Authorization: token
        }
    })

  }

  export default getImagesByName