// import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
export const Filter = () => {

  const dispatch = useDispatch();

  const onChange = event => {
    const query = event.target.value.toLowerCase();
    dispatch(setFilter(query));
  };

  return (<label>
    Search text
    <input type="text" onChange={onChange} />
  </label>)
};

