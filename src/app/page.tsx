import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Cardlist from '../components/Cardlist'


 const Home = async () => {

  let res = await fetch("https://pokeapi.co/api/v2/pokemon");
  let pokemon = await res.json();


  return (
    <div>
      <Navbar/>
      <Hero/>
      <Cardlist pokemon={pokemon}/>
    </div>
  );
}
export default Home