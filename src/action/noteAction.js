export const AddNewNote =(newNote)=>{
    return{
      type:"ADD_NEW_NOTE",
      payload:newNote
    }
  
  }
  export const DeleteOneNote =(note_id)=>{
    return {
    type :"DELETE_NOTE",
    payload:note_id
    }
  
  }

  export const EditNote =(update)=>{
    return {
      type:"EDIT_NOTES",
      payload:{update}
    }
  
  }