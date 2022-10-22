import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

import Duration from "../duration/duration";

import "./intro.scss";

const Intro = () => {
  const [id, setId] = React.useState(0);
  const [projectid, setprojectId] = React.useState(0);

  const GET_COMPANY = gql`
    query {
      company {
        company_name
        id
        complex {
          complex_adress
          complex_name
          id
          price_squer
          room {
            id
            room_square
            rooms_number
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_COMPANY);

  if (loading) return "Loading...";
  if (error) return <>{error.message}</>;

  return (
    <div className="intro__main">
      <div className="select__box">
        <div>
          <h2 className="select__title"> Building Company </h2>

          <select
            className="company__select"
            name="company"
            onChange={(evt) => {
              const number = evt.target.value;
              setId(number);
            }}
            defaultValue={"-1"}
          >
            <option value="-1" disabled hidden>
              Choose
            </option>
            {data.company.length > 0 &&
              data.company.map((company, index) => (
                <option className="company__options" key={company.id} value={index}>
                  {company.company_name}
                </option>
              ))}
          </select>
        </div>

        <div>
          <h2 className="select__title"> Complex </h2>

          <select
            className="complex__select"
            name="company"
            onChange={(evt) => {
              const number = evt.target.value;

              setprojectId(number);
            }}
            id=""
            defaultValue={"-1"}
          >
            <option value="-1" disabled hidden>
              Choose
            </option>
            {data.company.length > 0 &&
              data.company[id].complex.map((company, index) => (
                <option key={company.id} value={index}>
                  {company.complex_name}
                </option>
              ))}
          </select>
        </div>

        <div>
          <h2 className="select__title">Number of rooms</h2>

          <select
            className="rooms__select"
            name="company"
            onChange={(evt) => {
              const number = evt.target.value;
            }}
            id=""
            defaultValue={"-1"}
          >
            <option value="-1" disabled hidden>
              Choose
            </option>
            {data.company[id].complex.length > 0 &&
              data.company[id].complex[projectid].room.map((complex) => (
                <option key={complex.id} value={complex.id}>
                  {complex.rooms_number}
                </option>
              ))}
          </select>
        </div>

        <div>
          <Duration />
        </div>
      </div>
    </div>
  );
};

export default Intro;
