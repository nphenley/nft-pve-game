const CONTRACT_ADDRESS = "0xa1D820C8AE9732CabEEEEB265B40Eca6c51Db5Db";
const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
};
export { CONTRACT_ADDRESS, transformCharacterData };
