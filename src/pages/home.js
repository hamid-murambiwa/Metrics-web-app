import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import users from '../API/api';
import Header from '../component/header';
import img from '../styling/icons8-forward-button-100.png';
import '../styling/home.css';

function Art() {
  const artlist = useSelector((state) => state.artReducer);
  const dispatch = useDispatch();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    dispatch(users());
  }, [dispatch]);

  return (
    <div className="art-con">
      <Header />
      <div className="search-con">
        <input id="search" type="text" placeholder="Search for a breed" onChange={(event) => setAllData(event.target.value)} />
      </div>
      <div id="card-con">
        {artlist.filter((value) => {
          if (allData == '') {
            return value;
          } if (value.title.toLowerCase().includes(allData.toLowerCase())) {
            return value;
          }
        }).map((art) => (
          <Link key={art.id} className="card" to={`/${art.id}`}>
            <div key={art.id}>
              <div className="card_imgs">
                <div className="ci">
                  <img className="d-img" src={art.image} alt={art.alttext} alt="" />
                  <img className="f-btn" src={img} alt="" />
                </div>
              </div>
              <article className="title">
                <h1>
                  {art.title}
                </h1>
                <i>
                  Life Span:
                  {' '}
                  {art.life_span}
                </i>
              </article>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Art;
