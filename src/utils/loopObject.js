const looper = (obj) => {
  const stuff = [];
  for(const property in obj) {
    stuff.push(<p className="text-danger text-center"><strong>{obj[property]}</strong></p>)
  }
  
  return stuff;
}
  
export default looper;
  