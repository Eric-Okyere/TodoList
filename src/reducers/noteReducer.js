
let initialState = {
	notebook: [
		
	],
};

let UsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_NEW_NOTE":
			return { ...state, notebook:  action.payload };
		
			case "DELETE_NOTE":
			const unwantedNote = state.notebook.filter(
				(note) => note.id !== action.payload
			);
			return { ...state, notebook:  unwantedNote };
			
			
			case "EDIT_NOTES":
				console.log(action.payload)
				const updatedNotes = state.notebook.map((note)=>{
					if(note.id === action.payload.update.id){
						return action.payload.update
					}
					else return note
				})
				return { ...state, notebook: updatedNotes };
				
		default:
			return state;
	}
};

export default UsersReducer;