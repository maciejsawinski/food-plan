import React from "react";
import { Link } from 'react-router-dom';

class WidgetsAdd extends React.Component {
  render() {
    return (
      <div className="widgets__container">
        <Link to="/foodplan/recipes/add" className="link__add">
          <div className="widgets__element">
            <div className="widget__element__container">
              <svg
                version="1.2"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                className="ng-element-plus"
                dataId="03ef4b844b6f4fa2a9e1ebd29d4f30bf"
                style={{
                  opacity: 1,
                  mixBlendMode: "normal",
                  fill: "rgb(70, 137, 102)",
                  width: "100px",
                  height: "100px"
                }}
              >
                <g>
                  <path
                    xmlnsDefault="http://www.w3.org/2000/svg"
                    id="plus-square-o"
                    d="M16.57,11.43c-0.06-0.06-0.15-0.09-0.24-0.09h-3.66V7.67c0.01-0.18-0.13-0.32-0.31-0.33  c-0.01,0-0.01,0-0.02,0h-0.67c-0.18-0.01-0.32,0.13-0.33,0.31c0,0.01,0,0.01,0,0.02v3.66H7.67c-0.18-0.01-0.32,0.13-0.33,0.31  c0,0.01,0,0.01,0,0.02v0.67c-0.01,0.18,0.13,0.32,0.31,0.33c0.01,0,0.01,0,0.02,0h3.66v3.66c-0.01,0.18,0.13,0.32,0.31,0.33  c0.01,0,0.01,0,0.02,0h0.67c0.18,0.01,0.32-0.13,0.33-0.31c0-0.01,0-0.01,0-0.02v-3.65h3.66c0.18,0.01,0.32-0.13,0.33-0.31  c0-0.01,0-0.01,0-0.02v-0.67C16.66,11.58,16.63,11.5,16.57,11.43z M18,16.33c0,0.92-0.75,1.67-1.67,1.67l0,0H7.67  C6.75,18,6,17.25,6,16.33l0,0V7.67C6,6.75,6.75,6,7.67,6l0,0h8.66C17.25,6,18,6.75,18,7.67l0,0V16.33L18,16.33z M18.45,5.55  c-0.55-0.57-1.32-0.89-2.12-0.88H7.67c-1.66,0-3,1.34-3,3v8.66c0,1.66,1.34,3,3,3h8.66c1.66,0,3-1.34,3-3V7.67  C19.34,6.87,19.02,6.11,18.45,5.55z"
                  ></path>
                </g>
              </svg>
              <div className="widget__text">
                <p>add recipe</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/foodplan/schedules/add" className="link__add">
          <div className="widgets__element">
            <div className="widget__element__container">
              <svg
                version="1.2"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                className="ng-element-plus"
                dataId="03ef4b844b6f4fa2a9e1ebd29d4f30bf"
                style={{
                  opacity: 1,
                  mixBlendMode: "normal",
                  fill: "rgb(70, 137, 102)",
                  width: "100px",
                  height: "100px"
                }}
              >
                <g>
                  <path
                    xmlnsDefault="http://www.w3.org/2000/svg"
                    id="plus-square-o"
                    d="M16.57,11.43c-0.06-0.06-0.15-0.09-0.24-0.09h-3.66V7.67c0.01-0.18-0.13-0.32-0.31-0.33  c-0.01,0-0.01,0-0.02,0h-0.67c-0.18-0.01-0.32,0.13-0.33,0.31c0,0.01,0,0.01,0,0.02v3.66H7.67c-0.18-0.01-0.32,0.13-0.33,0.31  c0,0.01,0,0.01,0,0.02v0.67c-0.01,0.18,0.13,0.32,0.31,0.33c0.01,0,0.01,0,0.02,0h3.66v3.66c-0.01,0.18,0.13,0.32,0.31,0.33  c0.01,0,0.01,0,0.02,0h0.67c0.18,0.01,0.32-0.13,0.33-0.31c0-0.01,0-0.01,0-0.02v-3.65h3.66c0.18,0.01,0.32-0.13,0.33-0.31  c0-0.01,0-0.01,0-0.02v-0.67C16.66,11.58,16.63,11.5,16.57,11.43z M18,16.33c0,0.92-0.75,1.67-1.67,1.67l0,0H7.67  C6.75,18,6,17.25,6,16.33l0,0V7.67C6,6.75,6.75,6,7.67,6l0,0h8.66C17.25,6,18,6.75,18,7.67l0,0V16.33L18,16.33z M18.45,5.55  c-0.55-0.57-1.32-0.89-2.12-0.88H7.67c-1.66,0-3,1.34-3,3v8.66c0,1.66,1.34,3,3,3h8.66c1.66,0,3-1.34,3-3V7.67  C19.34,6.87,19.02,6.11,18.45,5.55z"
                  ></path>
                </g>
              </svg>
              <div className="widget__text">
                <p>add schedule</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
export default WidgetsAdd;
