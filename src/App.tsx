import { Editor } from "./modules/editor";
import { SelectDropdown } from "./modules/select-dropdown";

function App() {

  return (
    <main className="app min-h-svh">
      <div className="app__container grid grid-cols-[300px_1fr] gap-5">
        <div className="app__sidebar min-h-svh">
          <Editor />
        </div>
        <div className="app__previewer p-10">
          <SelectDropdown />
        </div>
      </div>
    </main>
  )
}

export default App
