import { doesPetLikeFood } from "./petPreferences";
import { increaseStat } from "./utils";

export function pickPetType(data, type) {
    data.type = type;
}

export function feed(food, petData, itemData) {
    if (doesPetLikeFood(food, petData, itemData)) {
        increaseStat(petData, "hunger", itemData.food);
        increaseStat(petData, "happiness", 1)
    }
    else {
        increaseStat(petData, "hunger", Math.floor(itemData.food / 2))
    }
}

export function shower(petData) {
    increaseStat(petData, "hygiene", 10)
}