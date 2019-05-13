import { connect } from 'react-redux';
import Button from 'src/components/Button'
import { newInput } from 'src/store/reducer';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  newInput: (input) => {
    dispatch(newInput(input));
  },
});

const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default ButtonContainer;
