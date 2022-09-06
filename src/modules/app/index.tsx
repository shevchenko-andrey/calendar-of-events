import { useState } from "react";
import * as theme from "../theme";
import { ThemeProvider } from "styled-components";
import { AddButtonComponent } from "../common/components/add-button";
import CalendarContainer from "../calendar";
import { setDefaultOptions, addMonths, subMonths } from "date-fns";
import { MonthSelectorComponent } from "../calendar/month-selector/month-selector.component";

setDefaultOptions({ weekStartsOn: 1 });

const AppContainer = () => {
  const [date, setDate] = useState(new Date());
  const [selected, setSelected] = useState<Date | null>(null);
  const handlePrevMonth = () => {
    setDate(subMonths(date, 1));
  };

  const handleNextMonth = () => {
    setDate(addMonths(date, 1));
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <AddButtonComponent size={30} />
        <MonthSelectorComponent
          iconSize={30}
          handlePrevMonth={handlePrevMonth}
          handleNextMonth={handleNextMonth}
          date={date}
        />
        <CalendarContainer
          selected={selected}
          setSelected={setSelected}
          date={date}
        />
      </>
    </ThemeProvider>
  );
};
export default AppContainer;
