import {
    LineChart,
    ResponsiveContainer,
    Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';



function CryptoChart({ crypto }) {
    let arrayWithNumbers = crypto.data
    let arrayWithDates = []
    const listLength = arrayWithNumbers.length
    for(let i = listLength-1; i >= 0; i--) {
      let itemDate = new Date(); // starting today
      itemDate.setDate(itemDate.getDate() - i);
      arrayWithDates.push(itemDate);
    }
    
    let priceAction = []
    for(let i = 0; i < listLength; i++){
      priceAction.push({
        date: `${arrayWithDates[i].getDate()}/${arrayWithDates[i].getMonth()}/${arrayWithDates[i].getFullYear()}`,
        Price: arrayWithNumbers[i]
      })
    }
    console.log(priceAction);
    
    // Sample chart data
    const pdata = priceAction;
    return (
        <>
            <ResponsiveContainer width="100%" aspect={2}>
                <LineChart data={pdata} margin={{top: 50, bottom: 50}}>
                    <CartesianGrid strokeDasharray={3} vertical="" />
                    <XAxis dataKey="date" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Tooltip contentStyle={{backgroundColor: '#000', color: '#000', borderRadius: "8px", textAlign: 'center'}} itemStyle={{color: '#fff'}}/>
                    <Line dataKey="Price"
                        stroke="white"
                        dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
  
export default CryptoChart