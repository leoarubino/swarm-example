import {table_hotel as Hotel} from '../models'

const resolveFunctions = {
  RootQuery: {
    Hotel: async (_, data) => {
      // console.log('Hotel query data: ', data)
      const res = await Hotel.find({where: {id: data.id}, raw: true})
      return res
    }
  },
  RootMutation: {
    createHotel: async (_, data) => {
      // console.log('createHotel input data: ', data)
      const res = await Hotel.create(data)
      return res
    }
  },
  Hotel: {
    id: data => data.id,
    name: data => data.name,
    longitude: data => data.longitude,
    latitude: data => data.latitude
  }
}

export default resolveFunctions
