import { Link } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { Typography } from "@mui/material";
import footerApi from '../../api/footerApi';


const BootstrapButton = styled(Button)({
    boxShadow: "none",
    boxSizing: "small",
    textTransform: "none",
    fontSize: '10px',
    fontWeight: 300,
    color: "#333333",
    lineHeight: 0,
    padding: 0,
    backgroundColor: "#ffff",
    marginLeft: "-24px",
    marginRight: "-24px",
    "&:hover": {
        backgroundColor: "#fff",
        color: "#999999",
        boxShadow: "none"
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "#fff",
        borderColor: "#fff"
    },
});

const DisabledButton = styled(BootstrapButton)({
    pointerEvents: 'none',
});

const GridMenu = styled(Grid)(({
    textAlign: 'center',
    boxShadow: "none",
    textTransform: "none",
    marginTop: "2px",
    color: "#333333",
}));

export const FooterW = () => {
    const [footer, setFooter] = React.useState(null);

    React.useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await footerApi.allFooter();
                setFooter(response);

            } catch (error) {
                console.log('Failed to fetch banners: ', error)
            }
        }
        fetchBanners();
    }, [])

    return (
        <>
            {footer && (
                <div className="content-footer App-footer">
                    <Link to="/" style={{ textDecoration: "none", pointerEvents: "none" }}>
                        <Typography sx={{
                            fontSize: "14px",
                            fontWeight: "200"
                        }}>
                            A7 STUDIO
                        </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1 }} >
                        <Grid container spacing={3} >
                            <GridMenu item xs  >
                                <a className='footer-button' href={footer[0]?.connect[0]?.link}>
                                    <BootstrapButton>
                                        {footer[0]?.connect[0]?.title || 'Chưa có'}
                                    </BootstrapButton>
                                </a>
                            </GridMenu>
                            <GridMenu item xs>
                                <BootstrapButton>
                                    |
                                </BootstrapButton>
                            </GridMenu>
                            <GridMenu item xs>
                                <a className='footer-button' href={footer[0]?.connect[1]?.link}>
                                    <BootstrapButton>
                                        {footer[0]?.connect[1]?.title || 'Chưa có'}
                                    </BootstrapButton>
                                </a>
                            </GridMenu>
                            <GridMenu item xs>
                                <BootstrapButton>
                                    |
                                </BootstrapButton>
                            </GridMenu>
                            <GridMenu item xs>
                                <a className='footer-button' href={footer[0]?.connect[2]?.link}>
                                    <BootstrapButton>
                                        {footer[0]?.connect[2]?.title || 'Chưa có'}
                                    </BootstrapButton>
                                </a>
                            </GridMenu>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} >
                        <Grid container spacing={3} sx={{ width: '350px' }}>
                            <GridMenu item xs  >
                                <a className='footer-button' href={footer[0]?.contact[0]?.link}>
                                    <DisabledButton >
                                        {footer[0]?.contact[0]?.title || 'Chưa có'}
                                    </DisabledButton>
                                </a>
                            </GridMenu>

                            <GridMenu item xs>
                                <a className='footer-button' href={footer[0]?.contact[1]?.link}>
                                    <DisabledButton>
                                        {footer[0]?.contact[1]?.title || 'Chưa có'}
                                    </DisabledButton>
                                </a>
                            </GridMenu>

                            <GridMenu item xs>
                                <a className='footer-button' href={footer[0]?.contact[2]?.link}>
                                    <DisabledButton>
                                        {footer[0]?.contact[2]?.title || 'Chưa có'}
                                    </DisabledButton>
                                </a>
                            </GridMenu>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} >

                        <Grid container spacing={3}>
                            <GridMenu item xs  >
                                <a className='footer-button' href={footer[0]?.support[0]?.link}>
                                    <DisabledButton>
                                        {footer[0]?.support[0]?.title || 'Chưa có'}
                                    </DisabledButton>
                                </a>
                            </GridMenu>

                            <GridMenu item xs>
                                <a className='footer-button' href={footer[0]?.support[1]?.link}>
                                    <DisabledButton>
                                        {footer[0]?.support[1]?.title || 'Chưa có'}
                                    </DisabledButton>
                                </a>
                            </GridMenu>
                        </Grid>
                    </Box>
                </div>
            )}
            {!footer && ('')}
        </>

    )
};

