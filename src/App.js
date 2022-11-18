import logo from './logo.svg';
import './App.css';

function App() {
  const usera = [{
    name: "love today",
    rating: 9.0,
    review: "Love Today is an Indian Tamil-language romantic comedy-drama film written and directed by Pradeep Ranganathan of Comali fame, and produced by Kalapathi S. Aghoram under the banner of AGS Entertainment.The film stars Pradeep Ranganathan himself (in his acting debut), Ivana and Raveena Ravi in lead roles. The film's music and score is composed by Yuvan Shankar Raja, with cinematography handled by Dinesh Purushothaman and editing done by Pradeep E. Ragav. It is an adaptation of Pradeep Ranganathan's own short film App(a) Lock.",
    pic: "https://static.toiimg.com/thumb/msid-92656272,width-219,height-317,imgsize-14452/92656272.jpg"
  },
  {
    name: "Beast",
    rating: 5.2,
    review: "After a shopping mall in Chennai had been hijacked by terrorists who held the visitors as hostages, Veera Raghavan, a spy also trapped in the mall, decides to save the hostages by eliminating the terrorists.",
    pic: "https://w0.peakpx.com/wallpaper/924/808/HD-wallpaper-beast-movie-thalapathy-vijay-thalapathy-vijay.jpg"
  },
  {
    name: "PS-1",
    rating: 8.0,
    review: "Vandiyathevan sets out to cross the Chola land to deliver a message from the Crown Prince Aditha Karikalan. Kundavai attempts to establish political peace as vassals and petty chieftains plot against the throne. Unrest grips the land as a long-tailed comet arrives, signalling a time of turmoil.",
    pic: "https://img.mensxp.com/media/content/2022/Sep/1---credit---Madras-Talkies_6330461582289.jpeg"
  }, {
    name: "Sardar",
    rating: 7.8,
    review: "A spy, who is estranged from his family due to a mission, suddenly meets his police officer son.",
    pic: "https://moviegalleri.net/wp-content/gallery/sardar-posters/Sardar-Movie-Posters-0178d3c.jpg"
  }]
  return (
    < div className="App" >

      {usera.map((nm) => (<User name={nm.name} pic={nm.pic} review={nm.review} rating={nm.rating} />))}

    </div >
  );
}
function User({ pic, name, review, rating }) {
  return (<div >
    <img className="Img" src={pic} alt="male"></img>
    <h1 className="username"> <span className="propname">{name}</span> </h1>
    <h3>{rating}⭐</h3>
    <div>
      {review}
    </div>
  </div>

  );
}
export default App;
