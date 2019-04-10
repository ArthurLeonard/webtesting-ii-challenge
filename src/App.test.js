import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
 
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders successfully', () => {
    render( <App /> );

});

it('displays properly', () => {
  const { getByText, queryByText, debug } = render( <App /> );
  //debug();
  getByText('STRIKE');
  getByText('FOUL');
  getByText('HIT');
  getByText('BALL');
  getByText(`Balls = 0`);
  getByText(`Strikes = 0`);

});
it('increments strikes successfully', () => {
  const { getByText, queryByText, debug } = render( <App /> );
  //debug();
  const button = getByText('STRIKE');
  for (let i = 1; i<3; i++){
      fireEvent.click(button);
      getByText(`Strikes = ${i}`);
      getByText(`Balls = 0`);
  }  
  
  fireEvent.click(button);
  getByText(`Strikes = 0`);
  
 
});

it('increments balls successfully', () => {
  const { getByText, queryByText, debug } = render( <App /> );
  //debug();
  const button = getByText('BALL');
  for (let i = 1; i<4; i++){
      fireEvent.click(button);
      getByText(`Balls = ${i}`);
      getByText(`Strikes = 0`);
  }  
  
  fireEvent.click(button);
  getByText(`Balls = 0`);
   
});

it('hit resets strikes and balls', () => {
  const { getByText, queryByText, debug } = render( <App /> );
  //debug();
  const button = getByText('HIT');
  const strikes = getByText('STRIKE');
  const balls = getByText('BALL');

  for ( let i = 1; i< Math.floor(Math.random() * 3); i++)
    fireEvent.click(strikes);
  for ( let i = 1; i< Math.floor(Math.random() * 4); i++)
    fireEvent.click();



  fireEvent.click(button);
  getByText('Strikes = 0');
  getByText('Balls = 0');
   
});

it('foul increments strikes', () => {
  const { getByText, queryByText, debug } = render( <App /> );
  //debug();
  const button = getByText('FOUL');

  fireEvent.click(button);   
  getByText('Strikes = 1');
  getByText('Balls = 0');

  for (let i = 1; i < 100; i++)
    fireEvent.click(button); 
    
  getByText(`Strikes = 2`)
   
});


