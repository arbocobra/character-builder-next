import { FightingStyleFighter } from '@/lib/init-data'

const featureActions = {
   unarmouredDefenceB: {
      type: 'add',
      property: 'armour class',
      referencePath: 'abilities.modifiers.2',
      value: {name: 'unarmoured defence', level: undefined, source: 'class', value: undefined}
   },
    unarmouredDefenceM: {
      type: 'add',
      property: 'armour class',
      referencePath: 'abilities.modifiers.4',
      value: {name: 'unarmoured defence', level: undefined, source: 'class', value: undefined}
   },
   fastMovement: {
      type: 'add',
      property: 'speed',
      referencePath: null,
      value: {name: 'fast movement', level: undefined, source: 'class', value: 10}
   },
   druidic: {
      type: 'add',
      property: 'proficiencies',
      referencePath: null,
      value: {name: 'druidic', prop: 'languages', level: undefined, source: 'class', value: 'druidic'}
   },
   fightingStyleF: {
      type: 'add',
      property: 'selection',
      referencePath: null,
      value: { list: FightingStyleFighter, count: 1, title: 'Select fighting style', type: 'simple_select' }
   },
}

export const featureFunctions = {
   barbUnarmouredDefence: featureActions.unarmouredDefenceB,
   fastMovement: featureActions.fastMovement,
   druidic: featureActions.druidic,
   fighterFightingStyle: featureActions.fightingStyleF,
   monkUnarmouredDefence: featureActions.unarmouredDefenceM,
}

export const specialFeatures = {

}

// export default featureCallback