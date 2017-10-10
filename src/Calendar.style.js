/**
 * Created by bogdanbegovic on 8/26/16.
 */

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  //CALENDAR STYLES
  calendarContainer: {
    height: 400,
    backgroundColor: 'red'
  },
  datesStrip: {
    flexDirection: "column",
    height: 330,
    width: 50, 
    justifyContent: "space-between",
    marginTop: 5
  },
  calendarDates: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  calendarHeader: {

  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  icon: {
    resizeMode: "contain"
  },

  //CALENDAR DAY
  dateContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  dateName: {
    textAlign: "center"
  },
  weekendDateName: {
    color: "black",
    textAlign: "center"
  },
  dateNumber: {
    fontWeight: "bold",
    textAlign: "center"
  },
  weekendDateNumber: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  }
});
