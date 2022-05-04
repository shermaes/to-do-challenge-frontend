function reducer(state, action){
    switch(action.type){
        case 'add-note':
            const newNote = {
                    id:Math.floor(Math.random()*100),
                    message:action.payload.message,
                    title:action.payload.title,
                    category:action.payload.category,
                    done:false
            }
            const newListOfNotesAddedOne = [...state.listOfNotes, newNote ]
            const newStateAddNote = {
                ...state, listOfNotes: newListOfNotesAddedOne
            }
            return newStateAddNote
        case 'remove-note':
            return state
        case 'update-note':        
    }
}

export default reducer