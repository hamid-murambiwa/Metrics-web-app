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
let name;
let bred_for;
let breed_group;
let height_metric;
let height_imperial;
let weight_metric;
let weight_imperial;
let origin;
let temperament;

detailsList.map((cases) => {
  if (cases.id == window.location.pathname.slice(1)) {
    // console.log(cases);
    image = cases.image;
    name = cases.title;
    bred_for = cases.bred_for;
    breed_group = cases.group;
    height_metric = cases.height_metric;
    height_imperial = cases.height_imperial;
    weight_metric = cases.weight_metric;
    weight_imperial = cases.weight_imperial;
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
      <ul>
        <li>
          <h2>
            Breed group:
          </h2>
        <p>
        {breed_group}
      </p>
        </li>

        <li>
          <h2>
            Breed for:
          </h2>
      <p>
      {bred_for}
      </p>
        </li>

        <li>
          <h2>Country origin:</h2>
      <p>
       {origin}
      </p>
        </li>

        <li>
          <h2>Characteristics:</h2>
      <p>
        {temperament}
      </p>
      </li>

      <li>
        <h2>Height:</h2>
      <p>
        {height_imperial}
      </p>
      <p>
      {height_metric}
      </p>
      </li>

      <li>
        <h2>Weight:</h2>
        <p>
        {weight_imperial}
      </p>
      <p>
      {weight_metric}
      </p>
      </li>
      </ul>
    </div>
  );
}

export default Details;
