export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      // 'X-RapidAPI-Key': '4983ed5a42msh2d1b3868c434b50p12bb53jsn82ddcd04b511',
      
    },
  };
  // console.log( process.env.REACT_APP_RAPID_API_KEY)
export const fetchData = async (url, options) => {
    const res= await fetch(url,options);
    const data= await res.json();

    return data;
}