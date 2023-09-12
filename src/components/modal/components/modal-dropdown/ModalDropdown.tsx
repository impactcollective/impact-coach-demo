import { useEffect, useRef, useState } from "react";
import {
  Dropdown,
  Label,
  Menu,
  DropdownInput,
  DropdownOption,
} from "./ModalDropdown.styles";
import ChevronDown from "../../../../assets/chevron-down.svg";

const KEY = {
  DOWN: "ArrowDown",
  UP: "ArrowUp",
  ENTER: "Enter",
};

interface Dropdown {
  label: string;
  options: { value: any; label: string }[];
  value: any;
  placeholder: string;
  onChange: (value: any) => void;
  type?: "number" | "text";
  name?: string;
  flex?: number;
  showValue?: boolean;
  disabled?: boolean;
}

const ModalDropdown = ({
  label,
  options,
  value,
  placeholder,
  onChange,
  flex = 1,
}: Dropdown) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [_inputValue, _setInputValue] = useState(
    options.find((o) => o.value === value)?.label || ""
  );
  const [_isMenuOpen, _setIsMenuOpen] = useState(false);
  const [_menuIndex, _setMenuIndex] = useState(0);
  const [_filteredOptions, _setFilteredOptions] = useState(options);

  useEffect(() => {
    _setFilteredOptions(options);
    _setInputValue(options.find((o) => o.value === value)?.label || "");
  }, [options, value]);

  const _filterOptions = (inputValue: string) => {
    const filteredOptions = options.filter((o) => {
      return o.label.toLowerCase().includes(inputValue.toLowerCase());
    });
    _setFilteredOptions(filteredOptions);
  };

  const _onInputFocus = () => {
    _setIsMenuOpen(true);
  };

  const _onInputBlur = () => {
    _setIsMenuOpen(false);
  };

  const _onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    _setInputValue(inputValue);
    _filterOptions(inputValue);
  };

  const _onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!_isMenuOpen) return _setIsMenuOpen(true);

    if (e.key === KEY.DOWN) {
      if (_menuIndex > options.length) return;
      _menuIndex !== _filteredOptions.length && _setMenuIndex(_menuIndex + 1);
    }

    if (e.key === KEY.UP) {
      if (_filteredOptions.length <= 1) return;
      _menuIndex !== 0 && _setMenuIndex(_menuIndex - 1);
    }

    if (e.key === KEY.ENTER) {
      e.preventDefault();
      const selectedOption = _filteredOptions[_menuIndex];
      onChange(selectedOption.value);
      _setInputValue(selectedOption.label);
      _setIsMenuOpen(false);
    }
  };

  const _onModalOptionClick = (option: { value: any; label: string }) => {
    _setInputValue(option.label);
    onChange(option.value);
  };

  return (
    <Dropdown ref={dropdownRef} flex={flex}>
      <Label>{label}</Label>
      <DropdownInput
        onChange={_onInputChange}
        onFocus={_onInputFocus}
        onBlur={_onInputBlur}
        onKeyDown={_onInputKeyDown}
        value={_inputValue}
        placeholder={placeholder}
      />
      <Menu isOpen={_isMenuOpen}>
        {_filteredOptions?.map((option, index) => (
          <DropdownOption
            key={option.value}
            isSelected={index === _menuIndex}
            onMouseDown={() => _onModalOptionClick(option)}
          >
            {option.label}
          </DropdownOption>
        ))}
      </Menu>
      <img src={ChevronDown} alt="chevron-down" />
    </Dropdown>
  );
};

export { ModalDropdown };
