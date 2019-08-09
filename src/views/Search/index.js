import React from 'react';
import actions from './actions';
import { connect } from 'react-redux';
import { SearchBox, Separator } from 'dev27-components';
import { PaperMessage, Grid, PersonCard } from 'dev27-components';
import './style.css';

class Search extends React.Component {

  componentDidMount() {
    this.props.cleanSearchScholar();
  }

  render() {
    const { students, showMessage, searchValue, disabled } = this.props;

    const peopleCard = students.map((student, index) => (
      <PersonCard
        key={index}
        primaryText={student.names}
        secondaryText={student.email}
        disabled={disabled} />
    ));

    const styleSheetClass = process.env.PUBLIC_URL + '/searchOption.css';

    return (
      <div className="searchStudentView">
        <link rel="stylesheet" type="text/css" href={styleSheetClass} />
        <div className="search">
          <Separator title='Scholar Search' />
          <div className="searchBoxContainer">
            <SearchBox onChange={this.handleOnChange} />
          </div>
          <Grid items={peopleCard} lg={3} />
          <div className='paperMessage'>
            {showMessage &&
              <PaperMessage paperText={`No result found for ${searchValue}`}
                fontSize={'BIG'}
                messageType={'message'}
                iconType={"search"} />}
          </div>
        </div>
      </div>
    );
  }

  handleOnChange = (objectKey, value) => {
    this.props.searchScholar({ objectKey, value });
  }
}

const mapStatesToProps = (state) => {
  return {
    students: state.searchStudentReducer.students,
    showMessage: state.searchStudentReducer.showMessage,
    searchValue: state.searchStudentReducer.searchValue,
    disabled: state.searchStudentReducer.disabled,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchScholar: (payload) => dispatch(actions.SEARCH_SCHOLARS(payload)),
    cleanSearchScholar: () => dispatch(actions.CLEAN_SEARCH()),
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Search);