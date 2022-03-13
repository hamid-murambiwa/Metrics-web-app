import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <meta
          property="og:description"
          content="This is a mobile web application to check a list of metrics (numeric values) and is built using React and Redux. Data is fetched from the TheDogApi and displayed on two pages, the data is filtered on each page. The web app has a home page and a details page."
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/71644515/147221304-37df1997-d2eb-4076-be5e-5dbdbb957654.png"
        />
      </Helmet>
      <Header />
      <div className="search-con">
        <input id="search" type="text" placeholder="Search for a breed" onChange={(event) => setAllData(event.target.value)} />
      </div>
      <div id="card-con">
        {// eslint-disable-next-line
        artlist.filter((value) => {
          // eslint-disable-next-line
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
                  <img className="d-img" src={art.image} alt={art.alttext} />
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
        ))
}
      </div>
    </div>
  );
}

export default Art;
