import {useState} from 'react'

function useList(init) {
    const [list, setList] = useState(init);

    return {
        list,
        //Removes whatever item the remove button is clicked
        removeItem(item){
            const filteredItems = list.filter(
              value => value.name !== item
            );
            setList(filteredItems);
        },
        // Takes in the new value while the liste item is in edit mode. 
        saveItem(index, newValue){
            const copyList = [...list];
            copyList[index].name = newValue;
        }
    }
}

export default useList