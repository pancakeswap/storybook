import { useEffect, useState } from 'react'
import { css, styled } from 'styled-components'
import { Box, Flex } from '../Box'
import { ArrowDropDownIcon } from '../Icons'
import { Text } from '../Text'
import type { SelectOption, SelectProps } from './types'

/**
 * Select — generic single-pick dropdown ported from
 * `packages/uikit/src/components/Select` so storybook widgets share the
 * same brand chrome as the rest of pancake-frontend (Settings → Language,
 * Settings → Default chain, etc.). Stateless API: parent owns nothing,
 * the component manages its own selected-index + open-state and fires
 * `onOptionChange` when the user picks a row.
 */

const DropDownHeader = styled(Flex)`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.input};
  transition: border-radius 0.15s;
`

const DropDownListContainer = styled.div`
  min-width: 100px;
  height: 0;
  position: absolute;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.input};
  z-index: ${({ theme }) => theme.zIndices.dropdown};
  transition: transform 0.15s, opacity 0.15s;
  transform: scaleY(0);
  transform-origin: top;
  opacity: 0;
  width: 100%;
`

const DropDownContainer = styled(Box)<{ $isOpen: boolean }>`
  cursor: pointer;
  width: 100%;
  position: relative;
  background: ${({ theme }) => theme.colors.input};
  border-radius: 16px;
  height: 40px;
  min-width: 125px;
  user-select: none;
  z-index: 20;

  ${(props) =>
    props.$isOpen &&
    css`
      ${DropDownHeader} {
        border-bottom: 1px solid ${({ theme }) => theme.colors.inputSecondary};
        box-shadow: ${({ theme }) => theme.tooltip.boxShadow};
        border-radius: 16px 16px 0 0;
      }

      ${DropDownListContainer} {
        height: auto;
        transform: scaleY(1);
        opacity: 1;
        border: 1px solid ${({ theme }) => theme.colors.inputSecondary};
        border-top-width: 0;
        border-radius: 0 0 16px 16px;
        box-shadow: ${({ theme }) => theme.tooltip.boxShadow};
      }
    `}

  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  z-index: ${({ theme }) => theme.zIndices.dropdown};
`

const ListItem = styled.li`
  display: flex;
  list-style: none;
  padding: 8px 16px;
  &:hover {
    background: ${({ theme }) => theme.colors.inputSecondary};
  }
`

const SelectImpl = <V,>({
  options,
  onOptionChange,
  defaultOptionIndex = 0,
  placeHolderText,
  textStyle = {},
  listStyle = {},
  ...props
}: SelectProps<V>) => {
  const [isOpen, setIsOpen] = useState(false)
  const [optionSelected, setOptionSelected] = useState(false)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(defaultOptionIndex)

  const toggling = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsOpen(!isOpen)
    event.stopPropagation()
  }

  const onOptionClicked = (selectedIndex: number) => (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedOptionIndex(selectedIndex)
    setIsOpen(false)
    setOptionSelected(true)
    if (onOptionChange) onOptionChange(options[selectedIndex])
  }

  // Outside-click close — mirrors the uikit Select. Document-level
  // listener keeps the container free of an explicit backdrop element
  // while still dismissing on any click outside.
  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false)
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  // Late-resolved `defaultOptionIndex` (e.g. consumer fetches a saved
  // setting after mount) — sync the row. Mirrors uikit's `idx - 1` quirk
  // so consumers passing 1-based indexes keep working.
  useEffect(() => {
    if (defaultOptionIndex) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- prop-driven sync, ported from uikit
      setSelectedOptionIndex(defaultOptionIndex - 1)
       
      setOptionSelected(true)
    }
  }, [defaultOptionIndex])

  const selected = options[selectedOptionIndex]

  return (
    <DropDownContainer $isOpen={isOpen} {...props}>
      <DropDownHeader onClick={toggling}>
        {selected?.imageUrl ? (
          <img
            src={selected.imageUrl}
            alt=""
            width={24}
            height={24}
            style={{ borderRadius: '50%', overflow: 'hidden', marginRight: 4 }}
          />
        ) : null}
        <Text color={!optionSelected && placeHolderText ? 'text' : undefined} style={textStyle}>
          {!optionSelected && placeHolderText ? placeHolderText : selected?.label}
        </Text>
      </DropDownHeader>
      <ArrowDropDownIcon color="text" onClick={toggling} />
      <DropDownListContainer>
        <DropDownList style={listStyle}>
          {options.map((option, index) =>
            placeHolderText || index !== selectedOptionIndex ? (
              <ListItem onClick={onOptionClicked(index)} key={option.label}>
                {option.imageUrl ? (
                  <img
                    src={option.imageUrl}
                    alt=""
                    width={24}
                    height={24}
                    style={{ borderRadius: '50%', overflow: 'hidden', marginRight: 4 }}
                  />
                ) : null}
                <Text>
                  {option.label}
                  {option.description ? ` (${option.description})` : ''}
                </Text>
              </ListItem>
            ) : null,
          )}
        </DropDownList>
      </DropDownListContainer>
    </DropDownContainer>
  )
}

const Select = SelectImpl as <V,>(props: SelectProps<V>) => React.ReactElement | null

export default Select
export type { SelectOption, SelectProps }
