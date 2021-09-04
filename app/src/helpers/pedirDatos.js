import { stock } from '../data/stock'
export const llamar = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
    }, 2000);
  });
};