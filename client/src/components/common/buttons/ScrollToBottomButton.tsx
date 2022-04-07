import { RefObject } from 'react';

import Fab from '@mui/material/Fab';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

type Props = {
    messageBoxRef: RefObject<HTMLDivElement>;
    scrollToBottomButtonVisibility: boolean;
};

const ScrollToBottomButton = ({
    messageBoxRef,
    scrollToBottomButtonVisibility,
}: Props) => {
    const scrollToBottomHandler = () => {
        if (messageBoxRef && messageBoxRef.current) {
            messageBoxRef.current.scrollTo({
                top: messageBoxRef.current.scrollHeight,
                left: 0,
                behavior: 'smooth',
            });
        }
    };

    return scrollToBottomButtonVisibility ? (
        <Fab
            sx={{ position: 'fixed', bottom: 100, left: 500 }}
            size="medium"
            color="secondary"
            aria-label="scroll"
            onClick={scrollToBottomHandler}
        >
            <ArrowDownwardIcon />
        </Fab>
    ) : null;
};

export default ScrollToBottomButton;
