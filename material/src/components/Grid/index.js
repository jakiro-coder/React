import React from 'react';
import PropTypes from 'prop-types';
import GridContainer from '../GridContainer';
import GridRow from '../GridRow';
import GridItem from '../GridItem';
import './style.css';

/**
    Each items displayed by a Grid.
*/

function Grid({ items, xs, sm, md, lg }) {

  const itemsToRender = items.map((item, index) => {
    return (
      <GridItem sm={sm} xs={xs} md={md} lg={lg} key={index}>
        {item}
      </GridItem>
    )
  });

  return (
    <div className="gridComponent">
      <GridContainer>
        <GridRow>
          <>{itemsToRender}</>
        </GridRow>
      </GridContainer>
    </div>
  );
}

Grid.defaultProps = {
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
  items: []
};

Grid.propTypes = {
  /** Defines maximun width for Extra small (for smartphones) */
  xs: PropTypes.number,
  /** Defines maximun width for Small (for tablets) */
  sm: PropTypes.number,
  /** Defines maximun width for Medium (for laptops) */
  md: PropTypes.number,
  /** Defines the maximum width Extra Large (for desktops) */
  lg: PropTypes.number,
  /** The array of objects to renderize */
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default Grid;