import InputText from "./components/inputText/inputText"
import Button from "./components/button/button"

function App() {
  return (
    <>
      <h2>Passe aqui seu texto para deixá-lo colorido e em caixa alta:</h2>

      <InputText startText="Exemplo: este era um texto com letras minúsculas, compiado externamente e transformado para um texto apenas com letras maiúsculas ao ser inserido neste presente campo. Apague-o para testar você mesmo! 😁"/>
      
      <Button label="Enviar Texto" />
    </>
  );
}

export default App;
