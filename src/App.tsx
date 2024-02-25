import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Game from "./pages/Game"
import NewGame from "./pages/NewGame"
import { GameConfigProvider } from "./context/GameConfigContext";
import { GameScoreProvider } from "./context/GameScoreContext";


const router = createBrowserRouter([
  {
    path: '/',
    element: <NewGame />
  },
  {
    path: '/memory-game',
    element: <Game />
  },
]);

function App() {
  return (
    <GameConfigProvider>
      <GameScoreProvider>
        <RouterProvider router={router} />
      </GameScoreProvider>
    </GameConfigProvider>
  )

}

export default App
