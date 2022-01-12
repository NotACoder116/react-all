// import logo from './logo.svg';
import React from 'react';
import './App.css';
import ButtonOne from './components/Button-one';
import Child from './components/Child';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeContext, themes } from './components/theme-context';
import ThemeTogglerButton from './components/theme-toggler-button';
// import AddPosts from './components/addPosts';
// import InputPosts from './components/inputPost';

// function Toolbar(props) {
//   return (
//     <ThemedButton onClick={props.changeTheme}>
//       Change Theme
//     </ThemedButton>
//   );
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.toggleTheme = () => {
      // throw new Error('I crashed!');
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <h1>Hello</h1>
      // <ButtonOne disable/>
      // <ButtonOne disable></ButtonOne>
      // <div>
      //   <Child ref={this.inputRef}/>
      //   <button onClick={()=> this.inputRef.current.focus()}>Click</button>
      // </div>


      // <ErrorBoundary>
      // <ThemeContext.Provider value={this.state}>
      //   <Content />
      // </ThemeContext.Provider>
      // </ErrorBoundary>
    );
  }

}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

export default App;
