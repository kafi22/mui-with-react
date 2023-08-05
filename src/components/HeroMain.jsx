import React, { useState } from 'react'
import Wrapper from '../Wrappers/Wrapper'
import { Stack, Box, Grid, Typography, List, Divider } from '@mui/material'
import { Numbers } from '@mui/icons-material'
import NumberListItem from './NumberListItem';

import { Data } from '../Data';
import Archives from './Archives';
import Social from './Social';

const heaadingTitle = 'Archive'

const HeroMain = () => {

    const [list, setList] = useState(Data)

    console.log(list);

  return (
    <Wrapper>

        <Stack mt={10}>

            <Box>

                <Grid container spacing={4} justifyContent={'space-between'} alignItems={'stretch'}>

                    <Grid item xs={12} md={8}>

                        <Box>
                          
                        <Typography variant='h6' gutterBottom  component={'h6'} sx={{fontWeight : '500'}}>
                            From the firehose
                        </Typography>
                        <Divider />

                        <Box mt={2}>
                            <Typography variant='h4' gutterBottom>
                            Sample blog post
                            </Typography>
                            <Typography variant='body1' gutterBottom>
                                Date: April 1, 2020 by 
                            </Typography>
                            <Typography variant='body1' gutterBottom mt={3} lineHeight={2}>
                            This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js.

                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.

                            Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.

                            Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h3' gutterBottom>
                                Heading
                            </Typography>
                            <Typography variant='body1' lineHeight={2}>
                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

                            Sub-heading 1
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

                            Sub-heading 2
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                            </Typography>
                            
                            {list?.numberList?.map((num) => {

                                return  <NumberListItem key={num} {...num} />
                            })}
                           
                        </Box>
                        </Box>
                       
                    </Grid>

                    <Grid item xs={12} md={4} >
                        <Box  bgcolor={'#EEEEEE'} padding={2} mb={2}>
                                <Typography variant='h5' component={'h3'} mb={2}>
                                About
                                </Typography>
                                <Typography variant='body1' component={'p'} lineHeight={1.5} textAlign={'left'}>
                                Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                                </Typography>
                        </Box>

                        <Box >
                        <Archives heaadingTitle={heaadingTitle} />
                        <Social />
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Stack>

    </Wrapper>
  )
}

export default HeroMain