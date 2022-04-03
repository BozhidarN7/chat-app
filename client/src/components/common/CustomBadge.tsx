import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

type Props = {
    children: React.ReactNode[];
};

const CustomBadge = ({ children }: Props) => {
    return (
        <StyledBadge badgeContent={4} color="secondary">
            {children}
        </StyledBadge>
    );
};

export default CustomBadge;
