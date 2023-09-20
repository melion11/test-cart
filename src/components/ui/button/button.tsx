import React, {ComponentPropsWithoutRef} from 'react';
import sprite from '../../../assets/sprite.svg'

type ButtonProps = {
    svgId?: string
} & ComponentPropsWithoutRef<'button'>

export const Button = ({svgId}: ButtonProps) => {
    return (
        <button>

        </button>
    );
};

