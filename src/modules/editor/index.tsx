import { FC, useState } from "react";
import { useAtom } from "jotai";
import {
  idAtom,
  withSearchAtom,
  optionsAtom,
  isMultipleAtom,
  optionLabelAtom,
  isOutlinedAtom,
  searchKeywordAtom,
} from "../select-dropdown/state";
import { IOptionItem } from "../../types/selectTypes";

export const Editor: FC = () => {
  const [id, setId] = useAtom(idAtom);
  const [withSearch, setWithSearch] = useAtom(withSearchAtom);
  const [isMultiple, setIsMultiple] = useAtom(isMultipleAtom);
  const [optionLabel, setOptionLabel] = useAtom(optionLabelAtom);
  const [isOutlined, setIsOutlined] = useAtom(isOutlinedAtom);
  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);
  const [options, setOptions] = useAtom(optionsAtom);

  const [newOptionLabel, setNewOptionLabel] = useState("");
  const [newOptionValue, setNewOptionValue] = useState("");
  const [newOptionIcon, setNewOptionIcon] = useState("");

  const handleAddOption = () => {
    const newOption: IOptionItem = {
      option: {
        label: newOptionLabel,
        value: newOptionValue,
      },
      icon: newOptionIcon,
    };
    const updatedOptions = options ? [...options, newOption] : [newOption];
    setOptions(updatedOptions);
    console.log("Updated Options:", updatedOptions); // Debug log
    setNewOptionLabel("");
    setNewOptionValue("");
    setNewOptionIcon("");
  };

  return (
    <aside className="editor bg-slate-900 h-screen max-h-screen overflow-y-auto text-white p-4">
      <div className="editor__panel space-y-4">
        <div className="grid grid-cols-2 items-center gap-4">
          <label htmlFor="id" className="text-sm">
            ID
          </label>
          <input
            id="id"
            type="text"
            value={id || ""}
            onChange={(e) => setId(e.target.value)}
            className="p-2 bg-slate-800 rounded"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
          <label htmlFor="withSearch" className="text-sm">
            With Search
          </label>
          <input
            id="withSearch"
            type="checkbox"
            checked={withSearch}
            onChange={(e) => setWithSearch(e.target.checked)}
            className="p-2 bg-slate-800 rounded"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
          <label htmlFor="isMultiple" className="text-sm">
            Multiple
          </label>
          <input
            id="isMultiple"
            type="checkbox"
            checked={isMultiple}
            onChange={(e) => setIsMultiple(e.target.checked)}
            className="p-2 bg-slate-800 rounded"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
          <label htmlFor="optionLabel" className="text-sm">
            Option Label
          </label>
          <input
            id="optionLabel"
            type="text"
            value={optionLabel}
            onChange={(e) => setOptionLabel(e.target.value)}
            className="p-2 bg-slate-800 rounded"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
          <label htmlFor="isOutlined" className="text-sm">
            Outlined
          </label>
          <input
            id="isOutlined"
            type="checkbox"
            checked={isOutlined}
            onChange={(e) => setIsOutlined(e.target.checked)}
            className="p-2 bg-slate-800 rounded"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
          <label htmlFor="searchKeyword" className="text-sm">
            Search Keyword
          </label>
          <input
            id="searchKeyword"
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="p-2 bg-slate-800 rounded"
          />
        </div>
      </div>

      <div className="editor__panel space-y-4 mt-10 border-t border-white pt-5">
        <div className="grid grid-cols-2 items-center gap-4">
          <label htmlFor="newOptionLabel" className="text-sm">
            New Option Label
          </label>
          <input
            id="newOptionLabel"
            type="text"
            value={newOptionLabel}
            onChange={(e) => setNewOptionLabel(e.target.value)}
            className="p-2 bg-slate-800 rounded"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
          <label htmlFor="newOptionValue" className="text-sm">
            New Option Value
          </label>
          <input
            id="newOptionValue"
            type="text"
            value={newOptionValue}
            onChange={(e) => setNewOptionValue(e.target.value)}
            className="p-2 bg-slate-800 rounded"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
          <label htmlFor="newOptionIcon" className="text-sm">
            New Option Icon
          </label>
          <input
            id="newOptionIcon"
            type="text"
            value={newOptionIcon}
            onChange={(e) => setNewOptionIcon(e.target.value)}
            className="p-2 bg-slate-800 rounded"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
          <button
            onClick={handleAddOption}
            className="p-2 bg-teal-600 rounded text-white cursor-pointer hover:bg-teal-700"
          >
            Add Option
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Editor;
