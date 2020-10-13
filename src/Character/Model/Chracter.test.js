import React from 'react';
import { render } from '@testing-library/react';
import Character from './Character';

test('bad character hurt and good character healthy', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
    //Set up Enemy Character Instance
    let EnemyCharacter = new Character(10);
    let GoodCharacter = new Character(10);

    //Use Fireball and then target the enemy character
    //Empty function is because of statechange callback
    GoodCharacter.Spells.Fireball.Cast(EnemyCharacter, ()=>{});

    //Enemy should be at less health than the good character
    expect(EnemyCharacter.Health).toBeLessThan(GoodCharacter.Health);
});
