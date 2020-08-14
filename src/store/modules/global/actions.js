import * as type from './types';
import api from '@/api';

const actions = {

  getCategories({commit}){
    return new Promise((resolve, reject) => {
      api.get('/request/category')
        .then(res => {
          commit(type.GET_CATEGORIES, res.data);
          resolve(res.data);
        })
        .catch(error => {
          console.log('Problem', error.message);
          reject(error);
        });
    })
  },
  
//   getCategory({commit}, payload){
//     return new Promise((resolve, reject) => {
//       api.get('/posts/' + payload)
//         .then(res => {
//           commit(type.GET_POST, res.data);
//           resolve(res.data);
//         })
//         .catch(error => {
//           console.log('Problem', error.message);
//           reject(error);
//         });
//     })
//   },
  
};

export default actions;