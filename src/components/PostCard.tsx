import {IPost} from "../definitions/interfaces";
import React from "react";
import {Box, makeStyles, Paper, Typography} from "@material-ui/core";

type Props = {
    data: IPost
}

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
    }
}))

export const PostCard: React.FC<Props> = ({ data }) => {
    const classes = useStyles();

    return <Paper elevation={2} classes={{root: classes.paper}}>
        <Typography variant={'h4'}>
            {data.title}
        </Typography>

        <Box m={1} />

        <Typography>
            {data.body}
        </Typography>
    </Paper>
}