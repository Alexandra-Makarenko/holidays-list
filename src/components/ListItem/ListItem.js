import {showHolidays } from "redux/operations";
import { useDispatch } from "react-redux";
import {Button } from './ListItem.styled';


export const ListItem = ({ country: { countryCode, name } }) => {
  const dispatch = useDispatch();
  const onCountryClick = () => dispatch(showHolidays(countryCode));
  
  return (
    <div><Button onClick={onCountryClick}>{countryCode} {name}</Button>
     </div>
  );
};
