export const features = {
   dwarf: [
      {name: 'Darkvision', species: 'base', level: 1},
      {name: 'Dwarven Resilience', species: 'base', level: 1},
      {name: 'Dwarven Combat Training', species: 'base', level: 1},
      {name: 'Tool Proficiency', species: 'base', level: 1},
      {name: 'Stonecunning', species: 'base', level: 1},
      {name: 'Dwarven Toughness', species: 'hill dwarf', level: 1},
      {name: 'Dwarven Armour Training', species: 'mountain dwarf', level: 1},
   ],
   elf: [
      {name: 'Darkvision', species: 'base', level: 1},
      {name: 'Keen Senses', species: 'base', level: 1},
      {name: 'Fey Ancestry', species: 'base', level: 1},
      {name: 'Trance', species: 'base', level: 1},
      {name: 'Elf Weapon Training', species: 'high elf', level: 1},
      {name: 'Cantrip', species: 'high elf', level: 1},
      {name: 'Extra Language', species: 'high elf', level: 1},
      {name: 'Elf Weapon Training', species: 'wood elf', level: 1},
      {name: 'Fleet of Foot', species: 'wood elf', level: 1},
      {name: 'Mask of the Wild', species: 'wood elf', level: 1},
      {name: 'Superior Darkvision', species: 'dark elf', level: 1},
      {name: 'Sunlight Sensitivity', species: 'dark elf', level: 1},
      {name: 'Drow Magic', species: 'dark elf', level: 1},
      {name: 'Drow Weapon Training', species: 'dark elf', level: 1},
   ]
}

export const featureList = {
   dwarf: ['Darkvision', 'Dwarven Resilience', 'Dwarven Combat Training', 'Tool Proficiency', 'Stonecunning'],
   'hill dwarf': ['Dwarven Toughness'],
   'mountain dwarf': ['Dwarven Armour Training'],
   elf: ['Darkvision', 'Keen Senses', 'Fey Ancestry', 'Trance'],
   'high elf': ['Elf Weapon Training', 'Cantrip', 'Extra Language'],
   'wood elf': ['Elf Weapon Training', 'Fleet of Foot', 'Mask of the Wild'],
   'dark elf': ['Superior Darkvision', 'Sunlight Sensitivity', 'Drow Magic', 'Drow Weapon Training']
}