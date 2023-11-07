/* eslint-disable no-console */
import { auth } from './axios';

export const getToken = async () => {
  try {
    const { data } = await auth.get('url');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
