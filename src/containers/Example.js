import { connect } from 'react-redux';

import Example from 'src/components/Example';

import { doSomething } from 'src/store/reducer';

const mapStateToProps = (state, ownProps) => ({
  message: state.message,
  clic: state.clic,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  doSomething: () => {
    dispatch(doSomething());
  },
});

const ExampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);

export default ExampleContainer;
