import { IFormRegSubmit } from '../../types/interface';
import { REG_ERROR, REG_ERROR_400, REG_SUCCESS } from '../../utils/constants';

export const fetchReg = async (data: IFormRegSubmit) => {
  try {
    const response = await fetch('https://strapi.cleverland.by/api/auth/local/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      return REG_SUCCESS;
    }
    if (response.status === 400) {
      return REG_ERROR_400;
    }
    throw new Error('error');
  } catch (err) {
    return REG_ERROR;
  }
};
