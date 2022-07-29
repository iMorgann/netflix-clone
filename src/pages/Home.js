import React, { useEffect, useState, useNavigate } from 'react';
import Tmdb from './Tmdb';
import MovieRow from '../components/Movie Row/MovieRow';
import FeaturedMovie from '../components/Featured Movie/FeaturedMovie';
import Header from '../components/Header/Header';
import FooterCompound from '../compounds/FooterCompound';
import "./Home.css"






export default  () => {
    
   


    const [movieList, setMovieList] =  useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBalckHeader] = useState(false);

    useEffect(()=>{
        const loadAll = async () => {
            /* pega a lista TODA de filmes */
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            /* pega o filme em DESTAQUE */
            let originals = list.filter(i=>i.slug === 'originals');
            let randomChoosen = Math.floor(Math.random() * (originals[0].items.results?.length - 1));
            let choosen = originals[0].items.results[randomChoosen]
            let choosenInfo = await Tmdb.getMovieInfo(choosen.id, 'tv');
            setFeaturedData(choosenInfo);
    }

    loadAll();
   }, []); 

   useEffect(()=>{
       const scrollListener = () => {
           if(window.scrollY > 10){
               setBalckHeader(true);
           } else {
               setBalckHeader(false);
           }
       }

       window.addEventListener('scroll', scrollListener);

       return () => {
           window.removeEventListener('scroll', scrollListener);
       }
   }, []);
    return (
        <div className="pager">

          

            <Header black={blackHeader} />

            {featuredData &&
                <FeaturedMovie item={featuredData} />
            }

            <section className="listss">
                {movieList.map((item, key)=>(
                    <MovieRow key={key} title={item.title} items={item.items}/>
                ))}
            </section>

            <footer >
              <FooterCompound />
            </footer>
            
            {movieList.length <= 0 &&
                <div className="loadingg">
                    <img src="https://i.gifer.com/origin/36/36527397c208b977fa3ef21f68c0f7b2.gif" alt="Carregando..."/>
                </div>
            }
        </div>

        
        

            
    );
                
     
}


