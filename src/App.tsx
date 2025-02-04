import { Editor } from "./modules/editor";
import { SelectDropdown } from "./modules/select-dropdown";

function App() {

  return (
    <main className="app grid grid-cols-[300px_1fr]">
      <Editor />
      <SelectDropdown />
    </main>
  )
}

export default App
