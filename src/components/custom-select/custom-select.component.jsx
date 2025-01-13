import React from "react"
import { Controller, useFormContext } from "react-hook-form"
import * as S from "./custom-select.styles"
import { getRHFErrorMessage } from "../../utils"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const CustomSelect = ({
  items,
  defaultValue,
  name,
  isArray,
  valueKey = "value",
  titleKey = "title",
  label,
  rules = { required: true },
  onChange,
  placeholder,
  value,
  title,
  arrowIcon,
  placeholderClickable = false,
  emptyRender = false,
  disabled = false,
  ...otherProps
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext() ?? { formState: { errors: {} } }

  if (!items && !emptyRender) return null

  const handleChange = (evt, controlledChange) => {
    const value = evt.target.value
    if (onChange) onChange(value)
    if (controlledChange) controlledChange(value)
  }

  if (!control) {
    return (
      <S.StyledFormControl fullWidth {...otherProps}>
        {label && <S.StyledLabel>{label}</S.StyledLabel>}
        {title && <S.Title>{title}</S.Title>}
        <S.StyledSelect
          IconComponent={KeyboardArrowDownIcon}
          onChange={evt => handleChange(evt)}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
        >
          {placeholder && (
            <option value="" disabled={!placeholderClickable}>
              {placeholder}
            </option>
          )}
          {isArray
            ? items.map((item, index) => (
                <option value={item[valueKey]} key={`menu-${index}`}>
                  {item[titleKey]}
                </option>
              ))
            : items &&
              Object.keys(items).map((key, index) => (
                <option
                  value={items[key][valueKey] ? items[key][valueKey] : key}
                  key={`menu-${index}`}
                >
                  {items[key][titleKey] ? items[key][titleKey] : items[key]}
                </option>
              ))}
        </S.StyledSelect>
      </S.StyledFormControl>
    )
  }

  const error = getRHFErrorMessage(errors, name, rules)

  return (
    <S.StyledFormControl fullWidth {...otherProps}>
      {label && (
        <S.StyledLabel>
          {label ? label : placeholder}
          {rules.required && " *"}
        </S.StyledLabel>
      )}
      {title && <S.Title>{title}</S.Title>}
      <Controller
        rules={rules}
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value, ...others } }) => (
          <S.StyledSelect
            {...others}
            // IconComponent={ArrowBottom}
            value={value}
            onChange={evt => handleChange(evt, onChange)}
            className={value ? "selected" : ""}
          >
            {placeholder && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}
            {isArray
              ? items.map((item, index) => (
                  <option value={item[valueKey]} key={`menu-${index}`}>
                    {item[titleKey]}
                  </option>
                ))
              : Object.keys(items).map((key, index) => (
                  <option
                    value={items[key][valueKey] ? items[key][valueKey] : key}
                    key={`menu-${index}`}
                  >
                    {items[key][titleKey] ? items[key][titleKey] : items[key]}
                  </option>
                ))}
          </S.StyledSelect>
        )}
      />
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.StyledFormControl>
  )
}

export default CustomSelect
