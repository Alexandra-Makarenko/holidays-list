import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showHolidays } from "redux/operations";
import { selectHolidays } from "redux/selectors";
import { List, Item,Box } from './HolidaysList.styled';


export const HolidaysList = () => {
  const dispatch = useDispatch();
  const holidays = useSelector(selectHolidays);


  useEffect(() => {
    dispatch(showHolidays());
  }, [dispatch]);

  return (
    <Box>
      <h2>Holidays</h2>
        <List>{holidays.map((holiday) => (
                <Item key={holidays.indexOf(holiday)}>{holiday.date} {holiday.name}
                </Item>
              ))
            }
      </List>
      </Box>
        );
    
}
