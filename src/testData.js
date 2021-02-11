import {nanoid} from 'nanoid';

export function generateFakeData(data, name, childrenCount) {
    const newArray = [];  
    data.forEach(element => {
        const newElement = {};
        newElement.id = nanoid();
        newElement[name] = element;
        newElement.data = [];        
        for (let i = 0; i < childrenCount; i++) {
            newElement.data.push({
                id: nanoid(),
                value: '',
                img: '/img.jpg',
            });
        }
        newArray.push(newElement);
    });
    return newArray;
} 

