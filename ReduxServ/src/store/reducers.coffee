import { reduxActions } from 'cfx.redux-actions'
{ handleActions } = reduxActions
import { mergeReduce } from 'cfx.redux'
import todosReducers from '../models/reducers'
# import dd from 'ddeyes'

initialState =
  filter: 'active'

todosFilter = handleActions

  FILTER_SAVE: todosReducers.save 

, initialState 

export default mergeReduce {
  todosFilter
}
, initialState