import MYaxios from './axiosConfig';

export const deleteTodoAPI = async(todoId)=> await MYaxios.delete(`/todos/${todoId}`)

export const createTodoAPI =  async(todoObj)=> await MYaxios.post('/todos', todoObj)

export const updateTodoAPI = async(updateObj)=> await MYaxios.put(`/todos/${updateObj.id}`,updateObj)

export const getAllTodoAPI = async()=> await MYaxios.get('/todos')