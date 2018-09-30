import {
  // 登陆页
  LOGIN_IN,
  DISABLE_LOGIN,
  ABLE_LOGIN,
  // 注册页
  DISABLE_SIGNUP,
  ABLE_SIGNUP,
  GET_IMAGE_CODE,
  // 首页
  INVITECODE_STATUS_CODE,
  GET_ABLE_LIST,
  GET_USER_INFO,
  GET_ALL_RENVUE,
  INVITE_REVENUE_LIST,
  ACCOUNT_REVENUE_LIST,
} from './mutation-types.js'

// import {setStore, getStore} from '../config/mUtils'
// import {localapi, proapi} from 'src/config/env'

export default {
  // login 
  [LOGIN_IN](state) {
    state.account.loginType = true;
    state.account =  Object.assign({}, state.account);
  },
  //  login不可点击
  [DISABLE_LOGIN](state) {
    console.log(123);
    state.account.isLoginDisable = true;
    state.account =  Object.assign({}, state.account);
  },
  //  login可点击
  [ABLE_LOGIN](state) {
    console.log(123);
    state.account.isLoginDisable = false;
    state.account =  Object.assign({}, state.account);

  },
  //  signup不可点击
  [DISABLE_SIGNUP](state) {
    console.log(123);
    state.signUp.isSignUpDisable = true;
    state.signUp =  Object.assign({}, state.signUp);
  },
  //  signup可点击
  [ABLE_SIGNUP](state) {
    console.log(123);
    state.signUp.isSignUpDisable = false;
    state.signUp =  Object.assign({}, state.signUp);
  },
  // 图片验证码地址
  [GET_IMAGE_CODE](state, imageUrl) {
    console.log(123456);
    console.log(imageUrl);
    // const signUp = (Object.assign({}, this.state.signUp, { imageCodeSrc: imageUrl, });
    state.signUp.imageCodeSrc = imageUrl;
    state.signUp =  Object.assign({}, state.signUp);
  },
  // 图片邀请码状态
  [INVITECODE_STATUS_CODE](state, status) {

    // const signUp = (Object.assign({}, this.state.signUp, { imageCodeSrc: imageUrl, });
    state.inviteCode.status = status;
    state.inviteCode =  Object.assign({}, state.inviteCode);
  },
  // 图片邀请码状态
  [GET_ABLE_LIST](state, list) {
    state.inviteCode.codeList = list;
    state.inviteCode =  Object.assign({}, state.inviteCode);
  },
  // 获取用户信息
  [GET_USER_INFO](state, emaill) {
    state.account.email= emaill;
    state.account =  Object.assign({}, state.account);
  },
  // 用户收益
  [GET_ALL_RENVUE](state, revenue) {
    state.revenue.allRenvue= revenue;
    state.revenue =  Object.assign({}, state.revenue);
  },
  //  用户邀请收益详情
  [INVITE_REVENUE_LIST](state, revenueList) {
    state.revenue.inviteRevenue = revenueList;
    state.revenue =  Object.assign({}, state.revenue);
  },
  //  用户个人收益详情
  [ACCOUNT_REVENUE_LIST](state, revenueList) {
    state.revenue.accountRevenue = revenueList;
    state.revenue =  Object.assign({}, state.revenue);
  },
}
