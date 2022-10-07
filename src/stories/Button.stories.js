import Button from '../components/Button.js';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

import {
    fireEvent,
    within,
    waitFor
} from '@storybook/testing-library';


export default {
    title: 'Components/Button',
    component: Button
}

const Template = args => <Button {...args} />

export const SaveButton = Template.bind({});
SaveButton.args = {
    variant: 'contained',
    size: 'small',
    label: 'Change this text',
    color: 'success',
    disabled: false,
    startIcon: <SaveIcon />,
    id: 'id-save-button'
}

SaveButton.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement); 
    await waitFor(async () => { 
        await fireEvent.click(canvas.getByTestId('SaveIcon'));
    });
};
 
export const CancelButton = Template.bind({});
CancelButton.args = {
    variant: 'contained',
    size: 'small',
    label: 'Cancel',
    color: "error",
    disabled: false,
    startIcon: <CancelIcon />
}

CancelButton.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement); 
    await waitFor(async () => { 
        await fireEvent.click(canvas.getByTestId('CancelIcon'));
    });
};
 