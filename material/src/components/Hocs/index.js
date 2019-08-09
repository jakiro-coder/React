import React from "react";

function DayState(WrappedComponent) {
  const getDayState = () => {
    const hours = new Date().getHours();
    const DAY_STATE = { 
      MORNING: 'morning', 
      AFTERNOON: 'afternoon', 
      EVENING: 'evening'
    };
    if (hours >= 6 && hours < 12) {
      return DAY_STATE.MORNING;
    } else if (hours >= 12 && hours < 18) {
      return DAY_STATE.AFTERNOON;
    } else {
      return DAY_STATE.EVENING;
    }
  }
  return (props) => {
    return (
      <div >
        <WrappedComponent
          {...props} dayState={getDayState()} />
      </div>
    )
  }
}
export default DayState;