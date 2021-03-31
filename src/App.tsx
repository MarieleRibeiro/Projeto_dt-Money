import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

export default function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
