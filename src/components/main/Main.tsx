import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import Achievement from '../achievement/Achievement';
import CreateAchievement from '../achievement/CreateAchievement';
import './styled/Main.scss';

function Main() {
    const searchFilter = useSelector((state: RootState) => state.searchFilter.value);
    const list = useSelector((state: RootState) => state.list.list);
    const [AchievementId, setAchievementId] = React.useState<number>(0);
    const [ShowAchievementCard, setShowAchievementCard] = React.useState<boolean>(false);

    const handleShowAchievementCard = (AchievementId: number) => {
        setAchievementId(AchievementId);
        setShowAchievementCard(true);
    };

    const handleShowAchievementCardClose = () => {
        setAchievementId(0);
        setShowAchievementCard(false);
    };

    const results = list.filter(item => item.title.indexOf(searchFilter) !== -1);

    return (
        <div className="Main-Grid">
            <h1 className="Header-Grid">Wall of fame.</h1>
            <Box sx={{ flex: 1 }}>
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
                    {results.length >= 1 ?
                        results.map((item) => (
                            <ImageListItem key={item.id} onClick={event => handleShowAchievementCard(item.id)}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    className="Image-Grid"
                                />
                            </ImageListItem>
                        )
                        ) : <p>No resuts, try again</p>}
                </ImageList>
            </Box>
            <Achievement AchievementId={AchievementId} open={ShowAchievementCard} onClose={handleShowAchievementCardClose} />
            <CreateAchievement />
        </div>
    );
}

export default Main;