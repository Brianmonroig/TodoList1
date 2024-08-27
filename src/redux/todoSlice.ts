import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'; // Importar para generar IDs únicos

interface Tarea{
    id: string;
    texto: string;
    completada: boolean;
}

const initialState: Tarea[] = [];

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTask: (state, action: PayloadAction<string>) =>{
            const newTask: Tarea = {
                id: uuidv4(),
                texto: action.payload,
                completada: false,
            }
            state.push(newTask)
        },
        deleteTask: (state, action: PayloadAction<string>) =>{
            return state.filter(tarea=> tarea.id !== action.payload);
        },
        completeTask: (state, action: PayloadAction<string>) =>{
            const tarea = state.find(tarea=>tarea.id=== action.payload);
            if(tarea){
                tarea.completada = !tarea.completada;
            }
        }
    }



});

export const { addTask, deleteTask, completeTask } = todoSlice.actions;
export default todoSlice.reducer;