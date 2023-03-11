import axios from 'axios';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { IFormAuthSubmit } from '../../types/interface';
import { REG_ERROR, REG_ERROR_400, REG_SUCCESS } from '../../utils/constants';
import { actionAuth, actionBody } from '../actions/action-creaters';

export const fetchAuth = async (dispatch: Dispatch<AnyAction>, data: IFormAuthSubmit) => {
  try {
    const response = await axios.post('https://strapi.cleverland.by/api/auth/local', {...data})
    const result = await response.data
    localStorage.setItem('token', result.jwt)
    dispatch(actionAuth(true))
    dispatch(actionBody(result.user))
    return REG_SUCCESS;
  } catch (err: any) {
    if (err.response.status === 400) {
      return REG_ERROR_400;
    }
    return REG_ERROR;
  }
};
