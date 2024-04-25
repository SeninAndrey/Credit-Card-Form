import * as React from 'react';
import { VisaIcon } from './VisaIcon.tsx';
import { MasterCardIcon } from './MasterCardIcon.tsx';
import { AmericanExpressIcon } from './AmericanExpress.tsx';
import { DinnersClubIcon } from './DinnersClubIcon.tsx';
import { MaestroIcon } from './MaestroIcon.tsx';
import { MirIcon } from './MirIcon.tsx';

export enum EIcon {
    visa = 'VisaIcon',
    mastercard = 'MasterCardIcon',
    americanExpress = 'AmericanExpressIcon',
    dinnersClub = 'DinnersClubIcon',
    maestro = 'MaestroIcon',
    mir = 'MirIcon'
 }

const icons = {
    [EIcon.visa]: <VisaIcon />,
    [EIcon.mastercard]: <MasterCardIcon />,
    [EIcon.americanExpress]: <AmericanExpressIcon />,
    [EIcon.dinnersClub]: <DinnersClubIcon />,
    [EIcon.maestro]: <MaestroIcon />,
    [EIcon.mir]: <MirIcon />,
};

interface IIconProps {
    name: EIcon,
    className?: string,
    size?: number
}
 
export function Icon({ name, className, size}: IIconProps) {    
    return (
        <div 
            className={`icon_container ${className ? className : ''}`}
        > 
            {icons[name]} 
        </div>
    )
}