import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '90%',
        margin: '10px'
    },
    media: {
        height: 0,
        margin:"0px 73px",
        paddingTop: '56.25%', //16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContents: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    icon: {
        float:"right"
    }
}));