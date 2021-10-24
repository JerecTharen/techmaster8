import React from 'react';
import { render } from '@testing-library/react';
import Character from './Character';

test('bad character hurt and good character healthy', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
    //Set up Enemy Character Instance
    let EnemyCharacter = new Character(10, 10, "Enemy");
    let GoodCharacter = new Character(10, 10, "Good Guy");

    //Use Fireball and then target the enemy character
    //Empty function is because of statechange callback
    GoodCharacter.Spells.Fireball.Cast(EnemyCharacter, ()=>{});

    //Enemy should be at less health than the good character
    expect(EnemyCharacter.Health).toBeLessThan(GoodCharacter.Health);
});

test('characters will not go below 0 health', ()=>{
    let EnemyCharacter = new Character(1, 1, "Enemy");
    let GoodCharacter = new Character(10, 10, "Good Guy");

    GoodCharacter.Spells.Fireball.Cast(EnemyCharacter, ()=>{});

    expect(EnemyCharacter.Health).toEqual(0);
});

test('fireball can have its effect applied more than once', ()=>{
    let EnemyCharacter = new Character(10, 10, "Enemy");
    let GoodCharacter = new Character(10, 10, "Good Guy");

    GoodCharacter.Spells.Fireball.Cast(EnemyCharacter, ()=>{});
    let healthAfterFirst = EnemyCharacter.Health;
    GoodCharacter.Spells.Fireball.Cast(EnemyCharacter, ()=>{});
    let healthAfterSecond = EnemyCharacter.Health;

    expect(healthAfterSecond).toBeLessThan(healthAfterFirst);


});

test('fireball will not be cast if the character does not have enough mana', ()=>{
    let EnemyCharacter = new Character(10, 10, "Enemy");
    let GoodCharacter = new Character(10, 1, "Good");

    GoodCharacter.Spells.Fireball.Cast(EnemyCharacter, ()=>{});

    expect(EnemyCharacter.Health).toEqual(10);
});
