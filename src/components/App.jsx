import {HolidaysList} from './HolidaysList/HolidaysList'
import { Filter } from './Filter/Filter'
import { Layout } from './Layout/Layout'
import {Section,Button} from './Layout/Layout.styled'
import { CountryList } from './CountryList/CountryList'
import { useDispatch, useSelector } from "react-redux";
import { resetHolidays } from "../redux/holidaysSlice";
import { sortCountriesinAlphabetOrder,sortCountriesinReversedOrder } from "../redux/countriesSlice";
import { useEffect } from "react";
import { fetchCountries } from "redux/operations";
import { selectError, selectIsLoading, selectSortBy,selectIsLoadingHolidays } from "redux/selectors";
import Notiflix from 'notiflix';
import { ColorRing } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const holidaysIsLoading = useSelector(selectIsLoadingHolidays);
  const error = useSelector(selectError);
  const sort = useSelector(selectSortBy);

 const onResetClick = ()=> {
     dispatch(resetHolidays([]));
  };
  const onSortClick = () => {
    sort ? dispatch(sortCountriesinAlphabetOrder([])): dispatch(sortCountriesinReversedOrder([]));
    !sort ? dispatch(sortCountriesinReversedOrder([])): dispatch(sortCountriesinAlphabetOrder([]));
  };

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
return (
  <Layout >    
    <h1>React Test</h1>    <div >
      
      <section >
        <Filter />               
          <Button onClick={onSortClick}>Sort by { sort?'asc':'dsc' }</Button>
        <Button onClick={onResetClick}>Reset</Button>
        {(isLoading || holidaysIsLoading ) && <ColorRing
visible={true}
height="50"
width="50"
ariaLabel="blocks-loading"
wrapperStyle={{}}
wrapperClass="blocks-wrapper"
colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>}
      </section>
      <Section >
        {!error ? <CountryList /> : Notiflix.Notify.failure('Error')}
        <HolidaysList />
        </Section>  
      </div>
    </Layout>
  );
};



