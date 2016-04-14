import * as types from '../constants/action-types'

export const initializeGrid = properties => ({ type: types.GRIDDLE_INITIALIZED, properties })
export const removeGrid = () => ({ type: types.GRIDDLE_REMOVED })
export const loadData = (data, properties) => ({ type: types.GRIDDLE_LOADED_DATA, data })
export const filterData = filter => ({ type: types.GRIDDLE_FILTERED, filter })
export const filterDataByColumn = (filter, column) => ({ type: types.GRIDDLE_FILTERED_BY_COLUMN, filter, column })
export const setPageSize = pageSize => ({ type: types.GRIDDLE_SET_PAGE_SIZE, pageSize })
export const sort = column => ({ type: types.GRIDDLE_SORT, sortColumns: [column] })
export const addSortColumn = column => ({ type: types.GRIDDLE_ADD_SORT_COLUMN, sortColumn: column })
export const loadNext = () => ({ type: types.GRIDDLE_NEXT_PAGE })
export const loadPrevious = () => ({ type: types.GRIDDLE_PREVIOUS_PAGE })
export const loadPage = number => ({ type: types.GRIDDLE_GET_PAGE, pageNumber: number })
export const toggleColumn = columnId => ({ type: types.GRIDDLE_TOGGLE_COLUMN, columnId })
