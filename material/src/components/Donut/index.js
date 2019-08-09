import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
const CONSTANTS = {  
  radius : 15.91549430918954,
  viewBoxSize : 42,
  circleCxy : 21,
  spaceBetweenText : 3,
  fontSizeFirstMiddleText : 8,
  fontSizeSecondMiddleText : 2,
  circleFill : "transparent",
  alignmentBaseline : "central",
  textAnchor : "middle",
};
/** Is a Donut that size the advance percentage of advance about something */

function Donut ({title, size, percentage, description, bulk, percentageCircleColor, complementCircleColor}) {  
  
  
   function reviewFormatPercentage(percentage) {

    const percentages = percentage.split('/');
    const result = {
      realPercentage:percentage, 
      signPercentage: "%",
      textPercentage: percentage
    };
    
    if(percentages.length  === 2) {
      result.signPercentage = "";  
      result.realPercentage = percentages[0] / percentages[1] * 100;      
      result.textPercentage = percentage;
    }
    else {
      if(percentage >= 100) {
        result.realPercentage = 100;
        result.textPercentage = result.realPercentage;
      }
      else {
        result.realPercentage = percentage;
        result.textPercentage = percentage;
      }    
    }

    return result;
  }

  const result = reviewFormatPercentage(percentage);
  const fontSize = size / 10;
  const complementPercentage = 100 - result.realPercentage;
  const realPercentage = result.realPercentage;
  const textPercentage = result.textPercentage;
  const percentageSign = result.signPercentage;

  return (
      <section className="donutComponent">
          <h2 style={{fontSize:`${fontSize}px`}}>{title}</h2>
          <svg 
            width={`${size}px`} 
            height={`${size}px`} 
            viewBox={`0 0 ${CONSTANTS.viewBoxSize} ${CONSTANTS.viewBoxSize}`}
            className="donut"
          >
            <circle 
              className="donutAll"
              cx={CONSTANTS.circleCxy}
              cy={CONSTANTS.circleCxy}
              r={CONSTANTS.radius}
              fill={CONSTANTS.circleFill}
              strokeWidth={bulk}
            />
            <circle 
              className="donutPercentage"
              cx={CONSTANTS.circleCxy}
              cy={CONSTANTS.circleCxy}
              r={CONSTANTS.radius}
              fill={CONSTANTS.circleFill}
              strokeWidth={bulk}
              strokeDasharray={`${realPercentage} ${complementPercentage}`}        
            />
            <g>
              <text                 
                x={CONSTANTS.circleCxy}
                y={CONSTANTS.circleCxy - CONSTANTS.spaceBetweenText}
                alignmentBaseline={CONSTANTS.alignmentBaseline}
                textAnchor={CONSTANTS.textAnchor}
                fontSize={CONSTANTS.fontSizeFirstMiddleText}
              >
              {textPercentage}{percentageSign}
              </text>
              <text                 
                x={CONSTANTS.circleCxy}
                y={CONSTANTS.circleCxy + CONSTANTS.spaceBetweenText}
                alignmentBaseline={CONSTANTS.alignmentBaseline}
                textAnchor={CONSTANTS.textAnchor}
                fontSize={CONSTANTS.fontSizeSecondMiddleText}
              >
              {description}
              </text>
            </g>
          </svg>          
      </section>
  );
}

Donut.defaultProps = {
  title: '', 
  size: '200', 
  percentage: 70, 
  description: '',
  bulk: 2,
};


Donut.propTypes = {
  /** The title above the donut */
  title: PropTypes.string, 
  /** The size of the donut */
  size: PropTypes.string, 
  /** The percentage of the circlo with strong color */
  percentage: PropTypes.string, 
  /** The description in the center of the donut */
  description: PropTypes.string, 
  /** the bulk of the circle */
  bulk: PropTypes.string, 
  /** The color of the donut that is the percentage */
  percentageCircleColor: PropTypes.string, 
  /** The color of the donut that is the complement donut */
  complementCircleColor: PropTypes.string
};
export default Donut;