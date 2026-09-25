export const userKeys = {
  all: ['users'],
  lists: () => [...userKeys.all, 'list'] ,
  detail: (id) => [...userKeys.all, 'detail', id] 
};
