export const getFormattedDate = (dateTime) => {
    const dayObj = new Date(dateTime)
    const options = { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
    };
  let formattedDateStr = dayObj.toLocaleDateString('en-US', options);
  return formattedDateStr;
};

export const getSevenDayRange = () =>{
  const nowObj = new Date()
  let nowStr = nowObj.toISOString().slice(0, 10) //yyyy-mm-dd

  const nextSevenDayObj =new Date(Date.now()+7*24*60*60*1000)
  let nextSevenDayStr = nextSevenDayObj.toISOString().slice(0, 10) //yyyy-mm-dd

  return [nowStr,nextSevenDayStr]
}