import {
  loginIn,
  ajaxImageCode,
  ajaxEmailCode,
  signUp,
  ajaxInviteCodeStatus,
  ajaxGetAbleList,
  ajaxGetInviteCode,
  ajaxGetUserInfo,
  ajaxHardList,
  ajaxRevenueList,
  ajaxAllRevenue,
} from './getData';

import {
  LOGIN_IN, ABLE_LOGIN,
  GET_IMAGE_CODE,
  INVITECODE_STATUS_CODE,
  GET_ABLE_LIST,
  GET_USER_INFO,
  GET_HardList,
  GET_ALL_RENVUE,
  INVITE_REVENUE_LIST,
  ACCOUNT_REVENUE_LIST,
} from './mutation-types';
import router from '../router';

export default {
  async login({ commit }, params) {
    const res = await loginIn(params);
    commit(LOGIN_IN);
    commit(ABLE_LOGIN, false);
    router.push({ name: 'home' });
  },
  async getImageCode({ commit }, params) {
    const res = await ajaxImageCode();
    const imgCodeUrl = res.ret.captcha;
    console.log(imgCodeUrl);
    console.log(123123);
    commit(GET_IMAGE_CODE, imgCodeUrl);
  },
  // 发送邮箱码
  async sendEmailCode({ commit }, params) {
    const res = await ajaxEmailCode(params);
    return res;
  },
  // 发送邮箱码
  async ajaxSignUp({ commit }, params) {
    const res = await signUp(params);
    return res;
  },

  // -------首页-------
  // 发送邮箱码
  async getInviteCodeStatus({ commit }, params) {
    const res = await ajaxInviteCodeStatus(params);
    try {
      commit(INVITECODE_STATUS_CODE, res.ret.status);
    } catch (error) {
      commit(INVITECODE_STATUS_CODE, false);
    }
  },
  // 当前用户可用邀请码
  async getAbleList({ commit }, params) {
    const res = await ajaxGetAbleList(params);
    try {
      commit(GET_ABLE_LIST, res.ret.list);
    } catch (error) {
      commit(GET_ABLE_LIST, []);
    }
  },
  // 领取邀请码
  async getInviteCode({ commit }, params) {
    const res = await ajaxGetInviteCode(params);
    return res;
  },
  //  获取用户信息
  async getUserInfo({ commit }, params) {
    const res = await ajaxGetUserInfo(params);
    try {
      commit(GET_USER_INFO, res.ret.email);
    } catch (error) {
      commit(GET_USER_INFO, '');
    }
    return res;
  },
  //  修改密码
  async changePw({ commit }, params) {
    const res = await ajaxChangePw(params);
    // try {
    //   commit(GET_USER_INFO, res.ret.email);
    // } catch (error) {
    //   commit(GET_USER_INFO, '');
    // }
    return res;
  },
  //  获取硬件列表
  async getHardList({ commit }, params) {
    const res = await ajaxHardList(params);
    try {
      commit(GET_HardList, res.ret.list);
    } catch (error) {
      commit(GET_HardList, '');
    }
    return res;
  },
  //  获取用户总收益
  async getAllRevenue({ commit }, params) {
    const res = await ajaxAllRevenue(params);
    try {
      commit(GET_ALL_RENVUE, res.ret.revenue);
    } catch (error) {
      commit(GET_ALL_RENVUE, '');
    }
    return res;
  },
  //  获取用户收益详情
  async getRevenueList({ commit }, type) {
    const res = await ajaxRevenueList({
      type
    });
    let COMMIT_TYPE = (type === 'refer ') ? INVITE_REVENUE_LIST : ACCOUNT_REVENUE_LIST
    try {
      commit(COMMIT_TYPE, res.ret.list);
    } catch (error) {
      commit(COMMIT_TYPE, []);
    }
    return res;
  },
};
