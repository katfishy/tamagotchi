export function doesPetLikeFood(food, petData) {
    if (petData.likes.includes(food)) {
        return true;
    }
    else if (petData.dislikes.includes(food)) {
        return false;
    }
    else {
        const chance = Math.random();
        if (chance > 70) {
            petData.likes.push(food);
            return true;
        }
        petData.dislikes.push(food);
        return false;
    }
}

export function deletePreferences(petData) {
    petData.likes = [];
    petData.dislikes = [];
}

export function save(data) {
    
}