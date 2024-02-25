import { Item } from "../types/types";

const updateItemStatus = (id: number, status: string, gameItems: Item[]): Item[] => {
    const updatedItems = gameItems.map(item => {
        if (item.id === id) return { ...item, status };
        return item;
    });
    return updatedItems;
}


const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
};

function shuffle(array: number[]) {
    array.sort(() => Math.random() - 0.5);
}

export { updateItemStatus, formatTime, shuffle };