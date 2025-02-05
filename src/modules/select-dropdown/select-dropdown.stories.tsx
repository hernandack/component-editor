import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { Provider, createStore, useAtom } from 'jotai';
import { useEffect, FC } from 'react';
import { SelectDropdown } from '.';
import {
  idAtom,
  optionsAtom,
  isOutlinedAtom,
  withSearchAtom,
  isMultipleAtom,
  optionLabelAtom,
} from './state';
import { optionData } from '../../stores/optionData';

interface Args {
  id: string;
  options: typeof optionData;
  outlined: boolean;
  withSearch: boolean;
  multiple: boolean;
  optionLabel: string;
}

// Custom hook to synchronize atom values with Storybook args
const useSyncAtomsWithArgs = (args: Args) => {
  const [, setId] = useAtom(idAtom);
  const [, setOptions] = useAtom(optionsAtom);
  const [, setIsOutlined] = useAtom(isOutlinedAtom);
  const [, setWithSearch] = useAtom(withSearchAtom);
  const [, setIsMultiple] = useAtom(isMultipleAtom);
  const [, setOptionLabel] = useAtom(optionLabelAtom);

  useEffect(() => {
    setId(args.id);
    setOptions(args.options);
    setIsOutlined(args.outlined);
    setWithSearch(args.withSearch);
    setIsMultiple(args.multiple);
    setOptionLabel(args.optionLabel);
  }, [args, setId, setOptions, setIsOutlined, setWithSearch, setIsMultiple, setOptionLabel]);
};

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof SelectDropdown> = {
  title: 'Modules/Select Dropdown',
  component: SelectDropdown,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      // Create a store and set initial state values
      const store = createStore();

      return (
        <Provider store={store}>
          <SyncAtomsWithArgs args={context.args as Args} />
          <Story />
        </Provider>
      );
    },
  ],
  argTypes: {
    id: { control: 'text' },
    options: { control: 'object' },
    optionLabel: { control: 'text' },
    withSearch: { control: 'boolean' },
    multiple: { control: 'boolean' },
    onChange: { control: 'text' },
    outlined: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof SelectDropdown>;

// default story with all the required states
export const Default: Story = {
  args: {
    id: 'sdd-1',
    withSearch: true,
    options: optionData,
    multiple: true,
    optionLabel: 'Label',
    onChange: () => {console.log('change')},
    outlined: true,
  },
};

// Story that has Styling capabilities directly on storybook
export const Styles: Story = {
  args: {
    id: 'sdd-1',
    withSearch: false,
    options: optionData,
    multiple: false,
    optionLabel: 'Label',
    onChange: () => {console.log('change')},
    outlined: false,
    dropdownStyles: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      backgroundColor: 'white',
    },
    optionStyles: {
      padding: { top: 8, right: 16, bottom: 8, left: 16 },
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      backgroundColor: 'white',
      activeBackgroundColor: '#f0fdfa',
      textColor: 'black',
      activeTextColor: 'black',
      fontSize: 14,
      fontStyle: 'inherit',
    }
  },
};

// story for testing the Select Dropdown module
export const FullTesting: Story = {
  args: {
    id: 'sdd-1',
    withSearch: true,
    options: optionData,
    multiple: true,
    optionLabel: 'Label',
    outlined: true,
    dropdownStyles: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      backgroundColor: 'white',
    },
    optionStyles: {
      padding: { top: 8, right: 16, bottom: 8, left: 16 },
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      backgroundColor: 'white',
      activeBackgroundColor: '#f0fdfa',
      textColor: 'black',
      activeTextColor: 'black',
      fontSize: 14,
      fontStyle: 'inherit',
    }
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const selectDropdown = canvas.getByTestId('select-dropdown');
    const optionLabel = canvas.getByTestId('select-field-label');
    const selectInput = canvas.getByTestId('select-input');

    // Check initial elements
    await expect(selectDropdown).toBeInTheDocument();
    await expect(optionLabel).toBeInTheDocument();
    await expect(selectInput).toBeInTheDocument();

    // Simulate click event on SelectDropdown
    await userEvent.click(selectDropdown);

    // Wait for dropdown-search to appear
    const dropdownSearch = await canvas.findByTestId('dropdown-search');
    expect(dropdownSearch).toBeInTheDocument();

    // Check if dropdown-search contains option items
    const optionItems = await canvas.findAllByTestId('option-item');
    expect(optionItems.length).toBeGreaterThan(0);

    // Check hover and selected state for option items
    for (const optionItem of optionItems) {
      // Hover over the option item
      await userEvent.hover(optionItem);
      expect(optionItem).toHaveStyle(`background-color: ${args.optionStyles?.activeBackgroundColor}`);

      // Click the option item to select it
      await userEvent.click(optionItem);
      expect(optionItem).toHaveStyle(`background-color: ${args.optionStyles?.activeBackgroundColor}`);

      // Unhover the option item
      await userEvent.unhover(optionItem);
      expect(optionItem).toHaveStyle(`background-color: ${args.optionStyles?.activeBackgroundColor}`);
    }

    // Check if selected options are rendered in select input
    const selectedOptionLabels = await canvas.findAllByTestId('select-input-label');
    expect(selectedOptionLabels.length).toBe(optionItems.length);

    // Remove selected options
    const removeButtons = await canvas.findAllByTestId('select-input-remove');
    for (const removeButton of removeButtons) {
      await userEvent.click(removeButton);
    }

    // Check if all selected options are removed
    const remainingSelectedOptionLabels = canvas.queryAllByTestId('select-input-label');
    expect(remainingSelectedOptionLabels.length).toBe(0);
  },
};

// Component to synchronize atom values with Storybook args
const SyncAtomsWithArgs: FC<{ args: Args }> = ({ args }) => {
  useSyncAtomsWithArgs(args);
  return null;
};