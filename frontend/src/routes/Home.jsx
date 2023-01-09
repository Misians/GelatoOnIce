import React from 'react'
import Logo from '../componentes/Logo';
import Navbar from '../componentes/Navbar/Item';
import Banner from '../componentes/Banner';
import Header from '../componentes/header';
import LogoExtensa from '../imagens/logoextensa/logoextensa.svg';

import './home.css'
import { useEffect, useState } from 'react';

const Home = () => {
  const [posts, setPosts] = useState([]);
  
  const getPosts = async() => {
    try{
      const response = await fetch('http://localhost:4567/')
      const data = await response.json()
      setPosts(data);
    }
    catch(error){
      console.log("ERROU CADLSAJDLKASJDSA");
    }
  };
  useEffect(() => {
    getPosts();
  })
  return (
    <div className='App'>
      <header className='App-header'>
          <Logo/>
          <Header/>
        </header>
        <Navbar/>
       
        <div className='logo-extensa'>
        <img  
        src={LogoExtensa}></img>
        </div>
        <div className='produtos-top'>
        {posts.length === 0 ?( <p>Carregando produtos...</p>) : (
          posts.map((post) => (
            <div className='produto-unico' key={post.id}>
              <h1 className='produto-categoria' >{post.categoria}</h1>
              <h2 className='produto-nome'>{post.nome}</h2>
              <img height={200} className='produto-img' src={post.foto} alt="" />
              <p className='produto-preco' >R$ {post.preço}</p>
            </div>
          ))
        )}
        <h1 className='slogan'>A maior sorveteria online
        do Brasil faça já seu pedido na Gelato On Ice, nosso foco é proporcionar a melhor sensação da sorveteria caseira no conforto da sua casa</h1>
        </div>
    </div>
  )
}

export default Home;