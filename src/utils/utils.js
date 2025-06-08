export function increaseStat(petData, statName, amount, max=10) {
    petData[statName] = Math.min(petData[statName] + amount, max);
}