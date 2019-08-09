import React from 'react';
import actions from './actions';
import { connect } from 'react-redux';
import { SearchBox, Separator } from 'dev27-components';
import { Grid, PaperMessage, PersonCard } from 'dev27-components';
import './style.css';

class Search extends React.Component {

  componentDidMount() {
    this.props.cleanSearchScholar();
  }

  render() {
    const { trainers, searchTrainers, showMessage, disabled } = this.props;
    const peopleCard = trainers.map((trainer, index) => (
      <PersonCard
        key={index}
        image={trainer.image ? `data:image/jpeg;base64,${trainer.image}` : trainer.image}
        primaryText={`${trainer.favoriteName} ${trainer.firstLastName}`}
        secondaryText={trainer.email}
        disabled={disabled} />
    ));

    const styleSheetClass = process.env.PUBLIC_URL + '/searchOption.css';

    return (
      <div className="searchTrainerView">
        <link rel="stylesheet" type="text/css" href={styleSheetClass} />
        <div className="search">
          <Separator title='Trainer Search' />
          <div className="searchBoxContainer">
            <SearchBox onChange={this.handleOnChange} />
          </div>
          <div className='paperMessage'>
            {showMessage &&
              <PaperMessage paperText={`No result found for ${searchTrainers}`}
                fontSize={'BIG'}
                messageType={'message'}
                iconType={"search"} />}
          </div>
          <Grid items={peopleCard} />
        </div>
      </div>
    );
  }

  handleOnChange = (objectKey, value) => {
    this.props.searchTrainer({ objectKey, value });
  }
}

const mapStatesToProps = (state) => {
  return {
    trainers: state.searchTrainerReducer.trainers,
    showMessage: state.searchTrainerReducer.showMessage,
    searchTrainers: state.searchTrainerReducer.searchTrainer,
    disabled: state.searchTrainerReducer.disabled,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchTrainer: (payload) => dispatch(actions.SEARCH_TRAINERS(payload)),
    cleanSearchScholar: () => dispatch(actions.CLEAN_SEARCH()),
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Search);