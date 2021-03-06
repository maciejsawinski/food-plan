import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../../../../../../redux/actions/recipes";
import { changeNotifications } from "../../../../../../../redux/actions/notifications";

const Notifications = () => {
  const [recipeNumber, setRecipeNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const recipes = useSelector(state => state.recipes);
  const notificationStatus = useSelector(state => state.notifications);
  const [notificationStatusState, setNotificationStatusState] = useState(notificationStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  });

  useEffect(() => {
    setNotificationStatusState(notificationStatus);
  },[notificationStatus]);

  useEffect(() => {
    recipesNumber();
    setLoading(false);
  }, [recipes]);

  const recipesNumber = () => {
     setRecipeNumber(recipes.length);
  };

  const removeNotification = type => {
    const newStatus = Object.assign(notificationStatus);
    newStatus[type] = false;
    changeNotifications(newStatus)
  };

  const renderExitButton = (color, type) => {
    return (
      <>
        <svg
          version="1.2"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
          className="ng-element"
          dataId="869fd61eedf54e3caadb44d6bc83e8fd"
          style={{
            opacity: 1,
            mixBlendMode: "normal",
            fill: "rgb(52, 152, 219)",
            width: "25px",
            height: "25px"
          }}
          onClick={() => removeNotification(type)}
        >
          <g>
            <path
              xmlnsDefault="http://www.w3.org/2000/svg"
              id="window-close"
              d="M14.9,16.42c-0.13,0.13-0.33,0.14-0.47,0.01c0,0-0.01-0.01-0.01-0.01L12,14l-2.43,2.42  c-0.13,0.13-0.33,0.14-0.47,0.01c0,0-0.01-0.01-0.01-0.01L7.58,14.9c-0.13-0.13-0.14-0.33-0.01-0.47c0,0,0.01-0.01,0.01-0.01L10,12  L7.58,9.57C7.45,9.45,7.44,9.24,7.57,9.1c0,0,0.01-0.01,0.01-0.01L9.1,7.58c0.13-0.13,0.33-0.14,0.47-0.01c0,0,0.01,0.01,0.01,0.01  L12,10l2.43-2.43c0.13-0.13,0.33-0.14,0.47-0.01c0,0,0.01,0.01,0.01,0.01l1.51,1.53c0.13,0.13,0.14,0.33,0.01,0.47  c0,0-0.01,0.01-0.01,0.01L14,12l2.43,2.43c0.13,0.13,0.14,0.33,0.01,0.47c0,0-0.01,0.01-0.01,0.01L14.9,16.42L14.9,16.42z   M20.84,4.49C20.53,4.17,20.1,3.99,19.66,4H4.34C3.42,4,2.67,4.75,2.67,5.67l0,0v12.66c0,0.92,0.75,1.67,1.67,1.67l0,0h15.32  c0.92,0,1.67-0.75,1.67-1.67l0,0V5.67C21.34,5.23,21.16,4.8,20.84,4.49z"
              style={{ fill: color }}
            ></path>
          </g>
        </svg>
      </>
    )
  };

  const renderRecipesInfo = () => {
      return(
        <>
          <svg
            version="1.2"
            viewBox="0 0 24 24"
            className="ng-element-sign"
            dataId="82b9319a6a184988b6f1bbc1c91c5f57"
            style={{
              opacity: 1,
              mixBlendMode: "normal",
              fill: "rgb(52, 152, 219)",
              width: "50px",
              height: "50px"
            }}
          >
            <g>
              <path
                xmlnsDefault="http://www.w3.org/2000/svg"
                id="info-circle"
                d="M14.67,17c0.01,0.18-0.13,0.32-0.31,0.33c-0.01,0-0.01,0-0.02,0H9.67c-0.18,0.01-0.33-0.12-0.34-0.3  c0-0.01,0-0.02,0-0.03v-1.67C9.32,15.15,9.46,15.01,9.64,15c0.01,0,0.02,0,0.03,0h1v-3.33h-1c-0.18,0.01-0.32-0.13-0.33-0.31  c0-0.01,0-0.01,0-0.02V9.67C9.33,9.49,9.47,9.35,9.65,9.34c0.01,0,0.01,0,0.02,0H13c0.18-0.01,0.32,0.13,0.33,0.31  c0,0.01,0,0.01,0,0.02V15h1c0.18-0.01,0.32,0.13,0.33,0.31c0,0.01,0,0.01,0,0.02V17l0,0H14.67z M13.24,7.91C13.18,7.97,13.09,8,13,8  h-2c-0.18,0.01-0.32-0.13-0.33-0.31c0-0.01,0-0.01,0-0.02V6c-0.01-0.18,0.13-0.32,0.31-0.33c0.01,0,0.01,0,0.02,0h2  c0.18-0.01,0.32,0.13,0.33,0.31c0,0.01,0,0.01,0,0.02v1.67C13.33,7.76,13.3,7.85,13.24,7.91z M18.92,8  c-0.7-1.21-1.71-2.22-2.92-2.92C14.79,4.37,13.41,3.99,12,4c-1.41-0.01-2.79,0.37-4,1.08C6.79,5.78,5.78,6.79,5.08,8  C4.37,9.21,3.99,10.59,4,12c-0.01,1.41,0.36,2.79,1.07,4c0.7,1.21,1.71,2.22,2.93,2.92c1.21,0.71,2.59,1.09,4,1.08  c1.41,0.01,2.79-0.36,4-1.07c1.21-0.7,2.22-1.71,2.92-2.93c0.71-1.21,1.09-2.59,1.08-4C20.01,10.59,19.63,9.21,18.92,8z"
              ></path>
            </g>
          </svg>
          <div className="notification__element__text">
            <p>{adjustEnding(recipeNumber)}</p>
          </div>
          {renderExitButton("rgb(52, 152, 219)", 'info')}
        </>
      )
  };

  const renderReminder = () => {
    return (
      <>
        <svg
          version="1.2"
          viewBox="0 0 24 24"
          className="ng-element-sign"
          dataId="6da813db9f044a9d8b8159fbf4b56868"
          style={{
            opacity: 1,
            mixBlendMode: "normal",
            fill: "rgb(255, 176, 59)",
            width: "50px",
            height: "50px"
          }}
        >
          <g>
            <path
              xmlnsDefault="http://www.w3.org/2000/svg"
              id="exclamation-circle"
              d="M8,5.08C6.79,5.78,5.78,6.79,5.08,8C4.37,9.21,3.99,10.59,4,12c-0.01,1.41,0.36,2.79,1.07,4  c0.7,1.21,1.71,2.22,2.93,2.92c1.21,0.71,2.59,1.09,4,1.08c1.41,0.01,2.79-0.36,4-1.07c1.21-0.7,2.22-1.71,2.92-2.93  c0.71-1.21,1.09-2.59,1.08-4c0.01-1.41-0.36-2.79-1.07-4c-0.7-1.21-1.71-2.22-2.93-2.92C14.79,4.37,13.41,3.99,12,4  C10.59,3.99,9.21,4.37,8,5.08z M13.33,17c0,0.09-0.03,0.17-0.09,0.24c-0.06,0.07-0.14,0.1-0.23,0.1H11  c-0.18-0.01-0.32-0.16-0.33-0.34v-2c0.01-0.18,0.15-0.32,0.33-0.33h2c0.09,0,0.17,0.03,0.23,0.1c0.06,0.07,0.09,0.15,0.09,0.24v2  l0,0L13.33,17z M13.33,13.42c-0.01,0.07-0.05,0.14-0.11,0.18c-0.07,0.05-0.15,0.08-0.24,0.08H11c-0.09,0-0.18-0.03-0.25-0.08  c-0.06-0.04-0.1-0.11-0.1-0.18L10.5,6.94c-0.01-0.08,0.03-0.15,0.1-0.19c0.07-0.05,0.16-0.08,0.25-0.08h2.29  c0.09,0,0.18,0.03,0.25,0.08c0.07,0.04,0.11,0.11,0.1,0.19l-0.19,6.47l0,0L13.33,13.42z"
            ></path>
          </g>
        </svg>
        <div className="notification__element__text">
          <p>Remember to add a plan!</p>
        </div>
        {renderExitButton("rgb(255, 176, 59)", 'warning')}
      </>
    )
  };

  const informationForUser = () => {
    return (
      <>
        <svg
          version="1.2"
          viewBox="0 0 24 24"
          className="ng-element-sign"
          dataId="022945693c33479f88e36e308156bed0"
          style={{
            opacity: 1,
            mixBlendMode: "normal",
            fill: "rgb(70, 137, 102)",
            width: "50px",
            height: "50px"
          }}
        >
          <g>
            <path
              xmlnsDefault="http://www.w3.org/2000/svg"
              id="check-circle"
              d="M17.37,10.31c0,0.18-0.06,0.35-0.19,0.47l-5.65,5.65c-0.13,0.13-0.3,0.2-0.48,0.2  c-0.18,0-0.35-0.07-0.47-0.2l-3.76-3.76c-0.13-0.12-0.19-0.29-0.19-0.47c-0.01-0.18,0.06-0.35,0.19-0.48l0.95-0.94  c0.25-0.26,0.66-0.27,0.92-0.02c0.01,0.01,0.01,0.01,0.02,0.02l2.35,2.35L15.3,8.9c0.25-0.26,0.66-0.27,0.92-0.02  c0.01,0.01,0.01,0.01,0.02,0.02l0.95,0.94c0.13,0.13,0.2,0.3,0.19,0.48l0,0L17.37,10.31z M18.92,8c-0.7-1.21-1.71-2.22-2.92-2.92  C14.79,4.37,13.41,3.99,12,4c-1.41-0.01-2.79,0.37-4,1.08C6.79,5.78,5.78,6.79,5.08,8C4.37,9.21,3.99,10.59,4,12  c-0.01,1.41,0.36,2.79,1.07,4c0.7,1.21,1.71,2.22,2.93,2.92c1.21,0.71,2.59,1.09,4,1.08c1.41,0.01,2.79-0.36,4-1.07  c1.21-0.7,2.22-1.71,2.92-2.93c0.71-1.21,1.09-2.59,1.08-4C20.01,10.59,19.63,9.21,18.92,8z"
            ></path>
          </g>
        </svg>
        <div className="notification__element__text">
          <p>It's great that you are here! Good planning! :)</p>
        </div>
        {renderExitButton("rgb(70, 137, 102)", 'message')}
      </>
    )
  };

  const adjustEnding = recipeNumber => {
    const recipeText = `You have ${recipeNumber}`;
    if (loading) {
      return "Loading"
    } else {
      if (recipeNumber === 0) {
        return `You don't have any recipe`;
      } else if (recipeNumber === 1) {
        return `${recipeText} recipe`;
      } else {
        return `${recipeText} recipes`;
      }
    }
  };

  return (
    <div className="notifications">
      { notificationStatusState.info
        ?
        <div className="notifications__element__1">
          {renderRecipesInfo()}
        </div>
        :
        null
      }
      { notificationStatusState.warning
        ?
        <div className="notifications__element__2">
          {renderReminder()}
        </div>
        :
        null
      }
      { notificationStatusState.message
        ?
        <div className="notifications__element__3">
          {informationForUser()}
        </div>
        :
        null
      }
    </div>
  );
};


export default Notifications;
