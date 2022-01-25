import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
    success: {
        color: '#fff',
        backgroundColor: '#4caf50',
        '&:hover': {
            backgroundColor: '#388e3c'
        }
    },
    danger: {
        color: '#fff',
        backgroundColor: '#f44336',
        '&:hover': {
            backgroundColor: '#d32f2f'
        }
    }
}));