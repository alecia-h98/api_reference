import { useState, useEffect } from 'react';
import useStore from '../../zustand/store';
import './LoginPage.css';


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const logIn = useStore((state) => state.logIn)
  const errorMessage = useStore((state) => state.authErrorMessage);
  const setAuthErrorMessage = useStore((state) => state.setAuthErrorMessage);

  useEffect(() => {
    // Clear the auth error message when the component unmounts:
    return () => {
      setAuthErrorMessage('');
    }
  }, [])

  const handleLogIn = (event) => {
    event.preventDefault();

    logIn({
      username: username,
      password: password,
    })
  };

  return (
    <>
      <h2>Login Page</h2>
      
      {/*This is the soundcloud link */}
        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/573419466&amp;{ ADD YOUR PARAMETERS HERE }">
      </iframe>

      {/*This is the soundcloud link showing all of my favorites. I have updated the size and width of it. */}
      <iframe width="50%" height="487" scrolling="no" frameborder="no" allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/60152533/favorites&amp;{ ADD YOUR PARAMETERS HERE }">
      </iframe>

      {/*This is the soundcloud link that shows all of the songs a person/user has ever uploaded to their spotify */}
            {/*This was found using their artist name. (Found after the backslash of their soundcloud) This would be really easy to map through someone's information and insert into the code. See example below. */}
        <iframe width="50%" height="487" scrolling="no" frameborder="no" allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/zephyron21&amp;{ ADD YOUR PARAMETERS HERE }">
        </iframe>

      {/* Example code */}
      {/*We will include this code in the map through on the user's information and in their update profile information put we will have them include the username located on their soundcloud profile https://soundcloud.com/zephyron21 using that we will create a insert into the code as shown below*/}
        <iframe width="50%" height="487" scrolling="no" frameborder="no" allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/${user.soundcloud_id}&amp;{ ADD YOUR PARAMETERS HERE }">
        </iframe>

      
      <form onSubmit={handleLogIn}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">
          Log In
        </button>
      </form>
      { // Conditionally render login error:
        errorMessage && (
          <h3>{errorMessage}</h3>
        )
      }
    </>
  );
}


export default LoginPage;
