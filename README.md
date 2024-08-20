# StudyTimer

**StudyTimer** is a React application that implements a countdown timer using the Pomodoro technique. The application also integrates with the Quotable API to display random inspirational quotes.
## Technical Details


### Key Components

- **App.js**: 
  - Manages the overall application state (work vs break mode).
  - Applies styles based on the current mode.

- **Timer.js**:
  - Implements countdown logic for work and break periods.
  - Provides controls to start, pause, and reset the timer.
  - Handles automatic transition between work and break periods.

- **Quotes.js**:
  - Fetches and displays random quotes from the Quotable API.
  - Displays quotes with different motivational themes.

### Styles

- **App.css**: Contains global styles for the application.
- **Timer.css**: Styles specific to the Timer component, including work and break mode indicators.
- **Quotes.css**: Styles for displaying quotes.

Dependencies
React
Axios (for API requests)
CSS for styling


```markdown
### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/StudyTimer.git
   cd StudyTimer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```

   The application will be served at `http://localhost:3000`
