import sprite from '../../../assets/sprite.svg';

type IconProps = {
    svgId?: string
    fill?: string
}

export const Icon = ({svgId, fill = 'none'}:IconProps) => {
    return (
        <svg  width="30px" height="30px" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg"
         >
            <use xlinkHref={`${sprite}#${svgId}`} />
        </svg>
    );
};
