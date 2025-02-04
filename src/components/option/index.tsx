import { FC, useState } from "react"
import { IOptionItem } from "../../types/selectTypes"

export const Option: FC<IOptionItem> = ({ option, icon }) => {

  // const [searchWord, setSearchWord] = useState<string>('')
  const [selectedValue, setSelectedValue] = useState<string | null>(null)

  const handleClick = (value: string) => {
    setSelectedValue(value)
  }

  return (
    <div className="cursor-pointer py-2 px-4 hover:bg-teal-50" onClick={() => handleClick(option.value)}>
      { icon && <span className="option__icon">{ icon }</span> }
      <span className="option__label">{ option.label } - { selectedValue === option.value ? ' [on]' : ''}</span>
    </div>
  ) 
}