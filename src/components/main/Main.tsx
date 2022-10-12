import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import React from 'react';
import { itemData } from '../../data/examples/imagedata';
import Achievement from '../achievement/Achievement';
import './styled/Main.scss';

function Main() {
    const [AchievementId, setAchievementId] = React.useState<number>(0);
    const [ShowAchievementCard, setShowAchievementCard] = React.useState<boolean>(false);

    const handleShowAchievementCard = (AchievementId: number) => {
        setAchievementId(AchievementId);
        setShowAchievementCard(true)
    };

    const handleShowAchievementCardClose = () => {
        setAchievementId(0);
        setShowAchievementCard(false)
      };

    return (
        <div className="Main-Grid">
            <h1 className="Header-Grid">Wall of fame.</h1>
            <Box sx={{ flex: 1, height: 450 }}>
                <ImageList variant="masonry"
                    sx={{
                        columnCount: {
                            xs: '1 !important',
                            sm: '2 !important',
                            md: '3 !important',
                            lg: '4 !important',
                            xl: '5 !important',
                        }
                    }}
                    gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.id} onClick={event => handleShowAchievementCard(item.id)}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                className="Image-Grid"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            <Achievement AchievementId={AchievementId} open={ShowAchievementCard} onClose={handleShowAchievementCardClose} />
        </div>
    );
}

export default Main;