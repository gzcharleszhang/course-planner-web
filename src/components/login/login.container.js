import { bindActionCreators } from 'redux';
import loginUserAction from './login.actions';
import LoginPage from './login.component';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

const mapDispatchToProps = dispatch => (bindActionCreators({ loginUserAction }, dispatch))
const LoginContainer = connect(null, mapDispatchToProps)(LoginPage);
export default withTranslation()(LoginContainer);
