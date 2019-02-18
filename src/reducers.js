import { 
    CHANGE_SEARCH_FIELD
} from "./constants"; 

const initialStateSearch = {
    searchField : {
        text: "",
        hash: "8a5be23400ae2afa64e813b7ae6983d4"
    }
}

export const searchRobots = (state=initialStateSearch , action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({} , state , {searchField:action.payload})
        default:
            return state
    }
}