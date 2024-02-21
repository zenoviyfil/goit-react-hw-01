/* eslint-disable no-irregular-whitespace */
import Profile from "./components/Profile";
import userData from "./userData.json";
  
const App = () => {
    return (
      <>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </>
    );
  };
  
export default App;