
import React, {Component} from 'react'

import {connect, } from 'react-redux'
import AppView from '../view/app'
import action from '../action/action'

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        draft: state.draft,
        editing: state.editing,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //header
        onAdd(dispatch, draft) {
            console.log('onAdd')
            dispatch(action.addTodo(draft))
        },
        
        onUpdateDraft(dispatch, draft) {
            dispatch(action.updateDraft(draft))
        },
        
        // main
        onToggleAllTodos(dispatch) {
            dispatch(action.toggleAllTodos())
        },
        
        onDeleteTodo(dispatch, id) {
            dispatch(action.deleteTodo(id))
        },
        
        onEditTodo(dispatch, id, draft) {
            dispatch(action.editTodo(id, draft))
        },
        
        onStartEditingTodo(dispatch, id) {
            dispatch(action.startEditTodo(id))
        },
        
        onStopEditingTodo(dispatch) {
            dispatch(action.stopEditTodo())
        },
        
        onToggleTodo(dispatch, id) {
            dispatch(action.onToggleTodo(id))
        },
        
        // footer
        onDeleteCompletedTodos(dispatch) {
            dispatch(action.deleteCompletedTodos())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppView)

