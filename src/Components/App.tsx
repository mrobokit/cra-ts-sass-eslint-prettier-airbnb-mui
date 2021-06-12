import './App.scss';
import React from 'react';
import Button from '@material-ui/core/Button';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Grid } from '@material-ui/core';

class App extends React.PureComponent {
    render(): JSX.Element {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <Button variant="contained" color="primary" endIcon={<InsertEmoticonIcon />}>
                        Hello World
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

export default App;
