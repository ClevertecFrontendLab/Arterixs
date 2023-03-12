import { IFormForgotMail } from '../types/interface';
import { REG_ERROR, REG_SUCCESS } from '../utils/constants';
import { $apiBase } from './axios';

export const requestForRestore = async (data: IFormForgotMail) => {
  try {
    await $apiBase.post(`/auth/forgot-password`, { ...data });
    return REG_SUCCESS;
  } catch (err: any) {
    return REG_ERROR;
  }
};
