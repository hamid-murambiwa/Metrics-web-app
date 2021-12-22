import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import users from '../API/api';
import DetailsHeader from '../component/detailsHeader';
import '../styling/details.css';

function Details() {
  const detailsList = useSelector((state) => state.artReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(users());
  }, [dispatch]);

  let image;
  let name;
  let bredFor;
  let breedGroup;
  let heightMetric;
  let heightImperial;
  let weightMetric;
  let weightImperial;
  let origin;
  let temperament;

  detailsList.map((cases) => {
    if (cases.id == window.location.pathname.slice(1)) {
      image = cases.image;
      name = cases.title;
      bredFor = cases.bred_for;
      breedGroup = cases.group;
      heightMetric = cases.height_metric;
      heightImperial = cases.height_imperial;
      weightMetric = cases.weight_metric;
      weightImperial = cases.weight_imperial;
      origin = cases.origin;
      temperament = cases.temperament;
    }
  });

  console.log(origin);

  return (
    <div>
      <div>
        <DetailsHeader name={name} />
      </div>
      <section id="d-con">
        <div id="i-con">
          <img src={image} id="breed-img" alt="" />
          <h1>
            {name}
          </h1>
        </div>
        <ul className="details">
          <li>
            <h2>
              Breed group
            </h2>
            <p>
              {breedGroup}
            </p>
          </li>

          <li>
            <h2>
              Breed for
            </h2>
            <p>
              {bredFor}
            </p>
          </li>

          <li>
            <h2>Country origin</h2>
            <p>
              {origin}
            </p>
          </li>

          <li>
            <h2>Characteristics</h2>
            <p>
              {temperament}
            </p>
          </li>

          <li>
            <h2>Height</h2>
            <p>
              {heightImperial}
            </p>
            <p>
              {heightMetric}
            </p>
          </li>

          <li>
            <h2>Weight</h2>
            <p>
              {weightImperial}
            </p>
            <p>
              {weightMetric}
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Details;
