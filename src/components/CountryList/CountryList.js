import { ListItem } from '../ListItem/ListItem';
import { List, Item,Box } from './CountryList.styled';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "redux/operations";
import { visibleCountries} from "redux/selectors";


export const CountryList = () => {
  const dispatch = useDispatch();
  const countries = useSelector(visibleCountries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <Box>
      <h2>Countries</h2>
     
        <List>{countries.map((country) => (
                <Item key={country.countryCode}> {
                  <ListItem country={country}/>}
                </Item>
              ))
            }
      </List>
      </Box>
     
        );
    
}
