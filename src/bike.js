export default class Bike {
  static async getBike(city) {
    try {
    const url = `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${city}&distance=10&stolenness=proximity`;
    console.log(url);
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
    } catch(error) {
      return error.message;
    }
  }
}


 // const response = await fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=proximity`);

 // https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=chicago&distance=10&stolenness=proximity