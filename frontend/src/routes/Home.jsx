import React from 'react'
import Logo from '../componentes/Logo';
import Navbar from '../componentes/Navbar/Item';
import Banner from '../componentes/Banner';
import Header from '../componentes/header';
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
        <Banner/>
        <h1>produtos</h1>
        <div className='produtos-top'>
        {posts.length === 0 ?( <p>Carregando produtos...</p>) : (
          posts.map((post) => (
            <div className='produto-unico' key={post.id}>
              <h1 className='produto-categoria' >{post.categoria}</h1>
              <h2 className='produto-nome'>{post.nome}</h2>
              <img className='produto-img' src={post.foto} alt="" />
              <p>R$ {post.preço}</p>
            </div>
          ))
        )}</div>
    </div>
  )
}

export default Home;