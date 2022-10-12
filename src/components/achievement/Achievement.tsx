import DownloadIcon from '@mui/icons-material/Download';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import { itemData } from '../../data/examples/imagedata';
import './styled/Achievement.scss';

interface IOuterProps {
    AchievementId: number;
    open: boolean;
    onClose: (handleShowAchievementCardClose: boolean) => void;
}

function Achievement(props: IOuterProps) {
    const { AchievementId, open, onClose } = props;

    const handleClose = () => {
        onClose(false);
      };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
            className="Card-Dialog"
        >
            <div>
                {itemData
                    .filter(item => item.id === AchievementId)
                    .map(item => {
                        return (
                            < Card sx={{ width: { xs: 315, sm: 450, md: 500 }, height: "auto" }} >
                                <div className="Card-Button-Group">
                                    <MoreHorizIcon sx={{ fontSize: { xs: '27px', md: '33px' } }} className="Card-Icon" />
                                    <FavoriteIcon sx={{ fontSize: { xs: '27px', md: '33px' } }} className="Card-Icon" />
                                    <DownloadIcon sx={{ fontSize: { xs: '27px', md: '33px' } }} className="Card-Icon" />
                                    <button className="Card-Button">Bewaren</button>
                                </div>
                                <CardMedia
                                    height="auto"
                                    component="img"
                                    image={item.img}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <h2 className='Card-H2'>Aangenaam,</h2>
                                    <h1>Leon Jagtenberg</h1>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus augue lacus, tristique sit amet tellus in, varius porttitor est. Aliquam erat volutpat. Vivamus ac aliquet libero. Fusce dapibus, enim vitae congue pulvinar, augue eros imperdiet justo, et facilisis diam lectus non velit. Donec facilisis viverra fringilla. In est orci, ullamcorper eget tincidunt nec, ornare quis elit. Morbi arcu eros, ullamcorper eget odio sed, euismod sollicitudin eros. Proin vitae suscipit purus, nec blandit tellus. Vivamus porta sapien magna, ac molestie ex aliquet nec. Nulla facilisi. Donec vitae suscipit arcu. Donec convallis tincidunt pellentesque. Phasellus tincidunt nibh a nulla vulputate cursus.</p>
                                </CardContent>
                            </Card>
                        )
                    })}
            </div>
        </Dialog >
    );
}

export default Achievement;