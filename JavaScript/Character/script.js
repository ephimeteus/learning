//////////////////////////////////////////CHAT-GPT//////////////////////////////////////////////////////////
function getRandomName() {
  const names = ['Gwythilde', 'Mortimus', 'Vesperia', 'Cainhardt', 'Lorelei', 'Draven', 'Ravenna', 'Ezekiel', 'Isolde', 'Thorngrim'];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
  }


const usedAbilityNames = [];
function getRandomAbilityName() {
  const adjectives = ['Fierce', 'Mystic', 'Swift', 'Savage', 'Arcane', 'Blazing', 'Ethereal', 'Thundering', 'Nimble', 'Radiant'];
  const nouns = ['Strike', 'Whirlwind', 'Shadow', 'Bolt', 'Nova', 'Serenade', 'Torrent', 'Crescent', 'Vortex', 'Phoenix'];

  let randomAdjective, randomNoun, abilityName;

  do {
    randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    abilityName = randomAdjective + ' ' + randomNoun;
  } while (usedAbilityNames.includes(abilityName));

  usedAbilityNames.push(abilityName);

  return abilityName;
} 

function getRandomNumber() {
  const min = 40;
  const max = 300;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Game {
  
  constructor() {
    this.characters = [];
    this.abilities = [];
    this.maxExp = 250;
  }          
 
  maxDamageAbility() {
    let maxDamage = 0;
    let maxDamageName = null;
    let belongsToCharacter = null;
      for (let i = 0; i <= this.abilities.length-1; i++ ) {
        let damage = this.abilities[i].damage;
        if (damage > maxDamage) {
          maxDamage = damage;
          belongsToCharacter = this.abilities[i].characterId;
          maxDamageName = this.abilities[i].name;
        } else {
          maxDamage = maxDamage;
        }
      }
    let strongerCharacter = this.characters[belongsToCharacter];
    console.log(strongerCharacter.name + " wields " + maxDamageName + " which inflicts " + maxDamage + " decay." );
  }
    

  getAllCharacters() {
    console.log("CHARACTERS: ");
    console.table(this.characters);
    console.log("ABILITIES: ")
    console.table(this.abilities);
  }

  start(characterCount, abilitiesPerCharacter) {   
    let characterId;
    for (characterId = 0; characterId<characterCount; characterId++) {   
      let name = getRandomName();
      this.characters.push(new Character(characterId, name));
      for (let y = 0; y < abilitiesPerCharacter; y++) {
        this.abilities.push(new Ability(characterId, getRandomAbilityName(), getRandomNumber() , true));
      }
    } 
  }
}
    

class Character{
 constructor (id, name){
    this.id = id;
    this.name = name;
    this.level = 0;
    this.xp = 0;
   }
}
 

 class Ability {
  constructor (characterId, name, damage, unblockable){
    this.characterId = characterId;
    this.name = name;
    this.damage = damage;
    this.unblockable = unblockable;
  }
}

const game = new Game();
game.start(5,3); // inicializa los datos
game.maxDamageAbility(); 
game.getAllCharacters(); 



  
  
        
     








