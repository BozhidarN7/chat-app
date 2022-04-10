import { useRef, useEffect, useState, useCallback } from 'react';

import Box from '@mui/material/Box';

import Message from 'components/chat/Message';
import ScrollToBottomButton from 'components/common/buttons/ScrollToBottomButton';
import useGetRoomMessages from 'hooks/useGetRoomMessages';
import { useAppSelector } from 'app/hooks';
import { useAuth } from 'contexts/AuthCtx';
import { TextMessage, FileMessage } from 'interfaces/chatInterfaces';

type Props = {
    roomId: string | undefined;
};

const MessagesZone = ({ roomId }: Props) => {
    const [scrollToBottomButtonVisibility, setScrollToBottomButtonVisibility] = useState(false);
    const [page, setPage] = useState(0);
    const [messagesCount, setMessageCount] = useState(0);

    const { currentUser } = useAuth();

    const { loading, hasMore } = useGetRoomMessages(roomId!, currentUser!.id, page);

    const messageBoxRef = useRef<HTMLDivElement>(null);
    const messages = useAppSelector((state) =>
        state.chats.chats.find((chat) => chat.roomId === roomId)
    )?.messages;

    const observer = useRef<any>();
    const firstMessageElRef = useCallback(
        (node: any) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting && hasMore) {
                        setPage((prev) => prev + 1);
                    }
                },
                {
                    rootMargin: '0px 0px 200px 0px',
                }
            );
            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );

    useEffect(() => {
        if (
            messageBoxRef &&
            messageBoxRef.current &&
            (messages?.length! - 1 === messagesCount || messagesCount === 0)
        ) {
            const { scrollHeight, clientHeight } = messageBoxRef.current;
            messageBoxRef.current.scrollTo({
                left: 0,
                top: scrollHeight - clientHeight,
                behavior: 'smooth',
            });
        }
        setMessageCount(messages?.length!);
    }, [messages, messagesCount]);

    const handleScrollEvent = () => {
        if (messageBoxRef && messageBoxRef.current) {
            const { clientHeight, scrollHeight, scrollTop } = messageBoxRef.current;

            if (scrollHeight - scrollTop > clientHeight + 100) {
                setScrollToBottomButtonVisibility(true);
            } else {
                setScrollToBottomButtonVisibility(false);
            }
        }
    };

    // if (loading) {
    //     return (
    //         <Grid
    //             sx={{ pt: 2 }}
    //             container
    //             justifyContent="center"
    //             alignItems="center"
    //         >
    //             <Spinner />
    //         </Grid>
    //     );
    // }

    return (
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
                {messages?.map((message, index) => {
                    const type = message.messageType;
                    if (type === 'file') {
                        message = message as FileMessage;
                        if (index === 0) {
                            return (
                                <Message
                                    firstMessageElRef={firstMessageElRef}
                                    senderFullName={message.senderFullName}
                                    message={message.file}
                                    dateAndTime={message.messageDateAndTime}
                                    type={type}
                                    key={message.id}
                                />
                            );
                        } else {
                            return (
                                <Message
                                    firstMessageElRef={null}
                                    senderFullName={message.senderFullName}
                                    message={message.file}
                                    dateAndTime={message.messageDateAndTime}
                                    type={type}
                                    key={message.id}
                                />
                            );
                        }
                    } else {
                        message = message as TextMessage;
                        if (index === 0) {
                            return (
                                <Message
                                    firstMessageElRef={firstMessageElRef}
                                    senderFullName={message.senderFullName}
                                    message={message.message}
                                    dateAndTime={message.messageDateAndTime}
                                    type={type}
                                    key={message.id}
                                />
                            );
                        } else {
                            return (
                                <Message
                                    firstMessageElRef={null}
                                    senderFullName={message.senderFullName}
                                    message={message.message}
                                    dateAndTime={message.messageDateAndTime}
                                    type={type}
                                    key={message.id}
                                />
                            );
                        }
                    }
                })}
            </Box>
            <ScrollToBottomButton
                messageBoxRef={messageBoxRef}
                scrollToBottomButtonVisibility={scrollToBottomButtonVisibility}
            />
        </>
    );
};

export default MessagesZone;
