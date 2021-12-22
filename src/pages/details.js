import  React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import users from '../API/api';
import DetailsHeader from '../component/detailsHeader';

function Details() {
  const detailsList = useSelector((state) => state.artReducer);
  const dispatch = useDispatch();
  // let details = [detailsList[window.location.pathname.slice(1)]];

  useEffect(() => {
    dispatch(users());
}, [dispatch]);

let image;
let id;
let name;
let life_span;
let bred_for;
let breed_group;
let height;
let weight;
let origin;
let temperament;

detailsList.map((cases) => {
  if (cases.id == window.location.pathname.slice(1)) {
    // console.log(cases);
    image = cases.image;
    id = cases.id;
    name = cases.title;
    life_span = cases.life_span;
    bred_for = cases.bred_for;
    breed_group = cases.group;
    height = cases.height;
    weight = cases.weight;
    origin = cases.origin;
    temperament = cases.temperament;
  }
});

 console.log(origin);


return (
    <div key={1}>
      <div>
        <DetailsHeader />
      </div>
      <h1>
      {name}
      </h1>
      <img src={image} alt='' />
      <label>
        {breed_group}
      </label>
      <p>
      {bred_for}
      </p>
      <p>
       {origin}
      </p>
      <p>
        {temperament}
      </p>
      <p>
        {life_span}
      </p>
      <p>
        {height}
      </p>
      <p>
        {weight}
      </p>
    </div>
  );
}

export default Details;
