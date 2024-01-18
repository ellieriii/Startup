# Mastermind

## Elevator Pitch:
Are you a fan of strategy, logic, and the sweet satisfaction of deduction? Mastermind is the perfect way to engage your mind and enjoy a fun, competitive, code-breaking challenge. Try to solve a hidden 4-color code in under 10 guesses based on given clues and claim your title of "Mastermind"!

## Key Features:
- Option to log in or create an account
- Page with rules/instructions
- Interactive digital gameboard
- Feedback with each guess made
- Pop-ups when solved or code reveal when user has run out of guesses
- Progress page that shows user's solve history and guess distribution, including the number of guesses it took to solve each game they played. 

## Design:
![startup design pg 1](https://github.com/ellieriii/Startup/assets/151106438/13ed4ccd-975f-4d34-9563-22b70a3d686d)
![startup design pg 2](https://github.com/ellieriii/Startup/assets/151106438/5195b6e4-a5d9-493e-b2e4-490e4c790710)
![startup design pg 3](https://github.com/ellieriii/Startup/assets/151106438/84f1b758-21e9-45f2-9d58-0f47be5d27a7)
![startup design pg 4](https://github.com/ellieriii/Startup/assets/151106438/379c1a09-f0b9-4637-9795-6c24dec4455d)
![startup design pg 5](https://github.com/ellieriii/Startup/assets/151106438/7be75931-180a-4c1a-bbd9-07702ebd43e3)
![startup design pg 6](https://github.com/ellieriii/Startup/assets/151106438/c99b4429-dad5-462f-abcc-42d38f6d14cc)


## Technologies:
- **HTML**: Basic structure for the application on login/account creation page and progress page
- **CSS**: Animated version of the game board, stylized buttons, and game pieces
- **JavaScript**: Animation when pressing buttons, selecting colors for code, movement of the game board. 
- **Web Service**: Backend service and remote functions that the application calls on
- **Authentication**: Creating username and password for logging in
- **Database persistence**: Stores username and the number of attempts the user has made in previous games to track improvement.
- **WebSocket**: Pop-ups to notify the user if their chosen username has already been used, when they complete the game, or when they fail to crack the code in 10 tries. 
- **Web Framework**: Using React web framework to add components




