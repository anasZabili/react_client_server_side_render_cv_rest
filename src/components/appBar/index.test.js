import { render, screen } from '@testing-library/react';
import { PhotoCamera } from '@material-ui/icons';
import AppBar from './AppBar';
import { Button } from '@material-ui/core';

test("Rendu des bouton sur l'appBar", () => {
  const mockClick = jest.fn();

  const button = (
    <Button
      type="submit"
      variant="outlined"
      color="primary"
      onClick={mockClick}
    >
      Se connecter
    </Button>
  );
  const buttons = [
    {
      title: 'MyButton',
      handleClick: () => {
        console.log('test AppBar');
      },
    },
    {
      icon: <PhotoCamera />,
      handleClick: () => {
        console.log('test button icon photo');
      },
    },
    {
      button: button,
    },
  ];
  const title = "Titre de l'appBar";
  render(<AppBar title={title} buttons={buttons} />);
  const appBar = document.querySelector('.my-app-bar');
  expect(appBar.childNodes[0].childNodes.length).toBe(buttons.length + 1);
  const appBarTitle = screen.getByText(title);
  expect(appBarTitle).toBeInTheDocument();
});

test('validiter fonction handleCLick', () => {
  const mockClick = jest.fn();

  const button = (
    <Button
      type="submit"
      variant="outlined"
      color="primary"
      onClick={mockClick}
    >
      Se connecter
    </Button>
  );
  const buttons = [
    {
      title: 'MyButton',
      handleClick: mockClick,
    },
    {
      icon: <PhotoCamera />,
      handleClick: mockClick,
    },
    {
      button: button,
    },
  ];
  const title = "Titre de l'appBar";
  render(<AppBar title={title} buttons={buttons} />);
  const appBarButtons = document.getElementsByTagName('button');
  for (let i = 0; i < appBarButtons.length; i++) {
    appBarButtons[i].click();
  }
  expect(appBarButtons.length).toBe(buttons.length);
  expect(mockClick.mock.calls.length).toBe(appBarButtons.length);
});
