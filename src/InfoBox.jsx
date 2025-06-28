import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
 
 
export default function InfoBox({info}) {
    const INIT_URL = 
    "https://images.unsplash.com/photo-1733164847768-694d4bd1ecf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1493936734716-77ba6da66365?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1603726574752-a85dc808deab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL = "https://images.unsplash.com/photo-1603304851397-2ba2ea6eabdf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
     
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
       
        <CardMedia
          component="img"
          height="140"
          image= {
            info.humidity > 80
            ? RAIN_URL
            :info.temp>15
            ?HOT_URL
            :COLD_URL
          }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{
                
                    info.humidity > 80
                    ? (<ThunderstormIcon/>)
                    :info.temp>15
                    ?(<WbSunnyIcon/>)
                    :( <AcUnitIcon/>)
                  
            }
          </Typography>
          <Typography variant="body2"  color= 'text.secondary' component={"span"}  >
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;</p>
            <p>Max Temp = {info.tempMax}&deg;</p>
            <p>The weather can be described as <i>{info.weather}</i> and feels like{info.feelslike}&deg;C</p>
          </Typography>
        </CardContent>
       
    </Card>
    </div>
        </div>
    );
}
