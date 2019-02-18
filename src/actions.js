import { 
    CHANGE_SEARCH_FIELD ,
} from "./constants"; 
import md5 from 'md5';

export const setSearchField = (text) => ({ 
    type : CHANGE_SEARCH_FIELD,
    payload : {
        text,
        hash: md5(text)
    }
})