import {useState} from 'react'

function useList(init) {
    const [list, setList] = useState(init);

    return {
        list,
        removeItem(item){
            const filteredItems = list.filter(
              value => value.name !== item
            );
            setList(filteredItems);
        },
        saveItem(index, newValue){
            const copyList = [...list];
            copyList[index].name = newValue;
        }
    }
}

export default useList