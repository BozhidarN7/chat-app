import { useRef, useEffect, useState } from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Message from 'components/chat/Message';
import ScrollToBottomButton from 'components/common/buttons/ScrollToBottomButton';

import { useAppSelector } from 'app/hooks';

type Props = {
    roomId: string | undefined;
};

const MessagesZone = ({ roomId }: Props) => {
    const [scrollToBottomButtonVisibility, setScrollToBottomButtonVisibility] =
        useState(false);

    const messageBoxRef = useRef<HTMLDivElement>(null);
    const messages = useAppSelector((state) =>
        state.chats.chats.find((chat) => chat.roomId === roomId)
    )?.messages;

    useEffect(() => {
        if (messageBoxRef && messageBoxRef.current) {
            const { scrollHeight, clientHeight } = messageBoxRef.current;
            messageBoxRef.current.scrollTo({
                left: 0,
                top: scrollHeight - clientHeight,
                behavior: 'smooth',
            });
        }
    }, [messages]);

    const handleScrollEvent = () => {
        if (messageBoxRef && messageBoxRef.current) {
            const { clientHeight, scrollHeight, scrollTop } =
                messageBoxRef.current;
            // console.log(messageBoxRef.current.clientHeight);
            // console.log(
            //     messageBoxRef.current.scrollHeight -
            //         messageBoxRef.current.scrollTop
            // );

            if (scrollHeight - scrollTop > clientHeight + 100) {
                setScrollToBottomButtonVisibility(true);
            } else {
                setScrollToBottomButtonVisibility(false);
            }
        }
    };

    return roomId ? (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    height: '97%',
                    overflowY: 'scroll',
                    pt: 2,
                }}
                ref={messageBoxRef}
                onScroll={handleScrollEvent}
            >
                {messages?.map((message, index) => (
                    <Message
                        senderFullName={message.senderFullName}
                        message={message.message}
                        dateAndTime={message.messageDateAndTime}
                        key={index}
                    />
                ))}
            </Box>
            <ScrollToBottomButton
                messageBoxRef={messageBoxRef}
                scrollToBottomButtonVisibility={scrollToBottomButtonVisibility}
            />
        </>
    ) : (
        <Typography sx={{ ml: 2, mt: 2 }}>
            Choose a chat space from the menu
        </Typography>
    );
};

export default MessagesZone;
