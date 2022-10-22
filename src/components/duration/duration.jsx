import React from "react";
import { useQuery, gql } from "@apollo/client";

const Duration = () => {
  const GET_DURATION = gql`
    query {
      duration {
        id
        pay_time
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_DURATION);

  if (loading) return "Loading...";
  if (error) return <>{error.message}</>;

  return (
    <>
      <div>
        <h2 className="select__title"> Mortgage Duration </h2>
        <select
          className="duration__select"
          name="duration"
          onChange={(evt) => {
            const number = evt.target.value;
          }}
          defaultValue="-1"
        >
          <option value="-1" disabled hidden>
            Choose
          </option>
          {data.duration.length > 0 &&
            data.duration.map((duration) => (
              <option key={duration.id} value={duration.pay_time}>
                {duration.pay_time}
              </option>
            ))}
        </select>
      </div>
    </>
  );
};

export default Duration;
