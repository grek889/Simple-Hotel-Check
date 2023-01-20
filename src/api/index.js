import axios from "axios";


export const getHotels = async (info) => {
  // console.log(info)
  try {
    const request = await axios.get(`https://engine.hotellook.com/api/v2/cache.json?location=${info?.location}&currency=rub&checkIn=${info?.dateStart}&checkOut=${info?.dateEnd}&limit=10`);
    return await request.data 
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};
