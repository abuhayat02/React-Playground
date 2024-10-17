import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rendaring from './conditional'
import Singers from './singers'
import Songs from './Songs'

function App() {
  const [count, setCount] = useState(0);

  const singers = [
    {name : "Dr Mahfuzur Rahman" , age : 68},
    {name : "Md. Tuhin " , age : 40},
    {name : "Muhib Khan" , age : 44},
    {name : "Shuvro Dev" , age : 58},
    {name : "Eva Rahman" , age : 37},
  ]

  const songs = [
    {brand: "Sony Music", song: "Blinding Lights", releaseDate: "2019-11-29"},
    {brand: "Universal Music", song: "Shape of You", releaseDate: "2017-01-06"},
    {brand: "Warner Music", song: "Uptown Funk", releaseDate: "2014-11-10"},
    {brand: "Sony Music", song: "Rolling in the Deep", releaseDate: "2010-11-29"},
    {brand: "Universal Music", song: "Despacito", releaseDate: "2017-01-13"},
    {brand: "Warner Music", song: "See You Again", releaseDate: "2015-03-10"},
    {brand: "Sony Music", song: "Bad Guy", releaseDate: "2019-03-29"},
    {brand: "Universal Music", song: "Love Yourself", releaseDate: "2015-11-09"},
    {brand: "Warner Music", song: "Can't Stop the Feeling", releaseDate: "2016-05-06"},
    {brand: "Sony Music", song: "Someone Like You", releaseDate: "2011-01-24"},
    {brand: "Universal Music", song: "Girls Like You", releaseDate: "2018-05-30"},
    {brand: "Warner Music", song: "Levitating", releaseDate: "2020-03-27"},
    {brand: "Sony Music", song: "Senorita", releaseDate: "2019-06-21"},
    {brand: "Universal Music", song: "Peaches", releaseDate: "2021-03-19"},
    {brand: "Warner Music", song: "Shallow", releaseDate: "2018-09-27"},
    {brand: "Sony Music", song: "Perfect", releaseDate: "2017-03-03"},
    {brand: "Universal Music", song: "Sunflower", releaseDate: "2018-10-19"},
    {brand: "Warner Music", song: "Bad Habits", releaseDate: "2021-06-25"},
    {brand: "Sony Music", song: "Watermelon Sugar", releaseDate: "2019-11-16"},
    {brand: "Universal Music", song: "Rockstar", releaseDate: "2020-04-24"},
    {brand: "Warner Music", song: "Dynamite", releaseDate: "2020-08-21"},
    {brand: "Sony Music", song: "Stay", releaseDate: "2021-07-09"},
    {brand: "Universal Music", song: "Closer", releaseDate: "2016-07-29"},
    {brand: "Warner Music", song: "Old Town Road", releaseDate: "2019-04-05"},
    {brand: "Sony Music", song: "Dance Monkey", releaseDate: "2019-05-10"},
    {brand: "Universal Music", song: "Sorry", releaseDate: "2015-10-23"},
    {brand: "Warner Music", song: "Circles", releaseDate: "2019-08-30"},
    {brand: "Sony Music", song: "Savage Love", releaseDate: "2020-06-11"},
    {brand: "Universal Music", song: "Drivers License", releaseDate: "2021-01-08"},
    {brand: "Warner Music", song: "Believer", releaseDate: "2017-02-01"},
    {brand: "Sony Music", song: "Memories", releaseDate: "2019-09-20"},
    {brand: "Universal Music", song: "Sucker", releaseDate: "2019-03-01"},
    {brand: "Warner Music", song: "Wake Me Up", releaseDate: "2013-06-17"},
    {brand: "Sony Music", song: "Faded", releaseDate: "2015-12-03"},
    {brand: "Universal Music", song: "Havana", releaseDate: "2017-08-03"},
    {brand: "Warner Music", song: "Attention", releaseDate: "2017-04-21"},
    {brand: "Sony Music", song: "Stitches", releaseDate: "2015-05-05"},
    {brand: "Universal Music", song: "No Tears Left to Cry", releaseDate: "2018-04-20"},
    {brand: "Warner Music", song: "What Do You Mean", releaseDate: "2015-08-28"},
    {brand: "Sony Music", song: "Take Me to Church", releaseDate: "2013-09-13"},
  ];
  
  return (
    <>
      {/* <h1>Vite + React</h1>
      <Programmer name="Hayat"></Programmer>
      {/* <Like coding="Programming" bike="Bike Riding" game="Free Fire"></Like> */}
      {/* <Rendaring isLike={false}></Rendaring> */}
      {/* <Rendaring isLike={true}></Rendaring> */}
      {/* <h1>Singers Informations</h1> */}
      {
        // singers.map((song)=> <Singers name = {song.name} age = {song.age}></Singers>)
      } 
      <h1>Songs Informations</h1>
      {
        songs.map((info)=> <Songs brand ={info.brand} song = {info.song} release={info.releaseDate}></Songs>)
      }
      {/* <Like like = "Bike Riding"></Like> */}
    </>
  )
}



// normal component 
function Programmer({ name }) {
  return (
    <div>
      <h1>I am  {name} </h1>
      <p>currently purssing diploma in Computer Scince and Technology</p>
    </div>
  )
}

function Like({ coding, bike, game }) {
  return (
    <div className='my-card'>
      <h1>1. I Like {coding} </h1>
      <h1>2. I Like {bike} </h1>
      <h1>3. I Like {game} </h1>
    </div>

  )
}







export default App
