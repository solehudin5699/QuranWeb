import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';

export default function Index() {
  return (
    <>
      {[...Array(10)].map((_) => {
        return (
          <Card
            style={{
              marginBottom: '10px',
              borderRadius: '15px',
              padding: '5px',
            }}
          >
            <CardContent>
              <Typography paragraph>
                فَالْمُغِيرَاتِ صُبْحًا Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Rhoncus dolor purus non enim praesent
                elementum facilisis leo vel. Risus at ultrices mi tempus
                imperdiet. Semper risus in hendrerit gravida rutrum quisque non
                tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed
                adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
