import { bindActionCreators } from 'redux';
import loginUserAction from './login.actions';
import LoginPage from './login.component';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => (bindActionCreators({loginUserAction}, dispatch))
export default connect(null, mapDispatchToProps)(LoginPage);
