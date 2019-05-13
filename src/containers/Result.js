import { connect } from 'react-redux';
import Result from 'src/components/Result'

const mapStateToProps = (state, ownProps) => ({
  input: state.input,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const ResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Result);

export default ResultContainer;
