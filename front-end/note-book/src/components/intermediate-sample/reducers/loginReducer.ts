
interface Auth{
  isAuthenticated: boolean;
  username?: string;
}
interface LoginAction{
  type:'LOGIN';
  username:string;
}

interface LogoutAction {
  type:'LOGOUT';
}

type AuthAction = LoginAction | LogoutAction;

const loginReducer = (state : Auth,action : AuthAction ) :Auth  => {
  console.log(state,action);
  if(action.type === 'LOGIN') return {isAuthenticated:true,username:action.username};
  if(action.type === 'LOGOUT') return {isAuthenticated:false};
  return state;
}

export default loginReducer
