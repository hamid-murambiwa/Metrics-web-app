import React from 'react';
import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import users from '../API/api';
import Header from '../component/header';

function Art() {
  const artlist = useSelector((state) => state.artReducer);
  const dispatch = useDispatch();
  // console.log(artlist);
    
  useEffect(() => {
      dispatch(users());
  }, [dispatch]);

  return (
    <div className="book-con">
          <Header />
            {artlist.map((art) => (
              <Link to={`/${art.id}`}>
              <div key={art.id}>
              <img src={art.image} alt={art.alttext}/>
              <h1>
                {art.title}
              </h1>
              <article>
              <label>
                Life Span: 
              </label>
              <p>
                {art.life_span}
              </p>
              </article>
              </div>
              </Link>
            ))}
    </div>
  );
}

export default Art;
