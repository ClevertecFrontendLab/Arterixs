import { IFormRestoreSubmit } from '../types/interface';
import { REG_ERROR, REG_SUCCESS } from '../utils/constants';
import { $apiBase } from './axios';

export const requestForResetPassword = async (data: IFormRestoreSubmit) => {
  try {
    await $apiBase.post(`/auth/reset-password`, { ...data });
    return REG_SUCCESS;
  } catch (err: any) {
    return REG_ERROR;
  }
};
