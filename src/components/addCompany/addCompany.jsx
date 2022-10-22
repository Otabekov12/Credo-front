import { gql, useMutation } from "@apollo/client";
import "./addCompany.scss";

const ADD_COMPANY = gql`
  mutation newCompany($company_name: String!) {
    newCompany(company_name: $company_name) {
      id
      company_name
    }
  }
`;

const AddCompany = () => {
  const [fn, { data, loading, error }] = useMutation(ADD_COMPANY);

  const handle = (a) => {
    a.preventDefault();

    const { company_name } = a.target;

    fn({
      variables: {
        company_name: company_name.value,
      },
    });
  };

  if (loading) return <>Loading...</>;
  if (error) return <>Error</>;

  return (
    <>
      <form action="" onSubmit={handle}>
        <input
          className="add__input"
          name="company_name"
          type="text"
          placeholder="Company's name"
        />
        <button className="add__button" type="submit">
          Add new company
        </button>
      </form>
    </>
  );
};

export default AddCompany;
